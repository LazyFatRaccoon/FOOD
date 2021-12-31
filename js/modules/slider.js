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

export default slider;