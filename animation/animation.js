function init () {
    let t = window.setInterval(draw, 100);
}

function draw () {
    let c = document.getElementById('canvas');
    let cnt = c.getContext("2d");

    cnt.shadowBlur = 10;
    cnt.shadowColor = "#000000";

    let x = parseInt(Math.random() * 1200);
    let y = parseInt(Math.random() * 800);
    let r = parseInt(Math.random() * 255);
    let g = parseInt(Math.random() * 255);
    let b = parseInt(Math.random() * 255);

    cnt.beginPath();
    cnt.arc(x, y, 7, 0 , Math.PI * 2, false);
    cnt.closePath();
    let color = "rgb(" + r + "," + g + "," + b +")";
    
    cnt.fillStyle = color;
    cnt.fill();
}