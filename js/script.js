/* scroll */

$(document).ready(function() {
  // scroll-top arrow only appears after scrolling down half the page
  $(window).scroll(function() {
    if ($(window).scrollTop() > $("body").height() / 3) {
      $(".scrollTop").removeClass("hidden");
    } else {
      $(".scrollTop").addClass("hidden");
    }
  });
});

/* overlay funktion plusOne, minusOne och totalPrice */

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
