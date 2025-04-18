(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("cronstrue"));
	else if(typeof define === 'function' && define.amd)
		define("locales/ar", ["cronstrue"], factory);
	else if(typeof exports === 'object')
		exports["locales/ar"] = factory(require("cronstrue"));
	else
		root["locales/ar"] = factory(root["cronstrue"]);
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
var ar_exports = __webpack_exports__;
"use strict";
Object.defineProperty(ar_exports, "__esModule", { value: true });
ar_exports.ar = void 0;
class ar {
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
        return "حدث خطأ في إنشاء وصف المصطلح٠ تأكد من تركيب مصطلح الكرون";
    }
    everyMinute() {
        return "كل دقيقة";
    }
    everyHour() {
        return "كل ساعة";
    }
    atSpace() {
        return " ";
    }
    everyMinuteBetweenX0AndX1() {
        return "كل دقيقة بين %s و %s";
    }
    at() {
        return "";
    }
    spaceAnd() {
        return " و";
    }
    everySecond() {
        return "كل ثانية";
    }
    everyX0Seconds() {
        return "كل %s ثواني";
    }
    secondsX0ThroughX1PastTheMinute() {
        return "الثواني %s حتى %s من بداية الدقيقة";
    }
    atX0SecondsPastTheMinute() {
        return "الثانية %s من بداية الدقيقة";
    }
    everyX0Minutes() {
        return "كل %s دقائق";
    }
    minutesX0ThroughX1PastTheHour() {
        return "الدقائق %s حتى %s من بداية الساعة";
    }
    atX0MinutesPastTheHour() {
        return "الدقيقة %s من بداية الساعة";
    }
    everyX0Hours() {
        return "كل %s ساعات";
    }
    betweenX0AndX1() {
        return "بين %s و %s";
    }
    atX0() {
        return "%s";
    }
    commaEveryDay() {
        return "، كل يوم";
    }
    commaEveryX0DaysOfTheWeek() {
        return "، كل %s من أيام الأسبوع";
    }
    commaX0ThroughX1() {
        return "، %s حتى %s";
    }
    commaAndX0ThroughX1() {
        return "، و %s حتى %s";
    }
    first() {
        return "أول";
    }
    second() {
        return "ثاني";
    }
    third() {
        return "ثالث";
    }
    fourth() {
        return "رابع";
    }
    fifth() {
        return "خامس";
    }
    commaOnThe() {
        return "، في ال";
    }
    spaceX0OfTheMonth() {
        return " %s من الشهر";
    }
    lastDay() {
        return "اليوم الأخير";
    }
    commaOnTheLastX0OfTheMonth() {
        return "، في اخر %s من الشهر";
    }
    commaOnlyOnX0() {
        return "، %s فقط";
    }
    commaAndOnX0() {
        return "، وفي %s";
    }
    commaEveryX0Months() {
        return "، كل %s أشهر";
    }
    commaOnlyInX0() {
        return "، %s فقط";
    }
    commaOnTheLastDayOfTheMonth() {
        return "، في اخر يوم من الشهر";
    }
    commaOnTheLastWeekdayOfTheMonth() {
        return "، في اخر يوم أسبوع من الشهر";
    }
    commaDaysBeforeTheLastDayOfTheMonth() {
        return "، %s أيام قبل اخر يوم من الشهر";
    }
    firstWeekday() {
        return "اول ايام الأسبوع";
    }
    weekdayNearestDayX0() {
        return "يوم الأسبوع الأقرب ليوم %s";
    }
    commaOnTheX0OfTheMonth() {
        return "، في %s من الشهر";
    }
    commaEveryX0Days() {
        return "، كل %s أيام";
    }
    commaBetweenDayX0AndX1OfTheMonth() {
        return "، بين يوم %s و %s من الشهر";
    }
    commaOnDayX0OfTheMonth() {
        return "، في اليوم %s من الشهر";
    }
    commaEveryHour() {
        return "، كل ساعة";
    }
    commaEveryX0Years() {
        return "، كل %s سنوات";
    }
    commaStartingX0() {
        return "، بداية من %s";
    }
    daysOfTheWeek() {
        return ["الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"];
    }
    monthsOfTheYear() {
        return [
            "يناير",
            "فبراير",
            "مارس",
            "ابريل",
            "مايو",
            "يونيو",
            "يوليو",
            "أغسطس",
            "سبتمبر",
            "أكتوبر",
            "نوفمبر",
            "ديسمبر",
        ];
    }
}
ar_exports.ar = ar;


(cronstrue__WEBPACK_IMPORTED_MODULE_0___default().locales)["ar"] = new ar();

/******/ 	return __webpack_exports__;
/******/ })()
;
});