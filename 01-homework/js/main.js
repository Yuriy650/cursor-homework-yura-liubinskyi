let breadPrice = 15.678;
let meatPrice = 123.965;
let fishPrice = 90.2345;

let maxPrice = Math.max(breadPrice, meatPrice, fishPrice);
console.log('Максимальна ціна: ' + maxPrice);

let minPrice = Math.min(breadPrice, meatPrice, fishPrice);
console.log('Мінімальна ціна: ' + minPrice);

let totalPrice = breadPrice + meatPrice + fishPrice;
console.log('Загальна вартість товарів: ' + totalPrice);

let integerTotalPrice = Math.floor(totalPrice);
console.log('Ціле число: ' + integerTotalPrice);

let roundingHundredTotalPrice = Math.ceil((totalPrice) / 100) * 100;

console.log('Заокруглене значення: ' + roundingHundredTotalPrice);

let roundingLessHundredTotalPrice = Math.floor((totalPrice) / 100) * 100;

console.log('Заокруглене значення: ' + roundingLessHundredTotalPrice);

isEvenPrice = integerTotalPrice % 2 === 0;
console.log('Число парне? ' + isEvenPrice);

/*if ((integerTotalPrice) % 2 === 0) {
    console.log('Число парне? ' + true);
} else {
    console.log('Число парне? ' + false);
}*/
let clientPay = 500;
let restPay = Math.floor((clientPay - totalPrice) * 100) / 100;

console.log('Решта: ' + restPay);

console.log('Середня ціна: ' + totalPrice / 3);

let averagePrice = parseFloat((totalPrice / 3).toFixed(2));

//console.log(typeof(averagePrice));

console.log('Середня ціна, до сотих: ' + averagePrice);

let discount = Math.round(Math.random() * 100);
console.log('Знижка становить: ' + discount + '%');

let discountBread = parseFloat((breadPrice * discount / 100).toFixed(2));
let discountMeat = parseFloat((meatPrice * discount / 100).toFixed(2));
let discountFish = parseFloat((fishPrice * discount / 100).toFixed(2));

console.log({
    discountBread: discountBread,
    discountMeat: discountMeat,
    discountFish: discountFish
});

let newPriceBread = parseFloat((breadPrice - discountBread).toFixed(2));
let newPriceMeat = parseFloat((meatPrice - discountMeat).toFixed(2));
let newPriceFish = parseFloat((fishPrice - discountFish).toFixed(2))


let profitBread = Math.floor((breadPrice / 2 - discountBread) * 100) / 100;
let profitMeat = Math.floor((meatPrice / 2 - discountMeat) * 100) / 100;
let profitFish = Math.floor((fishPrice / 2 - discountFish) * 100) / 100;

/*
function newPrice(price) {
    console.log(Math.floor((price - Math.random() * price) * 100) / 100);
};

newPrice(bread);
newPrice(fish);
newPrice(meat);

function profit(price) {
    console.log(price / 2 - price * Math.random());
};

profit(bread);
profit(meat);
profit(fish);
*/
$('#body-content').append(`<p>Максимальна ціна: ${maxPrice} грн.</p>`);
$('#body-content').append(`<p>Мінімальна ціна: ${minPrice} грн.</p>`);
$('#body-content').append(`<p>вартість всіх товарів: ${totalPrice} грн.</p>`);
$('#body-content').append(`<p>Загальна сума - число парне?: ${isEvenPrice}</p>`);
$('#body-content').append(`<p>Знижка ${discount}%, що становить:  ${discountBread} грн. </p> `);
$('#body-content').append(`<p>Вартість товару зі знижкою: ${newPriceBread} грн.</p> `);
$('#body-content').append(`<p>Чистий прибуток: ${profitBread} грн.</p>`);

$('#list-data').append(`<li>Округлення в МЕНШУ сторону: ${integerTotalPrice}</li>`);


console.log(`Максимальна ціна: ${maxPrice},
Мінімальна ціна: ${minPrice},
вартість всіх товарів: ${totalPrice},

Округлення в МЕНШУ сторону: ${integerTotalPrice},
Сума товарів округлену до сотень в більшу сторону: ${roundingHundredTotalPrice},
Сума решти: ${restPay},
середнє значення цін, заокруглене до сотих: ${averagePrice},

Число парне? - ${isEvenPrice},

Знижка: ${discountBread}, 
Вартість хліба зі знижкою: ${newPriceBread},
Чистий прибуток: ${profitBread},

Знижка на рибу: ${discountFish},
Вартість риби зi знижкою: ${newPriceFish},
Чистий прибуток: ${profitFish},

Знижка на м"ясо: ${discountMeat},
Вартість м"яса зi знижкою: ${newPriceMeat},
Чистий прибуток: ${profitMeat}`);



