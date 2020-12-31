export const countLetter = (letter, word) => {
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
export const cutSpace = (text) => {
    let subAmountCurrency = '';
    for (let i = 0; i < text.length; i++) {
        if (text[i] !== ' ') {
            subAmountCurrency += text[i];
        }
    }
    return subAmountCurrency;
}
export const calculateWordLetters = (word) => {
    word = cutSpace(word);
    let wordArr = word.toLowerCase().split('');
    let newWordArr = wordArr.map((letter) => [letter, countLetter(letter,word)]);
    let wordLettersObject = {};
    for(let i=0; i<newWordArr.length;i++){
        wordLettersObject[newWordArr[i][0]] = newWordArr[i][1];
    }
    return wordLettersObject;
}
