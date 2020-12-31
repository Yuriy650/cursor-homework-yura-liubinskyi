import {MAX_PRICE} from './hw1';
import {getSumNumbers} from "./hw2";
import {convertCurrency} from "./hw3";
import {getGirls} from "./hw4";
import {replaceBadWords} from "./hw5";
import {calculateWordLetters} from "./hw6";
import {getMyTaxes} from "./hw7";
import {Student} from "./hw8";
import {generateBlocks} from "./hw9";
import {generateBlocksInterval} from "./hw9";
import "./index.css";


const BREAD_PRICE = 15.678;
const MEAT_PRICE = 123.965;
const FISH_PRICE = 90.2345;
const firstNumber = 7;
const secondNumber = 17;
const amountCurrency = '100$';
const students = ['Олександр', 'Ігор', 'Лука', 'Іван', 'Олена', 'Елізабет', 'Кармен', 'Олексій',
    'Світлана', 'Антон', 'Любов', 'Галя', 'Юра', 'Дзвінка', 'Оля', 'Михайло'];
const girlsName = ['Любов', 'Либідь', 'Елізабет', 'Адель', 'Кармен', 'Мадлен'];
const boysName = ['Кузьма', 'Абдула', 'Лука', 'Олекса', 'Юра'];
const ukraine = { name: 'ukraine', tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { name: 'latvia', tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { name: 'litva', tax: 0.15, middleSalary: 1509, vacancies: 1114 };
const galya = new Student('Politech University', 2, 'Galyna Stankiv', [4, 4, 5, 4]);



console.log(`Максимальна ціна: ${MAX_PRICE(BREAD_PRICE, MEAT_PRICE, FISH_PRICE)}`);
console.log(`Сума чисел: ${getSumNumbers(firstNumber, secondNumber)}`);
console.log(convertCurrency(amountCurrency));
console.log(getGirls(students, girlsName, boysName));
console.log(`Замінити слова: ${replaceBadWords('Fuck off. Are you fucking kidding shit?')}`);
console.log(calculateWordLetters('Lviv '));
console.log(`Податки, сплачені в Україні: ${getMyTaxes.call(ukraine, 2000)} usd`);
console.log(`Податки, сплачені в Литві: ${getMyTaxes.call(litva, 1800)} usd` );
console.log(`Податки, сплачені в Латвії: ${getMyTaxes.call(latvia, 1900)} usd`);
console.log(`Оцінки студента: ${galya.getMarks}`);
generateBlocksInterval();

