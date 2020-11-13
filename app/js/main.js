$(function () {

    $('.menu__btn').on('click', function () {
        $('.menu__btn').toggleClass('active'),
            $('.menu__list').slideToggle();
    });

    $('.header__btn-menu').on('click', function () {
        $('.header__box').toggleClass('header__box--active');
    });

    $(".rate-star").rateYo({
        rating: 4,
        starWidth: "12px",
        readOnly: true
    });

    $('.product-slider__inner').slick({
        dots: true,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 4
    });

    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 1000,
        from: 0,
        to: 600,
        prefix: "$"
    });

    $('.icon-th-list').on('click', function () {
        $('.product__item').addClass('list');
        $('.icon-th-list').addClass('active');
        $('.icon-th-large').removeClass('active');
    });

    $('.icon-th-large').on('click', function () {
        $('.product__item').removeClass('list');
        $('.icon-th-large').addClass('active');
        $('.icon-th-list').removeClass('active');
    });

    $('input[type="file"], select').styler();

    $('.product-one__tabs .tab, .settings__tabs .tabs').on('click', function (event) {
        var id = $(this).attr('data-id');
        $('.product-one__tabs, .settings__tabs').find('.tab-item').removeClass('active-tab').hide();
        $('.product-one__tabs .tabs, .settings__tabs .tabs').find('.tab').removeClass('tab--active');
        $(this).addClass('tab--active');
        $('#' + id).addClass('active-tab').fadeIn();
        return false;
    });

    var mixer = mixitup('.products__box');
});