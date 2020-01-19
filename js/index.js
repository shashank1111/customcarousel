/*==================================== Initializations =========================================*/
var slideCollection = document.querySelectorAll('.c-slide');
var carouselWrapperWidth = document.getElementById('customCarousel')
  .offsetWidth;
var totalSlides = slideCollection.length;
var totalWidth = 0;
var slideWidth;
var slidesToShow = 4;
var counter = 0;
var transformWidth = 0;
var track = document.getElementById('track');
var prevBtn = document.getElementById('prev');
var nextBtn = document.getElementById('next');
var prevArw = document.getElementById('arw-prv');
var nextArw = document.getElementById('arw-nxt');
document.getElementById('prev').disabled = true;
var margin = 20;

(Slider = () => {
  /*============================ Calculate the Total Width of the Track ==========================*/
  (CalculateWidth = () => {
    totalWidth =
      (carouselWrapperWidth / slidesToShow) * totalSlides +
      margin * totalSlides;
    return totalWidth;
  })();

  /*============================ Setting the Total Width of the Track =============================*/
  (SetTrackWidth = () => {
    document.getElementById('track').style.width = totalWidth + 'px';
  })();

  /*============================== Setting the Width of the Slide ==================================*/
  (SetSlideWidth = () => {
    slideWidth =
      ((carouselWrapperWidth / slidesToShow) * totalSlides -
        margin * totalSlides) /
      totalSlides;

    var elements = document.getElementsByClassName('c-slide');
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.width = slideWidth + 'px';
    }

    for (var i = 0; i < elements.length - 1; i++) {
      elements[i].style.margin = '0' + margin / 2 + 'px';
    }
  })();
})();

/*==================================== Handler for Next Button Click ===============================*/
NextSlideHandler = () => {
  counter++;
  transformWidth = transformWidth - slideWidth - margin;
  track.style.transform = 'translate3d(' + transformWidth + 'px, 0px, 0px)';
  SetButtonState();
};

/*==================================== Handler for Previous Button Click =============================*/
PrevSlideHandler = () => {
  counter--;
  transformWidth = transformWidth + slideWidth + margin;
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
