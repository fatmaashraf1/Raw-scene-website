<script src="https://unpkg.com/swiper@8/swiper-bundle.min.js"></script>
$(document).ready(function () {

    $(".fkvideo-container").hide();

    $(".fktra").click(function () {
        $(".fkvideo-container").show();
    });
    $(".fkclosetra").click(function () {
        $(".fkvideo-container").hide();
    });
});