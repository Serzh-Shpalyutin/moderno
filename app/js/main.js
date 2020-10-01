$(function () {

    $(".rate-star").rateYo({
        rating: 4,
        starWidth: "12px",
        readOnly: true
      });

    var mixer = mixitup('.products__box');

    $('.product-slider__inner').slick({
        dots: true,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 4
    });
});