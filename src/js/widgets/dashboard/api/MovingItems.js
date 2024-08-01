export default class MovingItem {
  constructor() {
    this.activeMoving = false;
    this.startPositionItem = null;
    this.coordsMouse = {
      startPageX: null,
      startPageY: null,
      lastPageX: null,
      lastPageY: null,
    };
    this.startCoordsItem = {
      pageX: null,
      pageY: null,
      width: null,
      height: null,
      scrollX: null,
      scrollY: null,
    };
    this.items = {
      selected: null,
      moving: null,
      blank: null,
    };
  }

  saveCoordsMoving(item, mouse) {
    this.startPositionItem = item.position;

    this.coordsMouse.startPageX = mouse.pageX;
    this.coordsMouse.startPageY = mouse.pageY;
    this.startCoordsItem.scrollX = item.scrollX;
    this.startCoordsItem.scrollY = item.scrollY;
    this.startCoordsItem.pageX = item.clientX + item.scrollX;
    this.startCoordsItem.pageY = item.clientY + item.scrollY;
    this.startCoordsItem.width = item.width;
    this.startCoordsItem.height = item.height;
  }

  updateLastPositionMouse(pageX, pageY) {
    this.coordsMouse.lastPageX = pageX;
    this.coordsMouse.lastPageY = pageY;
  }

  createMovingItems(item) {
    this.saveSelectedItem(item);

    this.createMovingItem();
    this.createBlankItem();
  }

  createMovingItem() {
    this.items.moving = this.items.selected.cloneNode(true);
    this.items.moving.style.width = `${this.startCoordsItem.width}px`;
    this.items.moving.style.height = `${this.startCoordsItem.height}px`;

    this.items.moving.classList.add('moving-item');
    this.items.moving.dataset.item = `moving`;
  }

  createBlankItem() {
    this.items.blank = this.items.selected.cloneNode(true);
    this.items.blank.classList.add('blank-item');
    this.items.blank.dataset.item = `blank`;
    this.items.blank.innerHTML = '';

    this.items.blank.style.width = `${this.startCoordsItem.width}px`;
    this.items.blank.style.height = `${this.startCoordsItem.height}px`;
  }

  saveSelectedItem(item) {
    this.items.selected = item;
  }

  positioningMovingItem(position, scroll) {
    const shiftX = position.pageX - this.coordsMouse.startPageX;
    const shiftY = position.pageY - this.coordsMouse.startPageY;

    const newLeft = this.startCoordsItem.pageX + shiftX - scroll.scrollX;
    const newTop = this.startCoordsItem.pageY + shiftY - scroll.scrollY;

    this.items.moving.style.left = `${newLeft}px`;
    this.items.moving.style.top = `${newTop}px`;
  }

  hideMovingItem() {
    this.items.moving.classList.add('hidden-item');
  }

  showMovingItem() {
    this.items.moving.classList.remove('hidden-item');
  }

  addSelectedItemToPage() {
    this.items.blank.replaceWith(this.items.selected);
  }

  clearItems() {
    this.items.moving.remove();
    this.items.blank.remove();

    this.items = {
      selected: null,
      moving: null,
      blank: null,
    };
  }

  clearCoordMoving() {
    this.coordsMouse.startPageX = null;
    this.coordsMouse.startPageY = null;
    this.coordsMouse.lastPageX = null;
    this.coordsMouse.lastPageY = null;

    this.startCoordsItem.pageX = null;
    this.startCoordsItem.pageY = null;
    this.startCoordsItem.width = null;
    this.startCoordsItem.height = null;
    this.startCoordsItem.scrollX = null;
    this.startCoordsItem.scrollY = null;

    this.startPositionItem = null;
    this.activeMoving = false;
  }
}
