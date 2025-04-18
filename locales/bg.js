(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("cronstrue"));
	else if(typeof define === 'function' && define.amd)
		define("locales/bg", ["cronstrue"], factory);
	else if(typeof exports === 'object')
		exports["locales/bg"] = factory(require("cronstrue"));
	else
		root["locales/bg"] = factory(root["cronstrue"]);
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
var bg_exports = __webpack_exports__;
"use strict";
Object.defineProperty(bg_exports, "__esModule", { value: true });
bg_exports.bg = void 0;
const getPhraseByPlural = (str, words) => {
    const strAsNumber = str != null ? Number(str) : 0;
    return strAsNumber < 2 ? words[0] : words[1];
};
const getPhraseByDayOfWeek = (str, words) => {
    const strAsNumber = str != null ? Number(str) : 0;
    return words[[1, 0, 0, 1, 0, 0, 1][strAsNumber]];
};
const getNumberEnding = (str, gender) => {
    let strAsNumber = str != null ? Number(str) : 1;
    strAsNumber = Math.max(Math.min(strAsNumber < 10 || (strAsNumber > 20 && strAsNumber % 10 !== 0) ? strAsNumber % 10 : 3, 3), 1) - 1;
    const genderIndex = ['м', 'ж', 'ср'].indexOf(gender);
    return ['в', 'р', 'т'][strAsNumber] + ['и', 'а', 'о'][genderIndex];
};
class bg {
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
        return 'всяка минута';
    }
    everyHour() {
        return 'всеки час';
    }
    anErrorOccuredWhenGeneratingTheExpressionD() {
        return 'Възникна грешка при генериране на описанието на израза. Проверете синтаксиса на cron израза.';
    }
    atSpace() {
        return 'В ';
    }
    everyMinuteBetweenX0AndX1() {
        return 'Всяка минута от %s до %s';
    }
    at() {
        return 'В';
    }
    spaceAnd() {
        return ' и';
    }
    everySecond() {
        return 'всяка секунда';
    }
    everyX0Seconds(s) {
        return 'всеки %s секунди';
    }
    secondsX0ThroughX1PastTheMinute() {
        return 'секунди от %s до %s';
    }
    atX0SecondsPastTheMinute(s) {
        return `%s-${getNumberEnding(s, 'ж')} секунда`;
    }
    everyX0Minutes(s) {
        return 'всеки %s минути';
    }
    minutesX0ThroughX1PastTheHour() {
        return 'минути от %s до %s';
    }
    atX0MinutesPastTheHour(s) {
        return `%s-${getNumberEnding(s, 'ж')} минутa`;
    }
    everyX0Hours(s) {
        return 'всеки %s часа';
    }
    betweenX0AndX1() {
        return 'от %s до %s';
    }
    atX0() {
        return 'в %s';
    }
    commaEveryDay() {
        return ', всеки ден';
    }
    commaEveryX0DaysOfTheWeek(s) {
        return getPhraseByPlural(s, [', всеки %s ден от седмицата', ', всеки %s дена от седмицата']);
    }
    commaX0ThroughX1(s) {
        return ', от %s до %s';
    }
    commaAndX0ThroughX1(s) {
        return ' и от %s до %s';
    }
    first(s) {
        return getPhraseByDayOfWeek(s, ['первият', 'первата']);
    }
    second(s) {
        return getPhraseByDayOfWeek(s, ['вторият', 'втората']);
    }
    third(s) {
        return getPhraseByDayOfWeek(s, ['третият', 'третата']);
    }
    fourth(s) {
        return getPhraseByDayOfWeek(s, ['четвертият', 'четвертата']);
    }
    fifth(s) {
        return getPhraseByDayOfWeek(s, ['петият', 'петата']);
    }
    commaOnThe(s) {
        return ', ';
    }
    spaceX0OfTheMonth() {
        return ' %s на месеца';
    }
    lastDay() {
        return 'последният ден';
    }
    commaOnTheLastX0OfTheMonth(s) {
        return getPhraseByDayOfWeek(s, [', в последният %s от месеца', ', в последната %s отмесеца']);
    }
    commaOnlyOnX0(s) {
        return ', %s';
    }
    commaAndOnX0() {
        return ' и %s';
    }
    commaEveryX0Months(s) {
        return ' всеки %s месеца';
    }
    commaOnlyInMonthX0() {
        return ', %s';
    }
    commaOnlyInX0() {
        return ', в %s';
    }
    commaOnTheLastDayOfTheMonth() {
        return ', в последният ден на месеца';
    }
    commaOnTheLastWeekdayOfTheMonth() {
        return ', в последния делничен ден от месеца';
    }
    commaDaysBeforeTheLastDayOfTheMonth(s) {
        return getPhraseByPlural(s, [', %s ден преди края на месеца', ', %s дена преди края на месеца']);
    }
    firstWeekday() {
        return 'първият делничен ден';
    }
    weekdayNearestDayX0() {
        return 'най-близкият делничен ден до %s число';
    }
    commaOnTheX0OfTheMonth() {
        return ', на %s число от месеца';
    }
    commaEveryX0Days(s) {
        return getPhraseByPlural(s, [', всеки %s ден', ', всеки %s дена']);
    }
    commaBetweenDayX0AndX1OfTheMonth(s) {
        var _a;
        const values = (_a = s === null || s === void 0 ? void 0 : s.split('-')) !== null && _a !== void 0 ? _a : [];
        return `, от %s-${getNumberEnding(values[0], 'ср')} до %s-${getNumberEnding(values[1], 'ср')} число на месеца`;
    }
    commaOnDayX0OfTheMonth(s) {
        return `, на %s-${getNumberEnding(s, 'ср')} число от месеца`;
    }
    commaEveryX0Years(s) {
        return getPhraseByPlural(s, [', всяка %s година', ', всеки %s години']);
    }
    commaStartingX0() {
        return ', започвайки %s';
    }
    daysOfTheWeek() {
        return ['неделя', 'понеделник', 'вторник', 'сряда', 'четвъртък', 'петък', 'събота'];
    }
    monthsOfTheYear() {
        return ['януари', 'февруари', 'март', 'април', 'май', 'юни', 'юли', 'август', 'септевмври', 'октомври', 'ноември', 'декември'];
    }
}
bg_exports.bg = bg;


(cronstrue__WEBPACK_IMPORTED_MODULE_0___default().locales)["bg"] = new bg();

/******/ 	return __webpack_exports__;
/******/ })()
;
});