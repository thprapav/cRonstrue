(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("cronstrue"));
	else if(typeof define === 'function' && define.amd)
		define("locales/th", ["cronstrue"], factory);
	else if(typeof exports === 'object')
		exports["locales/th"] = factory(require("cronstrue"));
	else
		root["locales/th"] = factory(root["cronstrue"]);
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
var th_exports = __webpack_exports__;
"use strict";
Object.defineProperty(th_exports, "__esModule", { value: true });
th_exports.th = void 0;
class th {
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
        return "เกิดข้อผิดพลาดขณะสร้างคำอธิบายนิพจน์ ตรวจสอบไวยากรณ์นิพจน์ครอน";
    }
    everyMinute() {
        return "ทุกๆ นาที";
    }
    everyHour() {
        return "ทุกๆ ชั่วโมง";
    }
    atSpace() {
        return "เมื่อ ";
    }
    everyMinuteBetweenX0AndX1() {
        return "ทุกๆ นาที %s และ %s";
    }
    at() {
        return "เมื่อ";
    }
    spaceAnd() {
        return " และ";
    }
    everySecond() {
        return "ทุกๆ วินาที";
    }
    everyX0Seconds() {
        return "ทุกๆ %s วินาที";
    }
    secondsX0ThroughX1PastTheMinute() {
        return "วินาที %s ถึง %s นาทีที่ผ่านมา";
    }
    atX0SecondsPastTheMinute() {
        return "เมื่อ %s วินาที นาทีที่ผ่านมา";
    }
    everyX0Minutes() {
        return "ทุกๆ %s นาที";
    }
    minutesX0ThroughX1PastTheHour() {
        return "นาที %s ถึง %s ชั่วโมงที่ผ่านมา";
    }
    atX0MinutesPastTheHour() {
        return "เมื่อ %s นาที ชั่วโมงที่ผ่านมา";
    }
    everyX0Hours() {
        return "ทุกๆ %s ชั่วโมง";
    }
    betweenX0AndX1() {
        return "ระหว่าง %s ถึง %s";
    }
    atX0() {
        return "เมื่อ %s";
    }
    commaEveryDay() {
        return ", ทุกๆ วัน";
    }
    commaEveryX0DaysOfTheWeek() {
        return ", ทุกๆ %s วันของสัปดาห์";
    }
    commaX0ThroughX1() {
        return ", %s ถึง %s";
    }
    commaAndX0ThroughX1() {
        return ", %s ถึง %s";
    }
    first() {
        return "แรก";
    }
    second() {
        return "ที่สอง";
    }
    third() {
        return "ที่สาม";
    }
    fourth() {
        return "ที่สี่";
    }
    fifth() {
        return "ที่ห้า";
    }
    commaOnThe() {
        return ", ในวัน ";
    }
    spaceX0OfTheMonth() {
        return " %s ของเดือน";
    }
    lastDay() {
        return "วันสุดท้าย";
    }
    commaOnTheLastX0OfTheMonth() {
        return ", ณ สุดท้าย %s ของเดือน";
    }
    commaOnlyOnX0() {
        return ", เท่านั้น %s";
    }
    commaAndOnX0() {
        return ", และใน %s";
    }
    commaEveryX0Months() {
        return ", ทุกๆ %s เดือน";
    }
    commaOnlyInX0() {
        return ", เท่านั้น %s";
    }
    commaOnTheLastDayOfTheMonth() {
        return ", ในวันสิ้นเดือน";
    }
    commaOnTheLastWeekdayOfTheMonth() {
        return ", ในวันธรรมดาสุดท้ายของเดือน";
    }
    commaDaysBeforeTheLastDayOfTheMonth() {
        return ", %s วันก่อนวันสุดท้ายของเดือน";
    }
    firstWeekday() {
        return "วันธรรมดาวันแรก";
    }
    weekdayNearestDayX0() {
        return "วันธรรมดาที่ใกล้ที่สุด %s";
    }
    commaOnTheX0OfTheMonth() {
        return ", ในวัน %s ของเดือน";
    }
    commaEveryX0Days() {
        return ", ทุกๆ %s วัน";
    }
    commaBetweenDayX0AndX1OfTheMonth() {
        return ", ระหว่างวัน %s และ %s ของเดือน";
    }
    commaOnDayX0OfTheMonth() {
        return ", ในวัน %s ของเดือน";
    }
    commaEveryHour() {
        return ", ทุกๆ ชั่วโมง";
    }
    commaEveryX0Years() {
        return ", ทุกๆ %s ปี";
    }
    commaStartingX0() {
        return ", เริ่ม %s";
    }
    daysOfTheWeek() {
        return ["วันอาทิตย์", "วันจันทร์", "วันอังคาร", "วันพุธ", "วันพฤหัสบดี", "วันศุกร์", "วันเสาร์"];
    }
    monthsOfTheYear() {
        return [
            "มกราคม",
            "กุมภาพันธ์",
            "มีนาคม",
            "เมษายน",
            "พฤษภาคม",
            "มิถุนายน",
            "กรกฎาคม",
            "สิงหาคม",
            "กันยายน",
            "ตุลาคม",
            "พฤศจิกายน",
            "ธันวาคม",
        ];
    }
}
th_exports.th = th;


(cronstrue__WEBPACK_IMPORTED_MODULE_0___default().locales)["th"] = new th();

/******/ 	return __webpack_exports__;
/******/ })()
;
});