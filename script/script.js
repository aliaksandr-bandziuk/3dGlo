window.addEventListener('DOMContentLoaded', () => {
   'use strict';

   // Timer
  const countTimer = (deadline) => {
       let timerHours = document.querySelector('#timer-hours'),
           timerMinutes = document.querySelector('#timer-minutes'),
           timerSeconds = document.querySelector('#timer-seconds');


       // тут все переменные, которые вычисляют оставшуюся дату
       const getTimeRemaining = () => {
           // переменная для вычисления разницы дат
           // то есть получаем конечную дату
           let dateStop = new Date(deadline).getTime(),
               // получаем текущую дату
               dateNow = new Date().getTime(),
               timeRemaining = (dateStop - dateNow) / 1000,
               seconds = Math.floor(timeRemaining % 60),
               minutes = Math.floor((timeRemaining / 60) % 60),
               hours = Math.floor(timeRemaining / 60 / 60) % 24;
               // day = (timeRemaining / 60 / 60 / 24);
               return {timeRemaining, hours, minutes, seconds};
       };

       const zeroTime = (n) => {
           if (n >= 0 && n <= 9) {
               return '0' + n;
           } else {
               return n;
           }
       };
       
       function updateClock(){
           let timer = getTimeRemaining();
           // выводим полученные данные на страницу
           timerHours.textContent = zeroTime(timer.hours);
           timerMinutes.textContent = zeroTime(timer.minutes);
           timerSeconds.textContent = zeroTime(timer.seconds);
       }
       updateClock();

       let timer = getTimeRemaining();
       let newInterval = setInterval(updateClock, 1000);

           if (timer.timeRemaining < 0){
               timerHours.textContent = '00';
               timerMinutes.textContent = '00';
               timerSeconds.textContent = '00';
               clearInterval(newInterval);
           }
  };
   countTimer('1 july 2021');
  // это на всякий случай
  // устанавливаем интервал
  // countTimer выполняется каждую милисекунду
  // до указанной даты
  // завели часики)))
  // setInterval(countTimer, 1000, '1 july 2020');

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
 
 toggleMenu();

  // popup
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
  togglePopup();

  // табы

  const tabs = () => {
     const tabHeader = document.querySelector('.service-header'),
        tab = tabHeader.querySelectorAll('.service-header-tab'),
        tabContent = document.querySelectorAll('.service-tab');

     // эта функция перебирает все табы,
     // находит соответствующий и показывает его
     // а те, которые нам не надо, будут скрываться
     const toggleTabContent = (index) => {
        for(let i = 0; i < tabContent.length; i++){
           if(index === i){
              tab[i].classList.add('active');
              tabContent[i].classList.remove('d-none');
           } else {
              tab[i].classList.remove('active');
              tabContent[i].classList.add('d-none');
           }
        }
     };
     tabHeader.addEventListener('click', (event) => {
        // получаем элемент, на который мы кликнули
        let target = event.target;
           target = target.closest('.service-header-tab');
           
        if(target.classList.contains('service-header-tab')){
           tab.forEach((item, i) => {   
                 if(item === target){
                    toggleTabContent(i);
                 }
           });
        }
     });

  };
  tabs();

  // slider
  const slider = () => {
        // слайды (картинки)
     const slide = document.querySelectorAll('.portfolio-item'),
        // кнопки-стрелки на слайдере
        btn = document.querySelectorAll('.portfolio-btn'),
        // родитель спрятанных точек
        portfolioDots = document.querySelector('.portfolio-dots'),
        // родитель слайдера (для делегирования)
        slider = document.querySelector('.portfolio-content');

     // номер слайда
     let currentSlide = 0,
        interval,
        // точки под слайдером
        dot = document.querySelectorAll('.dot');

     const getAddDots = () => {  
        slide.forEach((index) => {
              const li = document.createElement('li');
              li.classList.add('dot');
              if (index === 0){
                 li.classList.add('dot-active');
              }
              portfolioDots.append(li);
        });
        // точки под слайдером переопределяем после getAddDots();
       dot = document.querySelectorAll('.dot');
     };
       getAddDots();

     // слайд, который будем удалять
     const prevSlide = (elem, index, strClass) => {
        elem[index].classList.remove(strClass);
    };

     // слайд, который будем добавлять
     const nextSlide = (elem, index, strClass) => {
        elem[index].classList.add(strClass);    
    };

     // чтобы слайдеры сами листались
     const autoPlaySlide = () => {
        // убираем .active у нужного слайда
        // берем функцию для удаления prevSlide и передаем в нее
        // псевдомассив slide, текущий слайд currentSlide и класс слайда
        prevSlide(slide, currentSlide, 'portfolio-item-active');
        // делаем неактивной точку под слайдом
        prevSlide(dot, currentSlide, 'dot-active');
        // переходим к следующему слайду (добавляем единицу currentSlide)
        currentSlide++;
        // если доходим до конца, то возвращаемся к первому слайду 
        if (currentSlide >= slide.length){
           currentSlide = 0;
        }
        // добавляем .active нужному слайду
        nextSlide(slide, currentSlide, 'portfolio-item-active');
        // делаем неактивной точку под слайдом
        nextSlide(dot, currentSlide, 'dot-active');

     };

     // функция, которая запускает слайдер
     const startSlide = (time = 3000) => {
        // вызываем автоматическое переключение слайдеров каждые 2 секунды
        interval = setInterval(autoPlaySlide, time);
     };

     // при наведении на точки и стрелки
     // останавливаем слайд
     // то есть когда вызывается функция stopSlide();
     // то слайдер будет останавливаться
     const stopSlide = () => {
        clearInterval(interval);
     };

     // логика переключения по точкам и по стрелкам
     slider.addEventListener('click', (event) => {
        // по умолчанию при клике на кнопку нас отбрасывает вверх страницы
        // мы отменяем это действие
        event.preventDefault();

        // теперь привязываем таргет
        let target = event.target;

        // ограничиваем вход на события по кликам в слайдере
        // чтобы слайдер не переключался, если клик мимо
        if(!target.matches('.portfolio-btn, .dot')){
           return;
        }

        prevSlide(slide, currentSlide, 'portfolio-item-active');
        prevSlide(dot, currentSlide, 'dot-active');

        // если целью события была правая кнопка
        if(target.matches('#arrow-right')){
           // прибавляем единицу
           // тем самым переключаем слайд вправо
           currentSlide++;
        } else if(target.matches('#arrow-left')){
           currentSlide--;
        } else if (target.matches('.dot')){
           dot.forEach((elem, index) => {
              if(elem === target){
                 currentSlide = index;
              }
           });
        }

        // если мы докликали до последнего слайда
        // то в конце возвращаемся к первому слайду
        if(currentSlide >= slide.length){
           currentSlide = 0;
        }

        // если мы докликали влево,
        // то возвращаемся к первому снова
        if(currentSlide < 0){
           currentSlide = slide.length - 1;
        }
        nextSlide(slide, currentSlide, 'portfolio-item-active');
        nextSlide(dot, currentSlide, 'dot-active');
     });

     // при наведении на стрелки и точки
     slider.addEventListener('mouseover', (event) => {
        if(event.target.matches('.portfolio-btn') ||
        event.target.matches('.dot')){
           stopSlide();
        }
     });

     // при убирании курсора со стрелок и точек
     slider.addEventListener('mouseout', (event) => {
        if(event.target.matches('.portfolio-btn') ||
        event.target.matches('.dot')){
           startSlide();
        }
     });

     startSlide(1050);
  };
  slider();

  // Team pictures
  const teamPictures = () => {
     const command = document.querySelector('#command');
     let newImage = '';

     command.addEventListener('mouseover', event => {
         if (event.target.matches('.command__photo')) {
             newImage = event.target.getAttribute('src');
             event.target.setAttribute('src', event.target.dataset.img);
         }
     });

     command.addEventListener('mouseout', event => {
         if (event.target.matches('.command__photo')) {
             event.target.setAttribute('src', newImage);
         }
     });
 };
 teamPictures();

 // digits in calculator
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
 digitValidation();

 // calculator
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
        totalValue.textContent = total;
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
 calc(100);

 // send-ajax-form
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
            postData(body, 
               () => {
                  statusMessage.textContent = successMessage;
                  form.reset();
               }, 
               (error) => {
                  statusMessage.textContent = errorMessage;
                  console.error(error);
               }
            );
         });
      });

         const postData = (body, outputData, errorData) => {
            return new Promise(() => {
                //создаем объект request
                const request = new XMLHttpRequest();
                request.addEventListener('readystatechange', () => {
                 
                if(request.readyState !== 4){
                    return;
                }
                if(request.status === 200){
                    outputData();
                } else {
                    errorData(request.status);
                }
      
                });
                // настраиваем соединение
                // отправляем данные на сервер
                request.open('POST', './server.php');
                // настраиваем заголовки
                request.setRequestHeader('Content-Type', 'application/json');
      
                // открываем соединение
                // и передаем данные с помощью метода send()
                // если надо перегнать в JSON
                request.send(JSON.stringify(body));
                // если в JSON перегонять не надо
                // request.send(formData);
            });
        };

 };
 sendForm();

    // formValidation
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
    formValidation();
 
});