(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("cronstrue"));
	else if(typeof define === 'function' && define.amd)
		define("locales/nl", ["cronstrue"], factory);
	else if(typeof exports === 'object')
		exports["locales/nl"] = factory(require("cronstrue"));
	else
		root["locales/nl"] = factory(root["cronstrue"]);
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
var nl_exports = __webpack_exports__;
"use strict";
Object.defineProperty(nl_exports, "__esModule", { value: true });
nl_exports.nl = void 0;
class nl {
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
        return "elke minuut";
    }
    everyHour() {
        return "elk uur";
    }
    anErrorOccuredWhenGeneratingTheExpressionD() {
        return "Er is een fout opgetreden bij het vertalen van de gegevens. Controleer de gegevens.";
    }
    atSpace() {
        return "Om ";
    }
    everyMinuteBetweenX0AndX1() {
        return "Elke minuut tussen %s en %s";
    }
    at() {
        return "Om";
    }
    spaceAnd() {
        return " en";
    }
    everySecond() {
        return "elke seconde";
    }
    everyX0Seconds() {
        return "elke %s seconden";
    }
    secondsX0ThroughX1PastTheMinute() {
        return "seconden %s t/m %s na de minuut";
    }
    atX0SecondsPastTheMinute() {
        return "op %s seconden na de minuut";
    }
    everyX0Minutes() {
        return "elke %s minuten";
    }
    minutesX0ThroughX1PastTheHour() {
        return "minuut %s t/m %s na het uur";
    }
    atX0MinutesPastTheHour() {
        return "op %s minuten na het uur";
    }
    everyX0Hours() {
        return "elke %s uur";
    }
    betweenX0AndX1() {
        return "tussen %s en %s";
    }
    atX0() {
        return "om %s";
    }
    commaEveryDay() {
        return ", elke dag";
    }
    commaEveryX0DaysOfTheWeek() {
        return ", elke %s dagen van de week";
    }
    commaX0ThroughX1() {
        return ", %s t/m %s";
    }
    commaAndX0ThroughX1() {
        return ", en %s t/m %s";
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
        return "vijfde";
    }
    commaOnThe() {
        return ", op de ";
    }
    spaceX0OfTheMonth() {
        return " %s van de maand";
    }
    lastDay() {
        return "de laatste dag";
    }
    commaOnTheLastX0OfTheMonth() {
        return ", op de laatste %s van de maand";
    }
    commaOnlyOnX0() {
        return ", alleen op %s";
    }
    commaAndOnX0() {
        return ", en op %s";
    }
    commaEveryX0Months() {
        return ", elke %s maanden";
    }
    commaOnlyInX0() {
        return ", alleen in %s";
    }
    commaOnTheLastDayOfTheMonth() {
        return ", op de laatste dag van de maand";
    }
    commaOnTheLastWeekdayOfTheMonth() {
        return ", op de laatste werkdag van de maand";
    }
    commaDaysBeforeTheLastDayOfTheMonth() {
        return ", %s dagen vóór de laatste dag van de maand";
    }
    firstWeekday() {
        return "eerste werkdag";
    }
    weekdayNearestDayX0() {
        return "werkdag dichtst bij dag %s";
    }
    commaOnTheX0OfTheMonth() {
        return ", op de %s van de maand";
    }
    commaEveryX0Days() {
        return ", elke %s dagen";
    }
    commaBetweenDayX0AndX1OfTheMonth() {
        return ", tussen dag %s en %s van de maand";
    }
    commaOnDayX0OfTheMonth() {
        return ", op dag %s van de maand";
    }
    commaEveryX0Years() {
        return ", elke %s jaren";
    }
    commaStartingX0() {
        return ", beginnend %s";
    }
    daysOfTheWeek() {
        return ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"];
    }
    monthsOfTheYear() {
        return [
            "januari",
            "februari",
            "maart",
            "april",
            "mei",
            "juni",
            "juli",
            "augustus",
            "september",
            "oktober",
            "november",
            "december",
        ];
    }
}
nl_exports.nl = nl;


(cronstrue__WEBPACK_IMPORTED_MODULE_0___default().locales)["nl"] = new nl();

/******/ 	return __webpack_exports__;
/******/ })()
;
});