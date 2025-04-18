(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("cronstrue"));
	else if(typeof define === 'function' && define.amd)
		define("locales/ja", ["cronstrue"], factory);
	else if(typeof exports === 'object')
		exports["locales/ja"] = factory(require("cronstrue"));
	else
		root["locales/ja"] = factory(root["cronstrue"]);
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
var ja_exports = __webpack_exports__;
"use strict";
Object.defineProperty(ja_exports, "__esModule", { value: true });
ja_exports.ja = void 0;
class ja {
    use24HourTimeFormatByDefault() {
        return true;
    }
    everyMinute() {
        return "毎分";
    }
    everyHour() {
        return "毎時";
    }
    anErrorOccuredWhenGeneratingTheExpressionD() {
        return "式の記述を生成する際にエラーが発生しました。Cron 式の構文を確認してください。";
    }
    atSpace() {
        return "次において実施";
    }
    everyMinuteBetweenX0AndX1() {
        return "%s から %s まで毎分";
    }
    at() {
        return "次において実施";
    }
    spaceAnd() {
        return "と";
    }
    everySecond() {
        return "毎秒";
    }
    everyX0Seconds() {
        return "%s 秒ごと";
    }
    secondsX0ThroughX1PastTheMinute() {
        return "毎分 %s 秒から %s 秒まで";
    }
    atX0SecondsPastTheMinute() {
        return "毎分 %s 秒過ぎ";
    }
    everyX0Minutes() {
        return "%s 分ごと";
    }
    minutesX0ThroughX1PastTheHour() {
        return "毎時 %s 分から %s 分まで";
    }
    atX0MinutesPastTheHour() {
        return "毎時 %s 分過ぎ";
    }
    everyX0Hours() {
        return "%s 時間ごと";
    }
    betweenX0AndX1() {
        return "%s と %s の間";
    }
    atX0() {
        return "次において実施 %s";
    }
    commaEveryDay() {
        return "、毎日";
    }
    commaEveryX0DaysOfTheWeek() {
        return "、週のうち %s 日ごと";
    }
    commaX0ThroughX1() {
        return "、%s から %s まで";
    }
    commaAndX0ThroughX1() {
        return "、%s から %s まで";
    }
    first() {
        return "1 番目";
    }
    second() {
        return "2 番目";
    }
    third() {
        return "3 番目";
    }
    fourth() {
        return "4 番目";
    }
    fifth() {
        return "5 番目";
    }
    commaOnThe() {
        return "次に";
    }
    spaceX0OfTheMonth() {
        return "月のうち %s";
    }
    commaOnTheLastX0OfTheMonth() {
        return "月の最後の %s に";
    }
    commaOnlyOnX0() {
        return "%s にのみ";
    }
    commaEveryX0Months() {
        return "、%s か月ごと";
    }
    commaOnlyInX0() {
        return "%s でのみ";
    }
    commaOnTheLastDayOfTheMonth() {
        return "次の最終日に";
    }
    commaOnTheLastWeekdayOfTheMonth() {
        return "月の最後の平日に";
    }
    firstWeekday() {
        return "最初の平日";
    }
    weekdayNearestDayX0() {
        return "%s 日の直近の平日";
    }
    commaOnTheX0OfTheMonth() {
        return "月の %s に";
    }
    commaEveryX0Days() {
        return "、%s 日ごと";
    }
    commaBetweenDayX0AndX1OfTheMonth() {
        return "、月の %s 日から %s 日の間";
    }
    commaOnDayX0OfTheMonth() {
        return "、月の %s 日目";
    }
    spaceAndSpace() {
        return "と";
    }
    commaEveryMinute() {
        return "、毎分";
    }
    commaEveryHour() {
        return "、毎時";
    }
    commaEveryX0Years() {
        return "、%s 年ごと";
    }
    commaStartingX0() {
        return "、%s に開始";
    }
    aMPeriod() {
        return "AM";
    }
    pMPeriod() {
        return "PM";
    }
    commaDaysBeforeTheLastDayOfTheMonth() {
        return "月の最終日の %s 日前";
    }
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
    lastDay() {
        return "最終日";
    }
    commaAndOnX0() {
        return "、〜と %s";
    }
    daysOfTheWeek() {
        return ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"];
    }
    monthsOfTheYear() {
        return ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];
    }
}
ja_exports.ja = ja;


(cronstrue__WEBPACK_IMPORTED_MODULE_0___default().locales)["ja"] = new ja();

/******/ 	return __webpack_exports__;
/******/ })()
;
});