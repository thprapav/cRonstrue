(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("cronstrue"));
	else if(typeof define === 'function' && define.amd)
		define("locales/ko", ["cronstrue"], factory);
	else if(typeof exports === 'object')
		exports["locales/ko"] = factory(require("cronstrue"));
	else
		root["locales/ko"] = factory(root["cronstrue"]);
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
var ko_exports = __webpack_exports__;
"use strict";
Object.defineProperty(ko_exports, "__esModule", { value: true });
ko_exports.ko = void 0;
class ko {
    setPeriodBeforeTime() {
        return true;
    }
    pm() {
        return "오후";
    }
    am() {
        return "오전";
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
    use24HourTimeFormatByDefault() {
        return false;
    }
    anErrorOccuredWhenGeneratingTheExpressionD() {
        return "표현식 설명을 생성하는 중 오류가 발생했습니다. cron 표현식 구문을 확인하십시오.";
    }
    everyMinute() {
        return "1분마다";
    }
    everyHour() {
        return "1시간마다";
    }
    atSpace() {
        return "시간 ";
    }
    everyMinuteBetweenX0AndX1() {
        return "%s 및 %s 사이에 매 분";
    }
    at() {
        return "시간";
    }
    spaceAnd() {
        return " 및";
    }
    everySecond() {
        return "1초마다";
    }
    everyX0Seconds() {
        return "%s초마다";
    }
    secondsX0ThroughX1PastTheMinute() {
        return "정분 후 %s초에서 %s초까지";
    }
    atX0SecondsPastTheMinute() {
        return "정분 후 %s초에서";
    }
    everyX0Minutes() {
        return "%s분마다";
    }
    minutesX0ThroughX1PastTheHour() {
        return "정시 후 %s분에서 %s분까지";
    }
    atX0MinutesPastTheHour() {
        return "정시 후 %s분에서";
    }
    everyX0Hours() {
        return "%s시간마다";
    }
    betweenX0AndX1() {
        return "%s에서 %s 사이";
    }
    atX0() {
        return "%s에서";
    }
    commaEveryDay() {
        return ", 매일";
    }
    commaEveryX0DaysOfTheWeek() {
        return ", 주 중 %s일마다";
    }
    commaX0ThroughX1() {
        return ", %s에서 %s까지";
    }
    commaAndX0ThroughX1() {
        return ", 및 %s에서 %s까지";
    }
    first() {
        return "첫 번째";
    }
    second() {
        return "두 번째";
    }
    third() {
        return "세 번째";
    }
    fourth() {
        return "네 번째";
    }
    fifth() {
        return "다섯 번째";
    }
    commaOnThe() {
        return ", 해당 ";
    }
    spaceX0OfTheMonth() {
        return " 해당 월의 %s";
    }
    lastDay() {
        return "마지막 날";
    }
    commaOnTheLastX0OfTheMonth() {
        return ", 해당 월의 마지막 %s";
    }
    commaOnlyOnX0() {
        return ", %s에만";
    }
    commaAndOnX0() {
        return ", 및 %s에";
    }
    commaEveryX0Months() {
        return ", %s개월마다";
    }
    commaOnlyInX0() {
        return ", %s에만";
    }
    commaOnTheLastDayOfTheMonth() {
        return ", 해당 월의 마지막 날에";
    }
    commaOnTheLastWeekdayOfTheMonth() {
        return ", 해당 월의 마지막 평일에";
    }
    commaDaysBeforeTheLastDayOfTheMonth() {
        return ", 해당 월의 마지막 날 %s일 전";
    }
    firstWeekday() {
        return "첫 번째 평일";
    }
    weekdayNearestDayX0() {
        return "%s일과 가장 가까운 평일";
    }
    commaOnTheX0OfTheMonth() {
        return ", 해당 월의 %s에";
    }
    commaEveryX0Days() {
        return ", %s일마다";
    }
    commaBetweenDayX0AndX1OfTheMonth() {
        return ", 해당 월의 %s일에서 %s일까지";
    }
    commaOnDayX0OfTheMonth() {
        return ", 해당 월의 %s일에";
    }
    commaEveryMinute() {
        return ", 1분마다";
    }
    commaEveryHour() {
        return ", 1시간마다";
    }
    commaEveryX0Years() {
        return ", %s년마다";
    }
    commaStartingX0() {
        return ", %s부터";
    }
    daysOfTheWeek() {
        return ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
    }
    monthsOfTheYear() {
        return ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"];
    }
}
ko_exports.ko = ko;


(cronstrue__WEBPACK_IMPORTED_MODULE_0___default().locales)["ko"] = new ko();

/******/ 	return __webpack_exports__;
/******/ })()
;
});