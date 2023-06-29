


function createTimer() {

  let _timer = document.createElement('timer');

  _timer.setAttribute('id', 'timer');

  let input = document.createElement('input');
  input.setAttribute('type', 'number');

  let submit = document.createElement('input');
  submit.setAttribute('type', 'submit');

  document.body.append(input);
  document.body.append(_timer);
  document.body.append(submit);

  let timerInterval;

  submit.addEventListener('click', function () {
    if (timerInterval) {
      alert('Таймер уже идет');
    } else {
      timerInterval = setInterval(goTimer, 1000)
    }
  })

  function goTimer() {
    if (input.value <= 0) {
      alert('Указано некорректное время');
      clearInterval(timerInterval);
      timerInterval = null;
      return;
    }

    input.value--;

    if (input.value == 0) {
      clearInterval(timerInterval);
      timerInterval = null;
      alert('Таймер сработал')
    }
  }
}

createTimer();


