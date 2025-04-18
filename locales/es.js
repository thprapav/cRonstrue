(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("cronstrue"));
	else if(typeof define === 'function' && define.amd)
		define("locales/es", ["cronstrue"], factory);
	else if(typeof exports === 'object')
		exports["locales/es"] = factory(require("cronstrue"));
	else
		root["locales/es"] = factory(root["cronstrue"]);
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
var es_exports = __webpack_exports__;
"use strict";
Object.defineProperty(es_exports, "__esModule", { value: true });
es_exports.es = void 0;
class es {
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
        return "Ocurrió un error mientras se generaba la descripción de la expresión. Revise la sintaxis de la expresión de cron.";
    }
    at() {
        return "A las";
    }
    atSpace() {
        return "A las ";
    }
    atX0() {
        return "a las %s";
    }
    atX0MinutesPastTheHour() {
        return "a los %s minutos de la hora";
    }
    atX0SecondsPastTheMinute() {
        return "a los %s segundos del minuto";
    }
    betweenX0AndX1() {
        return "entre las %s y las %s";
    }
    commaBetweenDayX0AndX1OfTheMonth() {
        return ", entre los días %s y %s del mes";
    }
    commaEveryDay() {
        return ", cada día";
    }
    commaEveryX0Days() {
        return ", cada %s días";
    }
    commaEveryX0DaysOfTheWeek() {
        return ", cada %s días de la semana";
    }
    commaEveryX0Months() {
        return ", cada %s meses";
    }
    commaOnDayX0OfTheMonth() {
        return ", el día %s del mes";
    }
    commaOnlyInX0() {
        return ", sólo en %s";
    }
    commaOnlyOnX0() {
        return ", sólo el %s";
    }
    commaAndOnX0() {
        return ", y el %s";
    }
    commaOnThe() {
        return ", en el ";
    }
    commaOnTheLastDayOfTheMonth() {
        return ", en el último día del mes";
    }
    commaOnTheLastWeekdayOfTheMonth() {
        return ", en el último día de la semana del mes";
    }
    commaDaysBeforeTheLastDayOfTheMonth() {
        return ", %s días antes del último día del mes";
    }
    commaOnTheLastX0OfTheMonth() {
        return ", en el último %s del mes";
    }
    commaOnTheX0OfTheMonth() {
        return ", en el %s del mes";
    }
    commaX0ThroughX1() {
        return ", de %s a %s";
    }
    commaAndX0ThroughX1() {
        return ", y de %s a %s";
    }
    everyHour() {
        return "cada hora";
    }
    everyMinute() {
        return "cada minuto";
    }
    everyMinuteBetweenX0AndX1() {
        return "cada minuto entre las %s y las %s";
    }
    everySecond() {
        return "cada segundo";
    }
    everyX0Hours() {
        return "cada %s horas";
    }
    everyX0Minutes() {
        return "cada %s minutos";
    }
    everyX0Seconds() {
        return "cada %s segundos";
    }
    fifth() {
        return "quinto";
    }
    first() {
        return "primero";
    }
    firstWeekday() {
        return "primer día de la semana";
    }
    fourth() {
        return "cuarto";
    }
    minutesX0ThroughX1PastTheHour() {
        return "del minuto %s al %s pasada la hora";
    }
    second() {
        return "segundo";
    }
    secondsX0ThroughX1PastTheMinute() {
        return "En los segundos %s al %s de cada minuto";
    }
    spaceAnd() {
        return " y";
    }
    spaceX0OfTheMonth() {
        return " %s del mes";
    }
    lastDay() {
        return "el último día";
    }
    third() {
        return "tercer";
    }
    weekdayNearestDayX0() {
        return "día de la semana más próximo al %s";
    }
    commaEveryX0Years() {
        return ", cada %s años";
    }
    commaStartingX0() {
        return ", comenzando %s";
    }
    daysOfTheWeek() {
        return ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
    }
    monthsOfTheYear() {
        return [
            "enero",
            "febrero",
            "marzo",
            "abril",
            "mayo",
            "junio",
            "julio",
            "agosto",
            "septiembre",
            "octubre",
            "noviembre",
            "diciembre",
        ];
    }
}
es_exports.es = es;


(cronstrue__WEBPACK_IMPORTED_MODULE_0___default().locales)["es"] = new es();

/******/ 	return __webpack_exports__;
/******/ })()
;
});