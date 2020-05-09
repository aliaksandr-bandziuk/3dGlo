'use strict';

const digitValidation = () => {
   // родитель инпутов
   const calcBlock = document.querySelector('.calc-block'),
    // общий класс для инпутов
    calcItem = document.querySelector('.calc-item'),
    // площадь
    calcSquare = document.querySelector('.calc-square'),
    // количество помещений
    calcCount = document.querySelector('.calc-count'),
    // срок исполнения
    calcDay = document.querySelector('.calc-day');
   
    calcBlock.addEventListener('input', (event) => {
       if(event.target.matches('input')){
          event.target.value = event.target.value.replace(/\D/g, '');
       }
    });
   
};

export default digitValidation;