function down() {
    let e = document.getElementById("image");
    let t = document.createTextNode("猫です。");
    e.appendChild(t);
}
function up() {
    let e = document.getElementById("image");
    e.removeChild(e.lastChild);
}