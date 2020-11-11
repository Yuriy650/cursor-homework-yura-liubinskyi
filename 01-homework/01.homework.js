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

if ((integerTotalPrice) % 2 === 0) {
    console.log(true);
} else {
    console.log(false);
}

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

let newPriceBread = Math.floor((bread - discountBread)*100)/100;
let newPriceMeat = Math.floor((meat - discountMeat)*100)/100;
let newPriceFish = Math.floor((fish - discountFish)*100)/100;


let profitBread = Math.floor((bread/2 - discountBread)*100)/100;
let profitMeat = Math.floor((meat/2 - discountMeat)*100)/100;
let profitFish = Math.floor((fish/2 - discountFish)*100)/100;

/*function newPrice(price) {
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
profit(fish);*/

console.log(`Максимальна ціна: ${maxPrice},
Мінімальна ціна: ${minPrice},
вартість всіх товарів: ${totalPrice},

Округлення в МЕНШУ сторону: ${integerTotalPrice},
Сума товарів округлену до сотень в більшу сторону: ${roundingHundredTotalPrice},
Сума решти: ${restPay},
середнє значення цін, заокруглене до сотих: ${averagePrice},

Знижка на хліб: ${discountBread}, 
Вартість хліба зі знижкою: ${newPriceBread},
Чистий прибуток: ${profitBread},

Знижка на рибу: ${discountFish},
Вартість риби зi знижкою: ${newPriceFish},
Чистий прибуток: ${profitFish},

Знижка на м"ясо: ${discountMeat},
Вартість м"яса зi знижкою: ${newPriceMeat},
Чистий прибуток: ${profitMeat}`);



