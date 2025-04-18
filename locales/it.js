(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("cronstrue"));
	else if(typeof define === 'function' && define.amd)
		define("locales/it", ["cronstrue"], factory);
	else if(typeof exports === 'object')
		exports["locales/it"] = factory(require("cronstrue"));
	else
		root["locales/it"] = factory(root["cronstrue"]);
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
var it_exports = __webpack_exports__;
"use strict";
Object.defineProperty(it_exports, "__esModule", { value: true });
it_exports.it = void 0;
class it {
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
        return "È verificato un errore durante la generazione la descrizione espressione. Controllare la sintassi delle espressioni cron.";
    }
    at() {
        return "Alle";
    }
    atSpace() {
        return "Alle ";
    }
    atX0() {
        return "alle %s";
    }
    atX0MinutesPastTheHour() {
        return "al %s minuto passata l'ora";
    }
    atX0SecondsPastTheMinute() {
        return "al %s secondo passato il minuto";
    }
    betweenX0AndX1() {
        return "tra le %s e le %s";
    }
    commaBetweenDayX0AndX1OfTheMonth() {
        return ", tra il giorno %s e %s del mese";
    }
    commaEveryDay() {
        return ", ogni giorno";
    }
    commaEveryX0Days() {
        return ", ogni %s giorni";
    }
    commaEveryX0DaysOfTheWeek() {
        return ", ogni %s giorni della settimana";
    }
    commaEveryX0Months() {
        return ", ogni %s mesi";
    }
    commaEveryX0Years() {
        return ", ogni %s anni";
    }
    commaOnDayX0OfTheMonth() {
        return ", il giorno %s del mese";
    }
    commaOnlyInX0() {
        return ", solo in %s";
    }
    commaOnlyOnX0() {
        return ", solo il %s";
    }
    commaAndOnX0() {
        return ", e il %s";
    }
    commaOnThe() {
        return ", il ";
    }
    commaOnTheLastDayOfTheMonth() {
        return ", l'ultimo giorno del mese";
    }
    commaOnTheLastWeekdayOfTheMonth() {
        return ", nell'ultima settimana del mese";
    }
    commaDaysBeforeTheLastDayOfTheMonth() {
        return ", %s giorni prima dell'ultimo giorno del mese";
    }
    commaOnTheLastX0OfTheMonth() {
        return ", l'ultimo %s del mese";
    }
    commaOnTheX0OfTheMonth() {
        return ", il %s del mese";
    }
    commaX0ThroughX1() {
        return ", %s al %s";
    }
    commaAndX0ThroughX1() {
        return ", e %s al %s";
    }
    everyHour() {
        return "ogni ora";
    }
    everyMinute() {
        return "ogni minuto";
    }
    everyMinuteBetweenX0AndX1() {
        return "Ogni minuto tra le %s e le %s";
    }
    everySecond() {
        return "ogni secondo";
    }
    everyX0Hours() {
        return "ogni %s ore";
    }
    everyX0Minutes() {
        return "ogni %s minuti";
    }
    everyX0Seconds() {
        return "ogni %s secondi";
    }
    fifth() {
        return "quinto";
    }
    first() {
        return "primo";
    }
    firstWeekday() {
        return "primo giorno della settimana";
    }
    fourth() {
        return "quarto";
    }
    minutesX0ThroughX1PastTheHour() {
        return "minuti %s al %s dopo l'ora";
    }
    second() {
        return "secondo";
    }
    secondsX0ThroughX1PastTheMinute() {
        return "secondi %s al %s oltre il minuto";
    }
    spaceAnd() {
        return " e";
    }
    spaceX0OfTheMonth() {
        return " %s del mese";
    }
    lastDay() {
        return "l'ultimo giorno";
    }
    third() {
        return "terzo";
    }
    weekdayNearestDayX0() {
        return "giorno della settimana più vicino al %s";
    }
    commaStartingX0() {
        return ", a partire %s";
    }
    daysOfTheWeek() {
        return ["domenica", "lunedì", "martedì", "mercoledì", "giovedì", "venerdì", "sabato"];
    }
    monthsOfTheYear() {
        return [
            "gennaio",
            "febbraio",
            "marzo",
            "aprile",
            "maggio",
            "giugno",
            "luglio",
            "agosto",
            "settembre",
            "ottobre",
            "novembre",
            "dicembre",
        ];
    }
}
it_exports.it = it;


(cronstrue__WEBPACK_IMPORTED_MODULE_0___default().locales)["it"] = new it();

/******/ 	return __webpack_exports__;
/******/ })()
;
});