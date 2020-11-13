let n = parseInt(prompt('Input a number please'));
let m = parseInt(prompt('Input a number please'));

let p = confirm('Пропускати парні числа в діапазоні?');

let s = 0;

if (n && m) {
    if (!p) {
        for (n; n <= m; n++) {
            s += n;

        }
        console.log(s);
    } else {
        for (n; n <= m; n++) {
            if (n % 2 === 0) {
                continue;
            } else {
                s += n;
            }
        }
        console.log(s);

    }

} else {
    document.writeln('INPUT A NUMBERS PLEASE');
}





    



