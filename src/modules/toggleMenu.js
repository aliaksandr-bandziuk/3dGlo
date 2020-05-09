'use strict';

  // menu
  const toggleMenu = () => {
   // ввожу боди, чтобы слушать клик и пропадало окно
const body = document.querySelector('body'),
menu = document.querySelector('menu');

 const handlerMenu = () => {
     // добавляем и/или убираем класс для меню, который записан в CSS
     // это анимация
     menu.classList.toggle('active-menu');
 };
 
 body.addEventListener('click', (event) => {
     let target = event.target;
     if(target.closest('.menu')){
      handlerMenu();
     } else if(target.classList.contains('close-btn')) {
      handlerMenu();
     } else if(target.closest('.active-menu')){
      handlerMenu();
     } else if(!target.closest('.active-menu') && document.querySelector('.active-menu')){
         {
            handlerMenu();
         }
     }
 });
};

export default toggleMenu;