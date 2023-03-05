const images = [

    'img/audi-r8.png',
    'img/ferrari-rojo.png',
    'img/porsch.png',


]

//app state
let index = 0;
const max = images.length;

// get the DOM elements
const containerElement = document.querySelector('.container');
const prevSlideButton = document.querySelector('.prevSlide');
const nextSlideButton = document.querySelector('.nextSlide');

// listen for arrow click event
prevSlideButton.addEventListener('click', function() {
    index --;

    setImageIndex();
    changeBackgroundImage(images[index],containerElement);
});

nextSlideButton.addEventListener('click', function(){
    index ++;

    setImageIndex()
    changeBackgroundImage(images[index], containerElement);

});

 //utily functions

 function setImageIndex() {
    if (index < 0) index = max - 1;
    if (index === max) index = 0;
 };

 function changeBackgroundImage(backgroundImage, element){
    element.style.backgroundImage = `url(${backgroundImage})`;
 }

