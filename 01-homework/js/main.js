const BREAD_PRICE = 15.678;
const MEAT_PRICE = 123.965;
const FISH_PRICE = 90.2345;

const MAX_PRICE = Math.max(BREAD_PRICE, MEAT_PRICE, FISH_PRICE);
console.log('Максимальна ціна: ' + MAX_PRICE);

const MIN_PRICE = Math.min(BREAD_PRICE, MEAT_PRICE, FISH_PRICE);
console.log('Мінімальна ціна: ' + MIN_PRICE);

const TOTAL_PRICE = BREAD_PRICE + MEAT_PRICE + FISH_PRICE;
console.log('Загальна вартість товарів: ' + TOTAL_PRICE);

const INTEGER_TOTAL_PRICE = Math.floor(TOTAL_PRICE);
console.log('Ціле число: ' + INTEGER_TOTAL_PRICE);

const ROUNDING_HUNDRED_TOTAL_PRICE = Math.ceil((TOTAL_PRICE) / 100) * 100;

console.log('Заокруглене значення: ' + ROUNDING_HUNDRED_TOTAL_PRICE);

const ROUNDING_LESS_HUNDRED_TOTAL_PRICE = Math.floor((TOTAL_PRICE) / 100) * 100;

console.log('Заокруглене значення: ' + ROUNDING_LESS_HUNDRED_TOTAL_PRICE);

isEvenPrice = INTEGER_TOTAL_PRICE % 2 === 0;
console.log('Число парне? ' + isEvenPrice);

/*if ((integerTotalPrice) % 2 === 0) {
    console.log('Число парне? ' + true);
} else {
    console.log('Число парне? ' + false);
}*/
let clientPay = 500;
let restPay = Math.floor((clientPay - TOTAL_PRICE) * 100) / 100;

console.log('Решта: ' + restPay);

console.log('Середня ціна: ' + TOTAL_PRICE / 3);

const averagePrice = parseFloat((TOTAL_PRICE / 3).toFixed(2));

//console.log(typeof(averagePrice));

console.log('Середня ціна, до сотих: ' + averagePrice);

let discount = Math.round(Math.random() * 100);
console.log('Знижка становить: ' + discount + '%');

let discountBread = parseFloat((BREAD_PRICE * discount / 100).toFixed(2));
let discountMeat = parseFloat((MEAT_PRICE * discount / 100).toFixed(2));
let discountFish = parseFloat((FISH_PRICE * discount / 100).toFixed(2));

console.log({
    discountBread: discountBread,
    discountMeat: discountMeat,
    discountFish: discountFish
});

let newPriceBread = parseFloat((BREAD_PRICE - discountBread).toFixed(2));
let newPriceMeat = parseFloat((MEAT_PRICE - discountMeat).toFixed(2));
let newPriceFish = parseFloat((FISH_PRICE - discountFish).toFixed(2))


let profitBread = Math.floor((BREAD_PRICE / 2 - discountBread) * 100) / 100;
let profitMeat = Math.floor((MEAT_PRICE / 2 - discountMeat) * 100) / 100;
let profitFish = Math.floor((FISH_PRICE / 2 - discountFish) * 100) / 100;


/*$('#body-content').append(`<p>Максимальна ціна: ${maxPrice} грн.</p>`);
$('#body-content').append(`<p>Мінімальна ціна: ${minPrice} грн.</p>`);
$('#body-content').append(`<p>вартість всіх товарів: ${totalPrice} грн.</p>`);
$('#body-content').append(`<p>Загальна сума - число парне?: ${isEvenPrice}</p>`);
$('#body-content').append(`<p>Знижка ${discount}%, що становить:  ${discountBread} грн. </p> `);
$('#body-content').append(`<p>Вартість товару зі знижкою: ${newPriceBread} грн.</p> `);
$('#body-content').append(`<p>Чистий прибуток: ${profitBread} грн.</p>`);

$('#list-data').append(`<li>Округлення в МЕНШУ сторону: ${integerTotalPrice}</li>`);*/


console.log(`Максимальна ціна: ${MAX_PRICE},
Мінімальна ціна: ${MIN_PRICE},
вартість всіх товарів: ${TOTAL_PRICE},

Округлення в МЕНШУ сторону: ${INTEGER_TOTAL_PRICE},
Сума товарів округлену до сотень в більшу сторону: ${ROUNDING_HUNDRED_TOTAL_PRICE},
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



