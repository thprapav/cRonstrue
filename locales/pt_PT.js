(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("cronstrue"));
	else if(typeof define === 'function' && define.amd)
		define("locales/pt_PT", ["cronstrue"], factory);
	else if(typeof exports === 'object')
		exports["locales/pt_PT"] = factory(require("cronstrue"));
	else
		root["locales/pt_PT"] = factory(root["cronstrue"]);
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
var pt_PT_exports = __webpack_exports__;
"use strict";
Object.defineProperty(pt_PT_exports, "__esModule", { value: true });
pt_PT_exports.pt_PT = void 0;
class pt_PT {
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
        return "Ocorreu um erro ao gerar a descrição da expressão Cron.";
    }
    at() {
        return "às";
    }
    atSpace() {
        return "às ";
    }
    atX0() {
        return "Às %s";
    }
    atX0MinutesPastTheHour() {
        return "aos %s minutos da hora";
    }
    atX0SecondsPastTheMinute() {
        return "aos %s segundos do minuto";
    }
    betweenX0AndX1() {
        return "entre %s e %s";
    }
    commaBetweenDayX0AndX1OfTheMonth() {
        return ", entre os dias %s e %s do mês";
    }
    commaEveryDay() {
        return ", a cada dia";
    }
    commaEveryX0Days() {
        return ", a cada %s dias";
    }
    commaEveryX0DaysOfTheWeek() {
        return ", a cada %s dias de semana";
    }
    commaEveryX0Months() {
        return ", a cada %s meses";
    }
    commaOnDayX0OfTheMonth() {
        return ", no dia %s do mês";
    }
    commaOnlyInX0() {
        return ", somente em %s";
    }
    commaOnlyOnX0() {
        return ", somente de %s";
    }
    commaAndOnX0() {
        return ", e de %s";
    }
    commaOnThe(s, day) {
        return day === '6' || day === '0' ? ", no" : ", na ";
    }
    commaOnTheLastDayOfTheMonth() {
        return ", no último dia do mês";
    }
    commaOnTheLastWeekdayOfTheMonth() {
        return ", no último dia da semana do mês";
    }
    commaDaysBeforeTheLastDayOfTheMonth() {
        return ", %s dias antes do último dia do mês";
    }
    commaOnTheLastX0OfTheMonth() {
        return ", na última %s do mês";
    }
    commaOnTheX0OfTheMonth() {
        return ", no %s do mês";
    }
    commaX0ThroughX1() {
        return ", de %s a %s";
    }
    commaAndX0ThroughX1() {
        return ", e de %s a %s";
    }
    everyHour() {
        return "a cada hora";
    }
    everyMinute() {
        return "a cada minuto";
    }
    everyMinuteBetweenX0AndX1() {
        return "a cada minuto entre %s e %s";
    }
    everySecond() {
        return "a cada segundo";
    }
    everyX0Hours() {
        return "a cada %s horas";
    }
    everyX0Minutes() {
        return "a cada %s minutos";
    }
    everyX0Seconds() {
        return "a cada %s segundos";
    }
    fifth(s) {
        return s === '6' || s === '0' ? "quinto" : "quinta";
    }
    first(s) {
        return s === '6' || s === '0' ? "primeiro" : "primeira";
    }
    firstWeekday() {
        return "primeiro dia da semana";
    }
    fourth(s) {
        return s === '6' || s === '0' ? "quarto" : "quarta";
    }
    minutesX0ThroughX1PastTheHour() {
        return "do minuto %s até %s de cada hora";
    }
    second(s) {
        return s === '6' || s === '0' ? "segundo" : "segunda";
    }
    secondsX0ThroughX1PastTheMinute() {
        return "No segundo %s até %s de cada minuto";
    }
    spaceAnd() {
        return " e";
    }
    spaceX0OfTheMonth() {
        return " %s do mês";
    }
    lastDay() {
        return "o último dia";
    }
    third(s) {
        return s === '6' || s === '0' ? "terceiro" : "terceira";
    }
    weekdayNearestDayX0() {
        return "dia da semana mais próximo do dia %s";
    }
    commaEveryX0Years() {
        return ", a cada %s anos";
    }
    commaStartingX0() {
        return ", iniciando %s";
    }
    daysOfTheWeek() {
        return ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"];
    }
    monthsOfTheYear() {
        return [
            "janeiro",
            "fevereiro",
            "março",
            "abril",
            "maio",
            "junho",
            "julho",
            "agosto",
            "setembro",
            "outubro",
            "novembro",
            "dezembro",
        ];
    }
}
pt_PT_exports.pt_PT = pt_PT;


(cronstrue__WEBPACK_IMPORTED_MODULE_0___default().locales)["pt_PT"] = new pt_PT();

/******/ 	return __webpack_exports__;
/******/ })()
;
});