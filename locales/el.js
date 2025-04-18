(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("cronstrue"));
	else if(typeof define === 'function' && define.amd)
		define("locales/el", ["cronstrue"], factory);
	else if(typeof exports === 'object')
		exports["locales/el"] = factory(require("cronstrue"));
	else
		root["locales/el"] = factory(root["cronstrue"]);
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
var el_exports = __webpack_exports__;
"use strict";
Object.defineProperty(el_exports, "__esModule", { value: true });
el_exports.el = void 0;
class el {
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
        return "Παρουσιάστηκε σφάλμα κατά τη δημιουργία της περιγραφής. Ελέγξτε τη σύνταξη της έκφρασης cron.";
    }
    everyMinute() {
        return "κάθε λεπτό";
    }
    everyHour() {
        return "κάθε ώρα";
    }
    atSpace() {
        return "Στις ";
    }
    everyMinuteBetweenX0AndX1() {
        return "Κάθε λεπτό μεταξύ %s και %s";
    }
    at() {
        return "Στις";
    }
    spaceAnd() {
        return " και";
    }
    everySecond() {
        return "κάθε δευτερόλεπτο";
    }
    everyX0Seconds() {
        return "κάθε %s δευτερόλεπτα";
    }
    secondsX0ThroughX1PastTheMinute() {
        return "δευτερόλεπτα %s έως %s μετά το λεπτό";
    }
    atX0SecondsPastTheMinute() {
        return "στα %s δευτερόλεπτα μετά το λεπτό";
    }
    everyX0Minutes() {
        return "κάθε %s λεπτά";
    }
    minutesX0ThroughX1PastTheHour() {
        return "λεπτά %s έως %s μετά την ώρα";
    }
    atX0MinutesPastTheHour() {
        return "στα %s λεπτά μετά την ώρα";
    }
    everyX0Hours() {
        return "κάθε %s ώρες";
    }
    betweenX0AndX1() {
        return "μεταξύ %s και %s";
    }
    atX0() {
        return "στις %s";
    }
    commaEveryDay() {
        return ", κάθε μέρα";
    }
    commaEveryX0DaysOfTheWeek() {
        return ", κάθε %s ημέρες της εβδομάδας";
    }
    commaX0ThroughX1() {
        return ", %s έως %s";
    }
    commaAndX0ThroughX1() {
        return ", και %s έως %s";
    }
    first() {
        return "πρώτη";
    }
    second() {
        return "δεύτερη";
    }
    third() {
        return "τρίτη";
    }
    fourth() {
        return "τέταρτη";
    }
    fifth() {
        return "πέμπτη";
    }
    commaOnThe() {
        return ", στην ";
    }
    spaceX0OfTheMonth() {
        return " %s του μήνα";
    }
    lastDay() {
        return "την τελευταία ημέρα";
    }
    commaOnTheLastX0OfTheMonth() {
        return ", την τελευταία %s του μήνα";
    }
    commaOnlyOnX0() {
        return ", μόνο την %s";
    }
    commaAndOnX0() {
        return ", και την %s";
    }
    commaEveryX0Months() {
        return ", κάθε %s μήνες";
    }
    commaOnlyInX0() {
        return ", μόνο το %s";
    }
    commaOnTheLastDayOfTheMonth() {
        return ", την τελευταία ημέρα του μήνα";
    }
    commaOnTheLastWeekdayOfTheMonth() {
        return ", την τελευταία εργάσιμη ημέρα του μήνα";
    }
    commaDaysBeforeTheLastDayOfTheMonth() {
        return ", %s ημέρες πριν την τελευταία ημέρα του μήνα";
    }
    firstWeekday() {
        return "πρώτη εργάσιμη ημέρα";
    }
    weekdayNearestDayX0() {
        return "εργάσιμη ημέρα πλησιέστερη στην ημέρα %s";
    }
    commaOnTheX0OfTheMonth() {
        return ", στην %s του μήνα";
    }
    commaEveryX0Days() {
        return ", κάθε %s ημέρες";
    }
    commaBetweenDayX0AndX1OfTheMonth() {
        return ", μεταξύ ημέρας %s και %s του μήνα";
    }
    commaOnDayX0OfTheMonth() {
        return ", την ημέρα %s του μήνα";
    }
    commaEveryHour() {
        return ", κάθε ώρα";
    }
    commaEveryX0Years() {
        return ", κάθε %s χρόνια";
    }
    commaStartingX0() {
        return ", ξεκινώντας %s";
    }
    daysOfTheWeek() {
        return ["Κυριακή", "Δευτέρα", "Τρίτη", "Τετάρτη", "Πέμπτη", "Παρασκευή", "Σάββατο"];
    }
    monthsOfTheYear() {
        return [
            "Ιανουάριος",
            "Φεβρουάριος",
            "Μάρτιος",
            "Απρίλιος",
            "Μάιος",
            "Ιούνιος",
            "Ιούλιος",
            "Αύγουστος",
            "Σεπτέμβριος",
            "Οκτώβριος",
            "Νοέμβριος",
            "Δεκέμβριος"
        ];
    }
}
el_exports.el = el;


(cronstrue__WEBPACK_IMPORTED_MODULE_0___default().locales)["el"] = new el();

/******/ 	return __webpack_exports__;
/******/ })()
;
});