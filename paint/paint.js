let isDraw = false;
let bx = 0;
let by = 0;

function init() {
    let c = document.getElementById("canvas");
    //マウスの動作を受け取る。
    c.addEventListener("mousedown", begin_draw, false);
    c.addEventListener("mousemove", draw, false);
    c.addEventListener("mouseup", end_draw, false);
}
function begin_draw(e) {
    isDraw = true; //描画中である
    bx = e.clientX; //描画位置を設定
    by = e.clientY;
}
function draw(e) {
    if (isDraw == true) {
        let c = document.getElementById("canvas");
        let cnt = c.getContext("2d");

        let x = e.clientX;
        let y = e.clientY;

        cnt.shadowBlur = 10;
        cnt.shadowColor = "#FFFFFF";
        cnt.lineWidth = 5;
        cnt.strokeStyle = "#FFFFFF";

        cnt.beginPath();
        cnt.moveTo(bx, by);
        cnt.lineTo(x, y);
        cnt.closePath();
        cnt.stroke();
        bx = x;
        by = y;
    }
}
function end_draw () {
    isDraw = false;
}