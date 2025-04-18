(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("cronstrue"));
	else if(typeof define === 'function' && define.amd)
		define("locales/he", ["cronstrue"], factory);
	else if(typeof exports === 'object')
		exports["locales/he"] = factory(require("cronstrue"));
	else
		root["locales/he"] = factory(root["cronstrue"]);
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
var he_exports = __webpack_exports__;
"use strict";
Object.defineProperty(he_exports, "__esModule", { value: true });
he_exports.he = void 0;
class he {
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
        return "אירעה שגיאה בעת יצירת תיאור הביטוי. בדוק את תחביר הביטוי cron.";
    }
    everyMinute() {
        return "כל דקה";
    }
    everyHour() {
        return "כל שעה";
    }
    atSpace() {
        return "ב ";
    }
    everyMinuteBetweenX0AndX1() {
        return "כל דקה %s עד %s";
    }
    at() {
        return "ב";
    }
    spaceAnd() {
        return " ו";
    }
    everySecond() {
        return "כל שניה";
    }
    everyX0Seconds() {
        return "כל %s שניות";
    }
    secondsX0ThroughX1PastTheMinute() {
        return "%s עד %s שניות של הדקה";
    }
    atX0SecondsPastTheMinute() {
        return "ב %s שניות של הדקה";
    }
    everyX0Minutes() {
        return "כל %s דקות";
    }
    minutesX0ThroughX1PastTheHour() {
        return "%s עד %s דקות של השעה";
    }
    atX0MinutesPastTheHour() {
        return "ב %s דקות של השעה";
    }
    everyX0Hours() {
        return "כל %s שעות";
    }
    betweenX0AndX1() {
        return "%s עד %s";
    }
    atX0() {
        return "ב %s";
    }
    commaEveryDay() {
        return ", כל יום";
    }
    commaEveryX0DaysOfTheWeek() {
        return ", כל %s ימים בשבוע";
    }
    commaX0ThroughX1() {
        return ", %s עד %s";
    }
    commaAndX0ThroughX1() {
        return ", ו %s עד %s";
    }
    first() {
        return "ראשון";
    }
    second() {
        return "שני";
    }
    third() {
        return "שלישי";
    }
    fourth() {
        return "רביעי";
    }
    fifth() {
        return "חמישי";
    }
    commaOnThe() {
        return ", ב ";
    }
    spaceX0OfTheMonth() {
        return " %s של החודש";
    }
    lastDay() {
        return "היום האחרון";
    }
    commaOnTheLastX0OfTheMonth() {
        return ", רק ב %s של החודש";
    }
    commaOnlyOnX0() {
        return ", רק ב %s";
    }
    commaAndOnX0() {
        return ", וב %s";
    }
    commaEveryX0Months() {
        return ", כל %s חודשים";
    }
    commaOnlyInX0() {
        return ", רק ב %s";
    }
    commaOnTheLastDayOfTheMonth() {
        return ", ביום האחרון של החודש";
    }
    commaOnTheLastWeekdayOfTheMonth() {
        return ", ביום החול האחרון של החודש";
    }
    commaDaysBeforeTheLastDayOfTheMonth() {
        return ", %s ימים לפני היום האחרון בחודש";
    }
    firstWeekday() {
        return "יום החול הראשון";
    }
    weekdayNearestDayX0() {
        return "יום החול הראשון הקרוב אל %s";
    }
    commaOnTheX0OfTheMonth() {
        return ", ביום ה%s של החודש";
    }
    commaEveryX0Days() {
        return ", כל %s ימים";
    }
    commaBetweenDayX0AndX1OfTheMonth() {
        return ", בין היום ה%s וה%s של החודש";
    }
    commaOnDayX0OfTheMonth() {
        return ", ביום ה%s של החודש";
    }
    commaEveryX0Years() {
        return ", כל %s שנים";
    }
    commaStartingX0() {
        return ", החל מ %s";
    }
    daysOfTheWeek() {
        return ["יום ראשון", "יום שני", "יום שלישי", "יום רביעי", "יום חמישי", "יום שישי", "יום שבת"];
    }
    monthsOfTheYear() {
        return ["ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני", "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר"];
    }
}
he_exports.he = he;


(cronstrue__WEBPACK_IMPORTED_MODULE_0___default().locales)["he"] = new he();

/******/ 	return __webpack_exports__;
/******/ })()
;
});