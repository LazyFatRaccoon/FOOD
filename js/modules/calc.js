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

export default calc;