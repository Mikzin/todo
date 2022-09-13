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
