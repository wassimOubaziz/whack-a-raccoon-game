const harts = document.querySelector(".harts");
let heartsCount = 3;
function drawHearts(heartsCount) {
  for (let i = 0; i < heartsCount; i++) {
    const heart = document.createElement("img");
    heart.setAttribute("src", "images/hart.png");
    heart.setAttribute("alt", "heart");
    harts.appendChild(heart);
  }
}
drawHearts(heartsCount);

const boxes = document.querySelectorAll(".box");
const image = document.createElement("img");
image.setAttribute("src", "images/raccoon.png");
image.setAttribute("class", "raccoon");

const scoreElement = document.querySelector(".score");
const secondElement = document.querySelector(".second");

let speed = 1500;
let score = 0;
let hearts = heartsCount;

function update() {
  const random = Math.floor(Math.random() * 9 + 0.00000001);
  boxes[random].appendChild(image);

  if (speed > 500) {
    speed -= 100;
  } else {
    speed += 200;
  }
  id = boxes[random].getAttribute("data-set");
}

function removeHeart() {
  if (hearts > 0) {
    const lastHeart = harts.lastElementChild;
    harts.removeChild(lastHeart);
    hearts--;
  }

  if (hearts === 0) {
    // Game over logic, you can customize this part
    clearInterval(sec);
    clearInterval(first);
    displayGameOver();
  }
}

function displayGameOver() {
  display.style.display = "flex";
}

for (const [i, box] of boxes.entries()) {
  box.addEventListener("click", function () {
    if (id == i) {
      box.removeChild(image);
      score++;
      scoreElement.textContent = score;
    } else {
      removeHeart();
    }
  });
}

const second = document.querySelector(".second");
let time = 60;
const display = document.querySelector(".display");
let first = setInterval(update, speed);
function all() {
  time--;
  second.textContent = time;

  if (time === 0) {
    clearInterval(sec);
    clearInterval(first);
    displayGameOver();
  }
}

let sec = setInterval(all, 1000);
