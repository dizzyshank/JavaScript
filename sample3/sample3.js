let d = new Date();
let h = d.getHours();

if (h < 12) {
    document.writeln("午前です。");
} else {
    document.writeln("午後です。");
}