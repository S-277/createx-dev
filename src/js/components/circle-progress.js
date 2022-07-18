const circleBar1 = document.querySelector(".facts-element__circle--1"),
  value1 = document.querySelector(".facts-element__value--1");
let valueStart1 = 0,
  valueEnd1 = 91,
  speed1 = 10;

if (circleBar1) {
  const counter1 = setInterval(() => {
    valueStart1++;
    value1.textContent = `${valueStart1}%`;
    circleBar1.style.background = `conic-gradient(#F49627 ${
      valueStart1 * 3.6
    }deg,#E8CEAF ${valueStart1 * 3.6}deg)`;
    if (valueStart1 == valueEnd1) {
      clearInterval(counter1);
    }
  }, speed1);
};



const circleBar2 = document.querySelector(".facts-element__circle--2"),
  value2 = document.querySelector(".facts-element__value--2");
let valueStart2 = 0,
  valueEnd2 = 20,
  speed2 = 50;

if (circleBar2) {
  const counter2 = setInterval(() => {
    valueStart2++;
    value2.textContent = `${valueStart2}`;
    circleBar2.style.background = `conic-gradient(#F52F6E ${
      valueStart2 * 13.3
    }deg,#E8CEAF ${valueStart2 * 13.3}deg)`;
    if (valueStart2 == valueEnd2) {
      clearInterval(counter2);
    }
  }, speed2);
};



const circleBar3 = document.querySelector(".facts-element__circle--3"),
  value3 = document.querySelector(".facts-element__value--3");
let valueStart3 = 0,
  valueEnd3 = 94,
  speed3 = 10;

if (circleBar3) {
  const counter3 = setInterval(() => {
    valueStart3++;
    value3.textContent = `${valueStart3}52`;
    circleBar3.style.background = `conic-gradient(#4d5bf9 ${
        valueStart3 * 3.1
      }deg,#cadcff ${valueStart3 * 3.1}deg)`;
    if (valueStart3 == valueEnd3) {
      clearInterval(counter3);
    }
  }, speed3);
};

const circleBar = document.querySelector(".facts-element__circle--4"),
  value = document.querySelector(".facts-element__value--4");
let valueStart = 0,
  valueEnd = 100,
  speed = 10;

if (circleBar) {
  const counter = setInterval(() => {
    valueStart++;
    value.textContent = `${valueStart}%`;
    circleBar.style.background = `conic-gradient(#03CEA4 ${
        valueStart * 3.6
      }deg,#84E7C8 ${valueStart * 3.6}deg)`;
    if (valueStart == valueEnd) {
      clearInterval(counter);
    }
  }, speed);
}
