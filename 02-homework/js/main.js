let N = parseInt(prompt('Input a number please'));
let M = parseInt(prompt('Input a number please'));

let p = confirm('Пропускати парні числа в діапазоні?');

let s = 0;

if (N && M) {
    if (!p) {
        for (N; N <= M; N++) {
            s += N;

        }
        console.log(s);
    } else {
        for (N; N <= M; N++) {
            if (N%2 === 0) {
                continue;
            } else {
                s += N;
            }
        }
        console.log(s);

    }

} else {
    document.writeln('INPUT A NUMBERS PLEASE');
}





    



