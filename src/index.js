'use strict';

import "@babel/polyfill";
import 'nodelist-foreach-polyfill';
import elementClosest from "element-closest";
elementClosest(window);
import "formdata-polyfill";
import "es6-promise";
import "fetch-polyfill";

(function (arr) {
   arr.forEach(function (item) {
     if (item.hasOwnProperty('append')) {
       return;
     }
     Object.defineProperty(item, 'append', {
       configurable: true,
       enumerable: true,
       writable: true,
       value: function append() {
         var argArr = Array.prototype.slice.call(arguments),
           docFrag = document.createDocumentFragment();
         
         argArr.forEach(function (argItem) {
           var isNode = argItem instanceof Node;
           docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
         });
         
         this.appendChild(docFrag);
       }
     });
   });
 })([Element.prototype, Document.prototype, DocumentFragment.prototype]);


import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopup from './modules/togglePopup';
import tabs from './modules/tabs';
import slider from './modules/slider';
import teamPictures from './modules/teamPictures';
import digitValidation from './modules/digitValidation';
import calc from './modules/calc';
import sendForm from './modules/sendForm';
import formValidation from './modules/formValidation';

// Timer
countTimer('1 july 2021');
// menu
toggleMenu();
// popup
togglePopup();
// tabs
tabs();
// slider
slider();
// Team pictures
teamPictures();
// digits in calculator
digitValidation();
// calculator
calc(100);
// send-ajax-form
sendForm();
// formValidation
formValidation();