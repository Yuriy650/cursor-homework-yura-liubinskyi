export const replaceBadWords = (sentence) => {
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