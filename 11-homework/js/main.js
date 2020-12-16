async function getRandomChinese(length) {
    let chineseString = '';
    for (let i=0; i<length; i++) {
        let promise = new Promise(resolve => {
            setTimeout(() => {
                let date = new Date();
                const sign = date.getSeconds() * 1000 + date.getMilliseconds();
                let chineseChar = String.fromCharCode(sign);
                resolve(chineseChar);
            }, 50);
        });
        await promise.then(chineseChar => chineseString = chineseString + ' ' + chineseChar);
            }
console.log(chineseString);
}
getRandomChinese(4);


