'use strict';

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