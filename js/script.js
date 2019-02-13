$(document).ready(function() {
    // scroll-top arrow only appears after scrolling down half the page
    $(window).scroll(function() {
        if($(window).scrollTop() > $('body').height() / 3) {
            $('.scrollTop').removeClass('hidden');
        }else {
            $('.scrollTop').addClass('hidden');
        }
    });

});

// knappar i overlay

// const overlayTrigger = document.querySelector('.thumbnail');
const overlayTrigger = document.querySelectorAll('.thumbnail');

function on() {
    document.getElementById("overlay").style.display = "block";
}

// overlayTrigger.addEventListener('click', on);
overlayTrigger.forEach(function(trigger) {
    trigger.addEventListener('click', on)
});

function off() {
    document.getElementById("overlay").style.display = "none";
}
function plusOne(x = document.getElementById("hour").value) {
    x = ++x;
    if (x >= 1) {
        document.getElementById("hour").value = x;
        function totalPrice(x = document.getElementById("hour").value) {
            let tprice = x * 100;
            return tprice;
        }
        document.getElementById("tprice").value = "$ " + totalPrice(x);
    }
}
function minusOne(x = document.getElementById("hour").value) {
    x = --x;
    if (x >= 1) {
        document.getElementById("hour").value = x;
        function totalPrice(x = document.getElementById("hour").value) {
            let tprice = x * 100;
            return tprice;
        }
        document.getElementById("tprice").value = "$ " + totalPrice(x);
    }
}
function totalPrice(x = document.getElementById("hour").value) {
    let tprice = x * 100;
    document.getElementById("tprice").value = tprice;
}

// ovarlay chart
var myCanvas = document.getElementById("myCanvas");
myCanvas.width = 180;
myCanvas.height = 180;

var ctx = myCanvas.getContext("2d");

function drawLine(ctx, startX, startY, endX, endY) {
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    // ctx.stroke();
}

function drawArc(ctx, centerX, centerY, radius, startAngle, endAngle) {
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    // ctx.stroke();
}

function drawPieSlice(
    ctx,
    centerX,
    centerY,
    radius,
    startAngle,
    endAngle,
    color
) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    ctx.closePath();
    ctx.fill();
}

drawLine(ctx, 50, 50, 50, 50);
drawArc(ctx, 100, 100, 100, 0, Math.PI / 3);
drawPieSlice(
    ctx,
    100,
    100,
    100,
    Math.PI / 2,
    Math.PI / 2 + Math.PI / 4,
    "#269bbc"
);

var myFeatures = {
    Strengts: 35,
    Skill: 25,
    Brains: 9,
    Gadget: 11,
    Heart: 20
};

var Piechart = function (options) {
    this.options = options;
    this.canvas = options.canvas;
    this.ctx = this.canvas.getContext("2d");
    this.colors = options.colors;

    this.draw = function () {
        var total_value = 0;
        var color_index = 0;
        for (var categ in this.options.data) {
            var val = this.options.data[categ];
            total_value += val;
        }

        var start_angle = 0;
        for (categ in this.options.data) {
            val = this.options.data[categ];
            var slice_angle = (2 * Math.PI * val) / total_value;

            drawPieSlice(
                this.ctx,
                this.canvas.width / 2,
                this.canvas.height / 2,
                Math.min(this.canvas.width / 2, this.canvas.height / 2),
                start_angle,
                start_angle + slice_angle,
                this.colors[color_index % this.colors.length]
            );

            start_angle += slice_angle;
            color_index++;
        }

        if (this.options.doughnutHoleSize) {
            drawPieSlice(
                this.ctx,
                this.canvas.width / 2,
                this.canvas.height / 2,
                this.options.doughnutHoleSize *
                Math.min(this.canvas.width / 2, this.canvas.height / 2),
                0,
                2 * Math.PI,
                "#269bbc"
            );
        }
    };
};

var myDougnutChart = new Piechart({
    canvas: myCanvas,
    data: myFeatures,
    colors: ["#3ED1EE", "#BCD689", "#824583", "#FFD458", "#FF9241"],
    doughnutHoleSize: 0.5
});
myDougnutChart.draw();
