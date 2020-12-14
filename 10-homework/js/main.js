function playSounds(name) {
    let audio = new Audio();
    audio.src = `sounds/${name}.mp3`;
    audio.play();
}
let buttons = document.querySelectorAll('button');
console.log([...buttons]);
[...buttons].forEach((button) => {
    document.addEventListener('keydown', function (e) {
        if (e.code === 'Key' + button.textContent[0]) {
            button.style.opacity = 0.5;
            button.classList.add('push_button');
            let fileName = button.textContent.slice(2);
            playSounds(fileName);
        }
    });
    document.addEventListener('keyup', function (e) {
        if (e.code === 'Key' + button.textContent[0]) {
            button.style.opacity = 1;
            button.classList.remove('push_button');
        }
    });
});
const mouseDown = document.addEventListener('mousedown', function (event) {
    if (event.target.className === 'key_' + event.target.textContent[0]) {
        let fileName = event.target.textContent.slice(2);
        playSounds(fileName);
        event.target.classList.add('push_button');
    }
})
const mouseUp = document.addEventListener('mouseup', function (event) {
    event.target.classList.remove('push_button');
})








