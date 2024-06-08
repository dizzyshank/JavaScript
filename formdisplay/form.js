function add() {
    let itm = myform.items.value;

    let e =document.getElementById("table");
    let elmr = document.createElement("tr");
    let elmd = document.createElement("td");

    let txt = document.createTextNode(itm);
    elmd.appendChild(txt);
    elmr.appendChild(elmd);
    e.appendChild(elmr);
}