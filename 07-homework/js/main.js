const ukraine = { name: 'ukraine', tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { name: 'latvia', tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { name: 'litva', tax: 0.15, middleSalary: 1509, vacancies: 1114 };

/*
Створіть функцію getMyTaxes.call(country, salary) -> number; –
яка рахує скільки податків ви заплатите як IT-спеціаліст в якійсь з країн.
    Функція повинна викликатись через call та працювати з даними через this*/
function getMyTaxes(salary) {
    return +(this.tax*salary).toFixed(2);
}
console.log(`Податки, сплачені в Україні: ${getMyTaxes.call(ukraine, 2000)} usd`);
console.log(`Податки, сплачені в Литві: ${getMyTaxes.call(litva, 1800)} usd` );
console.log(`Податки, сплачені в Латвії: ${getMyTaxes.call(latvia, 1900)} usd`);

function getMiddleTaxes() {
    return (this.tax*this.middleSalary).toFixed(2) + ' usd';
}
console.log(`Податки, в середньому сплачені в Україні: ${getMiddleTaxes.call(ukraine)}`);
console.log(`Податки, в середньому сплачені в Литві: ${getMiddleTaxes.call(litva)}`);
console.log(`Податки, в середньому сплачені в Латвії: ${getMiddleTaxes.call(latvia)}`);

function getTotalTaxes() {
    return Math.round(this.tax*this.middleSalary*this.vacancies) + ' usd';
}
console.log(`Загальна сума податків в Україні: ${getTotalTaxes.call(ukraine)}`);
console.log(`Загальна сума податків в Литві: ${getTotalTaxes.call(litva)}`);
console.log(`Загальна сума податків в Латвії: ${getTotalTaxes.call(latvia)}`);

/*Створіть функцію getMySalary(country) –
яка буде писати в консоль об'єкт виду: { salary: number, taxes: number, profit: number } кожні 10 секунд.*/
const countryArray = [ukraine, litva, latvia];
const max = 2000;
const min = 1500;
/*function getMyProfits() {
    return +(salary - this.taxes).toFixed(2);
}*/
const getMySalary = () => {
    const arraySalary = countryArray.map((country) => {
        const salary = +(Math.random()*(max-min)+min).toFixed(2);
        return {
            name: country.name,
            salary,
            taxes: getMyTaxes.call(country, salary),
            profits: +(salary - getMyTaxes.call(country, salary)).toFixed(2)
        }
    })
    for (i=0;i<arraySalary.length;i++) {
        console.log(arraySalary[i]);
    }
}
let setTime = setTimeout(function getSalary(){
    getMySalary();
    setTime = setTimeout(getSalary, 7000);
}, 7000);






