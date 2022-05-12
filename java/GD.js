<script src="https://unpkg.com/swiper@8/swiper-bundle.min.js"></script>
var swiper = new Swiper(".swiper-container", {
    slidesPerView: 5,
    spaceBetween: 15,
    slidesPerGroup: 5,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

$(document).ready(function () {

    $(".fkvideo-container").hide();

    $(".fktra").click(function () {
        $(".fkvideo-container").show();
    });
    $(".fkclosetra").click(function () {
        $(".fkvideo-container").hide();
    });
});