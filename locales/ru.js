(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("cronstrue"));
	else if(typeof define === 'function' && define.amd)
		define("locales/ru", ["cronstrue"], factory);
	else if(typeof exports === 'object')
		exports["locales/ru"] = factory(require("cronstrue"));
	else
		root["locales/ru"] = factory(root["cronstrue"]);
})(globalThis, (__WEBPACK_EXTERNAL_MODULE__93__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 93:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__93__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
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
/******/ 				() => (module['default']) :
/******/ 				() => (module);
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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
var __webpack_exports__ = {};
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var cronstrue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93);
/* harmony import */ var cronstrue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cronstrue__WEBPACK_IMPORTED_MODULE_0__);
var ru_exports = __webpack_exports__;
"use strict";
Object.defineProperty(ru_exports, "__esModule", { value: true });
ru_exports.ru = void 0;
const getPhraseByNumber = (str, words) => {
    const number = Number(str);
    return number !== undefined
        ? words[number % 100 > 4 && number % 100 < 20 ? 2 : [2, 0, 1, 1, 1, 2][number % 10 < 5 ? Math.abs(number) % 10 : 5]]
        : words[2];
};
const getPhraseByDayOfWeek = (str, words) => {
    const number = Number(str);
    return number !== undefined
        ? words[number === 0 ? 0 : number === 1 || number === 2 || number === 4 ? 1 : 2]
        : words[1];
};
class ru {
    atX0SecondsPastTheMinuteGt20() {
        return null;
    }
    atX0MinutesPastTheHourGt20() {
        return null;
    }
    commaMonthX0ThroughMonthX1() {
        return null;
    }
    commaYearX0ThroughYearX1() {
        return null;
    }
    use24HourTimeFormatByDefault() {
        return true;
    }
    everyMinute() {
        return "каждую минуту";
    }
    everyHour() {
        return "каждый час";
    }
    anErrorOccuredWhenGeneratingTheExpressionD() {
        return "Произошла ошибка во время генерации описания выражения. Проверьте синтаксис крон-выражения.";
    }
    atSpace() {
        return "В ";
    }
    everyMinuteBetweenX0AndX1() {
        return "Каждую минуту с %s по %s";
    }
    at() {
        return "В";
    }
    spaceAnd() {
        return " и";
    }
    everySecond() {
        return "каждую секунду";
    }
    everyX0Seconds(s) {
        return getPhraseByNumber(s, ["каждую %s секунду", "каждые %s секунды", "каждые %s секунд"]);
    }
    secondsX0ThroughX1PastTheMinute() {
        return "секунды с %s по %s";
    }
    atX0SecondsPastTheMinute(s) {
        return getPhraseByNumber(s, ["в %s секунду", "в %s секунды", "в %s секунд"]);
    }
    everyX0Minutes(s) {
        return getPhraseByNumber(s, ["каждую %s минуту", "каждые %s минуты", "каждые %s минут"]);
    }
    minutesX0ThroughX1PastTheHour() {
        return "минуты с %s по %s";
    }
    atX0MinutesPastTheHour(s) {
        return getPhraseByNumber(s, ["в %s минуту", "в %s минуты", "в %s минут"]);
    }
    everyX0Hours(s) {
        return getPhraseByNumber(s, ["каждый %s час", "каждые %s часа", "каждые %s часов"]);
    }
    betweenX0AndX1() {
        return "с %s по %s";
    }
    atX0() {
        return "в %s";
    }
    commaEveryDay() {
        return ", каждый день";
    }
    commaEveryX0DaysOfTheWeek(s) {
        return getPhraseByNumber(s, ["", ", каждые %s дня недели", ", каждые %s дней недели"]);
    }
    commaX0ThroughX1(s) {
        return s && (s[0] == "2" || s[0] == "3") ? ", со %s по %s" : ", с %s по %s";
    }
    commaAndX0ThroughX1(s) {
        return s && (s[0] == "2" || s[0] == "3") ? " и со %s по %s" : " и с %s по %s";
    }
    first(s) {
        return getPhraseByDayOfWeek(s, ["первое", "первый", "первую"]);
    }
    second(s) {
        return getPhraseByDayOfWeek(s, ["второе", "второй", "вторую"]);
    }
    third(s) {
        return getPhraseByDayOfWeek(s, ["третье", "третий", "третью"]);
    }
    fourth(s) {
        return getPhraseByDayOfWeek(s, ["четвертое", "четвертый", "четвертую"]);
    }
    fifth(s) {
        return getPhraseByDayOfWeek(s, ["пятое", "пятый", "пятую"]);
    }
    commaOnThe(s) {
        return s === "2" ? ", во " : ", в ";
    }
    spaceX0OfTheMonth() {
        return " %s месяца";
    }
    lastDay() {
        return "последний день";
    }
    commaOnTheLastX0OfTheMonth(s) {
        return getPhraseByDayOfWeek(s, [", в последнее %s месяца", ", в последний %s месяца", ", в последнюю %s месяца"]);
    }
    commaOnlyOnX0(s) {
        return s && s[0] === "2" ? ", только во %s" : ", только в %s";
    }
    commaAndOnX0() {
        return ", и %s";
    }
    commaEveryX0Months(s) {
        return getPhraseByNumber(s, ["", " каждые %s месяца", " каждые %s месяцев"]);
    }
    commaOnlyInMonthX0() {
        return ", только %s";
    }
    commaOnlyInX0() {
        return ", только в %s";
    }
    commaOnTheLastDayOfTheMonth() {
        return ", в последний день месяца";
    }
    commaOnTheLastWeekdayOfTheMonth() {
        return ", в последний будний день месяца";
    }
    commaDaysBeforeTheLastDayOfTheMonth(s) {
        return getPhraseByNumber(s, [
            ", за %s день до конца месяца",
            ", за %s дня до конца месяца",
            ", за %s дней до конца месяца",
        ]);
    }
    firstWeekday() {
        return "первый будний день";
    }
    weekdayNearestDayX0() {
        return "ближайший будний день к %s числу";
    }
    commaOnTheX0OfTheMonth() {
        return ", в %s месяца";
    }
    commaEveryX0Days(s) {
        return getPhraseByNumber(s, [", каждый %s день", ", каждые %s дня", ", каждые %s дней"]);
    }
    commaBetweenDayX0AndX1OfTheMonth(s) {
        return s && s.substring(0, s.indexOf("-")) == "2" ? ", со %s по %s число месяца" : ", с %s по %s число месяца";
    }
    commaOnDayX0OfTheMonth(s) {
        return s && s[0] == "2" ? ", во %s число месяца" : ", в %s число месяца";
    }
    commaEveryX0Years(s) {
        return getPhraseByNumber(s, [", каждый %s год", ", каждые %s года", ", каждые %s лет"]);
    }
    commaStartingX0() {
        return ", начало %s";
    }
    daysOfTheWeek() {
        return ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"];
    }
    daysOfTheWeekInCase(f = 2) {
        return f == 1
            ? ["воскресенья", "понедельника", "вторника", "среды", "четверга", "пятницы", "субботы"]
            : ["воскресенье", "понедельник", "вторник", "среду", "четверг", "пятницу", "субботу"];
    }
    monthsOfTheYear() {
        return [
            "январь",
            "февраль",
            "март",
            "апрель",
            "май",
            "июнь",
            "июль",
            "август",
            "сентябрь",
            "октябрь",
            "ноябрь",
            "декабрь",
        ];
    }
    monthsOfTheYearInCase(f) {
        return f == 1
            ? [
                "января",
                "февраля",
                "марта",
                "апреля",
                "мая",
                "июня",
                "июля",
                "августа",
                "сентября",
                "октября",
                "ноября",
                "декабря",
            ]
            : this.monthsOfTheYear();
    }
}
ru_exports.ru = ru;


(cronstrue__WEBPACK_IMPORTED_MODULE_0___default().locales)["ru"] = new ru();

/******/ 	return __webpack_exports__;
/******/ })()
;
});