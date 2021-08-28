
const slider = $(".myslider");
slider.slick({
  slidesToScroll: 1,
  dots: true,
  arrows: false,
  // vertical: true,
  // verticalSwiping: true,
  // fade: true,
});

slider.on("wheel", function (e) {
  e.preventDefault();

  if (e.originalEvent.deltaY < 0) {
    $(this).slick("slickPrev");
  } else {
    $(this).slick("slickNext");
  }
});

