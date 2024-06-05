let pics = [];

for (let i = 1; i <= 6; ++i) {
    pics.push("cat" + i + ".jpg");
}

for (let i = 0; i < 6; ++i) {
    document.writeln('<img src="' + pics[i] + '">');
}