export const cutSpace = (text) => {
    let subAmountCurrency = '';
    for (let i = 0; i < text.length; i++) {
        if (text[i] !== ' ') {
            subAmountCurrency += text[i];
        }
    }
    return subAmountCurrency;
}
export const convertCurrency = (amountCurrency) => {
    amountCurrency = amountCurrency.toLowerCase();
    let subAmountCurrency = cutSpace(amountCurrency);
    const RATE = 28;
    let exchangeAmount;
    for (let char of subAmountCurrency) {
        if (subAmountCurrency.includes('$')) {
            let position = subAmountCurrency.indexOf('$');
            subAmountCurrency = +subAmountCurrency.slice(0, position);
            exchangeAmount = subAmountCurrency * RATE;
        } else if (subAmountCurrency.includes('uah')) {
            let position = subAmountCurrency.indexOf('uah');
            subAmountCurrency = +subAmountCurrency.slice(0, position);
            exchangeAmount = +(subAmountCurrency / RATE).toFixed(2);
        } else {
            return 'Невірно вказано значення валюти';
        }
        return exchangeAmount;
    }
}