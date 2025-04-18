(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("cronstrue"));
	else if(typeof define === 'function' && define.amd)
		define("locales/ro", ["cronstrue"], factory);
	else if(typeof exports === 'object')
		exports["locales/ro"] = factory(require("cronstrue"));
	else
		root["locales/ro"] = factory(root["cronstrue"]);
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
var ro_exports = __webpack_exports__;
"use strict";
Object.defineProperty(ro_exports, "__esModule", { value: true });
ro_exports.ro = void 0;
class ro {
    use24HourTimeFormatByDefault() {
        return true;
    }
    anErrorOccuredWhenGeneratingTheExpressionD() {
        return "Eroare la generarea descrierii. Verificați sintaxa.";
    }
    at() {
        return "La";
    }
    atSpace() {
        return "La ";
    }
    atX0() {
        return "la %s";
    }
    atX0MinutesPastTheHour() {
        return "la și %s minute";
    }
    atX0SecondsPastTheMinute() {
        return "la și %s secunde";
    }
    betweenX0AndX1() {
        return "între %s și %s";
    }
    commaBetweenDayX0AndX1OfTheMonth() {
        return ", între zilele %s și %s ale lunii";
    }
    commaEveryDay() {
        return ", în fiecare zi";
    }
    commaEveryX0Days() {
        return ", la fiecare %s zile";
    }
    commaEveryX0DaysOfTheWeek() {
        return ", la fiecare a %s-a zi a săptămânii";
    }
    commaEveryX0Months() {
        return ", la fiecare %s luni";
    }
    commaEveryX0Years() {
        return ", o dată la %s ani";
    }
    commaOnDayX0OfTheMonth() {
        return ", în ziua %s a lunii";
    }
    commaOnlyInX0() {
        return ", doar în %s";
    }
    commaOnlyOnX0() {
        return ", doar %s";
    }
    commaAndOnX0() {
        return ", și %s";
    }
    commaOnThe() {
        return ", în ";
    }
    commaOnTheLastDayOfTheMonth() {
        return ", în ultima zi a lunii";
    }
    commaOnTheLastWeekdayOfTheMonth() {
        return ", în ultima zi lucrătoare a lunii";
    }
    commaDaysBeforeTheLastDayOfTheMonth() {
        return ", %s zile înainte de ultima zi a lunii";
    }
    commaOnTheLastX0OfTheMonth() {
        return ", în ultima %s a lunii";
    }
    commaOnTheX0OfTheMonth() {
        return ", în %s a lunii";
    }
    commaX0ThroughX1() {
        return ", de %s până %s";
    }
    commaAndX0ThroughX1() {
        return ", și de %s până %s";
    }
    everyHour() {
        return "în fiecare oră";
    }
    everyMinute() {
        return "în fiecare minut";
    }
    everyMinuteBetweenX0AndX1() {
        return "În fiecare minut între %s și %s";
    }
    everySecond() {
        return "în fiecare secundă";
    }
    everyX0Hours() {
        return "la fiecare %s ore";
    }
    everyX0Minutes() {
        return "la fiecare %s minute";
    }
    everyX0Seconds() {
        return "la fiecare %s secunde";
    }
    fifth() {
        return "a cincea";
    }
    first() {
        return "prima";
    }
    firstWeekday() {
        return "prima zi a săptămânii";
    }
    fourth() {
        return "a patra";
    }
    minutesX0ThroughX1PastTheHour() {
        return "între minutele %s și %s";
    }
    second() {
        return "a doua";
    }
    secondsX0ThroughX1PastTheMinute() {
        return "între secunda %s și secunda %s";
    }
    spaceAnd() {
        return " și";
    }
    spaceX0OfTheMonth() {
        return " %s a lunii";
    }
    lastDay() {
        return "ultima zi";
    }
    third() {
        return "a treia";
    }
    weekdayNearestDayX0() {
        return "cea mai apropiată zi a săptămânii de ziua %s";
    }
    commaMonthX0ThroughMonthX1() {
        return ", din %s până în %s";
    }
    commaYearX0ThroughYearX1() {
        return ", din %s până în %s";
    }
    atX0MinutesPastTheHourGt20() {
        return "la și %s de minute";
    }
    atX0SecondsPastTheMinuteGt20() {
        return "la și %s de secunde";
    }
    commaStartingX0() {
        return ", pornire %s";
    }
    daysOfTheWeek() {
        return ["duminică", "luni", "marți", "miercuri", "joi", "vineri", "sâmbătă"];
    }
    monthsOfTheYear() {
        return [
            "ianuarie",
            "februarie",
            "martie",
            "aprilie",
            "mai",
            "iunie",
            "iulie",
            "august",
            "septembrie",
            "octombrie",
            "noiembrie",
            "decembrie",
        ];
    }
}
ro_exports.ro = ro;


(cronstrue__WEBPACK_IMPORTED_MODULE_0___default().locales)["ro"] = new ro();

/******/ 	return __webpack_exports__;
/******/ })()
;
});