let runningTotal = 0;
document.getElementById("1").onclick = function () {
  document.getElementById("screen").innerHTML =
    document.getElementById("screen").innerHTML + "1";
};
document.getElementById("2").onclick = function () {
  document.getElementById("screen").innerHTML =
    document.getElementById("screen").innerHTML + "2";
};
document.getElementById("3").onclick = function () {
  document.getElementById("screen").innerHTML =
    document.getElementById("screen").innerHTML + "3";
};
document.getElementById("4").onclick = function () {
  document.getElementById("screen").innerHTML =
    document.getElementById("screen").innerHTML + "4";
};
document.getElementById("5").onclick = function () {
  document.getElementById("screen").innerHTML =
    document.getElementById("screen").innerHTML + "5";
};
document.getElementById("6").onclick = function () {
  document.getElementById("screen").innerHTML =
    document.getElementById("screen").innerHTML + "6";
};
document.getElementById("7").onclick = function () {
  document.getElementById("screen").innerHTML =
    document.getElementById("screen").innerHTML + "7";
};
document.getElementById("8").onclick = function () {
  document.getElementById("screen").innerHTML =
    document.getElementById("screen").innerHTML + "8";
};
document.getElementById("9").onclick = function () {
  document.getElementById("screen").innerHTML =
    document.getElementById("screen").innerHTML + "9";
};
document.getElementById("0").onclick = function () {
  document.getElementById("screen").innerHTML =
    document.getElementById("screen").innerHTML + "0";
};
document.getElementById("C").onclick = function () {
  document.getElementById("screen").innerHTML = "";
};
document.getElementById("+").onclick = function () {
  document.getElementById("screen").innerHTML =
    document.getElementById("screen").innerHTML + "+";
};
document.getElementById("slash").onclick = function () {
  document.getElementById("screen").innerHTML =
    document.getElementById("screen").innerHTML + "/";
};
document.getElementById("%").onclick = function () {
    document.getElementById("screen").innerHTML =
      document.getElementById("screen").innerHTML + "%";
  };
  document.getElementById("-").onclick = function () {
    document.getElementById("screen").innerHTML =
      document.getElementById("screen").innerHTML + "-";
  };
  document.getElementById(".").onclick = function () {
    document.getElementById("screen").innerHTML =
      document.getElementById("screen").innerHTML + ".";
  };
  document.getElementById("X").onclick = function () {
    document.getElementById("screen").innerHTML =
      document.getElementById("screen").innerHTML + "*";
  };

  document.getElementById("equals").onclick = function () {

  //console.log(document.getElementById("screen").innerHTML);
  let calc = eval(document.getElementById("screen").innerHTML);
document.getElementById("screen").innerHTML = calc;
  //calc = Number(calc);
  console.log(calc, typeof(calc))
};
