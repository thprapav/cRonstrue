(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("cronstrue"));
	else if(typeof define === 'function' && define.amd)
		define("locales/da", ["cronstrue"], factory);
	else if(typeof exports === 'object')
		exports["locales/da"] = factory(require("cronstrue"));
	else
		root["locales/da"] = factory(root["cronstrue"]);
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
var da_exports = __webpack_exports__;
"use strict";
Object.defineProperty(da_exports, "__esModule", { value: true });
da_exports.da = void 0;
class da {
    use24HourTimeFormatByDefault() {
        return true;
    }
    anErrorOccuredWhenGeneratingTheExpressionD() {
        return "Der opstod en fejl ved generering af udtryksbeskrivelsen. Tjek cron-ekspressionssyntaxen.";
    }
    at() {
        return "kl";
    }
    atSpace() {
        return "kl ";
    }
    atX0() {
        return "kl %s";
    }
    atX0MinutesPastTheHour() {
        return "%s minutter efter timeskift";
    }
    atX0SecondsPastTheMinute() {
        return "%s sekunder efter minutskift";
    }
    betweenX0AndX1() {
        return "mellem %s og %s";
    }
    commaBetweenDayX0AndX1OfTheMonth() {
        return ", mellem dag %s og %s i måneden";
    }
    commaEveryDay() {
        return ", hver dag";
    }
    commaEveryX0Days() {
        return ", hver %s. dag";
    }
    commaEveryX0DaysOfTheWeek() {
        return ", hver %s. ugedag";
    }
    commaEveryX0Months() {
        return ", hver %s. måned";
    }
    commaEveryX0Years() {
        return ", hvert %s. år";
    }
    commaOnDayX0OfTheMonth() {
        return ", på dag %s i måneden";
    }
    commaOnlyInX0() {
        return ", kun i %s";
    }
    commaOnlyOnX0(s) {
        return ", på enhver %s";
    }
    commaAndOnX0() {
        return ", og på %s";
    }
    commaOnThe() {
        return ", på den ";
    }
    commaOnTheLastDayOfTheMonth() {
        return ", på den sidste dag i måneden";
    }
    commaOnTheLastWeekdayOfTheMonth() {
        return ", på den sidste hverdag i måneden";
    }
    commaDaysBeforeTheLastDayOfTheMonth() {
        return ", %s dage før den sidste dag i måneden";
    }
    commaOnTheLastX0OfTheMonth() {
        return ", på den sidste %s i måneden";
    }
    commaOnTheX0OfTheMonth() {
        return ", på den %s i måneden";
    }
    commaX0ThroughX1() {
        return ", %s til og med %s";
    }
    commaAndX0ThroughX1() {
        return ", og %s til og med %s";
    }
    everyHour() {
        return "hver time";
    }
    everyMinute() {
        return "hvert minut";
    }
    everyMinuteBetweenX0AndX1() {
        return "hvert minut mellem %s og %s";
    }
    everySecond() {
        return "hvert sekund";
    }
    everyX0Hours() {
        return "hver %s. time";
    }
    everyX0Minutes() {
        return "hvert %s. minut";
    }
    everyX0Seconds() {
        return "hvert %s. sekund";
    }
    fifth() {
        return "femte";
    }
    first() {
        return "første";
    }
    firstWeekday() {
        return "første hverdag";
    }
    fourth() {
        return "fjerde";
    }
    minutesX0ThroughX1PastTheHour() {
        return "minutterne fra %s til og med %s hver time";
    }
    second() {
        return "anden";
    }
    secondsX0ThroughX1PastTheMinute() {
        return "sekunderne fra %s til og med %s hvert minut";
    }
    spaceAnd() {
        return " og";
    }
    spaceX0OfTheMonth() {
        return " %s i måneden";
    }
    lastDay() {
        return "sidste dag";
    }
    third() {
        return "tredje";
    }
    weekdayNearestDayX0() {
        return "hverdag nærmest dag %s";
    }
    commaMonthX0ThroughMonthX1() {
        return null;
    }
    commaYearX0ThroughYearX1() {
        return null;
    }
    atX0MinutesPastTheHourGt20() {
        return null;
    }
    atX0SecondsPastTheMinuteGt20() {
        return null;
    }
    commaStartingX0() {
        return ", startende %s";
    }
    daysOfTheWeek() {
        return ["søndag", "mandag", "tirsdag", "onsdag", "torsdag", "fredag", "lørdag"];
    }
    monthsOfTheYear() {
        return [
            "januar",
            "februar",
            "marts",
            "april",
            "maj",
            "juni",
            "juli",
            "august",
            "september",
            "oktober",
            "november",
            "december",
        ];
    }
}
da_exports.da = da;


(cronstrue__WEBPACK_IMPORTED_MODULE_0___default().locales)["da"] = new da();

/******/ 	return __webpack_exports__;
/******/ })()
;
});