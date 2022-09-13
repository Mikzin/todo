class TodoItem {
  constructor(templateSelector, data) {
    this._templateSelector = templateSelector;
    this._text = data.text;
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

  _handleCopyItem() {}

  _setEventListeners() {
    this._deleteButton = this._element.querySelector('.todolist__item-del');
    this._deleteButton.addEventListener('click', () => {
      this._handleDeleteItem();
    });
  }

  generateItem() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._itemText = this._element.querySelector('.todolist__item-text');
    this._itemText.textContent = this._text;

    return this._element;
  }
}
