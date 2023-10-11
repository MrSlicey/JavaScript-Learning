// c = a2 + b2
window.onload = function () {
  document.getElementById("calc").onclick = function () {
    let a;
    a = document.getElementById("side-a").value;
    a = Math.pow(a, 2);
    a = Number(a);

    let b;
    b = document.getElementById("side-b").value;
    b = Math.pow(b, 2);
    b = Number(b);

    let hypotenuse;
    hypotenuse = Math.sqrt(a + b);
    hypotenuse = Number(hypotenuse);

    document.getElementById("hypot").innerHTML =
      "The Hypotenuse is : " + hypotenuse;

    console.log("The Hypotenuse is " + hypotenuse);
  };
};
