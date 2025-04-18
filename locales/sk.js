(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("cronstrue"));
	else if(typeof define === 'function' && define.amd)
		define("locales/sk", ["cronstrue"], factory);
	else if(typeof exports === 'object')
		exports["locales/sk"] = factory(require("cronstrue"));
	else
		root["locales/sk"] = factory(root["cronstrue"]);
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
var sk_exports = __webpack_exports__;
"use strict";
Object.defineProperty(sk_exports, "__esModule", { value: true });
sk_exports.sk = void 0;
class sk {
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
        return "Pri vytváraní popisu došlo k chybe. Skontrolujte prosím správnosť syntaxe cronu.";
    }
    everyMinute() {
        return "každú minútu";
    }
    everyHour() {
        return "každú hodinu";
    }
    atSpace() {
        return "V ";
    }
    everyMinuteBetweenX0AndX1() {
        return "Každú minútu medzi %s a %s";
    }
    at() {
        return "V";
    }
    spaceAnd() {
        return " a";
    }
    everySecond() {
        return "každú sekundu";
    }
    everyX0Seconds() {
        return "každých %s sekúnd";
    }
    secondsX0ThroughX1PastTheMinute() {
        return "sekundy od %s do %s";
    }
    atX0SecondsPastTheMinute() {
        return "v %s sekúnd";
    }
    everyX0Minutes() {
        return "každých %s minút";
    }
    minutesX0ThroughX1PastTheHour() {
        return "minúty od %s do %s";
    }
    atX0MinutesPastTheHour() {
        return "v %s minút";
    }
    everyX0Hours() {
        return "každých %s hodín";
    }
    betweenX0AndX1() {
        return "medzi %s a %s";
    }
    atX0() {
        return "v %s";
    }
    commaEveryDay() {
        return ", každý deň";
    }
    commaEveryX0DaysOfTheWeek() {
        return ", každých %s dní v týždni";
    }
    commaX0ThroughX1() {
        return ", od %s do %s";
    }
    commaAndX0ThroughX1() {
        return ", a od %s do %s";
    }
    first() {
        return "prvý";
    }
    second() {
        return "druhý";
    }
    third() {
        return "tretí";
    }
    fourth() {
        return "štvrtý";
    }
    fifth() {
        return "piaty";
    }
    commaOnThe() {
        return ", ";
    }
    spaceX0OfTheMonth() {
        return " %s v mesiaci";
    }
    lastDay() {
        return "posledný deň";
    }
    commaOnTheLastX0OfTheMonth() {
        return ", posledný %s v mesiaci";
    }
    commaOnlyOnX0() {
        return ", iba v %s";
    }
    commaAndOnX0() {
        return ", a v %s";
    }
    commaEveryX0Months() {
        return ", každých %s mesiacov";
    }
    commaOnlyInX0() {
        return ", iba v %s";
    }
    commaOnTheLastDayOfTheMonth() {
        return ", posledný deň v mesiaci";
    }
    commaOnTheLastWeekdayOfTheMonth() {
        return ", posledný pracovný deň v mesiaci";
    }
    commaDaysBeforeTheLastDayOfTheMonth() {
        return ", %s dní pred posledným dňom v mesiaci";
    }
    firstWeekday() {
        return "prvý pracovný deň";
    }
    weekdayNearestDayX0() {
        return "pracovný deň najbližšie %s. dňu";
    }
    commaOnTheX0OfTheMonth() {
        return ", v %s v mesiaci";
    }
    commaEveryX0Days() {
        return ", každých %s dní";
    }
    commaBetweenDayX0AndX1OfTheMonth() {
        return ", medzi dňami %s a %s v mesiaci";
    }
    commaOnDayX0OfTheMonth() {
        return ", %s. deň v mesiaci";
    }
    commaEveryX0Years() {
        return ", každých %s rokov";
    }
    commaStartingX0() {
        return ", začínajúcich %s";
    }
    daysOfTheWeek() {
        return ["Nedeľa", "Pondelok", "Utorok", "Streda", "Štvrtok", "Piatok", "Sobota"];
    }
    monthsOfTheYear() {
        return [
            "Január",
            "Február",
            "Marec",
            "Apríl",
            "Máj",
            "Jún",
            "Júl",
            "August",
            "September",
            "Október",
            "November",
            "December",
        ];
    }
}
sk_exports.sk = sk;


(cronstrue__WEBPACK_IMPORTED_MODULE_0___default().locales)["sk"] = new sk();

/******/ 	return __webpack_exports__;
/******/ })()
;
});