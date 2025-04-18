(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("cronstrue"));
	else if(typeof define === 'function' && define.amd)
		define("locales/my", ["cronstrue"], factory);
	else if(typeof exports === 'object')
		exports["locales/my"] = factory(require("cronstrue"));
	else
		root["locales/my"] = factory(root["cronstrue"]);
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
var my_exports = __webpack_exports__;
"use strict";
Object.defineProperty(my_exports, "__esModule", { value: true });
my_exports.my = void 0;
class my {
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
        return false;
    }
    anErrorOccuredWhenGeneratingTheExpressionD() {
        return "Terdapat ralat semasa menjana penerangan ungkapan. Sila periksa sintaks ungkapan cron.";
    }
    everyMinute() {
        return "setiap minit";
    }
    everyHour() {
        return "setiap jam";
    }
    atSpace() {
        return "Pada ";
    }
    everyMinuteBetweenX0AndX1() {
        return "Setiap minit antara %s dan %s";
    }
    at() {
        return "Pada";
    }
    spaceAnd() {
        return " dan";
    }
    everySecond() {
        return "setiap saat";
    }
    everyX0Seconds() {
        return "setiap %s saat";
    }
    secondsX0ThroughX1PastTheMinute() {
        return "saat ke %s hingga %s selepas minit";
    }
    atX0SecondsPastTheMinute() {
        return "pada %s saat selepas minit";
    }
    everyX0Minutes() {
        return "setiap %s minit";
    }
    minutesX0ThroughX1PastTheHour() {
        return "minit ke %s hingga %s selepas jam";
    }
    atX0MinutesPastTheHour() {
        return "pada %s minit selepas jam";
    }
    everyX0Hours() {
        return "setiap %s jam";
    }
    betweenX0AndX1() {
        return "antara %s dan %s";
    }
    atX0() {
        return "pada %s";
    }
    commaEveryDay() {
        return ", setiap hari";
    }
    commaEveryX0DaysOfTheWeek() {
        return ", setiap %s hari dalam minggu";
    }
    commaX0ThroughX1() {
        return ", %s hingga %s";
    }
    commaAndX0ThroughX1() {
        return ", dan %s hingga %s";
    }
    first() {
        return "pertama";
    }
    second() {
        return "kedua";
    }
    third() {
        return "ketiga";
    }
    fourth() {
        return "keempat";
    }
    fifth() {
        return "kelima";
    }
    commaOnThe() {
        return ", pada ";
    }
    spaceX0OfTheMonth() {
        return " %s pada bulan";
    }
    lastDay() {
        return "hari terakhir";
    }
    commaOnTheLastX0OfTheMonth() {
        return ", pada %s terakhir bulan";
    }
    commaOnlyOnX0() {
        return ", hanya pada %s";
    }
    commaAndOnX0() {
        return ", dan pada %s";
    }
    commaEveryX0Months() {
        return ", setiap bulan %s";
    }
    commaOnlyInX0() {
        return ", hanya pada %s";
    }
    commaOnTheLastDayOfTheMonth() {
        return ", pada hari terakhir bulan";
    }
    commaOnTheLastWeekdayOfTheMonth() {
        return ", pada minggu terakhir bulan";
    }
    commaDaysBeforeTheLastDayOfTheMonth() {
        return ", %s hari sebelum hari terakhir bulan";
    }
    firstWeekday() {
        return "hari pertama minggu bekerja";
    }
    weekdayNearestDayX0() {
        return "hari bekerja yang terdekat dengan %s";
    }
    commaOnTheX0OfTheMonth() {
        return ", pada %s bulan";
    }
    commaEveryX0Days() {
        return ", setiap %s hari";
    }
    commaBetweenDayX0AndX1OfTheMonth() {
        return ", antara hari %s dan %s dalam bulan";
    }
    commaOnDayX0OfTheMonth() {
        return ", pada hari %s dalam bulan";
    }
    commaEveryHour() {
        return ", setiap jam";
    }
    commaEveryX0Years() {
        return ", setiap %s tahun";
    }
    commaStartingX0() {
        return ", bermula %s";
    }
    daysOfTheWeek() {
        return ["Ahad", "Isnin", "Selasa", "Rabu", "Khamis", "Jumaat", "Sabtu"];
    }
    monthsOfTheYear() {
        return [
            "Januari",
            "Februari",
            "Mac",
            "April",
            "Mei",
            "Jun",
            "Julai",
            "Ogos",
            "September",
            "Oktober",
            "November",
            "Disember",
        ];
    }
}
my_exports.my = my;


(cronstrue__WEBPACK_IMPORTED_MODULE_0___default().locales)["my"] = new my();

/******/ 	return __webpack_exports__;
/******/ })()
;
});