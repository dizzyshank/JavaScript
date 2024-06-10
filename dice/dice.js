function init() {
    //キャンバスを取得
    let c = document.getElementById("canvas");
    //コンテキストを取得
    let cnt = c.getContext("2d");

    //影の太さと色を指定する。
    cnt.shadowBlur = 10;
    cnt.shadowColor ="#00008b";

    //線と色を指定する
    cnt.strokeStyle = "#00008b";
    cnt.fillStyle = "#FFFFFF";
    //四角形を描画する
    cnt.fillRect(0,0,100,100);
    cnt.fill();

    //円の色を指定する
    cnt.fillStyle = "#000000";

    //円を描画
    cnt.beginPath();
    cnt.arc(25,25,10, 0, Math.PI*2, false);
    cnt.closePath();
    cnt.fill();
    
    cnt.beginPath();
    cnt.arc(50,50,10, 0, Math.PI*2, false);
    cnt.closePath();
    cnt.fill();

    cnt.beginPath();
    cnt.arc(75,75,10, 0, Math.PI*2, false);
    cnt.closePath();
    cnt.fill();
}