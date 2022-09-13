import TodoList from './TodoList.js';
import TodoForm from './TodoForm.js';
import TodoItem from './TodoItem.js';

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
