const exampleList = [
  {
    text: 'выучить уроки',
  },
  {
    text: 'прочитать книгу',
  },
  {
    text: 'сделать уборку',
  },
];

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
    this._renderedItems.forEach((item) => {
      this._renderer(item);
    });
  }
}

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

function createItem(item) {
  const todoItem = new TodoItem('#todolist__item-template', item);
  const itemElement = todoItem.generateItem();
  return itemElement;
}

const list = new TodoList(
  {
    data: exampleList,
    renderer: (item) => {
      list.addItem(createItem(item));
    },
  },
  '.todolist'
);
list.renderItems();
