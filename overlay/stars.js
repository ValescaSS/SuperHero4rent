function on() {
    document.getElementById("overlay").style.display = "block";
  }
  function off() {
    document.getElementById("overlay").style.display = "none";
  }
  function plusOne(x = document.getElementById("summa").value) {
    x = ++x;
    if (x >= 1) {
      document.getElementById("summa").value = x;
      function totalPrice(x = document.getElementById("summa").value) {
        let tprice = x * 100;
        return tprice;
      }
      document.getElementById("tprice").value = "$ " + totalPrice(x);
    }
  }
  function minusOne(x = document.getElementById("summa").value) {
    x = --x;
    if (x >= 1) {
      document.getElementById("summa").value = x;
      function totalPrice(x = document.getElementById("summa").value) {
        let tprice = x * 100;
        return tprice;
      }
      document.getElementById("tprice").value = "$ " + totalPrice(x);
    }
  }
  function totalPrice(x = document.getElementById("summa").value) {
    let tprice = x * 100;
    document.getElementById("tprice").value = tprice;
  }