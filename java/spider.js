
<script src="https://unpkg.com/swiper@8/swiper-bundle.min.js"></script>
var swiper = new Swiper(".FAmySwiper", {
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

    $(".FAvideo-container").hide();
    $(".FA_trailer2").hide();
    $(".FA_trailer1").hide();
    $(".FA_trailer3").hide();


    $(".FAwatch_trailer").click(function () {
        $(".FAvideo-container").show();
    });
    $(".FAcloseTrailer").click(function () {
        $(".FAvideo-container").hide();
    });
    $(".FA_Homecoming").click(function () {
        $(".FA_trailer2").hide();
        $(".FA_trailer3").hide();
        $(".FA_trailer1").show();

    });
    $(".FA_Farfromhome").click(function () {
        $(".FA_trailer1").hide();
        $(".FA_trailer3").hide();
        $(".FA_trailer2").show();

    });
    $(".FA_Nowayhome").click(function () {
        $(".FA_trailer2").hide();
        $(".FA_trailer1").hide();
        $(".FA_trailer3").show();

    });

});



function changeMode() {
    var element = document.body;
    element.classList.toggle("light-mode");


}
