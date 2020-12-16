async function getRandomChinese(length) {
    let chineseString = '';
    const delay = 50;
    const multiply = 1000;
    for (let i=0; i<length; i++) {
        let promise = new Promise(resolve => {
            setTimeout(() => {
                let date = new Date();
                const sign = date.getSeconds() * multiply + date.getMilliseconds();
                let chineseChar = String.fromCharCode(sign);
                resolve(chineseChar);
            }, delay);
        });
        await promise.then(chineseChar => chineseString = chineseString + ' ' + chineseChar);
            }
console.log(chineseString);
}
getRandomChinese(4);


