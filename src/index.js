import './style/index.css';
import TodoList from './scripts/TodoList.js';
import TodoForm from './scripts/TodoForm.js';
import TodoItem from './scripts/TodoItem.js';
import deleteButtonImage from './images/del.svg';
import copyButtonImage from './images/copy.svg';

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
function handleFormSubmit(data) {
  list.addItem(createItem(data));
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

const form = new TodoForm('.todolist__form', handleFormSubmit);
form.setEventListeners();

/////////
///////// ADD WEBPACK AND MOBILE VERSION
////////
