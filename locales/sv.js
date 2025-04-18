(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("cronstrue"));
	else if(typeof define === 'function' && define.amd)
		define("locales/sv", ["cronstrue"], factory);
	else if(typeof exports === 'object')
		exports["locales/sv"] = factory(require("cronstrue"));
	else
		root["locales/sv"] = factory(root["cronstrue"]);
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
var sv_exports = __webpack_exports__;
"use strict";
Object.defineProperty(sv_exports, "__esModule", { value: true });
sv_exports.sv = void 0;
class sv {
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
        return "Ett fel inträffade vid generering av uttryckets beskrivning. Kontrollera cron-uttryckets syntax.";
    }
    everyMinute() {
        return "varje minut";
    }
    everyHour() {
        return "varje timme";
    }
    atSpace() {
        return "Kl ";
    }
    everyMinuteBetweenX0AndX1() {
        return "Varje minut mellan %s och %s";
    }
    at() {
        return "Kl";
    }
    spaceAnd() {
        return " och";
    }
    everySecond() {
        return "varje sekund";
    }
    everyX0Seconds() {
        return "varje %s sekund";
    }
    secondsX0ThroughX1PastTheMinute() {
        return "sekunderna från %s till och med %s efter minuten";
    }
    atX0SecondsPastTheMinute() {
        return "på %s sekunder efter minuten";
    }
    everyX0Minutes() {
        return "var %s minut";
    }
    minutesX0ThroughX1PastTheHour() {
        return "minuterna från %s till och med %s efter timmen";
    }
    atX0MinutesPastTheHour() {
        return "på %s minuten efter timmen";
    }
    everyX0Hours() {
        return "var %s timme";
    }
    betweenX0AndX1() {
        return "mellan %s och %s";
    }
    atX0() {
        return "kl %s";
    }
    commaEveryDay() {
        return ", varje dag";
    }
    commaEveryX0DaysOfTheWeek() {
        return ", var %s dag i veckan";
    }
    commaX0ThroughX1() {
        return ", %s till %s";
    }
    commaAndX0ThroughX1() {
        return ", och %s till %s";
    }
    first() {
        return "första";
    }
    second() {
        return "andra";
    }
    third() {
        return "tredje";
    }
    fourth() {
        return "fjärde";
    }
    fifth() {
        return "femte";
    }
    commaOnThe() {
        return ", den ";
    }
    spaceX0OfTheMonth() {
        return " %sen av månaden";
    }
    lastDay() {
        return "den sista dagen";
    }
    commaOnTheLastX0OfTheMonth() {
        return ", på sista %s av månaden";
    }
    commaOnlyOnX0() {
        return ", varje %s";
    }
    commaAndOnX0() {
        return ", och på %s";
    }
    commaEveryX0Months() {
        return ", var %s månad";
    }
    commaOnlyInX0() {
        return ", bara på %s";
    }
    commaOnTheLastDayOfTheMonth() {
        return ", på sista dagen av månaden";
    }
    commaOnTheLastWeekdayOfTheMonth() {
        return ", på sista veckodag av månaden";
    }
    commaDaysBeforeTheLastDayOfTheMonth() {
        return ", %s dagar före den sista dagen i månaden";
    }
    firstWeekday() {
        return "första veckodag";
    }
    weekdayNearestDayX0() {
        return "veckodagen närmast dag %s";
    }
    commaOnTheX0OfTheMonth() {
        return ", på den %s av månaden";
    }
    commaEveryX0Days() {
        return ", var %s dag";
    }
    commaBetweenDayX0AndX1OfTheMonth() {
        return ", mellan dag %s och %s av månaden";
    }
    commaOnDayX0OfTheMonth() {
        return ", på dag %s av månaden";
    }
    commaEveryX0Years() {
        return ", var %s år";
    }
    commaStartingX0() {
        return ", startar %s";
    }
    daysOfTheWeek() {
        return ["söndag", "måndag", "tisdag", "onsdag", "torsdag", "fredag", "lördag"];
    }
    monthsOfTheYear() {
        return [
            "januari",
            "februari",
            "mars",
            "april",
            "maj",
            "juni",
            "juli",
            "augusti",
            "september",
            "oktober",
            "november",
            "december",
        ];
    }
}
sv_exports.sv = sv;


(cronstrue__WEBPACK_IMPORTED_MODULE_0___default().locales)["sv"] = new sv();

/******/ 	return __webpack_exports__;
/******/ })()
;
});