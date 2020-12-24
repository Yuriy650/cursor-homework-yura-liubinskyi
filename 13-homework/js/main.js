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
        if (font === 'up') {
            value = value + 2;

        } else if (font === 'down') {
            value = value - 2;
        }
    }
}

const fontGenerator = newFontGenerator(14);
console.log(fontGenerator.next('up').value);
console.log(fontGenerator.next('up').value);
console.log(fontGenerator.next('up').value);
console.log(fontGenerator.next('down').value);
console.log(fontGenerator.next('down').value);
console.log(fontGenerator.next('down').value);
console.log(fontGenerator.next().value);

