let i = 1;
function init() {
    window.setInterval(tick, 3000);
}
function tick() {
    i++;
    if (i > 6) i=1;
    let e = document.getElementById("image");
    e.innerHTML = `<img src="cat${i}.jpg" alt="Cat Image"/>`
}