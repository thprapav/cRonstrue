(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("cronstrue"));
	else if(typeof define === 'function' && define.amd)
		define("locales/zh_TW", ["cronstrue"], factory);
	else if(typeof exports === 'object')
		exports["locales/zh_TW"] = factory(require("cronstrue"));
	else
		root["locales/zh_TW"] = factory(root["cronstrue"]);
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
var zh_TW_exports = __webpack_exports__;
"use strict";
Object.defineProperty(zh_TW_exports, "__esModule", { value: true });
zh_TW_exports.zh_TW = void 0;
class zh_TW {
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
        return ", 從 %s 年至 %s 年";
    }
    use24HourTimeFormatByDefault() {
        return true;
    }
    everyMinute() {
        return "每分鐘";
    }
    everyHour() {
        return "每小時";
    }
    anErrorOccuredWhenGeneratingTheExpressionD() {
        return "產生表達式描述時發生了錯誤，請檢查 cron 表達式語法。";
    }
    atSpace() {
        return "在 ";
    }
    everyMinuteBetweenX0AndX1() {
        return "在 %s 和 %s 之間的每分鐘";
    }
    at() {
        return "在";
    }
    spaceAnd() {
        return " 和";
    }
    everySecond() {
        return "每秒";
    }
    everyX0Seconds() {
        return "每 %s 秒";
    }
    secondsX0ThroughX1PastTheMinute() {
        return "在一分鐘後的 %s 到 %s 秒";
    }
    atX0SecondsPastTheMinute() {
        return "在一分鐘後的 %s 秒";
    }
    everyX0Minutes() {
        return "每 %s 分鐘";
    }
    minutesX0ThroughX1PastTheHour() {
        return "在整點後的 %s 到 %s 分鐘";
    }
    atX0MinutesPastTheHour() {
        return "在整點後的 %s 分";
    }
    everyX0Hours() {
        return "每 %s 小時";
    }
    betweenX0AndX1() {
        return "在 %s 和 %s 之間";
    }
    atX0() {
        return "在 %s";
    }
    commaEveryDay() {
        return ", 每天";
    }
    commaEveryX0DaysOfTheWeek() {
        return ", 每週的每 %s 天";
    }
    commaX0ThroughX1() {
        return ", %s 到 %s";
    }
    commaAndX0ThroughX1() {
        return ", 和 %s 到 %s";
    }
    first() {
        return "第一個";
    }
    second() {
        return "第二個";
    }
    third() {
        return "第三個";
    }
    fourth() {
        return "第四個";
    }
    fifth() {
        return "第五個";
    }
    commaOnThe() {
        return ", 在每月 ";
    }
    spaceX0OfTheMonth() {
        return "%s ";
    }
    lastDay() {
        return "最後一天";
    }
    commaOnTheLastX0OfTheMonth() {
        return ", 每月的最後一個 %s ";
    }
    commaOnlyOnX0() {
        return ", 僅在 %s";
    }
    commaAndOnX0() {
        return ", 或 %s";
    }
    commaEveryX0Months() {
        return ", 每 %s 月";
    }
    commaOnlyInX0() {
        return ", 僅在 %s";
    }
    commaOnlyInMonthX0() {
        return ", 僅在 %s";
    }
    commaOnlyInYearX0() {
        return ", 僅在 %s 年";
    }
    commaOnTheLastDayOfTheMonth() {
        return ", 每月的最後一天";
    }
    commaOnTheLastWeekdayOfTheMonth() {
        return ", 每月的最後一個工作日";
    }
    commaDaysBeforeTheLastDayOfTheMonth() {
        return ", %s 這個月的最後一天的前幾天";
    }
    firstWeekday() {
        return "第一個工作日";
    }
    weekdayNearestDayX0() {
        return "最接近 %s 號的工作日";
    }
    commaOnTheX0OfTheMonth() {
        return ", 每月的 %s ";
    }
    commaEveryX0Days() {
        return ", 每 %s 天";
    }
    commaBetweenDayX0AndX1OfTheMonth() {
        return ", 在每月的 %s 和 %s 之間";
    }
    commaOnDayX0OfTheMonth() {
        return ", 每月的 %s";
    }
    commaEveryX0Years() {
        return ", 每 %s 年";
    }
    commaStartingX0() {
        return ", %s 開始";
    }
    dayX0() {
        return " %s 號";
    }
    daysOfTheWeek() {
        return ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
    }
    monthsOfTheYear() {
        return ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"];
    }
}
zh_TW_exports.zh_TW = zh_TW;


(cronstrue__WEBPACK_IMPORTED_MODULE_0___default().locales)["zh_TW"] = new zh_TW();

/******/ 	return __webpack_exports__;
/******/ })()
;
});