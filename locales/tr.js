(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("cronstrue"));
	else if(typeof define === 'function' && define.amd)
		define("locales/tr", ["cronstrue"], factory);
	else if(typeof exports === 'object')
		exports["locales/tr"] = factory(require("cronstrue"));
	else
		root["locales/tr"] = factory(root["cronstrue"]);
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
var tr_exports = __webpack_exports__;
"use strict";
Object.defineProperty(tr_exports, "__esModule", { value: true });
tr_exports.tr = void 0;
class tr {
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
    everyMinute() {
        return "her dakika";
    }
    everyHour() {
        return "her saat";
    }
    anErrorOccuredWhenGeneratingTheExpressionD() {
        return "İfade açıklamasını oluştururken bir hata oluştu. Cron ifadesini gözden geçirin.";
    }
    atSpace() {
        return "Saat ";
    }
    everyMinuteBetweenX0AndX1() {
        return "Saat %s ve %s arasındaki her dakika";
    }
    at() {
        return "Saat";
    }
    spaceAnd() {
        return " ve";
    }
    everySecond() {
        return "her saniye";
    }
    everyX0Seconds() {
        return "her %s saniyede bir";
    }
    secondsX0ThroughX1PastTheMinute() {
        return "dakikaların %s. ve %s. saniyeleri arası";
    }
    atX0SecondsPastTheMinute() {
        return "dakikaların %s. saniyesinde";
    }
    everyX0Minutes() {
        return "her %s dakikada bir";
    }
    minutesX0ThroughX1PastTheHour() {
        return "saatlerin %s. ve %s. dakikaları arası";
    }
    atX0MinutesPastTheHour() {
        return "saatlerin %s. dakikasında";
    }
    everyX0Hours() {
        return "her %s saatte";
    }
    betweenX0AndX1() {
        return "%s ile %s arasında";
    }
    atX0() {
        return "saat %s";
    }
    commaEveryDay() {
        return ", her gün";
    }
    commaEveryX0DaysOfTheWeek() {
        return ", ayın her %s günü";
    }
    commaX0ThroughX1() {
        return ", %s ile %s arasında";
    }
    commaAndX0ThroughX1() {
        return ", ve %s ile %s arasında";
    }
    first() {
        return "ilk";
    }
    second() {
        return "ikinci";
    }
    third() {
        return "üçüncü";
    }
    fourth() {
        return "dördüncü";
    }
    fifth() {
        return "beşinci";
    }
    commaOnThe() {
        return ", ayın ";
    }
    spaceX0OfTheMonth() {
        return " %s günü";
    }
    lastDay() {
        return "son gün";
    }
    commaOnTheLastX0OfTheMonth() {
        return ", ayın son %s günü";
    }
    commaOnlyOnX0() {
        return ", sadece %s günü";
    }
    commaAndOnX0() {
        return ", ve %s";
    }
    commaEveryX0Months() {
        return ", %s ayda bir";
    }
    commaOnlyInX0() {
        return ", sadece %s için";
    }
    commaOnTheLastDayOfTheMonth() {
        return ", ayın son günü";
    }
    commaOnTheLastWeekdayOfTheMonth() {
        return ", ayın son iş günü";
    }
    commaDaysBeforeTheLastDayOfTheMonth() {
        return ", %s ayın son gününden önceki günler";
    }
    firstWeekday() {
        return "ilk iş günü";
    }
    weekdayNearestDayX0() {
        return "%s. günü sonrasındaki ilk iş günü";
    }
    commaOnTheX0OfTheMonth() {
        return ", ayın %s";
    }
    commaEveryX0Days() {
        return ", %s günde bir";
    }
    commaBetweenDayX0AndX1OfTheMonth() {
        return ", ayın %s. ve %s. günleri arası";
    }
    commaOnDayX0OfTheMonth() {
        return ", ayın %s. günü";
    }
    commaEveryX0Years() {
        return ", %s yılda bir";
    }
    commaStartingX0() {
        return ", başlangıç %s";
    }
    daysOfTheWeek() {
        return ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    }
    monthsOfTheYear() {
        return [
            "Ocak",
            "Şubat",
            "Mart",
            "Nisan",
            "Mayıs",
            "Haziran",
            "Temmuz",
            "Ağustos",
            "Eylül",
            "Ekim",
            "Kasım",
            "Aralık",
        ];
    }
}
tr_exports.tr = tr;


(cronstrue__WEBPACK_IMPORTED_MODULE_0___default().locales)["tr"] = new tr();

/******/ 	return __webpack_exports__;
/******/ })()
;
});