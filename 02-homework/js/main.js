let firstNumber = parseInt(prompt('Input a number please'));
let secondNumber = parseInt(prompt('Input a number please'));

let condition = confirm('Пропускати парні числа в діапазоні?');

let sum = 0;

if (firstNumber && secondNumber) {
    if (!condition) {
        for (firstNumber; firstNumber <= secondNumber; firstNumber++) {
            sum += firstNumber;

        }
        console.log(sum);
    } else {
        for (firstNumber; firstNumber <= secondNumber; firstNumber++) {
            if (firstNumber % 2 === 0) {
                continue;
            } else {
                sum += firstNumber;
            }
        }
        console.log(sum);

    }

} else {
    document.writeln('INPUT A NUMBERS PLEASE');
}





    



