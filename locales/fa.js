(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("cronstrue"));
	else if(typeof define === 'function' && define.amd)
		define("locales/fa", ["cronstrue"], factory);
	else if(typeof exports === 'object')
		exports["locales/fa"] = factory(require("cronstrue"));
	else
		root["locales/fa"] = factory(root["cronstrue"]);
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
var fa_exports = __webpack_exports__;
"use strict";
Object.defineProperty(fa_exports, "__esModule", { value: true });
fa_exports.fa = void 0;
class fa {
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
        return "خطایی در نمایش توضیحات این وظیفه رخ داد. لطفا ساختار آن را بررسی کنید.";
    }
    everyMinute() {
        return "هر دقیقه";
    }
    everyHour() {
        return "هر ساعت";
    }
    atSpace() {
        return "در ";
    }
    everyMinuteBetweenX0AndX1() {
        return "هر دقیقه بین %s و %s";
    }
    at() {
        return "در";
    }
    spaceAnd() {
        return " و";
    }
    everySecond() {
        return "هر ثانیه";
    }
    everyX0Seconds() {
        return "هر %s ثانیه";
    }
    secondsX0ThroughX1PastTheMinute() {
        return "ثانیه %s تا %s دقیقه گذشته";
    }
    atX0SecondsPastTheMinute() {
        return "در %s قانیه از دقیقه گذشته";
    }
    everyX0Minutes() {
        return "هر %s دقیقه";
    }
    minutesX0ThroughX1PastTheHour() {
        return "دقیقه %s تا %s ساعت گذشته";
    }
    atX0MinutesPastTheHour() {
        return "در %s دقیقه پس از ساعت";
    }
    everyX0Hours() {
        return "هر %s ساعت";
    }
    betweenX0AndX1() {
        return "بین %s و %s";
    }
    atX0() {
        return "در %s";
    }
    commaEveryDay() {
        return ", هر روز";
    }
    commaEveryX0DaysOfTheWeek() {
        return ", هر %s روز از هفته";
    }
    commaX0ThroughX1() {
        return ", %s تا %s";
    }
    commaAndX0ThroughX1() {
        return ", و %s تا %s";
    }
    first() {
        return "اول";
    }
    second() {
        return "دوم";
    }
    third() {
        return "سوم";
    }
    fourth() {
        return "چهارم";
    }
    fifth() {
        return "پنجم";
    }
    commaOnThe() {
        return ", در ";
    }
    spaceX0OfTheMonth() {
        return " %s ماه";
    }
    lastDay() {
        return "آخرین روز";
    }
    commaOnTheLastX0OfTheMonth() {
        return ", در %s ماه";
    }
    commaOnlyOnX0() {
        return ", فقط در %s";
    }
    commaAndOnX0() {
        return ", و در %s";
    }
    commaEveryX0Months() {
        return ", هر %s ماه";
    }
    commaOnlyInX0() {
        return ", فقط در %s";
    }
    commaOnTheLastDayOfTheMonth() {
        return ", در آخرین روز ماه";
    }
    commaOnTheLastWeekdayOfTheMonth() {
        return ", در آخرین روز ماه";
    }
    commaDaysBeforeTheLastDayOfTheMonth() {
        return ", %s روز قبل از آخرین روز ماه";
    }
    firstWeekday() {
        return "اولین روز";
    }
    weekdayNearestDayX0() {
        return "روز نزدیک به روز %s";
    }
    commaOnTheX0OfTheMonth() {
        return ", در %s ماه";
    }
    commaEveryX0Days() {
        return ", هر %s روز";
    }
    commaBetweenDayX0AndX1OfTheMonth() {
        return ", بین روز %s و %s ماه";
    }
    commaOnDayX0OfTheMonth() {
        return ", در %s ماه";
    }
    commaEveryMinute() {
        return ", هر minute";
    }
    commaEveryHour() {
        return ", هر ساعت";
    }
    commaEveryX0Years() {
        return ", هر %s سال";
    }
    commaStartingX0() {
        return ", آغاز %s";
    }
    daysOfTheWeek() {
        return ["یک‌شنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنج‌شنبه", "جمعه", "شنبه"];
    }
    monthsOfTheYear() {
        return ["ژانویه", "فوریه", "مارس", "آپریل", "مه", "ژوئن", "ژوئیه", "آگوست", "سپتامبر", "اکتبر", "نوامبر", "دسامبر"];
    }
}
fa_exports.fa = fa;


(cronstrue__WEBPACK_IMPORTED_MODULE_0___default().locales)["fa"] = new fa();

/******/ 	return __webpack_exports__;
/******/ })()
;
});