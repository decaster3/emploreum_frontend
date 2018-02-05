var srickyRender = function () {

    if ($(window).width() > 992) {

        $("#sticky-rating").trigger("sticky_kit:detach").stick_in_parent({
            "parent": "#sticky-parent",
            "offset_top": 80,
            "bottoming": false
        });

        $("#sticky-social").trigger("sticky_kit:detach").stick_in_parent({
            "parent": "#sticky-parent",
            "bottoming": false,
            "offset_top": 200
        }).on("sticky_kit:stick", function (e) {
            $(this).css("margin-top", "-35px")
        }).on("sticky_kit:unstick", function (e) {
            $(this).css("margin-top", "0")
        });
    } else {

        $("#sticky-rating").trigger("sticky_kit:detach");
        $("#sticky-social").trigger("sticky_kit:detach").css("margin-top", 0);

    }
};


$(function () {

    srickyRender();

    setInterval(function () {

        if ($("#sticky-rating").width() != $(".profile-left").width()) {
            $("#sticky-rating").width($(".profile-left").width())
        }

        if ($("#sticky-social").width() != $(".profile-left").width()) {
            $("#sticky-social").width($(".profile-left").width())
        }

    }, 500);
});

$(window).on("resize", function () {
    srickyRender();
});
