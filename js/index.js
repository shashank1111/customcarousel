/*==================================== Initializations =========================================*/
var slideCollection = document.querySelectorAll('.c-slide');
var carouselWrapperWidth = document.getElementById('customCarousel')
  .offsetWidth;
var totalSlides = slideCollection.length;
var totalWidth = 0;
var track = document.getElementById('track');
var prevBtn = document.getElementById('prev');
var nextBtn = document.getElementById('next');
var prevArw = document.getElementById('arw-prv');
var nextArw = document.getElementById('arw-nxt');
var slideWidth;
var slidesToShow = 4;
var counter = 0;
var transformWidth = 0;

(Slider = () => {
  /*============================ Calculate the Total Width of the Track ==========================*/
  (CalculateWidth = () => {
    totalWidth = (carouselWrapperWidth / slidesToShow) * totalSlides;
    return totalWidth;
  })();

  /*============================ Setting the Total Width of the Track =============================*/
  (SetTrackWidth = () => {
    document.getElementById('track').style.width = totalWidth + 'px';
  })();

  /*============================== Setting the Width of the Slide ==================================*/
  (SetSlideWidth = () => {
    slideWidth =
      ((carouselWrapperWidth / slidesToShow) * totalSlides) / totalSlides;
  })();
})();

/*==================================== Handler for Next Button Click ===============================*/
NextSlideHandler = () => {
  counter++;
  transformWidth = transformWidth - slideWidth;
  track.style.transform = 'translate3d(' + transformWidth + 'px, 0px, 0px)';
  SetButtonState();
};

/*==================================== Handler for Previous Button Click =============================*/
PrevSlideHandler = () => {
  counter--;
  transformWidth = transformWidth + slideWidth;
  track.style.transform = 'translate3d(' + transformWidth + 'px, 0px, 0px)';
  SetButtonState();
};

/*==================================== Updating the Buttons Disabled States ===========================*/
SetButtonState = () => {
  let lastElem = totalSlides - slidesToShow;

  if (counter == 0) {
    prevBtn.disabled = true;
    prevArw.disabled = true;
  } else if (counter == lastElem) {
    nextBtn.disabled = true;
    nextArw.disabled = true;
  } else {
    prevBtn.disabled = false;
    nextBtn.disabled = false;
    prevArw.disabled = false;
    nextArw.disabled = false;
  }
};
