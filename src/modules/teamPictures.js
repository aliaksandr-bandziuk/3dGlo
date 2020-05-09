'use strict';

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

export default teamPictures;