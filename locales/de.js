(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("cronstrue"));
	else if(typeof define === 'function' && define.amd)
		define("locales/de", ["cronstrue"], factory);
	else if(typeof exports === 'object')
		exports["locales/de"] = factory(require("cronstrue"));
	else
		root["locales/de"] = factory(root["cronstrue"]);
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
var de_exports = __webpack_exports__;
"use strict";
Object.defineProperty(de_exports, "__esModule", { value: true });
de_exports.de = void 0;
class de {
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
        return "jede Minute";
    }
    everyHour() {
        return "jede Stunde";
    }
    anErrorOccuredWhenGeneratingTheExpressionD() {
        return "Beim Generieren der Ausdrucksbeschreibung ist ein Fehler aufgetreten. Überprüfen Sie die Syntax des Cron-Ausdrucks.";
    }
    atSpace() {
        return "Um ";
    }
    everyMinuteBetweenX0AndX1() {
        return "Jede Minute zwischen %s und %s";
    }
    at() {
        return "Um";
    }
    spaceAnd() {
        return " und";
    }
    everySecond() {
        return "Jede Sekunde";
    }
    everyX0Seconds() {
        return "alle %s Sekunden";
    }
    secondsX0ThroughX1PastTheMinute() {
        return "Sekunden %s bis %s";
    }
    atX0SecondsPastTheMinute() {
        return "bei Sekunde %s";
    }
    everyX0Minutes() {
        return "alle %s Minuten";
    }
    minutesX0ThroughX1PastTheHour() {
        return "Minuten %s bis %s";
    }
    atX0MinutesPastTheHour() {
        return "bei Minute %s";
    }
    everyX0Hours() {
        return "alle %s Stunden";
    }
    betweenX0AndX1() {
        return "zwischen %s und %s";
    }
    atX0() {
        return "um %s";
    }
    commaEveryDay() {
        return ", jeden Tag";
    }
    commaEveryX0DaysOfTheWeek() {
        return ", alle %s Tage der Woche";
    }
    commaX0ThroughX1() {
        return ", %s bis %s";
    }
    commaAndX0ThroughX1() {
        return ", und %s bis %s";
    }
    first() {
        return "ersten";
    }
    second() {
        return "zweiten";
    }
    third() {
        return "dritten";
    }
    fourth() {
        return "vierten";
    }
    fifth() {
        return "fünften";
    }
    commaOnThe() {
        return ", am ";
    }
    spaceX0OfTheMonth() {
        return " %s des Monats";
    }
    lastDay() {
        return "der letzte Tag";
    }
    commaOnTheLastX0OfTheMonth() {
        return ", am letzten %s des Monats";
    }
    commaOnlyOnX0() {
        return ", nur jeden %s";
    }
    commaAndOnX0() {
        return ", und jeden %s";
    }
    commaEveryX0Months() {
        return ", alle %s Monate";
    }
    commaOnlyInX0() {
        return ", nur im %s";
    }
    commaOnTheLastDayOfTheMonth() {
        return ", am letzten Tag des Monats";
    }
    commaOnTheLastWeekdayOfTheMonth() {
        return ", am letzten Werktag des Monats";
    }
    commaDaysBeforeTheLastDayOfTheMonth() {
        return ", %s tage vor dem letzten Tag des Monats";
    }
    firstWeekday() {
        return "ersten Werktag";
    }
    weekdayNearestDayX0() {
        return "Werktag am nächsten zum %s Tag";
    }
    commaOnTheX0OfTheMonth() {
        return ", am %s des Monats";
    }
    commaEveryX0Days() {
        return ", alle %s Tage";
    }
    commaBetweenDayX0AndX1OfTheMonth() {
        return ", zwischen Tag %s und %s des Monats";
    }
    commaOnDayX0OfTheMonth() {
        return ", an Tag %s des Monats";
    }
    commaEveryX0Years() {
        return ", alle %s Jahre";
    }
    commaStartingX0() {
        return ", beginnend %s";
    }
    daysOfTheWeek() {
        return ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];
    }
    monthsOfTheYear() {
        return [
            "Januar",
            "Februar",
            "März",
            "April",
            "Mai",
            "Juni",
            "Juli",
            "August",
            "September",
            "Oktober",
            "November",
            "Dezember",
        ];
    }
}
de_exports.de = de;


(cronstrue__WEBPACK_IMPORTED_MODULE_0___default().locales)["de"] = new de();

/******/ 	return __webpack_exports__;
/******/ })()
;
});