'use strict';

const formValidation = () => {
   const formPhone = document.querySelectorAll('.form-phone'),
      formName = document.querySelectorAll('.form-name');

     formPhone.forEach((item) => {
      item.addEventListener('input', (event) => {
         event.target.value = event.target.value.replace(/[^0-9+]/g, '');
      });
     });

     formName.forEach((item) => {
      item.addEventListener('input', (event) => {
         event.target.value = event.target.value.replace(/[^А-Я|а-я]/g, '');
      });
     });
 };

 export default formValidation;