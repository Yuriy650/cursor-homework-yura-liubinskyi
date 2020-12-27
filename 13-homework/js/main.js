function* createIdGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

const idGenerator = createIdGenerator();
for (let value of idGenerator) {
    console.log(value);

}

function* newFontGenerator(initialValue) {
    let value = initialValue;
    while (1) {
        let font = yield value;
        if (font === '+') {
            value += 2;

        } else if (font === '-') {
            value -= 2;
        }
    }
}

const fontGenerator = newFontGenerator(14);
document.querySelector('#bigger_font').addEventListener('click', function () {
    document.querySelector('#change_font').style.fontSize = `${fontGenerator.next('+').value}px`;
});
document.querySelector('#smaller_font').addEventListener('click', function () {
    document.querySelector('#change_font').style.fontSize = `${fontGenerator.next('-').value}px`;
})


