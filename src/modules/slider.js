'use strict';

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

export default slider;