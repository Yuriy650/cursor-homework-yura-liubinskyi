function maxDigitInNumber(number) {

    let toStringNumber = String(number);

    let maxDigit = +toStringNumber[0];

    for (let item = 1; item < toStringNumber.length; item++) {

        if (+toStringNumber[item] > maxDigit) {

            maxDigit = +toStringNumber[item];

        }

    }

    return maxDigit;

}


const getPowNumber = (number, power) => {

    let powNumber = 1;

    if (power > 0) {

        for (let i = 1; i <= power; i++) powNumber *= number;

    } else if (power < 0) {

        for (i = 1; i <= Math.abs(power); i++) powNumber = powNumber / number;

        return powNumber;

    } else {

        powNumber = 1;

    }

    return powNumber;
}


const withCapitalLetter = (word) => {

    word = word.toLowerCase();

    let firstChar = word[0].toUpperCase();

    let subWord = word.slice(1);

    word = firstChar + subWord;

    return word;

}


const getRealSalary = (salary) => {

    const TAX_INCOME = 0.15;

    const TAX_MILITARY = 0.015;

    salary = Math.ceil(salary * (1 - (TAX_INCOME + TAX_MILITARY)));

    return salary;
}


const randomNumber = (firstNumber, endNumber) => {

    return firstNumber + Math.ceil((endNumber - firstNumber) * Math.random());
}


const countLetter = (letter, word) => {

    word = word.toLowerCase();

    letter = letter.toLowerCase();

    let count = 0;

    for (let item of word) {

        if (letter === item) {

            count += 1;
        }

    }

    return count;

}


const cutSpace = (text) => {

    let subAmountCurrency = '';

    for (let i = 0; i < text.length; i++) {

        if (text[i] !== ' ') {

            subAmountCurrency += text[i];

        }
    }

    return subAmountCurrency;

}


const convertCurrency = (amountCurrency) => {

    amountCurrency = amountCurrency.toLowerCase();

    let subAmountCurrency = cutSpace(amountCurrency);

    const RATE = 28;

    let exchangeAmount;

    for (let char of subAmountCurrency) {

        if (subAmountCurrency.includes('$')) {

            let position = subAmountCurrency.indexOf('$');

            subAmountCurrency = +subAmountCurrency.slice(0, position);

            exchangeAmount = subAmountCurrency * RATE;

        } else if (subAmountCurrency.includes('uah')) {

            let position = subAmountCurrency.indexOf('uah');

            subAmountCurrency = +subAmountCurrency.slice(0, position);

            exchangeAmount = +(subAmountCurrency / RATE).toFixed(2);

        } else {

            return 'Невірно вказано значення валюти';

        }

        return exchangeAmount;
    }

}


const getRandomPassword = (numberDigits = 8) => {

    let login = '';

    for (let i = 1; i <= numberDigits; i++) {

        login += Math.floor(Math.random() * 10);
    }

    return login;
}


const deleteLetters = (word, letter = 'a') => {

    letter = letter.toLowerCase();

    word = word.toLowerCase();

    let subWord = '';

    for (let char of word) {

        if (char !== letter) {

            subWord += char;

        }

    }

    return subWord;

}


const getTextFromEnd = (text) => {

    let textFromEnd = '';

    for (let i = 1; i <= text.length; i++) {

        textFromEnd += text[text.length - i];


    }

    return textFromEnd;
}


const isPalindrome = (text) => {

    text = cutSpace(text).toLowerCase();

    let textFromEnd = getTextFromEnd(text).toLowerCase();


    return text === textFromEnd;

}


const deleteDuplicateLetter = (sentence) => {

    sentence = sentence.toLowerCase();

    let sentenceWithoutDuplicate = ' ';

    let doubleLetter = ' ';

    for (let i = 0; i < sentence.length; i++) {

        if (sentenceWithoutDuplicate.includes(sentence[i])) {

            doubleLetter += sentence[i];

        } else {

            sentenceWithoutDuplicate += sentence[i];
        }

    }

    for (let char of doubleLetter) {

        for (let i = 0; i < sentence.length; i++) {

            if (char === sentence[i]) {

                sentence = sentence.replace(sentence[i], ' ');
            }
        }


    }

    return sentence;

}


document.writeln(`<p>Функція №1, максимальна цифра в числі: ${maxDigitInNumber(prompt('Дані для функції №1. Введіть число'))}</p>`);

document.writeln(`<p>Функція №2, повертає степінь числа: ${getPowNumber(+prompt('Дані для функції №2. Введіть основу'),

    +prompt('Дані для функції №2. Введіть степінь'))}</p>`);


document.writeln(`<p>Функція №3, повертає слова з великої букви: ${withCapitalLetter(prompt('Дані для функції №3. Введіть слово'))}</p>`);

document.writeln(`<p>Функція №4, отримує заробітню плату після оподаткування: ${getRealSalary(+prompt('Дані для функції №4. Зарплата'))}</p>`);

document.writeln(`<p>Функція №5, повертає випадкове число: ${randomNumber(prompt('Дані для функції №5. Введіть початок проміжку'),

    prompt('Дані для функції №5. Введіть кінець проміжку'))}</p>`);

document.writeln(`<p>Функція №6, кількість вказаних літер в слові: ${countLetter(prompt('Дані для функції №6. Введіть літеру'),

    prompt('Дані для функції №6. Введіть слово'))}</p>`);

document.writeln(`<p>Функція №7, конвертує валюту: ${convertCurrency(prompt('Дані для функції №7. Вкажіть суму валюти в $ або UAH'))}</p>`);

document.writeln(`<p>Функція №8, генерує пароль потрібної довжини: ${getRandomPassword(+prompt('Дані для функції №8. Довжина паролю?'))}</p>`);

document.writeln(`<p>Функція №9, видаляє задану букву з тексту: ${deleteLetters(prompt('Дані для функції №9. Наберіть текст'),

    prompt('Дані для функції №9. Яку букву видалити?'))}</p>`);

document.writeln(`<p>Функція №10, перевіряє чи текст є паліндромом?: ${isPalindrome(prompt('Дані для функції №10. Паліндром?'))}</p>`);

document.writeln(`<p>Функція №11, видаляє букви, які зустрічаються в тексті > 1 разу: ${deleteDuplicateLetter(prompt('Дані для функції №11. Введіть текст'))}</p>`);



console.log(typeof Math.abs(-3));
