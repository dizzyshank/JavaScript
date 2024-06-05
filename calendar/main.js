let week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
document.writeln("<h1>");
let d = new Date();
let m = d.getMonth() + 1;
document.writeln(m + "月");
document.writeln("</h1>");

document.write("<table>");

let fd = new Date(d.getFullYear(), d.getMonth(), 1); //月の初めの日
let ld = new Date(d.getFullYear(), d.getMonth()+1,0);//月の最後の日
let fw = fd.getDay();

//月の最後まで繰り返し表示する。
for (let i = 1; i <= ld.getDate(); i++) {
    document.writeln("<tr>");
    document.writeln("<td>");
    document.writeln(i);
    document.writeln("</td>");
    document.writeln("<td>");
    document.writeln(week[(fw+i-1)%7]);
    document.writeln("</td>");
    document.writeln("</tr>");
}

document.write("</table>");
