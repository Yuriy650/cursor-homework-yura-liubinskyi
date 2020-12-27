async function getRandomChinese(length) {
    const start = Date.now();
    let chineseString = '';
    const delay = 50;
    const multiply = 1000;
    for (let i = 0; i < length; i++) {
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
    const end = Date.now();
    console.log(chineseString);
    const result = end - start;
    console.log(`Час виконання промісу: ${result} мс`);
}
getRandomChinese(4);




