export default class TodoItem {
  constructor(templateSelector, data) {
    this._templateSelector = templateSelector;
    this._text = data.name;
  }

  _getTemplate() {
    const itemElement = document
      .querySelector(this._templateSelector)
      .content.querySelector('.todolist__item')
      .cloneNode(true);

    return itemElement;
  }

  _handleDeleteItem() {
    this._element.remove();
  }

  _handleCopyItem() {
    this.container = document.querySelector('.todolist');
    this.container.append(this.generateItem());
  }

  _setEventListeners() {
    this._deleteButton = this._element.querySelector('.todolist__item-del');
    this._copyButton = this._element.querySelector('.todolist__item-copy');
    this._deleteButton.addEventListener('click', () => {
      this._handleDeleteItem();
    });

    this._copyButton.addEventListener('click', () => {
      this._handleCopyItem();
    });
  }
