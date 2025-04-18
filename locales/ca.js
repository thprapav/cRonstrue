(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("cronstrue"));
	else if(typeof define === 'function' && define.amd)
		define("locales/ca", ["cronstrue"], factory);
	else if(typeof exports === 'object')
		exports["locales/ca"] = factory(require("cronstrue"));
	else
		root["locales/ca"] = factory(root["cronstrue"]);
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
var ca_exports = __webpack_exports__;
"use strict";
Object.defineProperty(ca_exports, "__esModule", { value: true });
ca_exports.ca = void 0;
class ca {
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
        return "S'ha produït un error mentres es generava la descripció de l'expressió. Revisi la sintaxi de la expressió de cron.";
    }
    at() {
        return "A les";
    }
    atSpace() {
        return "A les ";
    }
    atX0() {
        return "a les %s";
    }
    atX0MinutesPastTheHour() {
        return "als %s minuts de l'hora";
    }
    atX0SecondsPastTheMinute() {
        return "als %s segonds del minut";
    }
    betweenX0AndX1() {
        return "entre les %s i les %s";
    }
    commaBetweenDayX0AndX1OfTheMonth() {
        return ", entre els dies %s i %s del mes";
    }
    commaEveryDay() {
        return ", cada dia";
    }
    commaEveryX0Days() {
        return ", cada %s dies";
    }
    commaEveryX0DaysOfTheWeek() {
        return ", cada %s dies de la setmana";
    }
    commaEveryX0Months() {
        return ", cada %s mesos";
    }
    commaOnDayX0OfTheMonth() {
        return ", el dia %s del mes";
    }
    commaOnlyInX0() {
        return ", sólo en %s";
    }
    commaOnlyOnX0() {
        return ", només el %s";
    }
    commaAndOnX0() {
        return ", i el %s";
    }
    commaOnThe() {
        return ", en el ";
    }
    commaOnTheLastDayOfTheMonth() {
        return ", en l'últim dia del mes";
    }
    commaOnTheLastWeekdayOfTheMonth() {
        return ", en l'últim dia de la setmana del mes";
    }
    commaDaysBeforeTheLastDayOfTheMonth() {
        return ", %s dies abans de l'últim dia del mes";
    }
    commaOnTheLastX0OfTheMonth() {
        return ", en l'últim %s del mes";
    }
    commaOnTheX0OfTheMonth() {
        return ", en el %s del mes";
    }
    commaX0ThroughX1() {
        return ", de %s a %s";
    }
    commaAndX0ThroughX1() {
        return ", i de %s a %s";
    }
    everyHour() {
        return "cada hora";
    }
    everyMinute() {
        return "cada minut";
    }
    everyMinuteBetweenX0AndX1() {
        return "cada minut entre les %s i les %s";
    }
    everySecond() {
        return "cada segon";
    }
    everyX0Hours() {
        return "cada %s hores";
    }
    everyX0Minutes() {
        return "cada %s minuts";
    }
    everyX0Seconds() {
        return "cada %s segons";
    }
    fifth() {
        return "cinquè";
    }
    first() {
        return "primer";
    }
    firstWeekday() {
        return "primer dia de la setmana";
    }
    fourth() {
        return "quart";
    }
    minutesX0ThroughX1PastTheHour() {
        return "del minut %s al %s passada l'hora";
    }
    second() {
        return "segon";
    }
    secondsX0ThroughX1PastTheMinute() {
        return "En els segons %s al %s de cada minut";
    }
    spaceAnd() {
        return " i";
    }
    spaceX0OfTheMonth() {
        return " %s del mes";
    }
    lastDay() {
        return "l'últim dia";
    }
    third() {
        return "tercer";
    }
    weekdayNearestDayX0() {
        return "dia de la setmana més proper al %s";
    }
    commaEveryX0Years() {
        return ", cada %s anys";
    }
    commaStartingX0() {
        return ", començant %s";
    }
    daysOfTheWeek() {
        return ["diumenge", "dilluns", "dimarts", "dimecres", "dijous", "divendres", "dissabte"];
    }
    monthsOfTheYear() {
        return [
            "gener",
            "febrer",
            "març",
            "abril",
            "maig",
            "juny",
            "juliol",
            "agost",
            "setembre",
            "octubre",
            "novembre",
            "desembre",
        ];
    }
}
ca_exports.ca = ca;


(cronstrue__WEBPACK_IMPORTED_MODULE_0___default().locales)["ca"] = new ca();

/******/ 	return __webpack_exports__;
/******/ })()
;
});