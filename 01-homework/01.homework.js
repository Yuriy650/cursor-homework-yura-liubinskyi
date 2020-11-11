let bread = 15.678;
let meat = 123.965;
let fish = 90.2345;

let maxPrice = Math.max(bread, meat, fish);
console.log(maxPrice);

let minPrice = Math.min(bread, meat, fish);
console.log(minPrice);

let totalPrice = bread + meat + fish;
console.log(totalPrice);

let integerTotalPrice = Math.floor(totalPrice);
console.log(integerTotalPrice);

let roundingHundredTotalPrice = Math.ceil((totalPrice) / 100) * 100;

console.log(roundingHundredTotalPrice);

let roundingLessHundredTotalPrice = Math.floor((totalPrice) / 100) * 100;

console.log(roundingLessHundredTotalPrice);

if ((integerTotalPrice) % 2 == 0) {
    console.log(true);
} else {
    console.log(false);
}
;

let restPay = 500 - totalPrice;

console.log(restPay);

console.log(totalPrice / 3);

let averagePrice = Math.floor((totalPrice / 3) * 100) / 100;

console.log(averagePrice);

let discountBread = Math.floor(bread * Math.random()*100)/100;
let discountMeat = Math.floor(meat * Math.random()*100)/100;
let discountFish = Math.floor(fish * Math.random()*100)/100;

console.log({
    discountBread: discountBread,
    discountMeat: discountMeat,
    discountFish: discountFish
});

let profitBread = bread/2 - discountBread;
let profitMeat = meat/2 - discountMeat;
let profitFish = fish/2 - discountFish;

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

console.log(`Максимальна ціна: ${maxPrice},
Мінімальна ціна: ${minPrice},
вартість всіх товарів: ${totalPrice},
Округлення в МЕНШУ сторону: ${integerTotalPrice},
Сума товарів округлену до сотень в більшу сторону: ${roundingLessHundredTotalPrice},
Сума решти: ${restPay},
середнє значення цін: ${averagePrice},
Знижка на хліб: ${discountBread}, 
випадковий чистий прибуток: ${profitBread},
Знижка на рибу: ${discountFish},
випадковий чистий прибуток: ${profitFish},
Знижка на м"ясо: ${discountMeat},
випадковий чистий прибуток: ${profitMeat}`);


