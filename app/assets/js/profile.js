$(function () {

    var options;
    var data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        series: [
            [200, 380, 350, 320, 410, 450, 570, 400, 555, 620, 750, 900],
        ]
    };
    options = {
        height: "300px",
        showPoint: true,
        axisX: {
            showGrid: false
        },
        lineSmooth: false,
    };

    new Chartist.Line('#activity-line-chart', data, options);

    lightbox.option({
        "fadeDuration": 200
    });

    $(".dropzone").dropzone({
        url: "/upload",
        maxFiles : 1
    });

});
