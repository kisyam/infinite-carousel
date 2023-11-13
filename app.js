const carouselSlide = document.querySelector(".carousel-slide");
let carouselImages = document.querySelectorAll(".carousel-slide img");

// Clone Node for infinite loop
const firstClone = carouselImages[0].cloneNode(true);
const lastClone = carouselImages[carouselImages.length - 1].cloneNode(true);

firstClone.id = "firstClone";
lastClone.id = "lastClone";

carouselSlide.append(firstClone);
carouselSlide.prepend(lastClone);

// Button
const prevButton = document.querySelector("#prevBtn");
const nextButton = document.querySelector("#nextBtn");

// Counter
let counter = 1;
console.log(carouselImages.length);
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = "translateX(" + -size * counter + "px)";

// Button Listeners

nextButton.addEventListener("click", () => {
  if (counter >= carouselImages.length - 1) return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter += 1;
  carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
});

prevButton.addEventListener("click", () => {
  if (counter <= 0) return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter -= 1;
  carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
  console.log(counter);
});

carouselSlide.addEventListener("transitionend", () => {
  carouselImages = document.querySelectorAll(".carousel-slide img");
  // 끝까지 갔으면 순간적으로 처음으로 이동
  if (carouselImages[counter].id === "lastClone") {
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - 2;
    carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
  }

  // 맨 처음으로 갔으면 순간적으로 끝으로 이동
  if (carouselImages[counter].id === "firstClone") {
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - counter;
    carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
  }
});
