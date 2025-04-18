(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("cronstrue"));
	else if(typeof define === 'function' && define.amd)
		define("locales/af", ["cronstrue"], factory);
	else if(typeof exports === 'object')
		exports["locales/af"] = factory(require("cronstrue"));
	else
		root["locales/af"] = factory(root["cronstrue"]);
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
var af_exports = __webpack_exports__;
"use strict";
Object.defineProperty(af_exports, "__esModule", { value: true });
af_exports.af = void 0;
class af {
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
        return ", jaar %s na %s";
    }
    use24HourTimeFormatByDefault() {
        return true;
    }
    anErrorOccuredWhenGeneratingTheExpressionD() {
        return "Daar was 'n fout om die tydsuitdrukking the genereer. Raadpleeg asb die uitdrukking formaat.";
    }
    everyMinute() {
        return "elke minuut";
    }
    everyHour() {
        return "elke uur";
    }
    atSpace() {
        return "Teen ";
    }
    everyMinuteBetweenX0AndX1() {
        return "Elke minuut tussen %s en %s";
    }
    at() {
        return "Teen";
    }
    spaceAnd() {
        return " en";
    }
    everySecond() {
        return "elke sekonde";
    }
    everyX0Seconds() {
        return "elke %s sekonde";
    }
    secondsX0ThroughX1PastTheMinute() {
        return "sekonde %s deur na %s na die minuut";
    }
    atX0SecondsPastTheMinute() {
        return "teen %s sekondes na die minuut";
    }
    everyX0Minutes() {
        return "elke %s minute";
    }
    minutesX0ThroughX1PastTheHour() {
        return "minute %s deur na %s na die uur";
    }
    atX0MinutesPastTheHour() {
        return "teen %s minute na die uur";
    }
    everyX0Hours() {
        return "elke %s ure";
    }
    betweenX0AndX1() {
        return "tussen %s en %s";
    }
    atX0() {
        return "teen %s";
    }
    commaEveryDay() {
        return ", elke dag";
    }
    commaEveryX0DaysOfTheWeek() {
        return ", elke %s dae van die week";
    }
    commaX0ThroughX1() {
        return ", %s deur na %s";
    }
    commaAndX0ThroughX1() {
        return ", en %s deur na %s";
    }
    first() {
        return "eerste";
    }
    second() {
        return "tweede";
    }
    third() {
        return "derde";
    }
    fourth() {
        return "vierde";
    }
    fifth() {
        return "vyfde";
    }
    commaOnThe() {
        return ", op die ";
    }
    spaceX0OfTheMonth() {
        return " %s van die maand";
    }
    lastDay() {
        return "die laaste dag";
    }
    commaOnTheLastX0OfTheMonth() {
        return ", op die laaste %s van die maand";
    }
    commaOnlyOnX0() {
        return ", net op %s";
    }
    commaAndOnX0() {
        return ", en op %s";
    }
    commaEveryX0Months() {
        return ", elke %s maande";
    }
    commaOnlyInX0() {
        return ", net in %s";
    }
    commaOnTheLastDayOfTheMonth() {
        return ", op die laaste dag van die maand";
    }
    commaOnTheLastWeekdayOfTheMonth() {
        return ", op die laaste weeksdag van die maand";
    }
    commaDaysBeforeTheLastDayOfTheMonth() {
        return ", %s dae voor die laaste dag van die maand";
    }
    firstWeekday() {
        return "eerste weeksdag";
    }
    weekdayNearestDayX0() {
        return "weeksdag naaste aan dag %s";
    }
    commaOnTheX0OfTheMonth() {
        return ", op die %s van die maande";
    }
    commaEveryX0Days() {
        return ", elke %s dae";
    }
    commaBetweenDayX0AndX1OfTheMonth() {
        return ", tussen dag %s en %s van die maand";
    }
    commaOnDayX0OfTheMonth() {
        return ", op dag %s van die maand";
    }
    commaEveryHour() {
        return ", elke uur";
    }
    commaEveryX0Years() {
        return ", elke %s jare";
    }
    commaStartingX0() {
        return ", beginnende %s";
    }
    daysOfTheWeek() {
        return ["Sondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrydag", "Saterdag"];
    }
    monthsOfTheYear() {
        return [
            "Januarie",
            "Februarie",
            "Maart",
            "April",
            "Mei",
            "Junie",
            "Julie",
            "Augustus",
            "September",
            "Oktober",
            "November",
            "Desember",
        ];
    }
}
af_exports.af = af;


(cronstrue__WEBPACK_IMPORTED_MODULE_0___default().locales)["af"] = new af();

/******/ 	return __webpack_exports__;
/******/ })()
;
});