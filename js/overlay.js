// function on() {
//   document.getElementById("overlay").style.display = "block";
// }
// function off() {
//   document.getElementById("overlay").style.display = "none";
// }

// doughnut chart

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
// ................Overlay object that we need to edit...........

/* let test;
 var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
              console.log(this.readyState + this.status);

              if (this.readyState == 4 && this.status == 200) {
                let response = JSON.parse(xhttp.responseText);
                let listOfHeros = response.people;
                let firstHero = listOfHeros[0];
                superPw.Strengts = firstHero.stringth;
                superPw.Skill = firstHero.skills;
                superPw.Brains = firstHero.brain;
                superPw.Gadget = firstHero.gadget;
                superPw.Heart = firstHero.heart;
                                
              }
            };
            xhttp.open("GET", "../hero.json", true);
            xhttp.send(); */

// console.log(output);

// function superPw (name, image, strengts, skill, brains, gadget, heart){

//   this.name=name;
//   this.image=image;
//   this.strengts=strengts;
//   this.skill=skill;
//   this.brains=brains;
//   this.gadget=gadget;
//   this.heart=heart;
// }
// let batman = new superPw(50,20,30,45,40);

/* 
              
              -----------The idea is to---------
              
              let output[0] = new superPw (output[1], output[2],
                output[3], output[4], output[5]) */

var Piechart = function(options) {
  this.options = options;
  this.canvas = options.canvas;
  this.ctx = this.canvas.getContext("2d");
  this.colors = options.colors;

  this.draw = function() {
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

var superPw = {
  Strengts: 80,
  Skill: 5,
  Brains: 5,
  Gadget: 5,
  Heart: 5
};

var setValues = function(Strengts, Skill, Brains, Gadget, Heart) {
  this.superPw.Strengts = Strengts;
  this.superPw.Skill = Skill;
  this.superPw.Brains = Brains;
  this.superPw.Gadget = Gadget;
  this.superPw.Heart = Heart;
  var myDougnutChart = new Piechart({
    canvas: myCanvas,
    data: superPw,
    colors: ["#3ED1EE", "#BCD689", "#824583", "#FFD458", "#FF9241"],
    doughnutHoleSize: 0.5
  });
  myDougnutChart.draw();
  on();
};
