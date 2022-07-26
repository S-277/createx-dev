
const selects = document.querySelectorAll('.form-field__select');
selects.forEach(el => {
  new Choices(el, {
    position: 'bottom',
    searchEnabled: false,
    shouldSort: false,
  });
});
