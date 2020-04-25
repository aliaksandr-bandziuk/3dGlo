'use strict';

    let date = new Date(),
        hours = date.getHours(),
        newYear = new Date('01 january 2021'),
        theTime = ['Доброе утро', 'Добрый день!', 'Добрый вечер', 'Доброй ночи'],
        days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];



    let showDayTime = function (){
        if (hours >= 0 && hours <= 3) {
        return theTime[3];
        } else if (hours >= 4 && hours <= 11) {
            return theTime[0];
        } else if (hours >= 12 && hours <= 15) {
            return theTime[1];
        } else {
        return theTime[2];
        }
    };

    let div = document.createElement('div'),
    body = document.querySelector('body');
    body.prepend(div);

    div.innerText = `${showDayTime()}
    Сегодня: ${days[date.getDay()]}
    Текущее время ${date.toLocaleTimeString('en')}
    До нового года осталось ${Math.floor((newYear - date)/86400/1000)} дней`;