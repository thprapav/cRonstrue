(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("cronstrue", [], factory);
	else if(typeof exports === 'object')
		exports["cronstrue"] = factory();
	else
		root["cronstrue"] = factory();
})(globalThis, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 71:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StringUtilities = void 0;
class StringUtilities {
    static format(template, ...values) {
        return template.replace(/%s/g, function (substring, ...args) {
            return values.shift();
        });
    }
    static containsAny(text, searchStrings) {
        return searchStrings.some((c) => {
            return text.indexOf(c) > -1;
        });
    }
}
exports.StringUtilities = StringUtilities;


/***/ }),

/***/ 83:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.enLocaleLoader = void 0;
const en_1 = __webpack_require__(814);
class enLocaleLoader {
    load(availableLocales) {
        availableLocales["en"] = new en_1.en();
    }
}
exports.enLocaleLoader = enLocaleLoader;


/***/ }),

/***/ 259:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
function assert(value, message) {
    if (!value) {
        throw new Error(message);
    }
}
class RangeValidator {
    static secondRange(parse) {
        const parsed = parse.split(',');
        for (let i = 0; i < parsed.length; i++) {
            if (!isNaN(parseInt(parsed[i], 10))) {
                const second = parseInt(parsed[i], 10);
                assert(second >= 0 && second <= 59, 'seconds part must be >= 0 and <= 59');
            }
        }
    }
    static minuteRange(parse) {
        const parsed = parse.split(',');
        for (let i = 0; i < parsed.length; i++) {
            if (!isNaN(parseInt(parsed[i], 10))) {
                const minute = parseInt(parsed[i], 10);
                assert(minute >= 0 && minute <= 59, 'minutes part must be >= 0 and <= 59');
            }
        }
    }
    static hourRange(parse) {
        const parsed = parse.split(',');
        for (let i = 0; i < parsed.length; i++) {
            if (!isNaN(parseInt(parsed[i], 10))) {
                const hour = parseInt(parsed[i], 10);
                assert(hour >= 0 && hour <= 23, 'hours part must be >= 0 and <= 23');
            }
        }
    }
    static dayOfMonthRange(parse) {
        const parsed = parse.split(',');
        for (let i = 0; i < parsed.length; i++) {
            if (!isNaN(parseInt(parsed[i], 10))) {
                const dayOfMonth = parseInt(parsed[i], 10);
                assert(dayOfMonth >= 1 && dayOfMonth <= 31, 'DOM part must be >= 1 and <= 31');
            }
        }
    }
    static monthRange(parse, monthStartIndexZero) {
        const parsed = parse.split(',');
        for (let i = 0; i < parsed.length; i++) {
            if (!isNaN(parseInt(parsed[i], 10))) {
                const month = parseInt(parsed[i], 10);
                assert(month >= 1 && month <= 12, monthStartIndexZero ? 'month part must be >= 0 and <= 11' : 'month part must be >= 1 and <= 12');
            }
        }
    }
    static dayOfWeekRange(parse, dayOfWeekStartIndexZero) {
        const parsed = parse.split(',');
        for (let i = 0; i < parsed.length; i++) {
            if (!isNaN(parseInt(parsed[i], 10))) {
                const dayOfWeek = parseInt(parsed[i], 10);
                assert(dayOfWeek >= 0 && dayOfWeek <= 6, dayOfWeekStartIndexZero ? 'DOW part must be >= 0 and <= 6' : 'DOW part must be >= 1 and <= 7');
            }
        }
    }
}
exports["default"] = RangeValidator;


/***/ }),

/***/ 469:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ExpressionDescriptor = void 0;
const stringUtilities_1 = __webpack_require__(71);
const cronParser_1 = __webpack_require__(605);
class ExpressionDescriptor {
    static toString(expression, { throwExceptionOnParseError = true, verbose = false, dayOfWeekStartIndexZero = true, monthStartIndexZero = false, use24HourTimeFormat, locale = null, tzOffset = 0, } = {}) {
        let options = {
            throwExceptionOnParseError: throwExceptionOnParseError,
            verbose: verbose,
            dayOfWeekStartIndexZero: dayOfWeekStartIndexZero,
            monthStartIndexZero: monthStartIndexZero,
            use24HourTimeFormat: use24HourTimeFormat,
            locale: locale,
            tzOffset: tzOffset,
        };
        if (options.tzOffset) {
            console.warn(`'tzOffset' option has been deprecated and will be removed in a future release.`);
        }
        let descripter = new ExpressionDescriptor(expression, options);
        return descripter.getFullDescription();
    }
    static initialize(localesLoader, defaultLocale = "en") {
        ExpressionDescriptor.specialCharacters = ["/", "-", ",", "*"];
        ExpressionDescriptor.defaultLocale = defaultLocale;
        localesLoader.load(ExpressionDescriptor.locales);
    }
    constructor(expression, options) {
        this.expression = expression;
        this.options = options;
        this.expressionParts = new Array(5);
        if (!this.options.locale && ExpressionDescriptor.defaultLocale) {
            this.options.locale = ExpressionDescriptor.defaultLocale;
        }
        if (!ExpressionDescriptor.locales[this.options.locale]) {
            const fallBackLocale = Object.keys(ExpressionDescriptor.locales)[0];
            console.warn(`Locale '${this.options.locale}' could not be found; falling back to '${fallBackLocale}'.`);
            this.options.locale = fallBackLocale;
        }
        this.i18n = ExpressionDescriptor.locales[this.options.locale];
        if (options.use24HourTimeFormat === undefined) {
            options.use24HourTimeFormat = this.i18n.use24HourTimeFormatByDefault();
        }
    }
    getFullDescription() {
        let description = "";
        try {
            let parser = new cronParser_1.CronParser(this.expression, this.options.dayOfWeekStartIndexZero, this.options.monthStartIndexZero);
            this.expressionParts = parser.parse();
            var timeSegment = this.getTimeOfDayDescription();
            var dayOfMonthDesc = this.getDayOfMonthDescription();
            var monthDesc = this.getMonthDescription();
            var dayOfWeekDesc = this.getDayOfWeekDescription();
            var yearDesc = this.getYearDescription();
            description += timeSegment + dayOfMonthDesc + dayOfWeekDesc + monthDesc + yearDesc;
            description = this.transformVerbosity(description, !!this.options.verbose);
            description = description.charAt(0).toLocaleUpperCase() + description.substr(1);
        }
        catch (ex) {
            if (!this.options.throwExceptionOnParseError) {
                description = this.i18n.anErrorOccuredWhenGeneratingTheExpressionD();
            }
            else {
                throw `${ex}`;
            }
        }
        return description;
    }
    getTimeOfDayDescription() {
        let secondsExpression = this.expressionParts[0];
        let minuteExpression = this.expressionParts[1];
        let hourExpression = this.expressionParts[2];
        let description = "";
        if (!stringUtilities_1.StringUtilities.containsAny(minuteExpression, ExpressionDescriptor.specialCharacters) &&
            !stringUtilities_1.StringUtilities.containsAny(hourExpression, ExpressionDescriptor.specialCharacters) &&
            !stringUtilities_1.StringUtilities.containsAny(secondsExpression, ExpressionDescriptor.specialCharacters)) {
            description += this.i18n.atSpace() + this.formatTime(hourExpression, minuteExpression, secondsExpression);
        }
        else if (!secondsExpression &&
            minuteExpression.indexOf("-") > -1 &&
            !(minuteExpression.indexOf(",") > -1) &&
            !(minuteExpression.indexOf("/") > -1) &&
            !stringUtilities_1.StringUtilities.containsAny(hourExpression, ExpressionDescriptor.specialCharacters)) {
            let minuteParts = minuteExpression.split("-");
            description += stringUtilities_1.StringUtilities.format(this.i18n.everyMinuteBetweenX0AndX1(), this.formatTime(hourExpression, minuteParts[0], ""), this.formatTime(hourExpression, minuteParts[1], ""));
        }
        else if (!secondsExpression &&
            hourExpression.indexOf(",") > -1 &&
            hourExpression.indexOf("-") == -1 &&
            hourExpression.indexOf("/") == -1 &&
            !stringUtilities_1.StringUtilities.containsAny(minuteExpression, ExpressionDescriptor.specialCharacters)) {
            let hourParts = hourExpression.split(",");
            description += this.i18n.at();
            for (let i = 0; i < hourParts.length; i++) {
                description += " ";
                description += this.formatTime(hourParts[i], minuteExpression, "");
                if (i < hourParts.length - 2) {
                    description += ",";
                }
                if (i == hourParts.length - 2) {
                    description += this.i18n.spaceAnd();
                }
            }
        }
        else {
            let secondsDescription = this.getSecondsDescription();
            let minutesDescription = this.getMinutesDescription();
            let hoursDescription = this.getHoursDescription();
            description += secondsDescription;
            if (description && minutesDescription) {
                description += ", ";
            }
            description += minutesDescription;
            if (minutesDescription === hoursDescription) {
                return description;
            }
            if (description && hoursDescription) {
                description += ", ";
            }
            description += hoursDescription;
        }
        return description;
    }
    getSecondsDescription() {
        let description = this.getSegmentDescription(this.expressionParts[0], this.i18n.everySecond(), (s) => {
            return s;
        }, (s) => {
            return stringUtilities_1.StringUtilities.format(this.i18n.everyX0Seconds(s), s);
        }, (s) => {
            return this.i18n.secondsX0ThroughX1PastTheMinute();
        }, (s) => {
            return s == "0"
                ? ""
                : parseInt(s) < 20
                    ? this.i18n.atX0SecondsPastTheMinute(s)
                    : this.i18n.atX0SecondsPastTheMinuteGt20() || this.i18n.atX0SecondsPastTheMinute(s);
        });
        return description;
    }
    getMinutesDescription() {
        const secondsExpression = this.expressionParts[0];
        const hourExpression = this.expressionParts[2];
        let description = this.getSegmentDescription(this.expressionParts[1], this.i18n.everyMinute(), (s) => {
            return s;
        }, (s) => {
            return stringUtilities_1.StringUtilities.format(this.i18n.everyX0Minutes(s), s);
        }, (s) => {
            return this.i18n.minutesX0ThroughX1PastTheHour();
        }, (s) => {
            try {
                return s == "0" && hourExpression.indexOf("/") == -1 && secondsExpression == ""
                    ? this.i18n.everyHour()
                    : parseInt(s) < 20
                        ? this.i18n.atX0MinutesPastTheHour(s)
                        : this.i18n.atX0MinutesPastTheHourGt20() || this.i18n.atX0MinutesPastTheHour(s);
            }
            catch (e) {
                return this.i18n.atX0MinutesPastTheHour(s);
            }
        });
        return description;
    }
    getHoursDescription() {
        let expression = this.expressionParts[2];
        let hourIndex = 0;
        const rangeEndValues = [];
        expression
            .split("/")[0]
            .split(",")
            .forEach((range) => {
            const rangeParts = range.split("-");
            if (rangeParts.length === 2) {
                rangeEndValues.push({ value: rangeParts[1], index: hourIndex + 1 });
            }
            hourIndex += rangeParts.length;
        });
        let evaluationIndex = 0;
        let description = this.getSegmentDescription(expression, this.i18n.everyHour(), (s) => {
            const match = rangeEndValues.find((r) => r.value === s && r.index === evaluationIndex);
            const isRangeEndWithNonZeroMinute = match && this.expressionParts[1] !== "0";
            evaluationIndex++;
            return isRangeEndWithNonZeroMinute ? this.formatTime(s, "59", "") : this.formatTime(s, "0", "");
        }, (s) => {
            return stringUtilities_1.StringUtilities.format(this.i18n.everyX0Hours(s), s);
        }, (s) => {
            return this.i18n.betweenX0AndX1();
        }, (s) => {
            return this.i18n.atX0();
        });
        return description;
    }
    getDayOfWeekDescription() {
        var daysOfWeekNames = this.i18n.daysOfTheWeek();
        let description = null;
        if (this.expressionParts[5] == "*") {
            description = "";
        }
        else {
            description = this.getSegmentDescription(this.expressionParts[5], this.i18n.commaEveryDay(), (s, form) => {
                let exp = s;
                if (s.indexOf("#") > -1) {
                    exp = s.substring(0, s.indexOf("#"));
                }
                else if (s.indexOf("L") > -1) {
                    exp = exp.replace("L", "");
                }
                let parsedExp = parseInt(exp);
                if (this.options.tzOffset) {
                    const hourExpression = this.expressionParts[2];
                    let hour = parseInt(hourExpression) + (this.options.tzOffset ? this.options.tzOffset : 0);
                    if (hour >= 24) {
                        parsedExp++;
                    }
                    else if (hour < 0) {
                        parsedExp--;
                    }
                    if (parsedExp > 6) {
                        parsedExp = 0;
                    }
                    else if (parsedExp < 0) {
                        parsedExp = 6;
                    }
                }
                let description = this.i18n.daysOfTheWeekInCase
                    ? this.i18n.daysOfTheWeekInCase(form)[parsedExp]
                    : daysOfWeekNames[parsedExp];
                if (s.indexOf("#") > -1) {
                    let dayOfWeekOfMonthDescription = null;
                    let dayOfWeekOfMonthNumber = s.substring(s.indexOf("#") + 1);
                    let dayOfWeekNumber = s.substring(0, s.indexOf("#"));
                    switch (dayOfWeekOfMonthNumber) {
                        case "1":
                            dayOfWeekOfMonthDescription = this.i18n.first(dayOfWeekNumber);
                            break;
                        case "2":
                            dayOfWeekOfMonthDescription = this.i18n.second(dayOfWeekNumber);
                            break;
                        case "3":
                            dayOfWeekOfMonthDescription = this.i18n.third(dayOfWeekNumber);
                            break;
                        case "4":
                            dayOfWeekOfMonthDescription = this.i18n.fourth(dayOfWeekNumber);
                            break;
                        case "5":
                            dayOfWeekOfMonthDescription = this.i18n.fifth(dayOfWeekNumber);
                            break;
                    }
                    description = dayOfWeekOfMonthDescription + " " + description;
                }
                return description;
            }, (s) => {
                if (parseInt(s) == 1) {
                    return "";
                }
                else {
                    return stringUtilities_1.StringUtilities.format(this.i18n.commaEveryX0DaysOfTheWeek(s), s);
                }
            }, (s) => {
                const beginFrom = s.substring(0, s.indexOf("-"));
                const domSpecified = this.expressionParts[3] != "*";
                return domSpecified ? this.i18n.commaAndX0ThroughX1(beginFrom) : this.i18n.commaX0ThroughX1(beginFrom);
            }, (s) => {
                let format = null;
                if (s.indexOf("#") > -1) {
                    let dayOfWeekOfMonthNumber = s.substring(s.indexOf("#") + 1);
                    let dayOfWeek = s.substring(0, s.indexOf("#"));
                    format = this.i18n.commaOnThe(dayOfWeekOfMonthNumber, dayOfWeek).trim() + this.i18n.spaceX0OfTheMonth();
                }
                else if (s.indexOf("L") > -1) {
                    format = this.i18n.commaOnTheLastX0OfTheMonth(s.replace("L", ""));
                }
                else {
                    const domSpecified = this.expressionParts[3] != "*";
                    format = domSpecified ? this.i18n.commaAndOnX0() : this.i18n.commaOnlyOnX0(s);
                }
                return format;
            });
        }
        return description;
    }
    getMonthDescription() {
        var monthNames = this.i18n.monthsOfTheYear();
        let description = this.getSegmentDescription(this.expressionParts[4], "", (s, form) => {
            return form && this.i18n.monthsOfTheYearInCase
                ? this.i18n.monthsOfTheYearInCase(form)[parseInt(s) - 1]
                : monthNames[parseInt(s) - 1];
        }, (s) => {
            if (parseInt(s) == 1) {
                return "";
            }
            else {
                return stringUtilities_1.StringUtilities.format(this.i18n.commaEveryX0Months(s), s);
            }
        }, (s) => {
            return this.i18n.commaMonthX0ThroughMonthX1() || this.i18n.commaX0ThroughX1();
        }, (s) => {
            return this.i18n.commaOnlyInMonthX0 ? this.i18n.commaOnlyInMonthX0() : this.i18n.commaOnlyInX0();
        });
        return description;
    }
    getDayOfMonthDescription() {
        let description = null;
        let expression = this.expressionParts[3];
        switch (expression) {
            case "L":
                description = this.i18n.commaOnTheLastDayOfTheMonth();
                break;
            case "WL":
            case "LW":
                description = this.i18n.commaOnTheLastWeekdayOfTheMonth();
                break;
            default:
                let weekDayNumberMatches = expression.match(/(\d{1,2}W)|(W\d{1,2})/);
                if (weekDayNumberMatches) {
                    let dayNumber = parseInt(weekDayNumberMatches[0].replace("W", ""));
                    let dayString = dayNumber == 1
                        ? this.i18n.firstWeekday()
                        : stringUtilities_1.StringUtilities.format(this.i18n.weekdayNearestDayX0(), dayNumber.toString());
                    description = stringUtilities_1.StringUtilities.format(this.i18n.commaOnTheX0OfTheMonth(), dayString);
                    break;
                }
                else {
                    let lastDayOffSetMatches = expression.match(/L-(\d{1,2})/);
                    if (lastDayOffSetMatches) {
                        let offSetDays = lastDayOffSetMatches[1];
                        description = stringUtilities_1.StringUtilities.format(this.i18n.commaDaysBeforeTheLastDayOfTheMonth(offSetDays), offSetDays);
                        break;
                    }
                    else if (expression == "*" && this.expressionParts[5] != "*") {
                        return "";
                    }
                    else {
                        description = this.getSegmentDescription(expression, this.i18n.commaEveryDay(), (s) => {
                            return s == "L"
                                ? this.i18n.lastDay()
                                : this.i18n.dayX0
                                    ? stringUtilities_1.StringUtilities.format(this.i18n.dayX0(), s)
                                    : s;
                        }, (s) => {
                            return s == "1" ? this.i18n.commaEveryDay() : this.i18n.commaEveryX0Days(s);
                        }, (s) => {
                            return this.i18n.commaBetweenDayX0AndX1OfTheMonth(s);
                        }, (s) => {
                            return this.i18n.commaOnDayX0OfTheMonth(s);
                        });
                    }
                    break;
                }
        }
        return description;
    }
    getYearDescription() {
        let description = this.getSegmentDescription(this.expressionParts[6], "", (s) => {
            return /^\d+$/.test(s) ? new Date(parseInt(s), 1).getFullYear().toString() : s;
        }, (s) => {
            return stringUtilities_1.StringUtilities.format(this.i18n.commaEveryX0Years(s), s);
        }, (s) => {
            return this.i18n.commaYearX0ThroughYearX1() || this.i18n.commaX0ThroughX1();
        }, (s) => {
            return this.i18n.commaOnlyInYearX0 ? this.i18n.commaOnlyInYearX0() : this.i18n.commaOnlyInX0();
        });
        return description;
    }
    getSegmentDescription(expression, allDescription, getSingleItemDescription, getIncrementDescriptionFormat, getRangeDescriptionFormat, getDescriptionFormat) {
        let description = null;
        const doesExpressionContainIncrement = expression.indexOf("/") > -1;
        const doesExpressionContainRange = expression.indexOf("-") > -1;
        const doesExpressionContainMultipleValues = expression.indexOf(",") > -1;
        if (!expression) {
            description = "";
        }
        else if (expression === "*") {
            description = allDescription;
        }
        else if (!doesExpressionContainIncrement && !doesExpressionContainRange && !doesExpressionContainMultipleValues) {
            description = stringUtilities_1.StringUtilities.format(getDescriptionFormat(expression), getSingleItemDescription(expression));
        }
        else if (doesExpressionContainMultipleValues) {
            let segments = expression.split(",");
            let descriptionContent = "";
            for (let i = 0; i < segments.length; i++) {
                if (i > 0 && segments.length > 2) {
                    descriptionContent += ",";
                    if (i < segments.length - 1) {
                        descriptionContent += " ";
                    }
                }
                if (i > 0 && segments.length > 1 && (i == segments.length - 1 || segments.length == 2)) {
                    descriptionContent += `${this.i18n.spaceAnd()} `;
                }
                if (segments[i].indexOf("/") > -1 || segments[i].indexOf("-") > -1) {
                    const isSegmentRangeWithoutIncrement = segments[i].indexOf("-") > -1 && segments[i].indexOf("/") == -1;
                    let currentDescriptionContent = this.getSegmentDescription(segments[i], allDescription, getSingleItemDescription, getIncrementDescriptionFormat, isSegmentRangeWithoutIncrement ? this.i18n.commaX0ThroughX1 : getRangeDescriptionFormat, getDescriptionFormat);
                    if (isSegmentRangeWithoutIncrement) {
                        currentDescriptionContent = currentDescriptionContent.replace(", ", "");
                    }
                    descriptionContent += currentDescriptionContent;
                }
                else if (!doesExpressionContainIncrement) {
                    descriptionContent += getSingleItemDescription(segments[i]);
                }
                else {
                    descriptionContent += this.getSegmentDescription(segments[i], allDescription, getSingleItemDescription, getIncrementDescriptionFormat, getRangeDescriptionFormat, getDescriptionFormat);
                }
            }
            if (!doesExpressionContainIncrement) {
                description = stringUtilities_1.StringUtilities.format(getDescriptionFormat(expression), descriptionContent);
            }
            else {
                description = descriptionContent;
            }
        }
        else if (doesExpressionContainIncrement) {
            let segments = expression.split("/");
            description = stringUtilities_1.StringUtilities.format(getIncrementDescriptionFormat(segments[1]), segments[1]);
            if (segments[0].indexOf("-") > -1) {
                let rangeSegmentDescription = this.generateRangeSegmentDescription(segments[0], getRangeDescriptionFormat, getSingleItemDescription);
                if (rangeSegmentDescription.indexOf(", ") != 0) {
                    description += ", ";
                }
                description += rangeSegmentDescription;
            }
            else if (segments[0].indexOf("*") == -1) {
                let rangeItemDescription = stringUtilities_1.StringUtilities.format(getDescriptionFormat(segments[0]), getSingleItemDescription(segments[0]));
                rangeItemDescription = rangeItemDescription.replace(", ", "");
                description += stringUtilities_1.StringUtilities.format(this.i18n.commaStartingX0(), rangeItemDescription);
            }
        }
        else if (doesExpressionContainRange) {
            description = this.generateRangeSegmentDescription(expression, getRangeDescriptionFormat, getSingleItemDescription);
        }
        return description;
    }
    generateRangeSegmentDescription(rangeExpression, getRangeDescriptionFormat, getSingleItemDescription) {
        let description = "";
        let rangeSegments = rangeExpression.split("-");
        let rangeSegment1Description = getSingleItemDescription(rangeSegments[0], 1);
        let rangeSegment2Description = getSingleItemDescription(rangeSegments[1], 2);
        let rangeDescriptionFormat = getRangeDescriptionFormat(rangeExpression);
        description += stringUtilities_1.StringUtilities.format(rangeDescriptionFormat, rangeSegment1Description, rangeSegment2Description);
        return description;
    }
    formatTime(hourExpression, minuteExpression, secondExpression) {
        let hourOffset = 0;
        let minuteOffset = 0;
        if (this.options.tzOffset) {
            hourOffset = this.options.tzOffset > 0 ? Math.floor(this.options.tzOffset) : Math.ceil(this.options.tzOffset);
            minuteOffset = parseFloat((this.options.tzOffset % 1).toFixed(2));
            if (minuteOffset != 0) {
                minuteOffset *= 60;
            }
        }
        let hour = parseInt(hourExpression) + hourOffset;
        let minute = parseInt(minuteExpression) + minuteOffset;
        if (minute >= 60) {
            minute -= 60;
            hour += 1;
        }
        else if (minute < 0) {
            minute += 60;
            hour -= 1;
        }
        if (hour >= 24) {
            hour = hour - 24;
        }
        else if (hour < 0) {
            hour = 24 + hour;
        }
        let period = "";
        let setPeriodBeforeTime = false;
        if (!this.options.use24HourTimeFormat) {
            setPeriodBeforeTime = !!(this.i18n.setPeriodBeforeTime && this.i18n.setPeriodBeforeTime());
            period = setPeriodBeforeTime ? `${this.getPeriod(hour)} ` : ` ${this.getPeriod(hour)}`;
            if (hour > 12) {
                hour -= 12;
            }
            if (hour === 0) {
                hour = 12;
            }
        }
        let second = "";
        if (secondExpression) {
            second = `:${("00" + secondExpression).substring(secondExpression.length)}`;
        }
        return `${setPeriodBeforeTime ? period : ""}${("00" + hour.toString()).substring(hour.toString().length)}:${("00" + minute.toString()).substring(minute.toString().length)}${second}${!setPeriodBeforeTime ? period : ""}`;
    }
    transformVerbosity(description, useVerboseFormat) {
        if (!useVerboseFormat) {
            description = description.replace(new RegExp(`, ${this.i18n.everyMinute()}`, "g"), "");
            description = description.replace(new RegExp(`, ${this.i18n.everyHour()}`, "g"), "");
            description = description.replace(new RegExp(this.i18n.commaEveryDay(), "g"), "");
            description = description.replace(/\, ?$/, "");
            if (this.i18n.conciseVerbosityReplacements) {
                for (const [key, value] of Object.entries(this.i18n.conciseVerbosityReplacements())) {
                    description = description.replace(new RegExp(key, "g"), value);
                }
            }
        }
        return description;
    }
    getPeriod(hour) {
        return hour >= 12 ? (this.i18n.pm && this.i18n.pm()) || "PM" : (this.i18n.am && this.i18n.am()) || "AM";
    }
}
exports.ExpressionDescriptor = ExpressionDescriptor;
ExpressionDescriptor.locales = {};


/***/ }),

/***/ 605:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CronParser = void 0;
const rangeValidator_1 = __webpack_require__(259);
class CronParser {
    constructor(expression, dayOfWeekStartIndexZero = true, monthStartIndexZero = false) {
        this.expression = expression;
        this.dayOfWeekStartIndexZero = dayOfWeekStartIndexZero;
        this.monthStartIndexZero = monthStartIndexZero;
    }
    parse() {
        var _a;
        let parsed;
        var expression = (_a = this.expression) !== null && _a !== void 0 ? _a : '';
        if (expression.startsWith('@')) {
            var special = this.parseSpecial(this.expression);
            parsed = this.extractParts(special);
        }
        else {
            parsed = this.extractParts(this.expression);
        }
        this.normalize(parsed);
        this.validate(parsed);
        return parsed;
    }
    parseSpecial(expression) {
        const specialExpressions = {
            '@yearly': '0 0 1 1 *',
            '@annually': '0 0 1 1 *',
            '@monthly': '0 0 1 * *',
            '@weekly': '0 0 * * 0',
            '@daily': '0 0 * * *',
            '@midnight': '0 0 * * *',
            '@hourly': '0 * * * *'
        };
        const special = specialExpressions[expression];
        if (!special) {
            throw new Error('Unknown special expression.');
        }
        return special;
    }
    extractParts(expression) {
        if (!this.expression) {
            throw new Error("cron expression is empty");
        }
        let parsed = expression.trim().split(/[ ]+/);
        for (let i = 0; i < parsed.length; i++) {
            if (parsed[i].includes(",")) {
                const arrayElement = parsed[i]
                    .split(",")
                    .map((item) => item.trim())
                    .filter((item) => item !== "")
                    .map((item) => (!isNaN(Number(item)) ? Number(item) : item))
                    .filter((item) => item !== null && item !== "");
                if (arrayElement.length === 0) {
                    arrayElement.push("*");
                }
                arrayElement.sort((a, b) => (a !== null && b !== null ? a - b : 0));
                parsed[i] = arrayElement.map((item) => (item !== null ? item.toString() : "")).join(",");
            }
        }
        if (parsed.length < 5) {
            throw new Error(`Expression has only ${parsed.length} part${parsed.length == 1 ? "" : "s"}. At least 5 parts are required.`);
        }
        else if (parsed.length == 5) {
            parsed.unshift("");
            parsed.push("");
        }
        else if (parsed.length == 6) {
            const isYearWithNoSecondsPart = /\d{4}$/.test(parsed[5]) || parsed[4] == "?" || parsed[2] == "?";
            if (isYearWithNoSecondsPart) {
                parsed.unshift("");
            }
            else {
                parsed.push("");
            }
        }
        else if (parsed.length > 7) {
            throw new Error(`Expression has ${parsed.length} parts; too many!`);
        }
        return parsed;
    }
    normalize(expressionParts) {
        expressionParts[3] = expressionParts[3].replace("?", "*");
        expressionParts[5] = expressionParts[5].replace("?", "*");
        expressionParts[2] = expressionParts[2].replace("?", "*");
        if (expressionParts[0].indexOf("0/") == 0) {
            expressionParts[0] = expressionParts[0].replace("0/", "*/");
        }
        if (expressionParts[1].indexOf("0/") == 0) {
            expressionParts[1] = expressionParts[1].replace("0/", "*/");
        }
        if (expressionParts[2].indexOf("0/") == 0) {
            expressionParts[2] = expressionParts[2].replace("0/", "*/");
        }
        if (expressionParts[3].indexOf("1/") == 0) {
            expressionParts[3] = expressionParts[3].replace("1/", "*/");
        }
        if (expressionParts[4].indexOf("1/") == 0) {
            expressionParts[4] = expressionParts[4].replace("1/", "*/");
        }
        if (expressionParts[6].indexOf("1/") == 0) {
            expressionParts[6] = expressionParts[6].replace("1/", "*/");
        }
        expressionParts[5] = expressionParts[5].replace(/(^\d)|([^#/\s]\d)/g, (t) => {
            let dowDigits = t.replace(/\D/, "");
            let dowDigitsAdjusted = dowDigits;
            if (this.dayOfWeekStartIndexZero) {
                if (dowDigits == "7") {
                    dowDigitsAdjusted = "0";
                }
            }
            else {
                dowDigitsAdjusted = (parseInt(dowDigits) - 1).toString();
            }
            return t.replace(dowDigits, dowDigitsAdjusted);
        });
        if (expressionParts[5] == "L") {
            expressionParts[5] = "6";
        }
        if (expressionParts[3] == "?") {
            expressionParts[3] = "*";
        }
        if (expressionParts[3].indexOf("W") > -1 &&
            (expressionParts[3].indexOf(",") > -1 || expressionParts[3].indexOf("-") > -1)) {
            throw new Error("The 'W' character can be specified only when the day-of-month is a single day, not a range or list of days.");
        }
        var days = {
            SUN: 0,
            MON: 1,
            TUE: 2,
            WED: 3,
            THU: 4,
            FRI: 5,
            SAT: 6,
        };
        for (let day in days) {
            expressionParts[5] = expressionParts[5].replace(new RegExp(day, "gi"), days[day].toString());
        }
        expressionParts[4] = expressionParts[4].replace(/(^\d{1,2})|([^#/\s]\d{1,2})/g, (t) => {
            let dowDigits = t.replace(/\D/, "");
            let dowDigitsAdjusted = dowDigits;
            if (this.monthStartIndexZero) {
                dowDigitsAdjusted = (parseInt(dowDigits) + 1).toString();
            }
            return t.replace(dowDigits, dowDigitsAdjusted);
        });
        var months = {
            JAN: 1,
            FEB: 2,
            MAR: 3,
            APR: 4,
            MAY: 5,
            JUN: 6,
            JUL: 7,
            AUG: 8,
            SEP: 9,
            OCT: 10,
            NOV: 11,
            DEC: 12,
        };
        for (let month in months) {
            expressionParts[4] = expressionParts[4].replace(new RegExp(month, "gi"), months[month].toString());
        }
        if (expressionParts[0] == "0") {
            expressionParts[0] = "";
        }
        if (!/\*|\-|\,|\//.test(expressionParts[2]) &&
            (/\*|\//.test(expressionParts[1]) || /\*|\//.test(expressionParts[0]))) {
            expressionParts[2] += `-${expressionParts[2]}`;
        }
        for (let i = 0; i < expressionParts.length; i++) {
            if (expressionParts[i].indexOf(",") != -1) {
                expressionParts[i] =
                    expressionParts[i]
                        .split(",")
                        .filter((str) => str !== "")
                        .join(",") || "*";
            }
            if (expressionParts[i] == "*/1") {
                expressionParts[i] = "*";
            }
            if (expressionParts[i].indexOf("/") > -1 && !/^\*|\-|\,/.test(expressionParts[i])) {
                let stepRangeThrough = null;
                switch (i) {
                    case 4:
                        stepRangeThrough = "12";
                        break;
                    case 5:
                        stepRangeThrough = "6";
                        break;
                    case 6:
                        stepRangeThrough = "9999";
                        break;
                    default:
                        stepRangeThrough = null;
                        break;
                }
                if (stepRangeThrough !== null) {
                    let parts = expressionParts[i].split("/");
                    expressionParts[i] = `${parts[0]}-${stepRangeThrough}/${parts[1]}`;
                }
            }
        }
    }
    validate(parsed) {
        const standardCronPartCharacters = "0-9,\\-*\/";
        this.validateOnlyExpectedCharactersFound(parsed[0], standardCronPartCharacters);
        this.validateOnlyExpectedCharactersFound(parsed[1], standardCronPartCharacters);
        this.validateOnlyExpectedCharactersFound(parsed[2], standardCronPartCharacters);
        this.validateOnlyExpectedCharactersFound(parsed[3], "0-9,\\-*\/LW");
        this.validateOnlyExpectedCharactersFound(parsed[4], standardCronPartCharacters);
        this.validateOnlyExpectedCharactersFound(parsed[5], "0-9,\\-*\/L#");
        this.validateOnlyExpectedCharactersFound(parsed[6], standardCronPartCharacters);
        this.validateAnyRanges(parsed);
    }
    validateAnyRanges(parsed) {
        rangeValidator_1.default.secondRange(parsed[0]);
        rangeValidator_1.default.minuteRange(parsed[1]);
        rangeValidator_1.default.hourRange(parsed[2]);
        rangeValidator_1.default.dayOfMonthRange(parsed[3]);
        rangeValidator_1.default.monthRange(parsed[4], this.monthStartIndexZero);
        rangeValidator_1.default.dayOfWeekRange(parsed[5], this.dayOfWeekStartIndexZero);
    }
    validateOnlyExpectedCharactersFound(cronPart, allowedCharsExpression) {
        let invalidChars = cronPart.match(new RegExp(`[^${allowedCharsExpression}]+`, "gi"));
        if (invalidChars && invalidChars.length) {
            throw new Error(`Expression contains invalid values: '${invalidChars.toString()}'`);
        }
    }
}
exports.CronParser = CronParser;


/***/ }),

/***/ 814:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.en = void 0;
class en {
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
        return "An error occurred when generating the expression description. Check the cron expression syntax.";
    }
    everyMinute() {
        return "every minute";
    }
    everyHour() {
        return "every hour";
    }
    atSpace() {
        return "At ";
    }
    everyMinuteBetweenX0AndX1() {
        return "Every minute between %s and %s";
    }
    at() {
        return "At";
    }
    spaceAnd() {
        return " and";
    }
    everySecond() {
        return "every second";
    }
    everyX0Seconds() {
        return "every %s seconds";
    }
    secondsX0ThroughX1PastTheMinute() {
        return "seconds %s through %s past the minute";
    }
    atX0SecondsPastTheMinute() {
        return "at %s seconds past the minute";
    }
    everyX0Minutes() {
        return "every %s minutes";
    }
    minutesX0ThroughX1PastTheHour() {
        return "minutes %s through %s past the hour";
    }
    atX0MinutesPastTheHour() {
        return "at %s minutes past the hour";
    }
    everyX0Hours() {
        return "every %s hours";
    }
    betweenX0AndX1() {
        return "between %s and %s";
    }
    atX0() {
        return "at %s";
    }
    commaEveryDay() {
        return ", every day";
    }
    commaEveryX0DaysOfTheWeek() {
        return ", every %s days of the week";
    }
    commaX0ThroughX1() {
        return ", %s through %s";
    }
    commaAndX0ThroughX1() {
        return ", %s through %s";
    }
    first() {
        return "first";
    }
    second() {
        return "second";
    }
    third() {
        return "third";
    }
    fourth() {
        return "fourth";
    }
    fifth() {
        return "fifth";
    }
    commaOnThe() {
        return ", on the ";
    }
    spaceX0OfTheMonth() {
        return " %s of the month";
    }
    lastDay() {
        return "the last day";
    }
    commaOnTheLastX0OfTheMonth() {
        return ", on the last %s of the month";
    }
    commaOnlyOnX0() {
        return ", only on %s";
    }
    commaAndOnX0() {
        return ", and on %s";
    }
    commaEveryX0Months() {
        return ", every %s months";
    }
    commaOnlyInX0() {
        return ", only in %s";
    }
    commaOnTheLastDayOfTheMonth() {
        return ", on the last day of the month";
    }
    commaOnTheLastWeekdayOfTheMonth() {
        return ", on the last weekday of the month";
    }
    commaDaysBeforeTheLastDayOfTheMonth() {
        return ", %s days before the last day of the month";
    }
    firstWeekday() {
        return "first weekday";
    }
    weekdayNearestDayX0() {
        return "weekday nearest day %s";
    }
    commaOnTheX0OfTheMonth() {
        return ", on the %s of the month";
    }
    commaEveryX0Days() {
        return ", every %s days";
    }
    commaBetweenDayX0AndX1OfTheMonth() {
        return ", between day %s and %s of the month";
    }
    commaOnDayX0OfTheMonth() {
        return ", on day %s of the month";
    }
    commaEveryHour() {
        return ", every hour";
    }
    commaEveryX0Years() {
        return ", every %s years";
    }
    commaStartingX0() {
        return ", starting %s";
    }
    daysOfTheWeek() {
        return ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    }
    monthsOfTheYear() {
        return [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ];
    }
}
exports.en = en;


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
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it uses a non-standard name for the exports (exports).
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.toString = void 0;
const expressionDescriptor_1 = __webpack_require__(469);
const enLocaleLoader_1 = __webpack_require__(83);
expressionDescriptor_1.ExpressionDescriptor.initialize(new enLocaleLoader_1.enLocaleLoader());
exports["default"] = expressionDescriptor_1.ExpressionDescriptor;
let cronstrue_toString = expressionDescriptor_1.ExpressionDescriptor.toString;
exports.toString = cronstrue_toString;

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});