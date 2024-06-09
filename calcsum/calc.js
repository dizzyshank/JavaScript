let sum = 0;
let pricelist = {"りんご":500, "みかん":300, "もも":200};

function add() {
    let itm = myform.items.value;
    let n = myform.nums.value;

    let e = document.getElementById("table");
    let elmr = document.createElement("tr");

    let elmd1 = document.createElement("td");
    let txt = document.createTextNode(itm);
    elmd1.appendChild(txt);
    elmr.appendChild(elmd1);

    let elmd2 = document.createElement("td");
    let txt2 = document.createTextNode(pricelist[itm]);
    elmd2.appendChild(txt2);
    elmr.appendChild(elmd2);

    let elmd3 = document.createElement("td");
    let txt3 = document.createTextNode(n);
    elmd3.appendChild(txt3);
    elmr.appendChild(elmd3);

    let c = pricelist[itm]*n;
    sum += c;
    let elmd4 = document.createElement("td");
    let txt4 = document.createTextNode(c)
    elmd4.appendChild(txt4);
    elmr.appendChild(elmd4);
    e.appendChild(elmr);
}

function clearTable() {
    let e = document.getElementById("table");
    while (e.rows.length > 1) {
        e.deleteRow(1);
    }
    sum = 0;
}

function calc() {
    window.alert("合計；" + sum + "円");
}