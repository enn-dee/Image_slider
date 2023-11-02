const slides = document.querySelectorAll(".slide");
let counter = 0;

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

const goPrev = () => {
  counter = (counter - 1 + slides.length) % slides.length;
  slideImg();
};

const goNext = () => {
  counter = (counter + 1) % slides.length;
  slideImg();
};

const slideImg = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};
