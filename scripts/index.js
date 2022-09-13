// import TodoList from '../scripts/TodoList';
// import TodoForm from './TodoForm';
// import TodoItem from './TodoItem';

const exampleList = [
  {
    name: 'выучить уроки',
  },
  {
    name: 'прочитать книгу',
  },
  {
    name: 'сделать уборку',
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

  generateItem() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._itemText = this._element.querySelector('.todolist__item-text');
    this._itemText.textContent = this._text;

    return this._element;
  }
}

class TodoForm {
  constructor(formSelector, handleFormSubmit) {
    this._handleFormSubmit = handleFormSubmit;
    this._form = document.querySelector(formSelector);
    this._btnSubmit = this._form.querySelector('.todolist__form-submit');
    this._input = this._form.querySelector('.todolist__form-input');
  }

  _getInput() {
    this._formValue = {};

    this._formValue.name = this._input.value;

    console.log(this._formValue);
    console.log(this._formValue.name);
    return this._formValue;
  }

  setEventListeners() {
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInput());
      this.clear();
    });
  }

  clear() {
    this._form.reset();
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
      handleFormSubmit(item);
    },
  },
  '.todolist'
);
list.renderItems();

function handleFormSubmit(data) {
  list.addItem(createItem(data));
}

const form = new TodoForm('.todolist__form', handleFormSubmit);

form.setEventListeners();
