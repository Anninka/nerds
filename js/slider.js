const sliderSmartphones = document.querySelector('.slider-smartphones');
const sliderMacbook = document.querySelector('.slider-macbook');
const slideNotepad = document.querySelector('.slider-notepad');
const buttonSlideOne = document.querySelector('.button-slide-1');
const buttonSlideTwo = document.querySelector('.button-slide-2');
const buttonSlideThree = document.querySelector('.button-slide-3');


buttonSlideOne.addEventListener ('click', function (evt) {
  evt.preventDefault();
  sliderSmartphones.classList.add('slide-current');
  sliderMacbook.classList.remove('slide-current');
  slideNotepad.classList.remove('slide-current');
  buttonSlideOne.classList.add('current');
  buttonSlideTwo.classList.remove('current');
  buttonSlideThree.classList.remove('current');
})

buttonSlideTwo.addEventListener ('click', function (evt) {
  evt.preventDefault();
  sliderMacbook.classList.add('slide-current');
  sliderSmartphones.classList.remove('slide-current');
  slideNotepad.classList.remove('slide-current');
  buttonSlideTwo.classList.add('current');
  buttonSlideOne.classList.remove('current');
  buttonSlideThree.classList.remove('current');
});

buttonSlideThree.addEventListener ('click', function (evt) {
  evt.preventDefault();
  slideNotepad.classList.add('slide-current');
  sliderSmartphones.classList.remove('slide-current');
  sliderMacbook.classList.remove('slide-current');
  buttonSlideThree.classList.add('current');
  buttonSlideOne.classList.remove('current');
  buttonSlideTwo.classList.remove('current');
});
