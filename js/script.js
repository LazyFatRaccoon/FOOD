  import tabs from './modules/tabs.js';
  import modal from './modules/modal.js';
  import timer from './modules/timer.js';
  import calc from './modules/calc.js';
  import forms from './modules/forms.js';
  import cards from './modules/cards.js';
  import slider from './modules/slider.js';
  import { openModal } from './modules/modal';

window.addEventListener("DOMContentLoaded", () => {
  
  const modalTimerID = setTimeout(() => openModal(".modal", modalTimerID), 150000);
  
  tabs(".tabheader__item",".tabcontent",".tabheader__items","tabheader__item_active");
  modal("[data-modal]",".modal", modalTimerID);
  timer(".timer","2022-01-01");
  calc();
  cards();
  slider({
    container: ".offer__slider",
    slide: ".offer__slide",
    nextArrow: ".next",
    prevArrow: ".prev",
    totalCounter: "#total",
    currentCouner: "#current",
    wrapper: ".offer__slider-wrapper",
    field: ".offer__slider-inner"
  });
  forms("form",modalTimerID);
  
  
  
});
