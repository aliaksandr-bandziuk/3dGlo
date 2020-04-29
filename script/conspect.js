'use strict';

//как пишется регулярное выражение
// между двумя слешами
const reg = /привет/;

// или так (функция-конструктор)
const reg2 = new RegExp('привет');

// если ищем строку, которая начинается с определенного слова
// то сначала пишем ^
// например /^привет/

// если ищем в конце строки,
// то в конце ставим знак доллара
// например /привет$/

// если надо найти точно начало и конец,
// то так /^привет$/

// влидация email
const string = 'alexander.banduk@gmail.com';
const email = string.match(/\w+@\w+\.\w{2,3}/g);

// валидация телефона
const string1 = '+375292321108';
// +? — разрешаем (не)использовать плюс
// [78] — разрешаем использовать или 7, или 8 в начале
// -* — разрешаем дефисы в номере
// ()* — разрешаем использование круглых скобок
// \d — говорим, что надо вводить цифры
// {10} — обязательное количество символов (после обязательного префикса)
const mobile = string1.match(/\+?[78]([-()]*\d{10})/g);

// валидация по инпутам (пример)
const input = document.querySelector('.class-some-input'),
   output = document.querySelector('.class-some-output');

input.addEventListener('input', () => {
   let text = input.value;
   // текст из инпута выводим в аутпуте
   output.textContent = text;
});

// валидация текста в инпуте
const input1 = document.querySelector('.class-some-input'),
   output1 = document.querySelector('.class-some-output');

input.addEventListener('input', () => {
   let text = input.value;
   // запрещаем ввод букв
   output.textContent = text.replace(/\D/g, '');
});