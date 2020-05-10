'use strict';

const calc = (price = 100) => {
   // родитель инпутов
 const calcBlock = document.querySelector('.calc-block'),
    // тип помещения
    calcType = document.querySelector('.calc-type'),
    // площадь
    calcSquare = document.querySelector('.calc-square'),
    // количество помещений
    calcCount = document.querySelector('.calc-count'),
    // срок исполнения
    calcDay = document.querySelector('.calc-day'),
    // результат
    totalValue = document.getElementById('total') ;

    // функция считает итоговую сумму
    const countSum = () => {
       let total = 0,
          countValue = 1,
          dayValue = 1;
       const typeValue = calcType.options[calcType.selectedIndex].value,
          squareValue = +calcSquare.value;

       
       
       if(calcCount.value > 1){
          countValue += (calcCount.value - 1) / 10;
       }

       // срок исполнения
       if(calcDay.value && calcDay.value < 5){
          dayValue *= 2;
       } else if (calcDay.value && calcDay.value < 10){
          dayValue *= 1.5;
       }

       
          if(typeValue && squareValue){
          total = price * typeValue * squareValue * countValue * dayValue;
       }
       totalValue.textContent = Math.floor(total);
    };

    calcBlock.addEventListener('change', (event) => {
       const target = event.target;

       //1 способ
       // if(target.matches('.calc-type') || 
       // target.matches('.calc-square') || 
       // target.matches('.calc-count') || 
       // target.matches('.calc-day')){
       //    }

       // 2 способ
       if(target === calcType || target === calcSquare || 
          target === calcCount || target === calcDay){
            countSum();
       }

      // еще способ
       // if(target.matches('select') || target.matches('input')){
       // }
    });

};

export default calc;