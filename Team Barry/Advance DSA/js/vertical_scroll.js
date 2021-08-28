// $(".myslider").slick({
//   slidesToScroll: 1,
//   arrows: false,
//   // fade: true,
//   dots: true,
//   vertical: true,
//   verticalSwiping: true,
//   //   infinite: true,
//   //   speed: 500,
//   //   //   fade: true,
//   //   cssEase: "linear",
// });
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

var app = new Vue({
  el: "#app",
  data: {
    books: [
      {
        img: "https://www.adazing.com/book-cover-design/wp-content/uploads/2017/01/full-01.jpg",
      },
      {
        img: "https://www.adazing.com/book-cover-design/wp-content/uploads/2017/01/full-02.jpg",
      },
      {
        img: "https://www.adazing.com/book-cover-design/wp-content/uploads/2017/01/2.jpg",
      },
      {
        img: "https://www.adazing.com/book-cover-design/wp-content/uploads/2017/01/full-06.jpg",
      },
      {
        img: "https://www.adazing.com/book-cover-design/wp-content/uploads/2017/01/full-07.jpg",
      },
      {
        img: "https://www.adazing.com/book-cover-design/wp-content/uploads/2017/01/full-05.jpg",
      },
      {
        img: "https://www.adazing.com/book-cover-design/wp-content/uploads/2017/01/full-08.jpg",
      },
      {
        img: "https://www.adazing.com/book-cover-design/wp-content/uploads/2017/01/full-09.jpg",
      },
    ],
  },
});