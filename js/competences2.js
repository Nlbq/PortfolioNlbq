let progressBar = document.querySelector(".circular-progress");
let valueContainer = document.querySelector(".value-container");

let progressBar2 = document.querySelector(".circular-progress-2");
let valueContainer2 = document.querySelector(".value-container-2");

let progressBar3 = document.querySelector(".circular-progress-3");
let valueContainer3 = document.querySelector(".value-container-3");

let progressBar4 = document.querySelector(".circular-progress-4");
let valueContainer4 = document.querySelector(".value-container-4");

let progressBar5 = document.querySelector(".circular-progress-5");
let valueContainer5 = document.querySelector(".value-container-5");

let progressBar6 = document.querySelector(".circular-progress-6");
let valueContainer6 = document.querySelector(".value-container-6");

//Skill 1

let progressValue = 0;
let progressEndValue = 90;
let speed = 15;

let progress = setInterval(() => {
  progressValue++;
  valueContainer.textContent = `${progressValue}%`;
  progressBar.style.background = `conic-gradient(
    #f45127 ${progressValue * 3.6}deg,
    #f1f2f6 ${progressValue * 3.6}deg
  )`;
  if (progressValue == progressEndValue) {
    clearInterval(progress);
  }
}, speed);

//Skill 2

let progressValue2 = 0;
let progressEndValue2 = 85;
let speed2 = 15;

let progress2 = setInterval(() => {
  progressValue2++;
  valueContainer2.textContent = `${progressValue2}%`;
  progressBar2.style.background = `conic-gradient(
    #0565a8 ${progressValue2 * 3.6}deg,
    #f1f2f6 ${progressValue2 * 3.6}deg
  )`;
  if (progressValue2 == progressEndValue2) {
    clearInterval(progress2);
  }
}, speed2);

//Skill3

let progressValue3 = 0;
let progressEndValue3 = 70;
let speed3 = 15;

let progress3 = setInterval(() => {
  progressValue3++;
  valueContainer3.textContent = `${progressValue3}%`;
  progressBar3.style.background = `conic-gradient(
    #d9b625 ${progressValue3 * 3.6}deg,
    #f1f2f6 ${progressValue3 * 3.6}deg
  )`;
  if (progressValue3 == progressEndValue3) {
    clearInterval(progress3);
  }
}, speed3);

//Skill4

let progressValue4 = 0;
let progressEndValue4 = 70;
let speed4 = 15;

let progress4 = setInterval(() => {
  progressValue4++;
  valueContainer4.textContent = `${progressValue4}%`;
  progressBar4.style.background = `conic-gradient(
    #5373a1 ${progressValue4 * 3.6}deg,
    #f1f2f6 ${progressValue4 * 3.6}deg
  )`;
  if (progressValue4 == progressEndValue4) {
    clearInterval(progress4);
  }
}, speed4);


//Skill5

let progressValue5 = 0;
let progressEndValue5 = 70;
let speed5 = 15;

let progress5 = setInterval(() => {
  progressValue5++;
  valueContainer5.textContent = `${progressValue5}%`;
  progressBar5.style.background = `conic-gradient(
    #111 ${progressValue5 * 3.6}deg,
    #f1f2f6 ${progressValue5 * 3.6}deg
    )`;
    if (progressValue5 == progressEndValue5) {
      clearInterval(progress5);
    }
  }, speed5);

  //Skill6
  
  let progressValue6 = 0;
  let progressEndValue6 = 65;
  let speed6 = 15;
  
  let progress6 = setInterval(() => {
    progressValue6++;
    valueContainer6.textContent = `${progressValue6}%`;
    progressBar6.style.background = `conic-gradient(
      #00b6d3 ${progressValue6 * 3.6}deg,
      #f1f2f6 ${progressValue6 * 3.6}deg
    )`;
    if (progressValue6 == progressEndValue6) {
      clearInterval(progress6);
    }
  }, speed6);