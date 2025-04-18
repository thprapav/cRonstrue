(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("cronstrue"));
	else if(typeof define === 'function' && define.amd)
		define("locales/fr", ["cronstrue"], factory);
	else if(typeof exports === 'object')
		exports["locales/fr"] = factory(require("cronstrue"));
	else
		root["locales/fr"] = factory(root["cronstrue"]);
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
var fr_exports = __webpack_exports__;
"use strict";
Object.defineProperty(fr_exports, "__esModule", { value: true });
fr_exports.fr = void 0;
class fr {
    conciseVerbosityReplacements() {
        return {
            "de le": "du",
        };
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
        return true;
    }
    anErrorOccuredWhenGeneratingTheExpressionD() {
        return "Une erreur est survenue en générant la description de l'expression cron. Vérifiez sa syntaxe.";
    }
    everyMinute() {
        return "toutes les minutes";
    }
    everyHour() {
        return "toutes les heures";
    }
    atSpace() {
        return "À ";
    }
    everyMinuteBetweenX0AndX1() {
        return "Toutes les minutes entre %s et %s";
    }
    at() {
        return "À";
    }
    spaceAnd() {
        return " et";
    }
    everySecond() {
        return "toutes les secondes";
    }
    everyX0Seconds() {
        return "toutes les %s secondes";
    }
    secondsX0ThroughX1PastTheMinute() {
        return "les secondes entre %s et %s après la minute";
    }
    atX0SecondsPastTheMinute() {
        return "%s secondes après la minute";
    }
    everyX0Minutes() {
        return "toutes les %s minutes";
    }
    minutesX0ThroughX1PastTheHour() {
        return "les minutes entre %s et %s après l'heure";
    }
    atX0MinutesPastTheHour() {
        return "%s minutes après l'heure";
    }
    everyX0Hours() {
        return "toutes les %s heures";
    }
    betweenX0AndX1() {
        return "de %s à %s";
    }
    atX0() {
        return "%s";
    }
    commaEveryDay() {
        return ", tous les jours";
    }
    commaEveryX0DaysOfTheWeek() {
        return ", tous les %s jours de la semaine";
    }
    commaX0ThroughX1() {
        return ", de %s à %s";
    }
    commaAndX0ThroughX1() {
        return ", et de %s à %s";
    }
    first() {
        return "premier";
    }
    second() {
        return "second";
    }
    third() {
        return "troisième";
    }
    fourth() {
        return "quatrième";
    }
    fifth() {
        return "cinquième";
    }
    commaOnThe() {
        return ", le ";
    }
    spaceX0OfTheMonth() {
        return " %s du mois";
    }
    lastDay() {
        return "le dernier jour";
    }
    commaOnTheLastX0OfTheMonth() {
        return ", le dernier %s du mois";
    }
    commaOnlyOnX0() {
        return ", uniquement le %s";
    }
    commaAndOnX0() {
        return ", et %s";
    }
    commaEveryX0Months() {
        return ", tous les %s mois";
    }
    commaOnlyInX0() {
        return ", uniquement en %s";
    }
    commaOnTheLastDayOfTheMonth() {
        return ", le dernier jour du mois";
    }
    commaOnTheLastWeekdayOfTheMonth() {
        return ", le dernier jour ouvrable du mois";
    }
    commaDaysBeforeTheLastDayOfTheMonth() {
        return ", %s jours avant le dernier jour du mois";
    }
    firstWeekday() {
        return "premier jour ouvrable";
    }
    weekdayNearestDayX0() {
        return "jour ouvrable le plus proche du %s";
    }
    commaOnTheX0OfTheMonth() {
        return ", le %s du mois";
    }
    commaEveryX0Days() {
        return ", tous les %s jours";
    }
    commaBetweenDayX0AndX1OfTheMonth() {
        return ", du %s au %s du mois";
    }
    commaOnDayX0OfTheMonth() {
        return ", le %s du mois";
    }
    commaEveryHour() {
        return ", chaque heure";
    }
    commaEveryX0Years() {
        return ", tous les %s ans";
    }
    commaDaysX0ThroughX1() {
        return ", du %s au %s";
    }
    commaStartingX0() {
        return ", à partir de %s";
    }
    daysOfTheWeek() {
        return ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];
    }
    monthsOfTheYear() {
        return [
            "janvier",
            "février",
            "mars",
            "avril",
            "mai",
            "juin",
            "juillet",
            "août",
            "septembre",
            "octobre",
            "novembre",
            "décembre",
        ];
    }
}
fr_exports.fr = fr;


(cronstrue__WEBPACK_IMPORTED_MODULE_0___default().locales)["fr"] = new fr();

/******/ 	return __webpack_exports__;
/******/ })()
;
});