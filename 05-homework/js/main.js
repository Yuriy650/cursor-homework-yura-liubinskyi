const getRandomArray = (length, min, max) => {

    let arrayRandomNumbers = [];

    while (arrayRandomNumbers.length < length) {

        arrayRandomNumbers.push(Math.ceil(Math.random() * (max - min)));

    }

    return arrayRandomNumbers;

}

console.log(`Функція повертає масив випадкових цілих чисел: ${getRandomArray(10, 1, 20)}`);


const getMode = (...numbers) => {

    console.log(numbers);

    let result = [];

    for (let i = 0; i <= numbers.length; i++) {

        if (Number.isInteger(numbers[i])) {

            result.push(numbers.filter((number) => number === numbers[i]));

        }
    }

    result = result.map((array) => [array[0], array.length]);

    //console.log(result);

    let maxCount = result[0][1];

    let modeNumber = [];

    let indexMaxCount = 0;

    for (let i = 1; i < result.length; i++) {

        if ((result[i][1] > maxCount) &&

            !modeNumber.includes(result[i][0])) {

            modeNumber.splice(indexMaxCount, 1, result[i][0]);

            //console.log(modeNumber);

            maxCount = result[i][1];

            indexMaxCount = modeNumber.indexOf(result[i][0]);

            //console.log(indexMaxCount);


        } else if ((result[i][1] === maxCount) &&

            !modeNumber.includes(result[i][0])) {

            indexMaxCount = modeNumber.indexOf(result[i][0]);

            modeNumber.push(result[i][0]);

            maxCount = result[i][1];

            indexMaxCount = modeNumber.indexOf(result[i][0]);

        }

    }

    return modeNumber.join(',');

}

console.log(`Мода послідовності: ${getMode(4, 2, 4, 88, 5, 5.8, 6, 6, 77.1, 88, 4, 88)}`);


const getAverage = (...numbers) => {

    let count = numbers.reduce((count, number) => {

        return count + number

    }, 0);

    return +(count / numbers.length).toFixed(2);

}

console.log(`Середнє арифметичне: ${getAverage(5, 6, 6, 10, 10, 6, 7, 5, 0, 10, -10, 2)}`);


const getMedian = (numbers) => {

    console.log(`Введена послідовність: ${numbers}`);

    /*numbers.forEach((number) => {

        number = +number;

        //console.log(typeof number);
    });*/


    let sortNumbers = numbers.sort((a, b) => a - b);

    console.log(`Відсортована послідовність: ${sortNumbers}`);

    let median;

    if (sortNumbers.length % 2 === 0) {

        median = (+sortNumbers[sortNumbers.length / 2] + +sortNumbers[sortNumbers.length / 2 - 1]) / 2;

    } else {

        median = +sortNumbers[(sortNumbers.length - 1) / 2];
    }

    return median;

}

//const separator = /\s*(?:;|$)\s*/;

console.log(`Медіана послідовності: ${getMedian(prompt('Input numbers through a comma. Find the median').split(','))}`);


const filterEvenNumbers = (numbers) => {

    for (let i = 0; i < numbers.length; i++) {


        if (+numbers[i] % 2 !== 0) {
            continue;
        }
        numbers.splice(i, 1, '*');

    }

    return numbers;
}


console.log(`Видалити парні числа: ${filterEvenNumbers(prompt('Input numbers through a comma. Delete even numbers!').split(','))}`);




const countPositiveNumbers = (...numbers) => {

    let posNumbers = numbers.filter((number) => {

        return number >= 0;

    })

    return posNumbers.length;
}

console.log(`Кількість додатних чисел послідовності: ${countPositiveNumbers(1, 4, 5, 5, 20, 0, -1, -7, 5, 6, -7)}`);




const getDivideByNumber = (...numbers) => {

    const DIVIDE_NUMBER = 5;

    return numbers.filter((number) => {

        return number % DIVIDE_NUMBER === 0;
    });
}

console.log(`Функція повертає послідовність чисел, які діляться, наприклад на 5: ${getDivideByNumber(1, 1, 2, 5, 7, 4, 45, 55, 101, 200, -5, -0.5, 1)}`);




const replaceBadWords = (sentence) => {

    console.log(sentence);

    const BAD_WORDS = ['fuck', 'shit', 'fucking', 'Fuck', 'Shit'];

    let sentenceArray = sentence.split(` `);

    sentenceArray.forEach((word, index, sentenceArray) => {

        const badWordsIndex = sentenceArray.findIndex((word) => {

            return BAD_WORDS.includes(word);
        })

        sentenceArray.splice(badWordsIndex, 1, '****');

        sentence = sentenceArray.join(' ');
    })

    return sentence;

}

console.log(`Замінити слова: ${replaceBadWords('Fuck off. Are you fucking kidding shit?')}`);


const divideByThree = (text) => {

    let textArray = text.split(' ');

    let partLongWordArr = [];

    let partLongWord;


    let longWord = textArray.filter((word) => {

        return word.length >= 3;

    });

    longWord.forEach((word) => {

        for (let j = 0; j < word.length; j += 3) {

            partLongWord = word.slice(j, j + 3).toLowerCase();

            partLongWordArr.push(partLongWord);
        }
    })


    return partLongWordArr;

}

console.log(`Функція, що розбиває слова на склади: ${divideByThree('Створіть функцію divideByThree(word), яка розбиває кожне слово на умовні склади по 3 букви.')}`);


const generateCombinations = (word) => {

    if (word.length < 2) {

        return word;

    }

    let wordArray = [];

    for (let i = 0; i < word.length; i++) {

        let char = word[i].toLowerCase();

        let wordWithoutChar = word.slice(0, i) + word.slice(i + 1);

        let newWord;

        for (let wordNewOfArray of generateCombinations(wordWithoutChar)) {

            newWord = char + wordNewOfArray;

            if (!wordArray.includes(newWord)) {

                wordArray.push(newWord);

            }

        }

    }

    return wordArray;

}

console.log(`Можливі перестановки: ${generateCombinations('Liza')}`);












