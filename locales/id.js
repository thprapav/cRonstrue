(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("cronstrue"));
	else if(typeof define === 'function' && define.amd)
		define("locales/id", ["cronstrue"], factory);
	else if(typeof exports === 'object')
		exports["locales/id"] = factory(require("cronstrue"));
	else
		root["locales/id"] = factory(root["cronstrue"]);
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
var id_exports = __webpack_exports__;
"use strict";
Object.defineProperty(id_exports, "__esModule", { value: true });
id_exports.id = void 0;
class id {
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
        return "Terjadi kesalahan saat membuat deskripsi ekspresi. Periksa sintaks ekspresi cron.";
    }
    everyMinute() {
        return "setiap menit";
    }
    everyHour() {
        return "setiap jam";
    }
    atSpace() {
        return "Pada ";
    }
    everyMinuteBetweenX0AndX1() {
        return "Setiap menit diantara %s dan %s";
    }
    at() {
        return "Pada";
    }
    spaceAnd() {
        return " dan";
    }
    everySecond() {
        return "setiap detik";
    }
    everyX0Seconds() {
        return "setiap %s detik";
    }
    secondsX0ThroughX1PastTheMinute() {
        return "detik ke %s sampai %s melewati menit";
    }
    atX0SecondsPastTheMinute() {
        return "pada %s detik lewat satu menit";
    }
    everyX0Minutes() {
        return "setiap %s menit";
    }
    minutesX0ThroughX1PastTheHour() {
        return "menit ke %s sampai %s melewati jam";
    }
    atX0MinutesPastTheHour() {
        return "pada %s menit melewati jam";
    }
    everyX0Hours() {
        return "setiap %s jam";
    }
    betweenX0AndX1() {
        return "diantara %s dan %s";
    }
    atX0() {
        return "pada %s";
    }
    commaEveryDay() {
        return ", setiap hari";
    }
    commaEveryX0DaysOfTheWeek() {
        return ", setiap hari %s  dalam seminggu";
    }
    commaX0ThroughX1() {
        return ", %s sampai %s";
    }
    commaAndX0ThroughX1() {
        return ", dan %s sampai %s";
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
        return ", di ";
    }
    spaceX0OfTheMonth() {
        return " %s pada bulan";
    }
    lastDay() {
        return "hari terakhir";
    }
    commaOnTheLastX0OfTheMonth() {
        return ", pada %s terakhir bulan ini";
    }
    commaOnlyOnX0() {
        return ", hanya pada %s";
    }
    commaAndOnX0() {
        return ", dan pada %s";
    }
    commaEveryX0Months() {
        return ", setiap bulan %s ";
    }
    commaOnlyInX0() {
        return ", hanya pada %s";
    }
    commaOnTheLastDayOfTheMonth() {
        return ", pada hari terakhir bulan ini";
    }
    commaOnTheLastWeekdayOfTheMonth() {
        return ", pada hari kerja terakhir setiap bulan";
    }
    commaDaysBeforeTheLastDayOfTheMonth() {
        return ", %s hari sebelum hari terakhir setiap bulan";
    }
    firstWeekday() {
        return "hari kerja pertama";
    }
    weekdayNearestDayX0() {
        return "hari kerja terdekat %s";
    }
    commaOnTheX0OfTheMonth() {
        return ", pada %s bulan ini";
    }
    commaEveryX0Days() {
        return ", setiap %s hari";
    }
    commaBetweenDayX0AndX1OfTheMonth() {
        return ", antara hari %s dan %s dalam sebulan";
    }
    commaOnDayX0OfTheMonth() {
        return ", pada hari %s dalam sebulan";
    }
    commaEveryHour() {
        return ", setiap jam";
    }
    commaEveryX0Years() {
        return ", setiap %s tahun";
    }
    commaStartingX0() {
        return ", mulai pada %s";
    }
    daysOfTheWeek() {
        return ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
    }
    monthsOfTheYear() {
        return [
            "Januari",
            "Februari",
            "Maret",
            "April",
            "Mei",
            "Juni",
            "Juli",
            "Agustus",
            "September",
            "Oktober",
            "November",
            "Desember",
        ];
    }
}
id_exports.id = id;


(cronstrue__WEBPACK_IMPORTED_MODULE_0___default().locales)["id"] = new id();

/******/ 	return __webpack_exports__;
/******/ })()
;
});