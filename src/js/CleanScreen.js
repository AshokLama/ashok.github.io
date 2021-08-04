"use strict";

$(document).ready(function () {
    let timerId;

    function startInterval() {
        timerId = setInterval(growCircle, parseInt($("#interval").val()));
    }

    function growCircle() {
        let size = parseInt($(".circle").height()) + parseInt($("#growth").val());
        $(".circle").height(size);
        $(".circle").width(size);
    }

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    function drawCircles() {
        let height = $('.main').height();
        let width = $('.main').width();
        let circleSize = parseInt($("#width").val());
        for (let i = 0; i < parseInt($("#count").val()); i++) {
            $(".main").append($("<div>", {
                "class": "circle",
                "css": {
                    "background-color": getRandomColor(),
                    "width": circleSize,
                    "height": circleSize,
                    "top": getRandomInt(height - circleSize),
                    "left": getRandomInt(width - circleSize)
                },
                "click": function () {
                    this.remove();
                }
            }));
        }
    }

    $("form").submit(function (e) {
        e.preventDefault();
        drawCircles();
        startInterval();
    });
});
