export function getSumNumbers(firstNumber, secondNumber) {
    let sum = 0;
    if (firstNumber % 2 !== 0) {
        for (firstNumber; firstNumber <= secondNumber; firstNumber++) {
            sum += firstNumber;
        }
        return sum;
    } else {
        for (firstNumber; firstNumber <= secondNumber; firstNumber++) {
            if (firstNumber % 2 === 0) {
                sum += 0;
            } else {
                sum += firstNumber;
            }
        }
        return sum;
    }
}












