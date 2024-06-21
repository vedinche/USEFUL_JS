// Добавляем обработчик события для клика по заголовку выпадающего меню
document.addEventListener('DOMContentLoaded', function () {
  var currency__dropdown = document.querySelector('.currency__dropdown');
  var currency__caption = document.querySelector('.currency__caption');

  function togglecurrency__dropdown() {
    currency__dropdown.classList.toggle('open');
  }

  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      togglecurrency__dropdown();
    }
  }

  currency__caption.addEventListener('click', togglecurrency__dropdown);
  document.addEventListener('keypress', handleKeyPress);
});

// Обработчик события для клика и нажатия клавиши Enter
function handleItemClick() {
  // Убираем класс 'selected' у всех элементов списка
  document
    .querySelectorAll('.currency__dropdown > .currency__list > .currency__item')
    .forEach(function (otherItem) {
      otherItem.classList.remove('selected');
    });

  // Добавляем класс 'selected' к выбранному элементу
  this.classList.add('selected');

  // Обновляем текст заголовка выпадающего меню
  const currency__caption =
    this.parentElement.parentElement.querySelector('.currency__caption');
  currency__caption.innerHTML = this.innerHTML;

  // Закрываем выпадающее меню
  this.parentElement.parentElement.classList.remove('open');
}

// Добавляем обработчик события для клика по элементам списка и нажатия клавиши Enter
document
  .querySelectorAll('.currency__dropdown > .currency__list > .currency__item')
  .forEach(function (item) {
    item.addEventListener('click', handleItemClick);
    item.addEventListener('keyup', function (evt) {
      if ((evt.keyCode || evt.which) === 13) {
        handleItemClick.call(this);
      }
    });
  });

// Добавляем обработчик события для клавиши Esc
document.addEventListener('keyup', function (evt) {
  if ((evt.keyCode || evt.which) === 27) {
    document.querySelector('.currency__dropdown').classList.remove('open');
  }
});

// Добавляем обработчик события для клика вне выпадающего меню
document.addEventListener('click', function (evt) {
  if (!evt.target.closest('.currency__dropdown > .currency__caption')) {
    document.querySelector('.currency__dropdown').classList.remove('open');
  }
});
