(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("cronstrue"));
	else if(typeof define === 'function' && define.amd)
		define("locales/en", ["cronstrue"], factory);
	else if(typeof exports === 'object')
		exports["locales/en"] = factory(require("cronstrue"));
	else
		root["locales/en"] = factory(root["cronstrue"]);
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
var en_exports = __webpack_exports__;
"use strict";
Object.defineProperty(en_exports, "__esModule", { value: true });
en_exports.en = void 0;
class en {
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
        return false;
    }
    anErrorOccuredWhenGeneratingTheExpressionD() {
        return "An error occurred when generating the expression description. Check the cron expression syntax.";
    }
    everyMinute() {
        return "every minute";
    }
    everyHour() {
        return "every hour";
    }
    atSpace() {
        return "At ";
    }
    everyMinuteBetweenX0AndX1() {
        return "Every minute between %s and %s";
    }
    at() {
        return "At";
    }
    spaceAnd() {
        return " and";
    }
    everySecond() {
        return "every second";
    }
    everyX0Seconds() {
        return "every %s seconds";
    }
    secondsX0ThroughX1PastTheMinute() {
        return "seconds %s through %s past the minute";
    }
    atX0SecondsPastTheMinute() {
        return "at %s seconds past the minute";
    }
    everyX0Minutes() {
        return "every %s minutes";
    }
    minutesX0ThroughX1PastTheHour() {
        return "minutes %s through %s past the hour";
    }
    atX0MinutesPastTheHour() {
        return "at %s minutes past the hour";
    }
    everyX0Hours() {
        return "every %s hours";
    }
    betweenX0AndX1() {
        return "between %s and %s";
    }
    atX0() {
        return "at %s";
    }
    commaEveryDay() {
        return ", every day";
    }
    commaEveryX0DaysOfTheWeek() {
        return ", every %s days of the week";
    }
    commaX0ThroughX1() {
        return ", %s through %s";
    }
    commaAndX0ThroughX1() {
        return ", %s through %s";
    }
    first() {
        return "first";
    }
    second() {
        return "second";
    }
    third() {
        return "third";
    }
    fourth() {
        return "fourth";
    }
    fifth() {
        return "fifth";
    }
    commaOnThe() {
        return ", on the ";
    }
    spaceX0OfTheMonth() {
        return " %s of the month";
    }
    lastDay() {
        return "the last day";
    }
    commaOnTheLastX0OfTheMonth() {
        return ", on the last %s of the month";
    }
    commaOnlyOnX0() {
        return ", only on %s";
    }
    commaAndOnX0() {
        return ", and on %s";
    }
    commaEveryX0Months() {
        return ", every %s months";
    }
    commaOnlyInX0() {
        return ", only in %s";
    }
    commaOnTheLastDayOfTheMonth() {
        return ", on the last day of the month";
    }
    commaOnTheLastWeekdayOfTheMonth() {
        return ", on the last weekday of the month";
    }
    commaDaysBeforeTheLastDayOfTheMonth() {
        return ", %s days before the last day of the month";
    }
    firstWeekday() {
        return "first weekday";
    }
    weekdayNearestDayX0() {
        return "weekday nearest day %s";
    }
    commaOnTheX0OfTheMonth() {
        return ", on the %s of the month";
    }
    commaEveryX0Days() {
        return ", every %s days";
    }
    commaBetweenDayX0AndX1OfTheMonth() {
        return ", between day %s and %s of the month";
    }
    commaOnDayX0OfTheMonth() {
        return ", on day %s of the month";
    }
    commaEveryHour() {
        return ", every hour";
    }
    commaEveryX0Years() {
        return ", every %s years";
    }
    commaStartingX0() {
        return ", starting %s";
    }
    daysOfTheWeek() {
        return ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    }
    monthsOfTheYear() {
        return [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ];
    }
}
en_exports.en = en;


(cronstrue__WEBPACK_IMPORTED_MODULE_0___default().locales)["en"] = new en();

/******/ 	return __webpack_exports__;
/******/ })()
;
});