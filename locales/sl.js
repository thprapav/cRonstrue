(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("cronstrue"));
	else if(typeof define === 'function' && define.amd)
		define("locales/sl", ["cronstrue"], factory);
	else if(typeof exports === 'object')
		exports["locales/sl"] = factory(require("cronstrue"));
	else
		root["locales/sl"] = factory(root["cronstrue"]);
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
var sl_exports = __webpack_exports__;
"use strict";
Object.defineProperty(sl_exports, "__esModule", { value: true });
sl_exports.sl = void 0;
class sl {
    use24HourTimeFormatByDefault() {
        return true;
    }
    anErrorOccuredWhenGeneratingTheExpressionD() {
        return "Pri generiranju opisa izraza je prišlo do napake. Preverite sintakso izraza cron.";
    }
    at() {
        return "Ob";
    }
    atSpace() {
        return "Ob ";
    }
    atX0() {
        return "ob %s";
    }
    atX0MinutesPastTheHour() {
        return "ob %s.";
    }
    atX0SecondsPastTheMinute() {
        return "ob %s.";
    }
    betweenX0AndX1() {
        return "od %s do %s";
    }
    commaBetweenDayX0AndX1OfTheMonth() {
        return ", od %s. do %s. dne v mesecu";
    }
    commaEveryDay() {
        return ", vsak dan";
    }
    commaEveryX0Days() {
        return ", vsakih %s dni";
    }
    commaEveryX0DaysOfTheWeek() {
        return ", vsakih %s dni v tednu";
    }
    commaEveryX0Months() {
        return ", vsakih %s mesecev";
    }
    commaEveryX0Years() {
        return ", vsakih %s let";
    }
    commaOnDayX0OfTheMonth() {
        return ", %s. dan v mesecu";
    }
    commaOnlyInX0() {
        return ", samo v %s";
    }
    commaOnlyOnX0() {
        return ", samo v %s";
    }
    commaAndOnX0() {
        return "in naprej %s";
    }
    commaOnThe() {
        return ", ";
    }
    commaOnTheLastDayOfTheMonth() {
        return ", zadnji %s v mesecu";
    }
    commaOnTheLastWeekdayOfTheMonth() {
        return ", zadnji delovni dan v mesecu";
    }
    commaDaysBeforeTheLastDayOfTheMonth() {
        return ", %s dni pred koncem meseca";
    }
    commaOnTheLastX0OfTheMonth() {
        return ", zadnji %s v mesecu";
    }
    commaOnTheX0OfTheMonth() {
        return ", %s v mesecu";
    }
    commaX0ThroughX1() {
        return ", od %s do %s";
    }
    commaAndX0ThroughX1() {
        return ", in od %s do %s";
    }
    everyHour() {
        return "vsako uro";
    }
    everyMinute() {
        return "vsako minuto";
    }
    everyMinuteBetweenX0AndX1() {
        return "Vsako minuto od %s do %s";
    }
    everySecond() {
        return "vsako sekundo";
    }
    everyX0Hours() {
        return "vsakih %s ur";
    }
    everyX0Minutes() {
        return "vsakih %s minut";
    }
    everyX0Seconds() {
        return "vsakih %s sekund";
    }
    fifth() {
        return "peti";
    }
    first() {
        return "prvi";
    }
    firstWeekday() {
        return "prvi delovni dan";
    }
    fourth() {
        return "četrti";
    }
    minutesX0ThroughX1PastTheHour() {
        return "minute od %s do %s";
    }
    second() {
        return "drugi";
    }
    secondsX0ThroughX1PastTheMinute() {
        return "sekunde od %s do %s";
    }
    spaceAnd() {
        return " in";
    }
    spaceX0OfTheMonth() {
        return " %s v mesecu";
    }
    lastDay() {
        return "zadnjič";
    }
    third() {
        return "tretji";
    }
    weekdayNearestDayX0() {
        return "delovni dan, najbližji %s. dnevu";
    }
    commaMonthX0ThroughMonthX1() {
        return null;
    }
    commaYearX0ThroughYearX1() {
        return null;
    }
    atX0MinutesPastTheHourGt20() {
        return null;
    }
    atX0SecondsPastTheMinuteGt20() {
        return null;
    }
    commaStartingX0() {
        return ", začenši %s";
    }
    daysOfTheWeek() {
        return ["Nedelja", "Ponedeljek", "Torek", "Sreda", "Četrtek", "Petek", "Sobota"];
    }
    monthsOfTheYear() {
        return [
            "januar",
            "februar",
            "marec",
            "april",
            "maj",
            "junij",
            "julij",
            "avgust",
            "september",
            "oktober",
            "november",
            "december",
        ];
    }
}
sl_exports.sl = sl;


(cronstrue__WEBPACK_IMPORTED_MODULE_0___default().locales)["sl"] = new sl();

/******/ 	return __webpack_exports__;
/******/ })()
;
});