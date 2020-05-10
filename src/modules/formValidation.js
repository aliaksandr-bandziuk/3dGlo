'use strict';

const formValidation = () => {
   const formPhone = document.querySelectorAll('.form-phone'),
      formName = document.querySelectorAll('.form-name'),
      topForm = document.querySelector('.top-form'),
      message = document.querySelector('.mess');

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

     topForm.forEach((item) => {
      item.addEventListener('input', (event) => {
         event.target.value = event.target.value.replace(/[^А-Я|а-я]/g, '');
      });
     });

     message.forEach((item) => {
      item.addEventListener('input', (event) => {
         event.target.value = event.target.value.replace(/[^А-Я|а-я]/g, '');
      });
     });
 };

 export default formValidation;