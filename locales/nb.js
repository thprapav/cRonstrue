(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("cronstrue"));
	else if(typeof define === 'function' && define.amd)
		define("locales/nb", ["cronstrue"], factory);
	else if(typeof exports === 'object')
		exports["locales/nb"] = factory(require("cronstrue"));
	else
		root["locales/nb"] = factory(root["cronstrue"]);
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
var nb_exports = __webpack_exports__;
"use strict";
Object.defineProperty(nb_exports, "__esModule", { value: true });
nb_exports.nb = void 0;
class nb {
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
        return "En feil inntraff ved generering av uttrykksbeskrivelse. Sjekk cron syntaks.";
    }
    at() {
        return "Kl.";
    }
    atSpace() {
        return "Kl.";
    }
    atX0() {
        return "på %s";
    }
    atX0MinutesPastTheHour() {
        return "på %s minutter etter timen";
    }
    atX0SecondsPastTheMinute() {
        return "på %s sekunder etter minuttet";
    }
    betweenX0AndX1() {
        return "mellom %s og %s";
    }
    commaBetweenDayX0AndX1OfTheMonth() {
        return ", mellom dag %s og %s av måneden";
    }
    commaEveryDay() {
        return ", hver dag";
    }
    commaEveryX0Days() {
        return ", hver %s dag";
    }
    commaEveryX0DaysOfTheWeek() {
        return ", hver %s ukedag";
    }
    commaEveryX0Months() {
        return ", hver %s måned";
    }
    commaEveryX0Years() {
        return ", hvert %s år";
    }
    commaOnDayX0OfTheMonth() {
        return ", på dag %s av måneden";
    }
    commaOnlyInX0() {
        return ", bare i %s";
    }
    commaOnlyOnX0() {
        return ", på %s";
    }
    commaAndOnX0() {
        return ", og på %s";
    }
    commaOnThe() {
        return ", på ";
    }
    commaOnTheLastDayOfTheMonth() {
        return ", på den siste dagen i måneden";
    }
    commaOnTheLastWeekdayOfTheMonth() {
        return ", den siste ukedagen i måneden";
    }
    commaDaysBeforeTheLastDayOfTheMonth() {
        return ", %s dager før den siste dagen i måneden";
    }
    commaOnTheLastX0OfTheMonth() {
        return ", på den siste %s av måneden";
    }
    commaOnTheX0OfTheMonth() {
        return ", på den %s av måneden";
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
        return "hvert minutt";
    }
    everyMinuteBetweenX0AndX1() {
        return "Hvert minutt mellom %s og %s";
    }
    everySecond() {
        return "hvert sekund";
    }
    everyX0Hours() {
        return "hver %s time";
    }
    everyX0Minutes() {
        return "hvert %s minutt";
    }
    everyX0Seconds() {
        return "hvert %s sekund";
    }
    fifth() {
        return "femte";
    }
    first() {
        return "første";
    }
    firstWeekday() {
        return "første ukedag";
    }
    fourth() {
        return "fjerde";
    }
    minutesX0ThroughX1PastTheHour() {
        return "minuttene fra %s til og med %s etter timen";
    }
    second() {
        return "andre";
    }
    secondsX0ThroughX1PastTheMinute() {
        return "sekundene fra %s til og med %s etter minuttet";
    }
    spaceAnd() {
        return " og";
    }
    spaceX0OfTheMonth() {
        return " %s i måneden";
    }
    lastDay() {
        return "den siste dagen";
    }
    third() {
        return "tredje";
    }
    weekdayNearestDayX0() {
        return "ukedag nærmest dag %s";
    }
    commaStartingX0() {
        return ", starter %s";
    }
    daysOfTheWeek() {
        return ["søndag", "mandag", "tirsdag", "onsdag", "torsdag", "fredag", "lørdag"];
    }
    monthsOfTheYear() {
        return [
            "januar",
            "februar",
            "mars",
            "april",
            "mai",
            "juni",
            "juli",
            "august",
            "september",
            "oktober",
            "november",
            "desember",
        ];
    }
}
nb_exports.nb = nb;


(cronstrue__WEBPACK_IMPORTED_MODULE_0___default().locales)["nb"] = new nb();

/******/ 	return __webpack_exports__;
/******/ })()
;
});