//canvas setup
var canvas = document.getElementById("canvas");
canvas.width = 500;
canvas.height = 400;
var centerX = canvas.width / 2;
var centerY = canvas.height / 2;
var ctx = canvas.getContext("2d");

var calculate = document.getElementById("calc");

//calculating the vol onclick
calculate.onclick = function (e) {
    var rad = document.getElementById("radius").value;
    var radius = parseInt(rad)
    if (isNaN(radius)){
        alert("Please write a number in the radius textbox")
    } else {
    if (radius > 200) {
        alert("The radius is bigger then the canvas! please rewrite the radius with a smaller radius");

    }
    else {
        //Volume Calc
        var volume = (4/3) * Math.PI * Math.pow(radius, 3);
            document.getElementById("vol").value = volume

        //drawing the circle
        ctx.beginPath();
        ctx.arc(centerX,centerY, radius, 0, 2 * Math.PI)    
        ctx.stroke();


    }

}
}
//clear button
var clear = document.getElementById("clear");
clear.onclick = function (cl) {
    ctx.clearRect(0 , 0 , 500 , 400)
}