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

let isEvenPrice = INTEGER_TOTAL_PRICE % 2 === 0;
console.log('Число парне? ' + isEvenPrice);

/*if ((integerTotalPrice) % 2 === 0) {
    console.log('Число парне? ' + true);
} else {
    console.log('Число парне? ' + false);
}*/
let clientPay = 500;
const REST_PAY = Math.floor((clientPay - TOTAL_PRICE) * 100) / 100;

console.log('Решта: ' + REST_PAY);

console.log('Середня ціна: ' + TOTAL_PRICE / 3);

const averagePrice = parseFloat((TOTAL_PRICE / 3).toFixed(2));

//console.log(typeof(averagePrice));

console.log('Середня ціна, до сотих: ' + averagePrice);

const DISCOUNT = Math.round(Math.random() * 100);
console.log('Знижка становить: ' + DISCOUNT + '%');

const DISCOUNT_BREAD = parseFloat((BREAD_PRICE * DISCOUNT / 100).toFixed(2));
const DISCOUNT_MEAT = parseFloat((MEAT_PRICE * DISCOUNT / 100).toFixed(2));
const DISCOUNT_FISH = parseFloat((FISH_PRICE * DISCOUNT / 100).toFixed(2));

console.log({
    discountBread: DISCOUNT_BREAD,
    discountMeat: DISCOUNT_MEAT,
    discountFish: DISCOUNT_FISH
});

const NEW_PRICE_BREAD = parseFloat((BREAD_PRICE - DISCOUNT_BREAD).toFixed(2));
const NEW_PRICE_MEAT = parseFloat((MEAT_PRICE - DISCOUNT_MEAT).toFixed(2));
const NEW_PRICE_FISH = parseFloat((FISH_PRICE - DISCOUNT_FISH).toFixed(2))


const PROFIT_BREAD = Math.floor((BREAD_PRICE / 2 - DISCOUNT_BREAD) * 100) / 100;
const PROFIT_MEAT = Math.floor((MEAT_PRICE / 2 - DISCOUNT_MEAT) * 100) / 100;
const PROFIT_FISH = Math.floor((FISH_PRICE / 2 - DISCOUNT_FISH) * 100) / 100;


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
Сума решти: ${REST_PAY},
середнє значення цін, заокруглене до сотих: ${averagePrice},

Число парне? - ${isEvenPrice},

Знижка: ${DISCOUNT_BREAD}, 
Вартість хліба зі знижкою: ${NEW_PRICE_BREAD},
Чистий прибуток: ${PROFIT_BREAD},

Знижка на рибу: ${DISCOUNT_FISH},
Вартість риби зi знижкою: ${NEW_PRICE_FISH},
Чистий прибуток: ${PROFIT_FISH},

Знижка на м"ясо: ${DISCOUNT_MEAT},
Вартість м"яса зi знижкою: ${NEW_PRICE_MEAT},
Чистий прибуток: ${PROFIT_MEAT}`);



