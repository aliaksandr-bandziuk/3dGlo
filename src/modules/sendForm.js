'use strict';

const sendForm = () => {
   const errorMessage = "Что-то пошло не так...",
       loadMessage = "Загрузка...",
       successMessage = "Спасибо! Мы скоро с вами свяжемся";

    // добавляем элемент, в который будем помещать сообщение
    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = 'font-size: 2rem; color: white';

     const forms = document.querySelectorAll('form');

     forms.forEach(form => {
        form.addEventListener('submit', (event) => {
           event.preventDefault();
           form.appendChild(statusMessage);
           statusMessage.textContent = loadMessage;
           // передаем форму, с которой хотим получить данные
           const formData = new FormData(form);
           let body = {};
   
           // for (let val of formData.entries()){
           //    body[val[0]] = val[1]
           // }
   
           formData.forEach((val, key) => {
              body[key] = val;
           });
           
           postData(body)
              .then((response) => {
                 if(response.status !== 200){
                  throw new Error('status network not 200');
                 }
                 statusMessage.textContent = successMessage;
                 form.reset();
                 setTimeout(() => {
                    statusMessage.remove();
                 }, 5000);
              })
              .catch((error) => {
              statusMessage.textContent = errorMessage;
              setTimeout(() => {
                 statusMessage.remove();
              }, 5000);
              });
        });
     });

     const postData = (body) => {
        return fetch('./server.php', {
           method: 'POST',
           headers: {
              'Content-Type': 'application/json'
           },
           body: JSON.stringify(body)
        });
     };
};

export default sendForm;