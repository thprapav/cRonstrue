(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("cronstrue"));
	else if(typeof define === 'function' && define.amd)
		define("locales/be", ["cronstrue"], factory);
	else if(typeof exports === 'object')
		exports["locales/be"] = factory(require("cronstrue"));
	else
		root["locales/be"] = factory(root["cronstrue"]);
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
var be_exports = __webpack_exports__;
"use strict";
Object.defineProperty(be_exports, "__esModule", { value: true });
be_exports.be = void 0;
class be {
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
    everyMinute() {
        return "кожную хвіліну";
    }
    everyHour() {
        return "кожную гадзіну";
    }
    anErrorOccuredWhenGeneratingTheExpressionD() {
        return "Адбылася памылка падчас генерацыі апісання выразы. Праверце сінтаксіс крон-выразы.";
    }
    atSpace() {
        return "У ";
    }
    everyMinuteBetweenX0AndX1() {
        return "Кожную хвіліну з %s да %s";
    }
    at() {
        return "У";
    }
    spaceAnd() {
        return " і";
    }
    everySecond() {
        return "кожную секунду";
    }
    everyX0Seconds() {
        return "кожныя %s секунд";
    }
    secondsX0ThroughX1PastTheMinute() {
        return "секунды з %s па %s";
    }
    atX0SecondsPastTheMinute() {
        return "у %s секунд";
    }
    everyX0Minutes() {
        return "кожныя %s хвілін";
    }
    minutesX0ThroughX1PastTheHour() {
        return "хвіліны з %s па %s";
    }
    atX0MinutesPastTheHour() {
        return "у %s хвілін";
    }
    everyX0Hours() {
        return "кожныя %s гадзін";
    }
    betweenX0AndX1() {
        return "з %s па %s";
    }
    atX0() {
        return "у %s";
    }
    commaEveryDay() {
        return ", кожны дзень";
    }
    commaEveryX0DaysOfTheWeek() {
        return ", кожныя %s дзён тыдня";
    }
    commaX0ThroughX1() {
        return ", %s па %s";
    }
    commaAndX0ThroughX1() {
        return ", і %s па %s";
    }
    first() {
        return "першы";
    }
    second() {
        return "другі";
    }
    third() {
        return "трэці";
    }
    fourth() {
        return "чацвёрты";
    }
    fifth() {
        return "пяты";
    }
    commaOnThe() {
        return ", у ";
    }
    spaceX0OfTheMonth() {
        return " %s месяца";
    }
    lastDay() {
        return "апошні дзень";
    }
    commaOnTheLastX0OfTheMonth() {
        return ", у апошні %s месяца";
    }
    commaOnlyOnX0() {
        return ", толькі ў %s";
    }
    commaAndOnX0() {
        return ", і ў %s";
    }
    commaEveryX0Months() {
        return ", кожныя %s месяцаў";
    }
    commaOnlyInX0() {
        return ", толькі ў %s";
    }
    commaOnTheLastDayOfTheMonth() {
        return ", у апошні дзень месяца";
    }
    commaOnTheLastWeekdayOfTheMonth() {
        return ", у апошні будні дзень месяца";
    }
    commaDaysBeforeTheLastDayOfTheMonth() {
        return ", %s дзён да апошняга дня месяца";
    }
    firstWeekday() {
        return "першы будны дзень";
    }
    weekdayNearestDayX0() {
        return "найбліжэйшы будны дзень да %s";
    }
    commaOnTheX0OfTheMonth() {
        return ", у %s месяцы";
    }
    commaEveryX0Days() {
        return ", кожныя %s дзён";
    }
    commaBetweenDayX0AndX1OfTheMonth() {
        return ", з %s па %s лік месяца";
    }
    commaOnDayX0OfTheMonth() {
        return ", у %s лік месяца";
    }
    commaEveryX0Years() {
        return ", кожныя %s гадоў";
    }
    commaStartingX0() {
        return ", пачатак %s";
    }
    daysOfTheWeek() {
        return ["нядзеля", "панядзелак", "аўторак", "серада", "чацвер", "пятніца", "субота"];
    }
    monthsOfTheYear() {
        return [
            "студзень",
            "люты",
            "сакавік",
            "красавік",
            "травень",
            "чэрвень",
            "ліпень",
            "жнівень",
            "верасень",
            "кастрычнік",
            "лістапад",
            "снежань",
        ];
    }
}
be_exports.be = be;


(cronstrue__WEBPACK_IMPORTED_MODULE_0___default().locales)["be"] = new be();

/******/ 	return __webpack_exports__;
/******/ })()
;
});