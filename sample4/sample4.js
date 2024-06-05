// for (let i = 0; i <= 6; i++) {
//     document.writeln('<tr')

    for (let j = 0; j <= 6; j++) {
        document.writeln('<td>');

        if (j % 2 === 1) {
            document.writeln('<img src="./cat' + j + '.jpg">');
        }
    }
// }