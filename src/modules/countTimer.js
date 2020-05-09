'use strict';

// countTimer
const countTimer = (deadline) => {
   let timerHours = document.querySelector('#timer-hours'),
       timerMinutes = document.querySelector('#timer-minutes'),
       timerSeconds = document.querySelector('#timer-seconds');


   // тут все переменные, которые вычисляют оставшуюся дату
   const getTimeRemaining = () => {
       // переменная для вычисления разницы дат
       // то есть получаем конечную дату
       let dateStop = new Date(deadline).getTime(),
           // получаем текущую дату
           dateNow = new Date().getTime(),
           timeRemaining = (dateStop - dateNow) / 1000,
           seconds = Math.floor(timeRemaining % 60),
           minutes = Math.floor((timeRemaining / 60) % 60),
           hours = Math.floor(timeRemaining / 60 / 60) % 24;
           // day = (timeRemaining / 60 / 60 / 24);
           return {timeRemaining, hours, minutes, seconds};
   };

   const zeroTime = (n) => {
       if (n >= 0 && n <= 9) {
           return '0' + n;
       } else {
           return n;
       }
   };
   
   function updateClock(){
       let timer = getTimeRemaining();
       // выводим полученные данные на страницу
       timerHours.textContent = zeroTime(timer.hours);
       timerMinutes.textContent = zeroTime(timer.minutes);
       timerSeconds.textContent = zeroTime(timer.seconds);
   }
   updateClock();

   let timer = getTimeRemaining();
   let newInterval = setInterval(updateClock, 1000);

       if (timer.timeRemaining < 0){
           timerHours.textContent = '00';
           timerMinutes.textContent = '00';
           timerSeconds.textContent = '00';
           clearInterval(newInterval);
       }
};

  // это на всякий случай
  // устанавливаем интервал
  // countTimer выполняется каждую милисекунду
  // до указанной даты
  // завели часики)))
  // setInterval(countTimer, 1000, '1 july 2020');

export default countTimer;