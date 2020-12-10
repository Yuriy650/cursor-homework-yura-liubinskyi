const generateBlocks = () => {
    document.body.childNodes[0].remove();
    const square = document.createElement('div');
    square.classList.add('square');
    document.body.prepend(square);
    for (let i = 0; i < 5; i++) {
        const tr = document.createElement('div');
        for (let j = 0; j < 5; j++) {
            const block = document.createElement('div');
            block.classList.add('blocks');
            tr.appendChild(block);
            block.style.background = getColor();
        }
        square.append(tr);
    }
}
function getColor() {
    return '#' + Math.random().toString(16).slice(5, 11);
}
function generateBlocksInterval() {
    setInterval(generateBlocks, 1000);
}

