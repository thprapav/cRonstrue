(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("cronstrue"));
	else if(typeof define === 'function' && define.amd)
		define("locales/pl", ["cronstrue"], factory);
	else if(typeof exports === 'object')
		exports["locales/pl"] = factory(require("cronstrue"));
	else
		root["locales/pl"] = factory(root["cronstrue"]);
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
var pl_exports = __webpack_exports__;
"use strict";
Object.defineProperty(pl_exports, "__esModule", { value: true });
pl_exports.pl = void 0;
class pl {
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
    anErrorOccuredWhenGeneratingTheExpressionD() {
        return "Wystąpił błąd podczas generowania opisu wyrażenia cron. Sprawdź składnię wyrażenia cron.";
    }
    at() {
        return "O";
    }
    atSpace() {
        return "O ";
    }
    atX0() {
        return "o %s";
    }
    atX0MinutesPastTheHour() {
        return "w %s minucie";
    }
    atX0SecondsPastTheMinute() {
        return "w %s sekundzie";
    }
    betweenX0AndX1() {
        return "od %s do %s";
    }
    commaBetweenDayX0AndX1OfTheMonth() {
        return ", od %s-ego do %s-ego dnia miesiąca";
    }
    commaEveryDay() {
        return ", co dzień";
    }
    commaEveryX0Days() {
        return ", co %s dni";
    }
    commaEveryX0DaysOfTheWeek() {
        return ", co %s dni tygodnia";
    }
    commaEveryX0Months() {
        return ", co %s miesięcy";
    }
    commaEveryX0Years() {
        return ", co %s lat";
    }
    commaOnDayX0OfTheMonth() {
        return ", %s-ego dnia miesiąca";
    }
    commaOnlyInX0() {
        return ", tylko %s";
    }
    commaOnlyOnX0() {
        return ", tylko %s";
    }
    commaAndOnX0() {
        return ", i %s";
    }
    commaOnThe() {
        return ", ";
    }
    commaOnTheLastDayOfTheMonth() {
        return ", ostatni dzień miesiąca";
    }
    commaOnTheLastWeekdayOfTheMonth() {
        return ", ostatni dzień roboczy miesiąca";
    }
    commaDaysBeforeTheLastDayOfTheMonth() {
        return ", %s dni przed ostatnim dniem miesiąca";
    }
    commaOnTheLastX0OfTheMonth() {
        return ", ostatni %s miesiąca";
    }
    commaOnTheX0OfTheMonth() {
        return ", %s miesiąca";
    }
    commaX0ThroughX1() {
        return ", od %s do %s";
    }
    commaAndX0ThroughX1() {
        return ", i od %s do %s";
    }
    everyHour() {
        return "co godzinę";
    }
    everyMinute() {
        return "co minutę";
    }
    everyMinuteBetweenX0AndX1() {
        return "Co minutę od %s do %s";
    }
    everySecond() {
        return "co sekundę";
    }
    everyX0Hours() {
        return "co %s godzin";
    }
    everyX0Minutes() {
        return "co %s minut";
    }
    everyX0Seconds() {
        return "co %s sekund";
    }
    fifth() {
        return "piąty";
    }
    first() {
        return "pierwszy";
    }
    firstWeekday() {
        return "pierwszy dzień roboczy";
    }
    fourth() {
        return "czwarty";
    }
    minutesX0ThroughX1PastTheHour() {
        return "minuty od %s do %s";
    }
    second() {
        return "drugi";
    }
    secondsX0ThroughX1PastTheMinute() {
        return "sekundy od %s do %s";
    }
    spaceAnd() {
        return " i";
    }
    spaceX0OfTheMonth() {
        return " %s miesiąca";
    }
    lastDay() {
        return "ostatni dzień";
    }
    third() {
        return "trzeci";
    }
    weekdayNearestDayX0() {
        return "dzień roboczy najbliższy %s-ego dnia";
    }
    commaStartingX0() {
        return ", startowy %s";
    }
    daysOfTheWeek() {
        return ["niedziela", "poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota"];
    }
    monthsOfTheYear() {
        return [
            "styczeń",
            "luty",
            "marzec",
            "kwiecień",
            "maj",
            "czerwiec",
            "lipiec",
            "sierpień",
            "wrzesień",
            "październik",
            "listopad",
            "grudzień",
        ];
    }
}
pl_exports.pl = pl;


(cronstrue__WEBPACK_IMPORTED_MODULE_0___default().locales)["pl"] = new pl();

/******/ 	return __webpack_exports__;
/******/ })()
;
});