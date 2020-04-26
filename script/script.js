window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    // Timer
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
        // let newInterval = setInterval(updateClock, 1000);
                clearInterval(newInterval);
            }
   };
    countTimer('1 july 2021');

   // это на всякий случай
   // устанавливаем интервал
   // countTimer выполняется каждую милисекунду
   // до указанной даты
   // завели часики)))
   // setInterval(countTimer, 1000, '1 july 2020');


   // menu
   const toggleMenu = () => {
        
      const btnMenu = document.querySelector('.menu'),
         menu = document.querySelector('menu'),
         closeBtn = document.querySelector('.close-btn'),
         menuItems = menu.querySelectorAll('ul>li');

      const handlerMenu = () => {
         // добавляем и/или убираем класс для меню, который записан в CSS
         // это анимация
         menu.classList.toggle('active-menu');
      };

      btnMenu.addEventListener('click', handlerMenu);
      closeBtn.addEventListener('click', handlerMenu);
         
      menuItems.forEach((elem) => elem.addEventListener('click', handlerMenu));
   };
   
   toggleMenu();

   // popup
   const togglePopup = () => {
      const popup = document.querySelector('.popup'),
         popupBtn = document.querySelectorAll('.popup-btn'),
         popupClose = document.querySelector('.popup-close');

         let count = 0,
            animation,
            popupAnimation = () => {
               animation = requestAnimationFrame(popupAnimation);
               count++;
               if(parseFloat(popup.firstElementChild.style.left) <   +parseFloat('38%')) {
                  popup.firstElementChild.style.left = count*3 + '%';
            } else {
                  cancelAnimationFrame(animation);
            }
            };
      
         popupBtn.forEach((elem) => {
         elem.addEventListener('click', () => {
            // при нажатии всплывает попап
            popup.style.display = 'block';
            if(screen.width > 768) {
               popup.firstElementChild.style.left = '0%';
               animation = requestAnimationFrame(popupAnimation);
            }
         });
      });

      popupClose.addEventListener('click', () => {
         if(screen.width > 768) {
            // попап пропадает при нажатии на крестик
            popup.style.display = 'none';
            popup.firstElementChild.style.left = '0%';
            count = 0;
         } else {
            popup.style.display = 'none';
         }

      });
   };
   togglePopup();

});