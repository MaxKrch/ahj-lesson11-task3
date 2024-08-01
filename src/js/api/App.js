import { merge, fromEvent, throttleTime, pluck } from 'rxjs';

import Render from '../ui/Render';
import Store from '../state/Store';

import Dashboard from '../widgets/dashboard/api/Controller';
import Project from '../widgets/project/api/Controller';

export default class App {
  constructor() {
    this.render = new Render();
    this.state = new Store();
    this.dashboard = new Dashboard();
    this.project = new Project();
    this.streams = {
      clicksTopMenu: {
        stream$: null,
        subscriptions: new Set(),
      },
    };
  }

  initialApp(containers) {
    this.render.initialApp(containers.app);
  }

  initialWidgets(containers) {
    this.dashboard.initialApp(containers.dashboard);
    this.project.initialApp(containers.project);
  }

  initialState(state) {
    this.state.createStore(state);
  }

  createStreams() {
    this.createStreamsApp();
    this.dashboard.createStreams();
    this.project.createStreams();
  }

  createStreamsApp() {
    this.streams.clicksTopMenu.stream$ = merge(
      fromEvent(this.render.buttons.load, 'click'),
      fromEvent(this.render.buttons.clear, 'click'),
      fromEvent(this.render.buttons.save, 'click'),
    ).pipe(throttleTime(100), pluck('target'));
  }

  subscribeToStreams() {
    this.state.subscribeToStream(
      this.dashboard.updateDashboard.bind(this.dashboard),
    );
    this.state.subscribeToStream(this.project.updateProject.bind(this.project));

    this.dashboard.subscribeToStream(
      'actions',
      this.state.updateStore.bind(this.state),
    );
    this.project.subscribeToStream(
      'actions',
      this.state.updateStore.bind(this.state),
    );

    this.dashboard.createInnerSubscriptions();
    this.project.createInnerSubscriptions();

    this.subscribeToStream('clicksTopMenu', this.onClickTopMenu.bind(this));
  }

  subscribeToStream(stream, subscription) {
    try {
      const targetStream = this.streams[stream];

      targetStream.stream$.subscribe({
        next: subscription,
      });
      targetStream.subscriptions.add(subscription);
    } catch (err) {
      console.log(`Не смог подписаться на поток: ${err}`);
    }
  }

  unSubscribeFromStream(stream, subscription) {
    try {
      const targetStream = this.streams[stream];

      subscription.unsubscribe();
      targetStream.subscriptions.delete(subscription);
    } catch (err) {
      console.log(`Не смог отписаться от потока: ${err}`);
    }
  }

  clearSubscriptionsStream(stream) {
    try {
      const targetStream = this.streams[stream];

      targetStream.subscriptions.forEach((subscription) => {
        this.unSubscribeFromStream(stream, subscription);
      });
    } catch (err) {
      console.log(`Не смог очистить подписки на поток: ${err}`);
    }
  }

  onClickTopMenu(target) {
    const button = target.dataset.name;

    switch (button) {
      case 'load':
        this.state.loadDashboard();
        break;

      case 'clear':
        this.state.clearDashboard();
        break;

      case 'save':
        this.state.saveDashboard();
        break;
    }
  }
}
