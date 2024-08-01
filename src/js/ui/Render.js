import VARIABLE from './VARIABLE';

export default class Render {
  constructor() {
    this.container = null;

    this.buttons = {
      container: null,
      save: null,
      clear: null,
      load: null,
    };

    this.widgets = {
      container: null,
      dashboard: null,
      project: null,
    };
  }

  initialApp(container) {
    this.container = document.querySelector(container);

    this.buttons.container = this.renderButtonsBlock();
    this.widgets.container = this.renderWidgetsBlock();

    this.container.append(this.buttons.container, this.widgets.container);
  }

  renderButtonsBlock() {
    const buttonsBlock = document.createElement(`header`);
    buttonsBlock.classList.add(`header`, `block-buttons`);

    this.buttons.save = this.renderButton(VARIABLE.BUTTONS['SAVE']);
    this.buttons.clear = this.renderButton(VARIABLE.BUTTONS['CLEAR']);
    this.buttons.load = this.renderButton(VARIABLE.BUTTONS['LOAD']);

    buttonsBlock.append(
      this.buttons.save,
      this.buttons.clear,
      this.buttons.load,
    );

    return buttonsBlock;
  }

  renderWidgetsBlock() {
    const widgetBlock = document.createElement('main');
    widgetBlock.classList.add(`container`, `block-widgets`);

    this.widgets.dashboard = this.renderWidget(VARIABLE.WIDGETS['DASHBOARD']);
    this.widgets.project = this.renderWidget(VARIABLE.WIDGETS['PROJECT']);

    widgetBlock.append(this.widgets.dashboard, this.widgets.project);

    return widgetBlock;
  }

  renderButton(button) {
    const buttonEl = document.createElement('button');

    buttonEl.classList.add(
      `button`,
      `header-button`,
      `header-button-${button.name}`,
    );
    buttonEl.textContent = button.title;
    buttonEl.dataset.name = button.name;

    return buttonEl;
  }

  renderWidget(widget) {
    const widgetEl = document.createElement('article');
    widgetEl.classList.add(`widget`, widget.name);
    widgetEl.setAttribute('id', widget.name);

    return widgetEl;
  }
}
