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

      const body = document.querySelector('body'),
         menu = document.querySelector('menu');
  
          const handlerMenu = () =>{
              // добавляем и/или убираем класс для меню, который записан в CSS
              // это анимация
              menu.classList.toggle('active-menu');
          };
          
          body.addEventListener('click', (event) =>{
              let target = event.target;
              
              target = target.closest('.menu');
              
               if (!target){
                   return;
               } else {
                  handlerMenu();
               }
  
          });
  
          menu.addEventListener('click', (event) =>{
              let target = event.target;
              if (target.tagName === 'A'){
                  handlerMenu();
              }
          });
      
  };
  
  toggleMenu();

   // popup
   const togglePopup = () => {
      const popup = document.querySelector('.popup'),
         popupBtn = document.querySelectorAll('.popup-btn');

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


      // А ПОЧЕМУ ЭТО ТЕПЕРЬ НЕ НАДО?
      // popupClose.addEventListener('click', () => {
      //    if(screen.width > 768) {
      //       // попап пропадает при нажатии на крестик
      //       popup.style.display = 'none';
      //       popup.firstElementChild.style.left = '0%';
      //       count = 0;
      //    } else {
      //       popup.style.display = 'none';
      //    }

      // });

      popup.addEventListener('click', (event) => {
         let target = event.target;

         if(target.classList.contains('popup-close')){
            popup.style.display = 'none';
         } else {
            // при клике на таргет и по всей его иерархии
            // мы получаем блок с классом .popup-content
            // если не получаем, то возвращается null
            // с ним и работаем
            target = target.closest('.popup-content');

            if(!target){
               popup.style.display = 'none';
            }
         }
      });
   };
   togglePopup();

   // табы

   const tabs = () => {
      const tabHeader = document.querySelector('.service-header'),
         tab = tabHeader.querySelectorAll('.service-header-tab'),
         tabContent = document.querySelectorAll('.service-tab');

      // эта функция перебирает все табы,
      // находит соответствующий и показывает его
      // а те, которые нам не надо, будут скрываться
      const toggleTabContent = (index) => {
         for(let i = 0; i < tabContent.length; i++){
            if(index === i){
               tab[i].classList.add('active');
               tabContent[i].classList.remove('d-none');
            } else {
               tab[i].classList.remove('active');
               tabContent[i].classList.add('d-none');
            }
         }
      };
      tabHeader.addEventListener('click', (event) => {
         // получаем элемент, на который мы кликнули
         let target = event.target;
            target = target.closest('.service-header-tab');
            
         if(target.classList.contains('service-header-tab')){
            tab.forEach((item, i) => {   
                  if(item === target){
                     toggleTabContent(i);
                  }
            });
         }
      });

   };

   tabs();

});