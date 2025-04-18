(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("cronstrue"));
	else if(typeof define === 'function' && define.amd)
		define("locales/vi", ["cronstrue"], factory);
	else if(typeof exports === 'object')
		exports["locales/vi"] = factory(require("cronstrue"));
	else
		root["locales/vi"] = factory(root["cronstrue"]);
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
var vi_exports = __webpack_exports__;
"use strict";
Object.defineProperty(vi_exports, "__esModule", { value: true });
vi_exports.vi = void 0;
class vi {
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
        return "Đã xảy ra lỗi khi tạo mô tả biểu thức. Vui lòng kiểm tra cú pháp biểu thức cron.";
    }
    everyMinute() {
        return "mỗi phút";
    }
    everyHour() {
        return "mỗi giờ";
    }
    atSpace() {
        return "Vào ";
    }
    everyMinuteBetweenX0AndX1() {
        return "Mỗi phút giữa %s and %s";
    }
    at() {
        return "Vào";
    }
    spaceAnd() {
        return " và";
    }
    everySecond() {
        return "mỗi giây";
    }
    everyX0Seconds() {
        return "mỗi %s giây";
    }
    secondsX0ThroughX1PastTheMinute() {
        return "giây thứ %s qua phút thứ %s";
    }
    atX0SecondsPastTheMinute() {
        return "tại giây thứ %s của mỗi phút";
    }
    everyX0Minutes() {
        return "mỗi %s phút";
    }
    minutesX0ThroughX1PastTheHour() {
        return "phút thứ %s qua %s tiếng";
    }
    atX0MinutesPastTheHour() {
        return "vào %s phút của mỗi tiếng";
    }
    everyX0Hours() {
        return "mỗi %s tiếng";
    }
    betweenX0AndX1() {
        return "giữa %s và %s";
    }
    atX0() {
        return "vào %s";
    }
    commaEveryDay() {
        return ", mỗi ngày";
    }
    commaEveryX0DaysOfTheWeek() {
        return ", mỗi %s ngày trong tuần";
    }
    commaX0ThroughX1() {
        return ", %s đến %s";
    }
    commaAndX0ThroughX1() {
        return ", %s đến %s";
    }
    first() {
        return "đầu tiên";
    }
    second() {
        return "thứ 2";
    }
    third() {
        return "thứ 3";
    }
    fourth() {
        return "thứ 4";
    }
    fifth() {
        return "thứ 5";
    }
    commaOnThe() {
        return ", trên ";
    }
    spaceX0OfTheMonth() {
        return " %s của tháng";
    }
    lastDay() {
        return "ngày cuối cùng";
    }
    commaOnTheLastX0OfTheMonth() {
        return ", vào ngày %s cuối cùng của tháng";
    }
    commaOnlyOnX0() {
        return ", chỉ trên %s";
    }
    commaAndOnX0() {
        return ", và hơn %s";
    }
    commaEveryX0Months() {
        return ", mỗi ngày %s tháng";
    }
    commaOnlyInX0() {
        return ", chỉ trong %s";
    }
    commaOnTheLastDayOfTheMonth() {
        return ", vào ngày cuối cùng của tháng";
    }
    commaOnTheLastWeekdayOfTheMonth() {
        return ", vào ngày cuối tuần của tháng";
    }
    commaDaysBeforeTheLastDayOfTheMonth() {
        return ", %s ngày trước ngày cuối cùng của tháng";
    }
    firstWeekday() {
        return "ngày đầu tuần";
    }
    weekdayNearestDayX0() {
        return "ngày trong tuần ngày gần nhất %s";
    }
    commaOnTheX0OfTheMonth() {
        return ", vào ngày %s của tháng";
    }
    commaEveryX0Days() {
        return ", mỗi %s ngày";
    }
    commaBetweenDayX0AndX1OfTheMonth() {
        return ", giữa ngày %s và %s trong tháng";
    }
    commaOnDayX0OfTheMonth() {
        return ", vào %s ngày trong tháng";
    }
    commaEveryHour() {
        return ", mỗi tiếng";
    }
    commaEveryX0Years() {
        return ", mỗi %s năm";
    }
    commaStartingX0() {
        return ", bắt đầu %s";
    }
    daysOfTheWeek() {
        return ["Chủ nhật", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"];
    }
    monthsOfTheYear() {
        return [
            "Tháng 1",
            "Tháng 2",
            "Tháng 3",
            "Tháng 4",
            "Tháng 5",
            "Tháng 6",
            "Tháng 7",
            "Tháng 8",
            "Tháng 9",
            "Tháng 10",
            "Tháng 11",
            "Tháng 12",
        ];
    }
}
vi_exports.vi = vi;


(cronstrue__WEBPACK_IMPORTED_MODULE_0___default().locales)["vi"] = new vi();

/******/ 	return __webpack_exports__;
/******/ })()
;
});