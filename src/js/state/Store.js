import { Subject, scan, shareReplay } from 'rxjs';
import OPTIONS from './INIT_OPTIONS.js';
import updatingState from '../api/updatingState';

export default class Store {
  constructor() {
    this.state$ = null;
    this.subscriptions = new Set();
  }

  createStore() {
    this.state$ = new Subject().pipe(
      scan(
        (oldState, changeState) => updatingState(oldState, changeState),
        OPTIONS.STATE,
      ),
      shareReplay(1),
    );
  }

  updateStore(changeState) {
    this.state$.next(changeState);
  }

  subscribeToStream(subscription) {
    try {
      this.state$.subscribe({
        next: subscription,
      });
      this.subscriptions.add(subscription);
    } catch (err) {
      console.log(`Не смог подписаться на state: ${err}`);
    }
  }

  unSubscribeFromStream(subscription) {
    try {
      subscription.unsubscribe();
      this.subscriptions.remove(subscription);
    } catch (err) {
      console.log(`Не смог отписаься от state: ${err}`);
    }
  }

  clearSubscriptionsStream() {
    try {
      this.subscriptions.forEach((subscription) => {
        this.unSubscribeFromStream(subscription);
      });
    } catch (err) {
      console.log(`Не смог очистить подписчиков state: ${err}`);
    }
  }

  saveDashboard() {
    const event = {
      target: 'state',
      action: 'save',
      data: {},
    };
    this.state$.next(event);
  }

  loadDashboard() {
    const event = {
      target: 'state',
      action: 'load',
      data: {},
    };
    this.state$.next(event);
  }

  clearDashboard() {
    const event = {
      target: 'state',
      action: 'clear',
      data: {},
    };
    this.state$.next(event);
  }
}
