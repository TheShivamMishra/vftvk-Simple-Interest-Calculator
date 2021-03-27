function compute() {
  p = document.getElementById("principal").value;
  p = parseInt(p);
  if (p <= 0) {
    alert("Please enter a positive no");
    document.getElementById("principal").focus();
  }
  r = document.getElementById("rate").value;
  t = parseInt(document.getElementById("years").value);
  si = (p * r * t) / 100;
  y = new Date().getFullYear();
  var year = parseInt(y) + t;
  if (p > 0)
    document.getElementById("result").innerHTML =
      "If you deposite <span>" +
      p +
      "</span>,<br>at an interest rate of <span>" +
      r +
      "</span>.<br> You will recieve an amount of <span>" +
      si +
      "</span>,<br>in the year <span>" +
      year +
      "<span>";
}

function update(val) {
  document.getElementById("rangeVal").innerHTML = val;
}
