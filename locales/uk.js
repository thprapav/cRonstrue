(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("cronstrue"));
	else if(typeof define === 'function' && define.amd)
		define("locales/uk", ["cronstrue"], factory);
	else if(typeof exports === 'object')
		exports["locales/uk"] = factory(require("cronstrue"));
	else
		root["locales/uk"] = factory(root["cronstrue"]);
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
var uk_exports = __webpack_exports__;
"use strict";
Object.defineProperty(uk_exports, "__esModule", { value: true });
uk_exports.uk = void 0;
class uk {
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
        return "щохвилини";
    }
    everyHour() {
        return "щогодини";
    }
    anErrorOccuredWhenGeneratingTheExpressionD() {
        return "ВІдбулася помилка підчас генерації опису. Перевірта правильність написання cron виразу.";
    }
    atSpace() {
        return "О ";
    }
    everyMinuteBetweenX0AndX1() {
        return "Щохвилини між %s та %s";
    }
    at() {
        return "О";
    }
    spaceAnd() {
        return " та";
    }
    everySecond() {
        return "Щосекунди";
    }
    everyX0Seconds() {
        return "кожні %s секунд";
    }
    secondsX0ThroughX1PastTheMinute() {
        return "з %s по %s секунду";
    }
    atX0SecondsPastTheMinute() {
        return "о %s секунді";
    }
    everyX0Minutes() {
        return "кожні %s хвилин";
    }
    minutesX0ThroughX1PastTheHour() {
        return "з %s по %s хвилину";
    }
    atX0MinutesPastTheHour() {
        return "о %s хвилині";
    }
    everyX0Hours() {
        return "кожні %s годин";
    }
    betweenX0AndX1() {
        return "між %s та %s";
    }
    atX0() {
        return "о %s";
    }
    commaEveryDay() {
        return ", щоденно";
    }
    commaEveryX0DaysOfTheWeek() {
        return ", кожен %s день тижня";
    }
    commaX0ThroughX1() {
        return ", %s по %s";
    }
    commaAndX0ThroughX1() {
        return ", та %s по %s";
    }
    first() {
        return "перший";
    }
    second() {
        return "другий";
    }
    third() {
        return "третій";
    }
    fourth() {
        return "четвертий";
    }
    fifth() {
        return "п'ятий";
    }
    commaOnThe() {
        return ", в ";
    }
    spaceX0OfTheMonth() {
        return " %s місяця";
    }
    lastDay() {
        return "останній день";
    }
    commaOnTheLastX0OfTheMonth() {
        return ", в останній %s місяця";
    }
    commaOnlyOnX0() {
        return ", тільки в %s";
    }
    commaAndOnX0() {
        return ", і в %s";
    }
    commaEveryX0Months() {
        return ", кожен %s місяць";
    }
    commaOnlyInX0() {
        return ", тільки в %s";
    }
    commaOnTheLastDayOfTheMonth() {
        return ", в останній день місяця";
    }
    commaOnTheLastWeekdayOfTheMonth() {
        return ", в останній будень місяця";
    }
    commaDaysBeforeTheLastDayOfTheMonth() {
        return ", %s днів до останнього дня місяця";
    }
    firstWeekday() {
        return "перший будень";
    }
    weekdayNearestDayX0() {
        return "будень найближчий до %s дня";
    }
    commaOnTheX0OfTheMonth() {
        return ", в %s місяця";
    }
    commaEveryX0Days() {
        return ", кожен %s день";
    }
    commaBetweenDayX0AndX1OfTheMonth() {
        return ", між %s та %s днями місяця";
    }
    commaOnDayX0OfTheMonth() {
        return ", на %s день місяця";
    }
    commaEveryX0Years() {
        return ", кожні %s роки";
    }
    commaStartingX0() {
        return ", початок %s";
    }
    daysOfTheWeek() {
        return ["неділя", "понеділок", "вівторок", "середа", "четвер", "п'ятниця", "субота"];
    }
    monthsOfTheYear() {
        return [
            "січень",
            "лютий",
            "березень",
            "квітень",
            "травень",
            "червень",
            "липень",
            "серпень",
            "вересень",
            "жовтень",
            "листопад",
            "грудень",
        ];
    }
}
uk_exports.uk = uk;


(cronstrue__WEBPACK_IMPORTED_MODULE_0___default().locales)["uk"] = new uk();

/******/ 	return __webpack_exports__;
/******/ })()
;
});