$(".block-menu")
  .find("a")
  .each(function () {
    var el = $(this),
      elText = el.text();

    el.addClass("three-d");
    el.append(
      '<span aria-hidden="true" class="three-d-box"><span class="front">' +
        elText +
        '</span><span class="back">' +
        elText +
        "</span></span>"
    );
  });
$(".container-navbar").slideToggle();

$("#toggle").click(function () {
  $(this).toggleClass("on");
  $(".container-navbar").slideToggle();
});
