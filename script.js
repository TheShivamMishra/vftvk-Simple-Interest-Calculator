function compute()
{
    p = document.getElementById("principal").value;
    r = document.getElementById("rate").value;
    t = parseInt(document.getElementById("years").value);
    si = p*r*t/100;
    y = new Date().getFullYear();
    var year = parseInt(y) + t; 
    document.getElementById("result").innerHTML = "If you deposite " + p + ",<br>at an interest rate of " + r +".<br> You will recieve an amount of " + si +",<br>in the year " + year;
}

function update(val){
    document.getElementById("rangeVal").innerHTML = val;
}