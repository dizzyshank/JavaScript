// const changeButton = document.getElementById('change');
const pics = document.getElementById('image');

// 画像を配列に追加
let images = [];
for (let i = 1; i <= 6; i++) {
    images.push("cat" + i + ".jpg");
}
let currentIndex = 0;

function change() {
    // クリックされるたびに呼び出される動作
    let r = parseInt(Math.random() * 6);
    console.log(r);
    currentIndex = (r + 1) % images.length;
    pics.innerHTML = `<img src="${images[currentIndex]}" alt="Cat Image">`;
}
