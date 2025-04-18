(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("cronstrue"));
	else if(typeof define === 'function' && define.amd)
		define("locales/zh_CN", ["cronstrue"], factory);
	else if(typeof exports === 'object')
		exports["locales/zh_CN"] = factory(require("cronstrue"));
	else
		root["locales/zh_CN"] = factory(root["cronstrue"]);
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
var zh_CN_exports = __webpack_exports__;
"use strict";
Object.defineProperty(zh_CN_exports, "__esModule", { value: true });
zh_CN_exports.zh_CN = void 0;
class zh_CN {
    setPeriodBeforeTime() {
        return true;
    }
    pm() {
        return "下午";
    }
    am() {
        return "上午";
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
        return ", 从%s年至%s年";
    }
    use24HourTimeFormatByDefault() {
        return false;
    }
    everyMinute() {
        return "每分钟";
    }
    everyHour() {
        return "每小时";
    }
    anErrorOccuredWhenGeneratingTheExpressionD() {
        return "生成表达式描述时发生了错误，请检查cron表达式语法。";
    }
    atSpace() {
        return "在";
    }
    everyMinuteBetweenX0AndX1() {
        return "在 %s 至 %s 之间的每分钟";
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
        return "每隔 %s 秒";
    }
    secondsX0ThroughX1PastTheMinute() {
        return "在一分钟后的第 %s 到 %s 秒";
    }
    atX0SecondsPastTheMinute() {
        return "在一分钟后的第 %s 秒";
    }
    everyX0Minutes() {
        return "每隔 %s 分钟";
    }
    minutesX0ThroughX1PastTheHour() {
        return "在整点后的第 %s 到 %s 分钟";
    }
    atX0MinutesPastTheHour() {
        return "在整点后的第 %s 分钟";
    }
    everyX0Hours() {
        return "每隔 %s 小时";
    }
    betweenX0AndX1() {
        return "在 %s 和 %s 之间";
    }
    atX0() {
        return "在%s";
    }
    commaEveryDay() {
        return ", 每天";
    }
    commaEveryX0DaysOfTheWeek() {
        return ", 每周的每 %s 天";
    }
    commaX0ThroughX1() {
        return ", %s至%s";
    }
    commaAndX0ThroughX1() {
        return ", 和%s至%s";
    }
    first() {
        return "第一个";
    }
    second() {
        return "第二个";
    }
    third() {
        return "第三个";
    }
    fourth() {
        return "第四个";
    }
    fifth() {
        return "第五个";
    }
    commaOnThe() {
        return ", 限每月的";
    }
    spaceX0OfTheMonth() {
        return "%s";
    }
    lastDay() {
        return "本月最后一天";
    }
    commaOnTheLastX0OfTheMonth() {
        return ", 限每月的最后一个%s";
    }
    commaOnlyOnX0() {
        return ", 仅%s";
    }
    commaAndOnX0() {
        return ", 或者为%s";
    }
    commaEveryX0Months() {
        return ", 每隔 %s 个月";
    }
    commaOnlyInX0() {
        return ", 仅限%s";
    }
    commaOnlyInMonthX0() {
        return ", 仅于%s份";
    }
    commaOnlyInYearX0() {
        return ", 仅于 %s 年";
    }
    commaOnTheLastDayOfTheMonth() {
        return ", 限每月的最后一天";
    }
    commaOnTheLastWeekdayOfTheMonth() {
        return ", 限每月的最后一个工作日";
    }
    commaDaysBeforeTheLastDayOfTheMonth() {
        return ", 限每月最后%s天";
    }
    firstWeekday() {
        return "第一个工作日";
    }
    weekdayNearestDayX0() {
        return "最接近 %s 号的工作日";
    }
    commaOnTheX0OfTheMonth() {
        return ", 限每月的%s";
    }
    commaEveryX0Days() {
        return ", 每隔 %s 天";
    }
    commaBetweenDayX0AndX1OfTheMonth() {
        return ", 限每月的 %s 至 %s 之间";
    }
    commaOnDayX0OfTheMonth() {
        return ", 限每月%s";
    }
    commaEveryX0Years() {
        return ", 每隔 %s 年";
    }
    commaStartingX0() {
        return ", %s开始";
    }
    dayX0() {
        return " %s 号";
    }
    daysOfTheWeek() {
        return ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
    }
    monthsOfTheYear() {
        return ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"];
    }
}
zh_CN_exports.zh_CN = zh_CN;


(cronstrue__WEBPACK_IMPORTED_MODULE_0___default().locales)["zh_CN"] = new zh_CN();

/******/ 	return __webpack_exports__;
/******/ })()
;
});