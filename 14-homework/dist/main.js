/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/hw1.js":
/*!********************!*\
  !*** ./src/hw1.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MAX_PRICE\": () => /* binding */ MAX_PRICE\n/* harmony export */ });\nvar MAX_PRICE = function MAX_PRICE(x, y, z) {\n  return Math.max(x, y, z);\n};\n\n//# sourceURL=webpack://c/./src/hw1.js?");

/***/ }),

/***/ "./src/hw2.js":
/*!********************!*\
  !*** ./src/hw2.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getSumNumbers\": () => /* binding */ getSumNumbers\n/* harmony export */ });\nfunction getSumNumbers(firstNumber, secondNumber) {\n  var sum = 0;\n\n  if (firstNumber % 2 !== 0) {\n    for (firstNumber; firstNumber <= secondNumber; firstNumber++) {\n      sum += firstNumber;\n    }\n\n    return sum;\n  } else {\n    for (firstNumber; firstNumber <= secondNumber; firstNumber++) {\n      if (firstNumber % 2 === 0) {\n        sum += 0;\n      } else {\n        sum += firstNumber;\n      }\n    }\n\n    return sum;\n  }\n}\n\n//# sourceURL=webpack://c/./src/hw2.js?");

/***/ }),

/***/ "./src/hw3.js":
/*!********************!*\
  !*** ./src/hw3.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cutSpace\": () => /* binding */ cutSpace,\n/* harmony export */   \"convertCurrency\": () => /* binding */ convertCurrency\n/* harmony export */ });\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar cutSpace = function cutSpace(text) {\n  var subAmountCurrency = '';\n\n  for (var i = 0; i < text.length; i++) {\n    if (text[i] !== ' ') {\n      subAmountCurrency += text[i];\n    }\n  }\n\n  return subAmountCurrency;\n};\nvar convertCurrency = function convertCurrency(amountCurrency) {\n  amountCurrency = amountCurrency.toLowerCase();\n  var subAmountCurrency = cutSpace(amountCurrency);\n  var RATE = 28;\n  var exchangeAmount;\n\n  var _iterator = _createForOfIteratorHelper(subAmountCurrency),\n      _step;\n\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var _char = _step.value;\n\n      if (subAmountCurrency.includes('$')) {\n        var position = subAmountCurrency.indexOf('$');\n        subAmountCurrency = +subAmountCurrency.slice(0, position);\n        exchangeAmount = subAmountCurrency * RATE;\n      } else if (subAmountCurrency.includes('uah')) {\n        var _position = subAmountCurrency.indexOf('uah');\n\n        subAmountCurrency = +subAmountCurrency.slice(0, _position);\n        exchangeAmount = +(subAmountCurrency / RATE).toFixed(2);\n      } else {\n        return 'Невірно вказано значення валюти';\n      }\n\n      return exchangeAmount;\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n};\n\n//# sourceURL=webpack://c/./src/hw3.js?");

/***/ }),

/***/ "./src/hw4.js":
/*!********************!*\
  !*** ./src/hw4.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getGirls\": () => /* binding */ getGirls\n/* harmony export */ });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar getGirls = function getGirls(students, girlsName, boysName) {\n  var copyStudents = _toConsumableArray(students);\n\n  var boys = [];\n  var girls = [];\n\n  for (var i = 0; i < copyStudents.length; i++) {\n    if ((copyStudents[i][copyStudents[i].length - 1] === 'а' || copyStudents[i][copyStudents[i].length - 1] === 'я' || girlsName.includes(copyStudents[i])) && !boysName.includes(copyStudents[i])) {\n      girls.push(copyStudents[i]);\n    } else {\n      boys.push(copyStudents[i]);\n    }\n  }\n\n  return girls;\n};\n\n//# sourceURL=webpack://c/./src/hw4.js?");

/***/ }),

/***/ "./src/hw5.js":
/*!********************!*\
  !*** ./src/hw5.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"replaceBadWords\": () => /* binding */ replaceBadWords\n/* harmony export */ });\nvar replaceBadWords = function replaceBadWords(sentence) {\n  console.log(sentence);\n  var BAD_WORDS = ['fuck', 'shit', 'fucking', 'Fuck', 'Shit'];\n  var sentenceArray = sentence.split(\" \");\n  sentenceArray.forEach(function (word, index, sentenceArray) {\n    var badWordsIndex = sentenceArray.findIndex(function (word) {\n      return BAD_WORDS.includes(word);\n    });\n    sentenceArray.splice(badWordsIndex, 1, '****');\n    sentence = sentenceArray.join(' ');\n  });\n  return sentence;\n};\n\n//# sourceURL=webpack://c/./src/hw5.js?");

/***/ }),

/***/ "./src/hw6.js":
/*!********************!*\
  !*** ./src/hw6.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"countLetter\": () => /* binding */ countLetter,\n/* harmony export */   \"cutSpace\": () => /* binding */ cutSpace,\n/* harmony export */   \"calculateWordLetters\": () => /* binding */ calculateWordLetters\n/* harmony export */ });\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar countLetter = function countLetter(letter, word) {\n  word = word.toLowerCase();\n  letter = letter.toLowerCase();\n  var count = 0;\n\n  var _iterator = _createForOfIteratorHelper(word),\n      _step;\n\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var item = _step.value;\n\n      if (letter === item) {\n        count += 1;\n      }\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n\n  return count;\n};\nvar cutSpace = function cutSpace(text) {\n  var subAmountCurrency = '';\n\n  for (var i = 0; i < text.length; i++) {\n    if (text[i] !== ' ') {\n      subAmountCurrency += text[i];\n    }\n  }\n\n  return subAmountCurrency;\n};\nvar calculateWordLetters = function calculateWordLetters(word) {\n  word = cutSpace(word);\n  var wordArr = word.toLowerCase().split('');\n  var newWordArr = wordArr.map(function (letter) {\n    return [letter, countLetter(letter, word)];\n  });\n  var wordLettersObject = {};\n\n  for (var i = 0; i < newWordArr.length; i++) {\n    wordLettersObject[newWordArr[i][0]] = newWordArr[i][1];\n  }\n\n  return wordLettersObject;\n};\n\n//# sourceURL=webpack://c/./src/hw6.js?");

/***/ }),

/***/ "./src/hw7.js":
/*!********************!*\
  !*** ./src/hw7.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getMyTaxes\": () => /* binding */ getMyTaxes\n/* harmony export */ });\nfunction getMyTaxes(salary) {\n  return +(this.tax * salary).toFixed(2);\n}\n\n//# sourceURL=webpack://c/./src/hw7.js?");

/***/ }),

/***/ "./src/hw8.js":
/*!********************!*\
  !*** ./src/hw8.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Student\": () => /* binding */ Student\n/* harmony export */ });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Student = /*#__PURE__*/function () {\n  function Student(university, course, fullName, marks) {\n    _classCallCheck(this, Student);\n\n    this.university = university;\n    this.course = course;\n    this.fullName = fullName;\n    this.marks = marks;\n  }\n\n  _createClass(Student, [{\n    key: \"getAverageMark\",\n    value: function getAverageMark() {\n      var count = this.marks.reduce(function (count, number) {\n        return count + number;\n      }, 0);\n      return +(count / this.marks.length).toFixed(2);\n    }\n  }, {\n    key: \"dismiss\",\n    value: function dismiss() {\n      return this.marks = null;\n    }\n  }, {\n    key: \"recover\",\n    value: function recover() {\n      return this.marks = [];\n    }\n  }, {\n    key: \"studentsIndicate\",\n    value: function studentsIndicate() {\n      if (!this.marks) {\n        return \"Student left the univer\";\n      }\n\n      return \"\".concat(this.fullName, \" come back to the university\");\n    }\n  }, {\n    key: \"getMarks\",\n    get: function get() {\n      return this.marks;\n    }\n  }, {\n    key: \"setMarks\",\n    set: function set(mark) {\n      return this.marks = [].concat(_toConsumableArray(this.marks), [mark]);\n    }\n  }], [{\n    key: \"getInfo\",\n    value: function getInfo(university, course, fullName) {\n      return \"\".concat(fullName, \" - student \").concat(course, \" course of \").concat(university);\n    }\n  }]);\n\n  return Student;\n}();\n\n//# sourceURL=webpack://c/./src/hw8.js?");

/***/ }),

/***/ "./src/hw9.js":
/*!********************!*\
  !*** ./src/hw9.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generateBlocks\": () => /* binding */ generateBlocks,\n/* harmony export */   \"getColor\": () => /* binding */ getColor,\n/* harmony export */   \"delay\": () => /* binding */ delay,\n/* harmony export */   \"generateBlocksInterval\": () => /* binding */ generateBlocksInterval\n/* harmony export */ });\nvar generateBlocks = function generateBlocks() {\n  var numberBlocks = 25;\n  var square = document.createElement('div');\n  document.body.childNodes[0].remove();\n  square.classList.add('square');\n  document.body.prepend(square);\n\n  for (var i = 0; i < numberBlocks; i++) {\n    var block = document.createElement('div');\n    block.classList.add('blocks');\n    block.style.background = getColor();\n    square.append(block);\n  }\n};\nfunction getColor() {\n  return '#' + Math.random().toString(16).slice(5, 11);\n}\nvar delay = 1000;\nfunction generateBlocksInterval() {\n  setInterval(generateBlocks, delay);\n}\n\n//# sourceURL=webpack://c/./src/hw9.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _hw1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hw1 */ \"./src/hw1.js\");\n/* harmony import */ var _hw2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hw2 */ \"./src/hw2.js\");\n/* harmony import */ var _hw3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hw3 */ \"./src/hw3.js\");\n/* harmony import */ var _hw4__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hw4 */ \"./src/hw4.js\");\n/* harmony import */ var _hw5__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hw5 */ \"./src/hw5.js\");\n/* harmony import */ var _hw6__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hw6 */ \"./src/hw6.js\");\n/* harmony import */ var _hw7__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hw7 */ \"./src/hw7.js\");\n/* harmony import */ var _hw8__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hw8 */ \"./src/hw8.js\");\n/* harmony import */ var _hw9__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hw9 */ \"./src/hw9.js\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n\n\n\n\n\n\n\n\n\n\n\nvar BREAD_PRICE = 15.678;\nvar MEAT_PRICE = 123.965;\nvar FISH_PRICE = 90.2345;\nvar firstNumber = 7;\nvar secondNumber = 17;\nvar amountCurrency = '100$';\nvar students = ['Олександр', 'Ігор', 'Лука', 'Іван', 'Олена', 'Елізабет', 'Кармен', 'Олексій', 'Світлана', 'Антон', 'Любов', 'Галя', 'Юра', 'Дзвінка', 'Оля', 'Михайло'];\nvar girlsName = ['Любов', 'Либідь', 'Елізабет', 'Адель', 'Кармен', 'Мадлен'];\nvar boysName = ['Кузьма', 'Абдула', 'Лука', 'Олекса', 'Юра'];\nvar ukraine = {\n  name: 'ukraine',\n  tax: 0.195,\n  middleSalary: 1789,\n  vacancies: 11476\n};\nvar latvia = {\n  name: 'latvia',\n  tax: 0.25,\n  middleSalary: 1586,\n  vacancies: 3921\n};\nvar litva = {\n  name: 'litva',\n  tax: 0.15,\n  middleSalary: 1509,\n  vacancies: 1114\n};\nvar galya = new _hw8__WEBPACK_IMPORTED_MODULE_7__.Student('Politech University', 2, 'Galyna Stankiv', [4, 4, 5, 4]);\nconsole.log(\"\\u041C\\u0430\\u043A\\u0441\\u0438\\u043C\\u0430\\u043B\\u044C\\u043D\\u0430 \\u0446\\u0456\\u043D\\u0430: \".concat((0,_hw1__WEBPACK_IMPORTED_MODULE_0__.MAX_PRICE)(BREAD_PRICE, MEAT_PRICE, FISH_PRICE)));\nconsole.log(\"\\u0421\\u0443\\u043C\\u0430 \\u0447\\u0438\\u0441\\u0435\\u043B: \".concat((0,_hw2__WEBPACK_IMPORTED_MODULE_1__.getSumNumbers)(firstNumber, secondNumber)));\nconsole.log((0,_hw3__WEBPACK_IMPORTED_MODULE_2__.convertCurrency)(amountCurrency));\nconsole.log((0,_hw4__WEBPACK_IMPORTED_MODULE_3__.getGirls)(students, girlsName, boysName));\nconsole.log(\"\\u0417\\u0430\\u043C\\u0456\\u043D\\u0438\\u0442\\u0438 \\u0441\\u043B\\u043E\\u0432\\u0430: \".concat((0,_hw5__WEBPACK_IMPORTED_MODULE_4__.replaceBadWords)('Fuck off. Are you fucking kidding shit?')));\nconsole.log((0,_hw6__WEBPACK_IMPORTED_MODULE_5__.calculateWordLetters)('Lviv '));\nconsole.log(\"\\u041F\\u043E\\u0434\\u0430\\u0442\\u043A\\u0438, \\u0441\\u043F\\u043B\\u0430\\u0447\\u0435\\u043D\\u0456 \\u0432 \\u0423\\u043A\\u0440\\u0430\\u0457\\u043D\\u0456: \".concat(_hw7__WEBPACK_IMPORTED_MODULE_6__.getMyTaxes.call(ukraine, 2000), \" usd\"));\nconsole.log(\"\\u041F\\u043E\\u0434\\u0430\\u0442\\u043A\\u0438, \\u0441\\u043F\\u043B\\u0430\\u0447\\u0435\\u043D\\u0456 \\u0432 \\u041B\\u0438\\u0442\\u0432\\u0456: \".concat(_hw7__WEBPACK_IMPORTED_MODULE_6__.getMyTaxes.call(litva, 1800), \" usd\"));\nconsole.log(\"\\u041F\\u043E\\u0434\\u0430\\u0442\\u043A\\u0438, \\u0441\\u043F\\u043B\\u0430\\u0447\\u0435\\u043D\\u0456 \\u0432 \\u041B\\u0430\\u0442\\u0432\\u0456\\u0457: \".concat(_hw7__WEBPACK_IMPORTED_MODULE_6__.getMyTaxes.call(latvia, 1900), \" usd\"));\nconsole.log(\"\\u041E\\u0446\\u0456\\u043D\\u043A\\u0438 \\u0441\\u0442\\u0443\\u0434\\u0435\\u043D\\u0442\\u0430: \".concat(galya.getMarks));\n(0,_hw9__WEBPACK_IMPORTED_MODULE_8__.generateBlocksInterval)();\n\n//# sourceURL=webpack://c/./src/index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\r\\n    background-color: ghostwhite;\\r\\n}\\r\\n.square {\\r\\n    width: 250px;\\r\\n    height: 250px;\\r\\n    display: flex;\\r\\n    flex-grow: 0;\\r\\n    flex-shrink: 0;\\r\\n    padding: 5px;\\r\\n    flex-wrap: wrap;\\r\\n}\\r\\n\\r\\n.blocks {\\r\\n    width: 50px;\\r\\n    height: 50px;\\r\\n    flex-grow: 0;\\r\\n    flex-shrink: 0;\\r\\n}\\r\\n\\r\\n.click_button {\\r\\n    background-color: #4CAF50;\\r\\n    border: none;\\r\\n    color: white;\\r\\n    padding: 15px 30px;\\r\\n    text-align: center;\\r\\n    text-decoration: none;\\r\\n    display: inline-block;\\r\\n    font-size: 16px;\\r\\n}\\r\\n\\r\\n\\r\\n\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://c/./src/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://c/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/index.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://c/./src/index.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://c/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;