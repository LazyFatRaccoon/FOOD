/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/calc.js":
/*!****************************!*\
  !*** ./js/modules/calc.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function calc() {

      // ---- calculator
  // additional info
  // man/weman - class="calculating__choose-item"
  // for chosen - add class "calculating__choose-item_active"
  // switch picture - id"gender";
  // inputs - id"height" id"weight" id"age"
  // id"low" id"small" id"medium" id"high"
  // result - class="calculating__result" span
  // initLocalSettings("#gender", "calculating__choose-item_active");
  // initLocalSettings(
  //   ".calculating__choose_big",
  //   "calculating__choose-item_active"
  // );
    
    
  const answer = document.querySelector(".calculating__result span");
  let sex, height, weight, age, ratio;

  if (localStorage.getItem("ratio")) {
    ratio = +localStorage.getItem("ratio");
  } else {
    ratio = 1.375;
    localStorage.setItem("ratio", 1.375);
  }
  if (localStorage.getItem("sex")) {
    sex = localStorage.getItem("sex");
  } else {
    sex = "female";
    localStorage.setItem("sex", "female");
  }
  if (localStorage.getItem("height")) {
    height = +localStorage.getItem("height");
    document.querySelector("#height").value = height;
  }
  if (localStorage.getItem("weight")) {
    weight = +localStorage.getItem("weight");
    document.querySelector("#weight").value = weight;
  }
  if (localStorage.getItem("age")) {
    age = +localStorage.getItem("age");
    document.querySelector("#age").value = age;
  }
  function initLocalSettings(selector, activeClass) {
    const elements = document.querySelectorAll(selector);
    elements.forEach((element) => {
      element.classList.remove(activeClass);
      if (
        element.getAttribute("id") == localStorage.getItem("sex") ||
        element.getAttribute("data-ratio") == localStorage.getItem("ratio")
      ) {
        element.classList.add(activeClass);
      }
    });
  }
     initLocalSettings(
    ".calculating__choose-item",
    "calculating__choose-item_active"
  );
  function calcTotal() {
    if (!height || !weight || !age) {
      answer.textContent = "____";
      return;
    }
    if (sex == "female") {
      answer.textContent = Math.round(
        (447.6 + 9.2 * weight + 3.1 * height - 4.3 * age) * ratio
      );
    } else {
      answer.textContent = Math.round(
        (88.36 + 13.4 * weight + 4.8 * height - 5.7 * age) * ratio
      );
    }
  }
  calcTotal();

  // calcTotal();

  function getStaticInfo(selector, activeClass) {
    const elements = document.querySelectorAll(selector);

    elements.forEach((elem) => {
      elem.addEventListener("click", (e) => {
        if (e.target.getAttribute("data-ratio")) {
          ratio = +e.target.getAttribute("data-ratio");
          localStorage.setItem("ratio", e.target.getAttribute("data-ratio"));
        } else {
          sex = e.target.getAttribute("id");
          localStorage.setItem("sex", e.target.getAttribute("id"));
        }
        console.log(ratio, sex);
        elements.forEach((item) => {
          item.classList.remove(activeClass);
        });
        e.target.classList.add(activeClass);
        calcTotal();
      });
    });
  }
  getStaticInfo(
    ".calculating__choose_big div",
    "calculating__choose-item_active"
  );
  getStaticInfo("#gender div", "calculating__choose-item_active");

  function getDinamicInfo(selector) {
    const input = document.querySelector(selector);

    input.addEventListener("input", (e) => {
      if (input.value.match(/\D/g)) {
        input.style.border = "2px solid red";
      } else {
        input.style.border = "none";
      }
      switch (input.getAttribute("id")) {
        case "height":
          height = +input.value;
          localStorage.setItem("height", +input.value);
          break;
        case "weight":
          weight = +input.value;
          localStorage.setItem("weight", +input.value);
          break;
        case "age":
          age = +input.value;
          localStorage.setItem("age", +input.value);
          break;
      }
      calcTotal();
    });
  }
  getDinamicInfo("#height");
  getDinamicInfo("#weight");
  getDinamicInfo("#age");
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);

/***/ }),

/***/ "./js/modules/cards.js":
/*!*****************************!*\
  !*** ./js/modules/cards.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");

function cards() {
 class MenuItem {
    constructor(src, alt, title, descr, price, parentSelector, ...classes) {
      this.src = src;
      this.alt = alt;
      this.title = title;
      this.descr = descr;
      this.price = price;
      this.classes = classes;
      this.parent = document.querySelector(parentSelector);
      this.transfer = 27;
      this.changeToUAH();
    }
    changeToUAH() {
      this.price = this.price * this.transfer;
    }

     createMenuItem() {
        console.log('h1');
      const element = document.createElement("div");
        if (this.classes.length == 0) {
            this.classes = "menu__item";
            element.classList.add(this.classes);
        } else {
            this.classes.forEach((className) => element.classList.add(className));
        }
      element.innerHTML = `
      <img src=${this.src} alt="${this.alt}">
        <h3 class="menu__item-subtitle">${this.title}</h3>
        <div class="menu__item-descr">${this.descr}</div>
        <div class="menu__item-divider"></div>
        <div class="menu__item-price">
          <div class="menu__item-cost">Цена:</div>
          <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
        </div>
      `;
      this.parent.append(element);
    }
  }

 

  (0,_services_services__WEBPACK_IMPORTED_MODULE_0__.getResource)("http://localhost:3000/menu").then((data) => {
      data.forEach(({ img, altimg, title, descr, price }) => {
        
      new MenuItem(
        img,
        altimg,
        title,
        descr,
        price,
        ".menu .container"
      ).createMenuItem();
    });
  });
    
    

}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cards);

/***/ }),

/***/ "./js/modules/forms.js":
/*!*****************************!*\
  !*** ./js/modules/forms.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./js/modules/modal.js");
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");



function forms(formSelector, modalTimerID) {
 const forms = document.querySelectorAll(formSelector);

  const message = {
    loading: "img/form/spinner.svg",
    success: "Thank you! We will contact with you soon",
    failure: "Somethig goes wrong...",
  };

  forms.forEach((item) => bindPostData(item));

  function bindPostData(form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const statusMessage = document.createElement("img");

      statusMessage.src = message.loading;
      statusMessage.style.cssText = `display: block;
      margin: 0 auto;`;

      form.insertAdjacentElement("afterend", statusMessage);

      // const request = new XMLHttpRequest();
      // request.open("POST", "server.php");

      //request.setRequestHeader("content-type", "application/json");
      const formData = new FormData(form);

      const json = JSON.stringify(Object.fromEntries(formData.entries()));

      (0,_services_services__WEBPACK_IMPORTED_MODULE_1__.postData)("http://localhost:3000/requests", json)
        .then((data) => {
          console.log(data);
          showThanksModal(message.success);
          statusMessage.remove();
        })
        .catch(() => {
          showThanksModal(message.failure);
        })
        .finally(() => {
          form.reset();
        });

      //multipart / form - data;
      // request.send(JSON.stringify(object));
      // request.addEventListener("load", () => {
      //   if (request.status == 200) {
      //     console.log(request.response);
      //     showThanksModal(message.success);
      //     statusMessage.remove();
      //     form.reset();
      //   } else {
      //     showThanksModal(message.failure);
      //   }
      // });
    });
  }
  // Modal Thanks window -----------------------------------------
  function showThanksModal(message) {
    const prevModalDialog = document.querySelector(".modal__dialog");
    prevModalDialog.classList.add("hide");
    (0,_modal__WEBPACK_IMPORTED_MODULE_0__.openModal)(".modal",modalTimerID);

    const thanksModal = document.createElement("div");
    thanksModal.classList.add("modal__dialog");

    thanksModal.innerHTML = `
    <div class="modal__content">
    <div class="modal__close" data-close>x</div>
    <div class="modal__title">${message}</div>
    </div>
    `;
    document.querySelector(".modal").append(thanksModal);
    setTimeout(() => {
      thanksModal.remove();
      prevModalDialog.classList.add("show");
      prevModalDialog.classList.remove("hide");
      (0,_modal__WEBPACK_IMPORTED_MODULE_0__.closeModal)(".modal");
    }, 4000);
  }

  fetch("http://localhost:3000/menu")
    .then((data) => data.json())
    .then((result1) => console.log(result1));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forms);

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "closeModal": () => (/* binding */ closeModal),
/* harmony export */   "openModal": () => (/* binding */ openModal)
/* harmony export */ });
function openModal(modalSelector, modalTimerID) {
      const modal = document.querySelector(modalSelector);
    modal.classList.add("show");
    modal.classList.add("fade");
    modal.classList.remove("hide");

    document.body.style.overflow = "hidden";

    if (modalTimerID)
    clearInterval(modalTimerID);
}
  
function closeModal(modalSelector) {
      const modal = document.querySelector(modalSelector);
    modal.classList.remove("fade");
    modal.classList.remove("show");
    modal.classList.add("hide");
    document.body.style.overflow = "";
  }


function modal(triggerSelector, modalSelector, modalTimerID) {
   
  const modalTrigger = document.querySelectorAll(triggerSelector),
    modal = document.querySelector(modalSelector);



  modalTrigger.forEach((item) => {
    item.addEventListener("click", () => openModal(modalSelector, modalTimerID));
  });

  modal.addEventListener("click", (event) => {
    if (
      event.target === modal ||
      event.target.getAttribute("data-close") == ""
    ) {
      closeModal(modalSelector);
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.code === "Escape" && modal.classList.contains("show")) {
      closeModal(modalSelector);
    }
  });

  function showModalByScroll() {
    if (
      window.pageYOffset + document.documentElement.clientHeight >=
      document.documentElement.scrollHeight - 1
    ) {
      openModal(modalSelector, modalTimerID);
      window.removeEventListener("scroll", showModalByScroll);
    }
  }
  window.addEventListener("scroll", showModalByScroll);
  console.log(modalTrigger);

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);


/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function slider({container,slide,nextArrow,prevArrow, totalCounter, currentCouner, wrapper, field}) {
// Button next class next offer__slider-button
  // Button previous class prev offer__slider-button
  // slider counter text on page - id="current"
  // slider total pictures text on page id="total"
  // Buttons and trext wrapped by class="offer__slider" & class="offer__slider-counter"
  // to img - class="offer__slider-wrapper" or class="offer__slide"
function getZeroBeforeOneDealNumber(number) {
    if (number < 10 && number >= 0) {
      return "0" + number;
    } else {
      return number;
    }
    }
    
  const slides = document.querySelectorAll(slide),
    slider = document.querySelector(container),
    // sliderBnts = document.querySelectorAll(".offer__slider-button"),
    prev = document.querySelector(prevArrow),
    next = document.querySelector(nextArrow),
    totalSlides = document.querySelector(totalCounter),
    currentSlide = document.querySelector(currentCouner),
    slidesWrapper = document.querySelector(wrapper),
    slidesField = document.querySelector(field),
    width = window.getComputedStyle(slidesWrapper).width;
  console.log(slides);
  totalSlides.innerHTML = getZeroBeforeOneDealNumber(slides.length);
  let currentSlideNumber = 1;
  let offset = 0;
  currentSlide.innerHTML = getZeroBeforeOneDealNumber(currentSlideNumber);

  slidesField.style.width = 100 * slides.length + "%";
  slidesField.style.display = "flex";
  slidesField.style.transition = "0.5s all";

  slidesWrapper.style.overflow = "hidden";
  slides.forEach((slide) => {
    slide.style.width = width;
  });

  slider.style.position = "relative";
  const indicators = document.createElement("ol"),
    dots = [];
  indicators.classList.add("carousel-indicators");
  slider.append(indicators);

  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("li");
    dot.setAttribute("data-slide-to", i + 1);
    dot.classList.add("dot");
    indicators.append(dot);

    if (i == 0) {
      dot.style.opacity = 1;
    }
    dots.push(dot);
  }

  next.addEventListener("click", () => {
    if (offset == +width.replace(/\D/g, "") * (slides.length - 1)) {
      offset = 0;
      console.log(1);
    } else {
      offset += +width.replace(/\D/g, "");
    }
    slidesField.style.transform = `translateX(-${offset}px)`;
    if (currentSlideNumber == slides.length) {
      currentSlideNumber = 1;
    } else {
      currentSlideNumber++;
    }
    currentSlide.innerHTML = getZeroBeforeOneDealNumber(currentSlideNumber);
    dots.forEach((dot) => (dot.style.opacity = ".5"));
    dots[currentSlideNumber - 1].style.opacity = 1;
  });
  prev.addEventListener("click", () => {
    if (offset == 0) {
      offset = +width.replace(/\D/g, "") * (slides.length - 1);
    } else {
      offset -= +width.replace(/\D/g, "");
    }
    slidesField.style.transform = `translateX(-${offset}px)`;
    if (currentSlideNumber == 1) {
      currentSlideNumber = slides.length;
    } else {
      currentSlideNumber--;
    }
    currentSlide.innerHTML = getZeroBeforeOneDealNumber(currentSlideNumber);
    dots.forEach((dot) => {
      dot.style.opacity = "0.5";
    });
    dots[currentSlideNumber - 1].style.opacity = 1;
  });

  dots.forEach((dot) => {
    dot.addEventListener("click", (e) => {
      const slideTo = e.target.getAttribute("data-slide-to");
      console.log(slideTo);
      currentSlideNumber = slideTo;
      currentSlide.innerHTML = getZeroBeforeOneDealNumber(currentSlideNumber);
      offset = +width.slice(0, width.length - 2) * (slideTo - 1);
      slidesField.style.transform = `translateX(-${offset}px)`;
      dots.forEach((dot) => {
        dot.style.opacity = "0.5";
      });
      dots[currentSlideNumber - 1].style.opacity = 1;
    });
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);

/***/ }),

/***/ "./js/modules/tabs.js":
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function tabs(tabsSelector,tabsContentSelector, tabsParentSelector, activeClass) {
    const tabs = document.querySelectorAll(tabsSelector),
    tabsContent = document.querySelectorAll(tabsContentSelector),
    tabsParent = document.querySelector(tabsParentSelector);

  function hideTabContent() {
    tabsContent.forEach((item) => {
      item.classList.add("hide");
      item.classList.remove("show", "fade");
    });
    tabs.forEach((item) => {
      item.classList.remove(activeClass);
    });
  }

  function showTabContent(i = 0) {
    tabsContent[i].classList.add("show", "fade");
    tabsContent[i].classList.remove("hide");

    tabs[i].classList.add(activeClass);
  }

  hideTabContent();
  showTabContent();

  tabsParent.addEventListener("click", (event) => {
    const target = event.target;
    if (target && target.classList.contains(tabsSelector.slice(1))) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);

/***/ }),

/***/ "./js/modules/timer.js":
/*!*****************************!*\
  !*** ./js/modules/timer.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function timer(id, deadline) {
    
  function getTimeRemaining(endtime) {
    const t =
        Date.parse(endtime) -
        Date.parse(new Date()) +
        new Date().getTimezoneOffset() * 60 * 1000,
      days = Math.floor(t / (1000 * 60 * 60 * 24)),
      hours = Math.floor((t / (1000 * 60 * 60)) % 24),
      minutes = Math.floor((t / (1000 * 60)) % 60),
      seconds = Math.floor((t / 1000) % 60);

    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  }
  function getZeroBeforeOneDealNumber(number) {
    if (number < 10 && number >= 0) {
      return "0" + number;
    } else {
      return number;
    }
  }
  function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
      days = timer.querySelector("#days"),
      hours = timer.querySelector("#hours"),
      minutes = timer.querySelector("#minutes"),
      seconds = timer.querySelector("#seconds"),
      timeInterval = setInterval(updateClock, 1000);
    updateClock();
    function updateClock() {
      const t = getTimeRemaining(endtime);

      days.innerHTML = getZeroBeforeOneDealNumber(t.days);
      hours.innerHTML = getZeroBeforeOneDealNumber(t.hours);
      minutes.innerHTML = getZeroBeforeOneDealNumber(t.minutes);
      seconds.innerHTML = getZeroBeforeOneDealNumber(t.seconds);
      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }

  setClock(id, deadline);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);

/***/ }),

/***/ "./js/services/services.js":
/*!*********************************!*\
  !*** ./js/services/services.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "postData": () => (/* binding */ postData),
/* harmony export */   "getResource": () => (/* binding */ getResource)
/* harmony export */ });
  const postData = async (url, data) => {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: data,
    });
    return await res.json();
};

async function getResource(url) {
        let res = await fetch(url);
    
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
    
        return await res.json();
    }
  


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_tabs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tabs.js */ "./js/modules/tabs.js");
/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modal */ "./js/modules/modal.js");
/* harmony import */ var _modules_timer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/timer.js */ "./js/modules/timer.js");
/* harmony import */ var _modules_calc_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/calc.js */ "./js/modules/calc.js");
/* harmony import */ var _modules_forms_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/forms.js */ "./js/modules/forms.js");
/* harmony import */ var _modules_cards_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/cards.js */ "./js/modules/cards.js");
/* harmony import */ var _modules_slider_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/slider.js */ "./js/modules/slider.js");
  
  
  
  
  
  
  
  

window.addEventListener("DOMContentLoaded", () => {
  
  const modalTimerID = setTimeout(() => (0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_1__.openModal)(".modal", modalTimerID), 150000);
  
  (0,_modules_tabs_js__WEBPACK_IMPORTED_MODULE_0__["default"])(".tabheader__item",".tabcontent",".tabheader__items","tabheader__item_active");
  (0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_1__["default"])("[data-modal]",".modal", modalTimerID);
  (0,_modules_timer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(".timer","2022-01-01");
  (0,_modules_calc_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
  (0,_modules_cards_js__WEBPACK_IMPORTED_MODULE_5__["default"])();
  (0,_modules_slider_js__WEBPACK_IMPORTED_MODULE_6__["default"])({
    container: ".offer__slider",
    slide: ".offer__slide",
    nextArrow: ".next",
    prevArrow: ".prev",
    totalCounter: "#total",
    currentCouner: "#current",
    wrapper: ".offer__slider-wrapper",
    field: ".offer__slider-inner"
  });
  (0,_modules_forms_js__WEBPACK_IMPORTED_MODULE_4__["default"])("form",modalTimerID);
  
  
  
});

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map