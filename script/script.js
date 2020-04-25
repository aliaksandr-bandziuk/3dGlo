window.addEventListener('DOMContentLoaded', function() {
    'use strict';
    // Timer
    function countTimer(deadline){
        let hours = document.querySelector('#timer-hours'),
            minutes = document.querySelector('#timer-minutes'),
            seconds = document.querySelector('#timer-seconds'),
            // переменная для вычисления разницы дат
            // то есть получаем конечную дату
            dateStop = new Date(deadline).getTime(),
            // получаем текущую дату
            dateNow = new Date().getTime();
            console.log(dateNow);
            console.log(dateStop);
    }

    console.log('01 july 2019');
});