let firstNumber = parseInt(prompt('Input a number please'));

while (!firstNumber) {
    if (firstNumber === 0) {
        break;
    } else {
        firstNumber = parseInt(prompt('Input a first number please'));
    }

}

let secondNumber = parseInt(prompt('Input a second number please'));

while (!secondNumber) {
    if (secondNumber === 0) {
        break;
    } else {
        secondNumber = parseInt(prompt('Input a number please'));
    }

}

let condition = confirm('Don\'t add even numbers?');

let sum = 0;

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







    



