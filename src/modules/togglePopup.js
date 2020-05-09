'use strict';

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

export default togglePopup;