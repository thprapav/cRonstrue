(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("cronstrue"));
	else if(typeof define === 'function' && define.amd)
		define("locales/hu", ["cronstrue"], factory);
	else if(typeof exports === 'object')
		exports["locales/hu"] = factory(require("cronstrue"));
	else
		root["locales/hu"] = factory(root["cronstrue"]);
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
var hu_exports = __webpack_exports__;
"use strict";
Object.defineProperty(hu_exports, "__esModule", { value: true });
hu_exports.hu = void 0;
class hu {
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
        return "Hiba történt a kifejezésleírás generálásakor. Ellenőrizze a cron kifejezés szintaxisát.";
    }
    everyMinute() {
        return "minden percben";
    }
    everyHour() {
        return "minden órában";
    }
    atSpace() {
        return "Ekkor: ";
    }
    everyMinuteBetweenX0AndX1() {
        return "percenként %s és %s között";
    }
    at() {
        return "Ekkor:";
    }
    spaceAnd() {
        return " és";
    }
    everySecond() {
        return "minden másodpercben";
    }
    everyX0Seconds() {
        return "%s másodpercenként";
    }
    secondsX0ThroughX1PastTheMinute() {
        return "%s. másodpercben %s perc után";
    }
    atX0SecondsPastTheMinute() {
        return "%s. másodpercben";
    }
    everyX0Minutes() {
        return "minden %s. percben";
    }
    minutesX0ThroughX1PastTheHour() {
        return "%s. percben %s óra után";
    }
    atX0MinutesPastTheHour() {
        return "%s. percben";
    }
    everyX0Hours() {
        return "minden %s órában";
    }
    betweenX0AndX1() {
        return "%s és %s között";
    }
    atX0() {
        return "ekkor %s";
    }
    commaEveryDay() {
        return ", minden nap";
    }
    commaEveryX0DaysOfTheWeek() {
        return ", a hét minden %s napján";
    }
    commaX0ThroughX1() {
        return ", %s - %s";
    }
    commaAndX0ThroughX1() {
        return ", és %s - %s";
    }
    first() {
        return "első";
    }
    second() {
        return "második";
    }
    third() {
        return "harmadik";
    }
    fourth() {
        return "negyedik";
    }
    fifth() {
        return "ötödik";
    }
    commaOnThe() {
        return ", ";
    }
    spaceX0OfTheMonth() {
        return " %s a hónapban";
    }
    lastDay() {
        return "az utolsó nap";
    }
    commaOnTheLastX0OfTheMonth() {
        return ", a hónap utolsó %s";
    }
    commaOnlyOnX0() {
        return ", csak ekkor: %s";
    }
    commaAndOnX0() {
        return ", és %s";
    }
    commaEveryX0Months() {
        return ", minden %s hónapban";
    }
    commaOnlyInX0() {
        return ", csak ekkor: %s";
    }
    commaOnTheLastDayOfTheMonth() {
        return ", a hónap utolsó napján";
    }
    commaOnTheLastWeekdayOfTheMonth() {
        return ", a hónap utolsó hétköznapján";
    }
    commaDaysBeforeTheLastDayOfTheMonth() {
        return ", %s nappal a hónap utolsó napja előtt";
    }
    firstWeekday() {
        return "első hétköznap";
    }
    weekdayNearestDayX0() {
        return "hétköznap legközelebbi nap %s";
    }
    commaOnTheX0OfTheMonth() {
        return ", a hónap %s";
    }
    commaEveryX0Days() {
        return ", %s naponként";
    }
    commaBetweenDayX0AndX1OfTheMonth() {
        return ", a hónap %s és %s napja között";
    }
    commaOnDayX0OfTheMonth() {
        return ", a hónap %s napján";
    }
    commaEveryHour() {
        return ", minden órában";
    }
    commaEveryX0Years() {
        return ", %s évente";
    }
    commaStartingX0() {
        return ", %s kezdettel";
    }
    daysOfTheWeek() {
        return ["vasárnap", "hétfő", "kedd", "szerda", "csütörtök", "péntek", "szombat"];
    }
    monthsOfTheYear() {
        return [
            "január",
            "február",
            "március",
            "április",
            "május",
            "június",
            "július",
            "augusztus",
            "szeptember",
            "október",
            "november",
            "december",
        ];
    }
}
hu_exports.hu = hu;


(cronstrue__WEBPACK_IMPORTED_MODULE_0___default().locales)["hu"] = new hu();

/******/ 	return __webpack_exports__;
/******/ })()
;
});