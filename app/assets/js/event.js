var render = function () {
    $(".chat-discussion").height($(window).height() - $(".navbar").height() - $(".message-input").height() - 100);
    if ($(window).width() > 753) {
        $(".chat-users").height($(".chat-view").height() - $(".message-input").height() - 80);
    } else {
        $(".chat-users").css("height", "auto");
    }
};
$(function () {
    render();
});

$(window).on("resize", function () {
    render();
});
