(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("cronstrue"));
	else if(typeof define === 'function' && define.amd)
		define("locales/fi", ["cronstrue"], factory);
	else if(typeof exports === 'object')
		exports["locales/fi"] = factory(require("cronstrue"));
	else
		root["locales/fi"] = factory(root["cronstrue"]);
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
var fi_exports = __webpack_exports__;
"use strict";
Object.defineProperty(fi_exports, "__esModule", { value: true });
fi_exports.fi = void 0;
class fi {
    use24HourTimeFormatByDefault() {
        return true;
    }
    anErrorOccuredWhenGeneratingTheExpressionD() {
        return "Virhe kuvauksen generoinnissa. Tarkista cron-syntaksi.";
    }
    at() {
        return "Klo";
    }
    atSpace() {
        return "Klo ";
    }
    atX0() {
        return "klo %s";
    }
    atX0MinutesPastTheHour() {
        return "%s minuuttia yli";
    }
    atX0MinutesPastTheHourGt20() {
        return "%s minuuttia yli";
    }
    atX0SecondsPastTheMinute() {
        return "%s sekunnnin jälkeen";
    }
    betweenX0AndX1() {
        return "%s - %s välillä";
    }
    commaBetweenDayX0AndX1OfTheMonth() {
        return ", kuukauden päivien %s ja %s välillä";
    }
    commaEveryDay() {
        return ", joka päivä";
    }
    commaEveryHour() {
        return ", joka tunti";
    }
    commaEveryMinute() {
        return ", joka minuutti";
    }
    commaEveryX0Days() {
        return ", joka %s. päivä";
    }
    commaEveryX0DaysOfTheWeek() {
        return ", joka %s. viikonpäivä";
    }
    commaEveryX0Months() {
        return ", joka %s. kuukausi";
    }
    commaEveryX0Years() {
        return ", joka %s. vuosi";
    }
    commaOnDayX0OfTheMonth() {
        return ", kuukauden %s päivä";
    }
    commaOnlyInX0() {
        return ", vain %s";
    }
    commaOnlyOnX0() {
        return ", vain %s";
    }
    commaOnThe() {
        return ",";
    }
    commaOnTheLastDayOfTheMonth() {
        return ", kuukauden viimeisenä päivänä";
    }
    commaOnTheLastWeekdayOfTheMonth() {
        return ", kuukauden viimeisenä viikonpäivänä";
    }
    commaOnTheLastX0OfTheMonth() {
        return ", kuukauden viimeinen %s";
    }
    commaOnTheX0OfTheMonth() {
        return ", kuukauden %s";
    }
    commaX0ThroughX1() {
        return ", %s - %s";
    }
    commaAndX0ThroughX1() {
        return ", %s - %s";
    }
    commaDaysBeforeTheLastDayOfTheMonth() {
        return ", %s päivää ennen kuukauden viimeistä päivää";
    }
    commaStartingX0() {
        return ", alkaen %s";
    }
    everyHour() {
        return "joka tunti";
    }
    everyMinute() {
        return "joka minuutti";
    }
    everyMinuteBetweenX0AndX1() {
        return "joka minuutti %s - %s välillä";
    }
    everySecond() {
        return "joka sekunti";
    }
    everyX0Hours() {
        return "joka %s. tunti";
    }
    everyX0Minutes() {
        return "joka %s. minuutti";
    }
    everyX0Seconds() {
        return "joka %s. sekunti";
    }
    fifth() {
        return "viides";
    }
    first() {
        return "ensimmäinen";
    }
    firstWeekday() {
        return "ensimmäinen viikonpäivä";
    }
    fourth() {
        return "neljäs";
    }
    minutesX0ThroughX1PastTheHour() {
        return "joka tunti minuuttien %s - %s välillä";
    }
    second() {
        return "toinen";
    }
    secondsX0ThroughX1PastTheMinute() {
        return "joka minuutti sekunttien %s - %s välillä";
    }
    spaceAnd() {
        return " ja";
    }
    spaceAndSpace() {
        return " ja ";
    }
    spaceX0OfTheMonth() {
        return " %s kuukaudessa";
    }
    third() {
        return "kolmas";
    }
    weekdayNearestDayX0() {
        return "viikonpäivä lähintä %s päivää";
    }
    atX0SecondsPastTheMinuteGt20() {
        return null;
    }
    commaMonthX0ThroughMonthX1() {
        return null;
    }
    commaYearX0ThroughYearX1() {
        return null;
    }
    lastDay() {
        return "viimeinen päivä";
    }
    commaAndOnX0() {
        return ", ja edelleen %s";
    }
    daysOfTheWeek() {
        return ["sunnuntai", "maanantai", "tiistai", "keskiviikko", "torstai", "perjantai", "lauantai"];
    }
    monthsOfTheYear() {
        return [
            "tammikuu",
            "helmikuu",
            "maaliskuu",
            "huhtikuu",
            "toukokuu",
            "kesäkuu",
            "heinäkuu",
            "elokuu",
            "syyskuu",
            "lokakuu",
            "marraskuu",
            "joulukuu",
        ];
    }
}
fi_exports.fi = fi;


(cronstrue__WEBPACK_IMPORTED_MODULE_0___default().locales)["fi"] = new fi();

/******/ 	return __webpack_exports__;
/******/ })()
;
});