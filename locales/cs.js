(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("cronstrue"));
	else if(typeof define === 'function' && define.amd)
		define("locales/cs", ["cronstrue"], factory);
	else if(typeof exports === 'object')
		exports["locales/cs"] = factory(require("cronstrue"));
	else
		root["locales/cs"] = factory(root["cronstrue"]);
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
var cs_exports = __webpack_exports__;
"use strict";
Object.defineProperty(cs_exports, "__esModule", { value: true });
cs_exports.cs = void 0;
class cs {
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
        return "Při vytváření popisu došlo k chybě. Zkontrolujte prosím správnost syntaxe cronu.";
    }
    everyMinute() {
        return "každou minutu";
    }
    everyHour() {
        return "každou hodinu";
    }
    atSpace() {
        return "V ";
    }
    everyMinuteBetweenX0AndX1() {
        return "Každou minutu mezi %s a %s";
    }
    at() {
        return "V";
    }
    spaceAnd() {
        return " a";
    }
    everySecond() {
        return "každou sekundu";
    }
    everyX0Seconds() {
        return "každých %s sekund";
    }
    secondsX0ThroughX1PastTheMinute() {
        return "sekundy od %s do %s";
    }
    atX0SecondsPastTheMinute() {
        return "v %s sekund";
    }
    everyX0Minutes() {
        return "každých %s minut";
    }
    minutesX0ThroughX1PastTheHour() {
        return "minuty od %s do %s";
    }
    atX0MinutesPastTheHour() {
        return "v %s minut";
    }
    everyX0Hours() {
        return "každých %s hodin";
    }
    betweenX0AndX1() {
        return "mezi %s a %s";
    }
    atX0() {
        return "v %s";
    }
    commaEveryDay() {
        return ", každý den";
    }
    commaEveryX0DaysOfTheWeek() {
        return ", každých %s dní v týdnu";
    }
    commaX0ThroughX1() {
        return ", od %s do %s";
    }
    commaAndX0ThroughX1() {
        return ", a od %s do %s";
    }
    first() {
        return "první";
    }
    second() {
        return "druhý";
    }
    third() {
        return "třetí";
    }
    fourth() {
        return "čtvrtý";
    }
    fifth() {
        return "pátý";
    }
    commaOnThe() {
        return ", ";
    }
    spaceX0OfTheMonth() {
        return " %s v měsíci";
    }
    lastDay() {
        return "poslední den";
    }
    commaOnTheLastX0OfTheMonth() {
        return ", poslední %s v měsíci";
    }
    commaOnlyOnX0() {
        return ", pouze v %s";
    }
    commaAndOnX0() {
        return ", a v %s";
    }
    commaEveryX0Months() {
        return ", každých %s měsíců";
    }
    commaOnlyInX0() {
        return ", pouze v %s";
    }
    commaOnTheLastDayOfTheMonth() {
        return ", poslední den v měsíci";
    }
    commaOnTheLastWeekdayOfTheMonth() {
        return ", poslední pracovní den v měsíci";
    }
    commaDaysBeforeTheLastDayOfTheMonth() {
        return ", %s dní před posledním dnem v měsíci";
    }
    firstWeekday() {
        return "první pracovní den";
    }
    weekdayNearestDayX0() {
        return "pracovní den nejblíže %s. dni";
    }
    commaOnTheX0OfTheMonth() {
        return ", v %s v měsíci";
    }
    commaEveryX0Days() {
        return ", každých %s dnů";
    }
    commaBetweenDayX0AndX1OfTheMonth() {
        return ", mezi dny %s a %s v měsíci";
    }
    commaOnDayX0OfTheMonth() {
        return ", %s. den v měsíci";
    }
    commaEveryX0Years() {
        return ", každých %s roků";
    }
    commaStartingX0() {
        return ", začínající %s";
    }
    daysOfTheWeek() {
        return ["Neděle", "Pondělí", "Úterý", "Středa", "Čtvrtek", "Pátek", "Sobota"];
    }
    monthsOfTheYear() {
        return [
            "Leden",
            "Únor",
            "Březen",
            "Duben",
            "Květen",
            "Červen",
            "Červenec",
            "Srpen",
            "Září",
            "Říjen",
            "Listopad",
            "Prosinec",
        ];
    }
}
cs_exports.cs = cs;


(cronstrue__WEBPACK_IMPORTED_MODULE_0___default().locales)["cs"] = new cs();

/******/ 	return __webpack_exports__;
/******/ })()
;
});