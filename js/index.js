/*==================================== Initializations =========================================*/
var slideCollection = document.querySelectorAll('.c-slide');
var carouselWrapperWidth = document.getElementById('customCarousel')
  .offsetWidth;
var totalSlides = slideCollection.length;
var totalWidth = 0;
var track = document.getElementById('track');
var slideWidth;
var slidesToShow = 4;

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
