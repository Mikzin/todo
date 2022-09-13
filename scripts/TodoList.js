class TodoList {
  constructor({ data, renderer }, containerSelector) {
    this._container = document.querySelector(containerSelector);
    this._renderedItems = data;
    this._renderer = renderer;
  }

  addItem(element) {
    this._container.append(element);
  }

  clear() {
    this._container.innerHTML = '';
  }

  renderItems() {
    // this.clear();

    // this._renderedItems = list;

    this._renderedItems.forEach((item) => {
      this._renderer(item);
    });
  }
}
