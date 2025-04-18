(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("cronstrue"));
	else if(typeof define === 'function' && define.amd)
		define("locales/sw", ["cronstrue"], factory);
	else if(typeof exports === 'object')
		exports["locales/sw"] = factory(require("cronstrue"));
	else
		root["locales/sw"] = factory(root["cronstrue"]);
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
var sw_exports = __webpack_exports__;
"use strict";
Object.defineProperty(sw_exports, "__esModule", { value: true });
sw_exports.sw = void 0;
class sw {
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
        return "Kuna tatizo wakati wa kutunga msemo. Angalia cron expression syntax.";
    }
    everyMinute() {
        return "kila dakika";
    }
    everyHour() {
        return "kila saa";
    }
    atSpace() {
        return "Kwa ";
    }
    everyMinuteBetweenX0AndX1() {
        return "Kila dakika kwanzia %s hadi %s";
    }
    at() {
        return "Kwa";
    }
    spaceAnd() {
        return " na";
    }
    everySecond() {
        return "kila sekunde";
    }
    everyX0Seconds() {
        return "kila sekunde %s";
    }
    secondsX0ThroughX1PastTheMinute() {
        return "sekunde ya %s hadi %s baada ya dakika";
    }
    atX0SecondsPastTheMinute() {
        return "sekunde %s baada ya dakika";
    }
    everyX0Minutes() {
        return "kila dakika %s";
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
        return "kati ya %s na %s";
    }
    atX0() {
        return "kwenye %s";
    }
    commaEveryDay() {
        return ", kila siku";
    }
    commaEveryX0DaysOfTheWeek() {
        return ", kila siku %s ya wiki";
    }
    commaX0ThroughX1() {
        return ", %s hadi %s";
    }
    commaAndX0ThroughX1() {
        return ", na %s hadi %s";
    }
    first() {
        return "ya kwanza";
    }
    second() {
        return "ya pili";
    }
    third() {
        return "ya tatu";
    }
    fourth() {
        return "ya nne";
    }
    fifth() {
        return "ya tano";
    }
    commaOnThe() {
        return ", kwenye ";
    }
    spaceX0OfTheMonth() {
        return " siku %s ya mwezi";
    }
    lastDay() {
        return "siku ya mwisho";
    }
    commaOnTheLastX0OfTheMonth() {
        return ", siku ya %s ya mwezi";
    }
    commaOnlyOnX0() {
        return ", kwa %s tu";
    }
    commaAndOnX0() {
        return ", na pia %s";
    }
    commaEveryX0Months() {
        return ", kila mwezi wa %s";
    }
    commaOnlyInX0() {
        return ", kwa %s tu";
    }
    commaOnTheLastDayOfTheMonth() {
        return ", siku ya mwisho wa mwezi";
    }
    commaOnTheLastWeekdayOfTheMonth() {
        return ", wikendi ya mwisho wa mwezi";
    }
    commaDaysBeforeTheLastDayOfTheMonth() {
        return ", siku ya %s kabla ya siku ya mwisho wa mwezi";
    }
    firstWeekday() {
        return "siku za kazi ya kwanza";
    }
    weekdayNearestDayX0() {
        return "siku ya kazi karibu na siku ya %s";
    }
    commaOnTheX0OfTheMonth() {
        return ", siku ya %s ya mwezi";
    }
    commaEveryX0Days() {
        return ", kila siku %s";
    }
    commaBetweenDayX0AndX1OfTheMonth() {
        return ", kati ya siku %s na %s ya mwezi";
    }
    commaOnDayX0OfTheMonth() {
        return ", siku ya %s ya mwezi";
    }
    commaEveryX0Years() {
        return ", kila miaka %s";
    }
    commaStartingX0() {
        return ", kwanzia %s";
    }
    daysOfTheWeek() {
        return ["Jumapili", "Jumatatu", "Jumanne", "Jumatano", "Alhamisi", "Ijumaa", "Jumamosi"];
    }
    monthsOfTheYear() {
        return [
            "Januari",
            "Februari",
            "Machi",
            "Aprili",
            "Mei",
            "Juni",
            "Julai",
            "Agosti",
            "Septemba",
            "Oktoba",
            "Novemba",
            "Desemba",
        ];
    }
}
sw_exports.sw = sw;


(cronstrue__WEBPACK_IMPORTED_MODULE_0___default().locales)["sw"] = new sw();

/******/ 	return __webpack_exports__;
/******/ })()
;
});