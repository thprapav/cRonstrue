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

/***/ 86:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ar = void 0;
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
exports.ar = ar;


/***/ }),

/***/ 89:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.th = void 0;
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
exports.th = th;


/***/ }),

/***/ 94:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.bg = void 0;
const getPhraseByPlural = (str, words) => {
    const strAsNumber = str != null ? Number(str) : 0;
    return strAsNumber < 2 ? words[0] : words[1];
};
const getPhraseByDayOfWeek = (str, words) => {
    const strAsNumber = str != null ? Number(str) : 0;
    return words[[1, 0, 0, 1, 0, 0, 1][strAsNumber]];
};
const getNumberEnding = (str, gender) => {
    let strAsNumber = str != null ? Number(str) : 1;
    strAsNumber = Math.max(Math.min(strAsNumber < 10 || (strAsNumber > 20 && strAsNumber % 10 !== 0) ? strAsNumber % 10 : 3, 3), 1) - 1;
    const genderIndex = ['м', 'ж', 'ср'].indexOf(gender);
    return ['в', 'р', 'т'][strAsNumber] + ['и', 'а', 'о'][genderIndex];
};
class bg {
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
    everyMinute() {
        return 'всяка минута';
    }
    everyHour() {
        return 'всеки час';
    }
    anErrorOccuredWhenGeneratingTheExpressionD() {
        return 'Възникна грешка при генериране на описанието на израза. Проверете синтаксиса на cron израза.';
    }
    atSpace() {
        return 'В ';
    }
    everyMinuteBetweenX0AndX1() {
        return 'Всяка минута от %s до %s';
    }
    at() {
        return 'В';
    }
    spaceAnd() {
        return ' и';
    }
    everySecond() {
        return 'всяка секунда';
    }
    everyX0Seconds(s) {
        return 'всеки %s секунди';
    }
    secondsX0ThroughX1PastTheMinute() {
        return 'секунди от %s до %s';
    }
    atX0SecondsPastTheMinute(s) {
        return `%s-${getNumberEnding(s, 'ж')} секунда`;
    }
    everyX0Minutes(s) {
        return 'всеки %s минути';
    }
    minutesX0ThroughX1PastTheHour() {
        return 'минути от %s до %s';
    }
    atX0MinutesPastTheHour(s) {
        return `%s-${getNumberEnding(s, 'ж')} минутa`;
    }
    everyX0Hours(s) {
        return 'всеки %s часа';
    }
    betweenX0AndX1() {
        return 'от %s до %s';
    }
    atX0() {
        return 'в %s';
    }
    commaEveryDay() {
        return ', всеки ден';
    }
    commaEveryX0DaysOfTheWeek(s) {
        return getPhraseByPlural(s, [', всеки %s ден от седмицата', ', всеки %s дена от седмицата']);
    }
    commaX0ThroughX1(s) {
        return ', от %s до %s';
    }
    commaAndX0ThroughX1(s) {
        return ' и от %s до %s';
    }
    first(s) {
        return getPhraseByDayOfWeek(s, ['первият', 'первата']);
    }
    second(s) {
        return getPhraseByDayOfWeek(s, ['вторият', 'втората']);
    }
    third(s) {
        return getPhraseByDayOfWeek(s, ['третият', 'третата']);
    }
    fourth(s) {
        return getPhraseByDayOfWeek(s, ['четвертият', 'четвертата']);
    }
    fifth(s) {
        return getPhraseByDayOfWeek(s, ['петият', 'петата']);
    }
    commaOnThe(s) {
        return ', ';
    }
    spaceX0OfTheMonth() {
        return ' %s на месеца';
    }
    lastDay() {
        return 'последният ден';
    }
    commaOnTheLastX0OfTheMonth(s) {
        return getPhraseByDayOfWeek(s, [', в последният %s от месеца', ', в последната %s отмесеца']);
    }
    commaOnlyOnX0(s) {
        return ', %s';
    }
    commaAndOnX0() {
        return ' и %s';
    }
    commaEveryX0Months(s) {
        return ' всеки %s месеца';
    }
    commaOnlyInMonthX0() {
        return ', %s';
    }
    commaOnlyInX0() {
        return ', в %s';
    }
    commaOnTheLastDayOfTheMonth() {
        return ', в последният ден на месеца';
    }
    commaOnTheLastWeekdayOfTheMonth() {
        return ', в последния делничен ден от месеца';
    }
    commaDaysBeforeTheLastDayOfTheMonth(s) {
        return getPhraseByPlural(s, [', %s ден преди края на месеца', ', %s дена преди края на месеца']);
    }
    firstWeekday() {
        return 'първият делничен ден';
    }
    weekdayNearestDayX0() {
        return 'най-близкият делничен ден до %s число';
    }
    commaOnTheX0OfTheMonth() {
        return ', на %s число от месеца';
    }
    commaEveryX0Days(s) {
        return getPhraseByPlural(s, [', всеки %s ден', ', всеки %s дена']);
    }
    commaBetweenDayX0AndX1OfTheMonth(s) {
        var _a;
        const values = (_a = s === null || s === void 0 ? void 0 : s.split('-')) !== null && _a !== void 0 ? _a : [];
        return `, от %s-${getNumberEnding(values[0], 'ср')} до %s-${getNumberEnding(values[1], 'ср')} число на месеца`;
    }
    commaOnDayX0OfTheMonth(s) {
        return `, на %s-${getNumberEnding(s, 'ср')} число от месеца`;
    }
    commaEveryX0Years(s) {
        return getPhraseByPlural(s, [', всяка %s година', ', всеки %s години']);
    }
    commaStartingX0() {
        return ', започвайки %s';
    }
    daysOfTheWeek() {
        return ['неделя', 'понеделник', 'вторник', 'сряда', 'четвъртък', 'петък', 'събота'];
    }
    monthsOfTheYear() {
        return ['януари', 'февруари', 'март', 'април', 'май', 'юни', 'юли', 'август', 'септевмври', 'октомври', 'ноември', 'декември'];
    }
}
exports.bg = bg;


/***/ }),

/***/ 107:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.bg = exports.my = exports.vi = exports.ar = exports.th = exports.af = exports.hu = exports.be = exports.ca = exports.fa = exports.sw = exports.sl = exports.fi = exports.sk = exports.cs = exports.he = exports.ja = exports.zh_TW = exports.zh_CN = exports.uk = exports.tr = exports.ru = exports.ro = exports.pt_PT = exports.pt_BR = exports.pl = exports.sv = exports.nb = exports.nl = exports.ko = exports.id = exports.it = exports.fr = exports.es = exports.el = exports.de = exports.da = exports.en = void 0;
var en_1 = __webpack_require__(814);
Object.defineProperty(exports, "en", ({ enumerable: true, get: function () { return en_1.en; } }));
var da_1 = __webpack_require__(202);
Object.defineProperty(exports, "da", ({ enumerable: true, get: function () { return da_1.da; } }));
var de_1 = __webpack_require__(118);
Object.defineProperty(exports, "de", ({ enumerable: true, get: function () { return de_1.de; } }));
var el_1 = __webpack_require__(892);
Object.defineProperty(exports, "el", ({ enumerable: true, get: function () { return el_1.el; } }));
var es_1 = __webpack_require__(545);
Object.defineProperty(exports, "es", ({ enumerable: true, get: function () { return es_1.es; } }));
var fr_1 = __webpack_require__(477);
Object.defineProperty(exports, "fr", ({ enumerable: true, get: function () { return fr_1.fr; } }));
var it_1 = __webpack_require__(384);
Object.defineProperty(exports, "it", ({ enumerable: true, get: function () { return it_1.it; } }));
var id_1 = __webpack_require__(976);
Object.defineProperty(exports, "id", ({ enumerable: true, get: function () { return id_1.id; } }));
var ko_1 = __webpack_require__(383);
Object.defineProperty(exports, "ko", ({ enumerable: true, get: function () { return ko_1.ko; } }));
var nl_1 = __webpack_require__(375);
Object.defineProperty(exports, "nl", ({ enumerable: true, get: function () { return nl_1.nl; } }));
var nb_1 = __webpack_require__(245);
Object.defineProperty(exports, "nb", ({ enumerable: true, get: function () { return nb_1.nb; } }));
var sv_1 = __webpack_require__(800);
Object.defineProperty(exports, "sv", ({ enumerable: true, get: function () { return sv_1.sv; } }));
var pl_1 = __webpack_require__(577);
Object.defineProperty(exports, "pl", ({ enumerable: true, get: function () { return pl_1.pl; } }));
var pt_BR_1 = __webpack_require__(300);
Object.defineProperty(exports, "pt_BR", ({ enumerable: true, get: function () { return pt_BR_1.pt_BR; } }));
var pt_PT_1 = __webpack_require__(472);
Object.defineProperty(exports, "pt_PT", ({ enumerable: true, get: function () { return pt_PT_1.pt_PT; } }));
var ro_1 = __webpack_require__(846);
Object.defineProperty(exports, "ro", ({ enumerable: true, get: function () { return ro_1.ro; } }));
var ru_1 = __webpack_require__(244);
Object.defineProperty(exports, "ru", ({ enumerable: true, get: function () { return ru_1.ru; } }));
var tr_1 = __webpack_require__(159);
Object.defineProperty(exports, "tr", ({ enumerable: true, get: function () { return tr_1.tr; } }));
var uk_1 = __webpack_require__(849);
Object.defineProperty(exports, "uk", ({ enumerable: true, get: function () { return uk_1.uk; } }));
var zh_CN_1 = __webpack_require__(939);
Object.defineProperty(exports, "zh_CN", ({ enumerable: true, get: function () { return zh_CN_1.zh_CN; } }));
var zh_TW_1 = __webpack_require__(471);
Object.defineProperty(exports, "zh_TW", ({ enumerable: true, get: function () { return zh_TW_1.zh_TW; } }));
var ja_1 = __webpack_require__(616);
Object.defineProperty(exports, "ja", ({ enumerable: true, get: function () { return ja_1.ja; } }));
var he_1 = __webpack_require__(386);
Object.defineProperty(exports, "he", ({ enumerable: true, get: function () { return he_1.he; } }));
var cs_1 = __webpack_require__(971);
Object.defineProperty(exports, "cs", ({ enumerable: true, get: function () { return cs_1.cs; } }));
var sk_1 = __webpack_require__(907);
Object.defineProperty(exports, "sk", ({ enumerable: true, get: function () { return sk_1.sk; } }));
var fi_1 = __webpack_require__(988);
Object.defineProperty(exports, "fi", ({ enumerable: true, get: function () { return fi_1.fi; } }));
var sl_1 = __webpack_require__(442);
Object.defineProperty(exports, "sl", ({ enumerable: true, get: function () { return sl_1.sl; } }));
var sw_1 = __webpack_require__(327);
Object.defineProperty(exports, "sw", ({ enumerable: true, get: function () { return sw_1.sw; } }));
var fa_1 = __webpack_require__(580);
Object.defineProperty(exports, "fa", ({ enumerable: true, get: function () { return fa_1.fa; } }));
var ca_1 = __webpack_require__(805);
Object.defineProperty(exports, "ca", ({ enumerable: true, get: function () { return ca_1.ca; } }));
var be_1 = __webpack_require__(972);
Object.defineProperty(exports, "be", ({ enumerable: true, get: function () { return be_1.be; } }));
var hu_1 = __webpack_require__(234);
Object.defineProperty(exports, "hu", ({ enumerable: true, get: function () { return hu_1.hu; } }));
var af_1 = __webpack_require__(714);
Object.defineProperty(exports, "af", ({ enumerable: true, get: function () { return af_1.af; } }));
var th_1 = __webpack_require__(89);
Object.defineProperty(exports, "th", ({ enumerable: true, get: function () { return th_1.th; } }));
var ar_1 = __webpack_require__(86);
Object.defineProperty(exports, "ar", ({ enumerable: true, get: function () { return ar_1.ar; } }));
var vi_1 = __webpack_require__(428);
Object.defineProperty(exports, "vi", ({ enumerable: true, get: function () { return vi_1.vi; } }));
var my_1 = __webpack_require__(815);
Object.defineProperty(exports, "my", ({ enumerable: true, get: function () { return my_1.my; } }));
var bg_1 = __webpack_require__(94);
Object.defineProperty(exports, "bg", ({ enumerable: true, get: function () { return bg_1.bg; } }));


/***/ }),

/***/ 118:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.de = void 0;
class de {
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
    everyMinute() {
        return "jede Minute";
    }
    everyHour() {
        return "jede Stunde";
    }
    anErrorOccuredWhenGeneratingTheExpressionD() {
        return "Beim Generieren der Ausdrucksbeschreibung ist ein Fehler aufgetreten. Überprüfen Sie die Syntax des Cron-Ausdrucks.";
    }
    atSpace() {
        return "Um ";
    }
    everyMinuteBetweenX0AndX1() {
        return "Jede Minute zwischen %s und %s";
    }
    at() {
        return "Um";
    }
    spaceAnd() {
        return " und";
    }
    everySecond() {
        return "Jede Sekunde";
    }
    everyX0Seconds() {
        return "alle %s Sekunden";
    }
    secondsX0ThroughX1PastTheMinute() {
        return "Sekunden %s bis %s";
    }
    atX0SecondsPastTheMinute() {
        return "bei Sekunde %s";
    }
    everyX0Minutes() {
        return "alle %s Minuten";
    }
    minutesX0ThroughX1PastTheHour() {
        return "Minuten %s bis %s";
    }
    atX0MinutesPastTheHour() {
        return "bei Minute %s";
    }
    everyX0Hours() {
        return "alle %s Stunden";
    }
    betweenX0AndX1() {
        return "zwischen %s und %s";
    }
    atX0() {
        return "um %s";
    }
    commaEveryDay() {
        return ", jeden Tag";
    }
    commaEveryX0DaysOfTheWeek() {
        return ", alle %s Tage der Woche";
    }
    commaX0ThroughX1() {
        return ", %s bis %s";
    }
    commaAndX0ThroughX1() {
        return ", und %s bis %s";
    }
    first() {
        return "ersten";
    }
    second() {
        return "zweiten";
    }
    third() {
        return "dritten";
    }
    fourth() {
        return "vierten";
    }
    fifth() {
        return "fünften";
    }
    commaOnThe() {
        return ", am ";
    }
    spaceX0OfTheMonth() {
        return " %s des Monats";
    }
    lastDay() {
        return "der letzte Tag";
    }
    commaOnTheLastX0OfTheMonth() {
        return ", am letzten %s des Monats";
    }
    commaOnlyOnX0() {
        return ", nur jeden %s";
    }
    commaAndOnX0() {
        return ", und jeden %s";
    }
    commaEveryX0Months() {
        return ", alle %s Monate";
    }
    commaOnlyInX0() {
        return ", nur im %s";
    }
    commaOnTheLastDayOfTheMonth() {
        return ", am letzten Tag des Monats";
    }
    commaOnTheLastWeekdayOfTheMonth() {
        return ", am letzten Werktag des Monats";
    }
    commaDaysBeforeTheLastDayOfTheMonth() {
        return ", %s tage vor dem letzten Tag des Monats";
    }
    firstWeekday() {
        return "ersten Werktag";
    }
    weekdayNearestDayX0() {
        return "Werktag am nächsten zum %s Tag";
    }
    commaOnTheX0OfTheMonth() {
        return ", am %s des Monats";
    }
    commaEveryX0Days() {
        return ", alle %s Tage";
    }
    commaBetweenDayX0AndX1OfTheMonth() {
        return ", zwischen Tag %s und %s des Monats";
    }
    commaOnDayX0OfTheMonth() {
        return ", an Tag %s des Monats";
    }
    commaEveryX0Years() {
        return ", alle %s Jahre";
    }
    commaStartingX0() {
        return ", beginnend %s";
    }
    daysOfTheWeek() {
        return ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];
    }
    monthsOfTheYear() {
        return [
            "Januar",
            "Februar",
            "März",
            "April",
            "Mai",
            "Juni",
            "Juli",
            "August",
            "September",
            "Oktober",
            "November",
            "Dezember",
        ];
    }
}
exports.de = de;


/***/ }),

/***/ 159:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.tr = void 0;
class tr {
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
    everyMinute() {
        return "her dakika";
    }
    everyHour() {
        return "her saat";
    }
    anErrorOccuredWhenGeneratingTheExpressionD() {
        return "İfade açıklamasını oluştururken bir hata oluştu. Cron ifadesini gözden geçirin.";
    }
    atSpace() {
        return "Saat ";
    }
    everyMinuteBetweenX0AndX1() {
        return "Saat %s ve %s arasındaki her dakika";
    }
    at() {
        return "Saat";
    }
    spaceAnd() {
        return " ve";
    }
    everySecond() {
        return "her saniye";
    }
    everyX0Seconds() {
        return "her %s saniyede bir";
    }
    secondsX0ThroughX1PastTheMinute() {
        return "dakikaların %s. ve %s. saniyeleri arası";
    }
    atX0SecondsPastTheMinute() {
        return "dakikaların %s. saniyesinde";
    }
    everyX0Minutes() {
        return "her %s dakikada bir";
    }
    minutesX0ThroughX1PastTheHour() {
        return "saatlerin %s. ve %s. dakikaları arası";
    }
    atX0MinutesPastTheHour() {
        return "saatlerin %s. dakikasında";
    }
    everyX0Hours() {
        return "her %s saatte";
    }
    betweenX0AndX1() {
        return "%s ile %s arasında";
    }
    atX0() {
        return "saat %s";
    }
    commaEveryDay() {
        return ", her gün";
    }
    commaEveryX0DaysOfTheWeek() {
        return ", ayın her %s günü";
    }
    commaX0ThroughX1() {
        return ", %s ile %s arasında";
    }
    commaAndX0ThroughX1() {
        return ", ve %s ile %s arasında";
    }
    first() {
        return "ilk";
    }
    second() {
        return "ikinci";
    }
    third() {
        return "üçüncü";
    }
    fourth() {
        return "dördüncü";
    }
    fifth() {
        return "beşinci";
    }
    commaOnThe() {
        return ", ayın ";
    }
    spaceX0OfTheMonth() {
        return " %s günü";
    }
    lastDay() {
        return "son gün";
    }
    commaOnTheLastX0OfTheMonth() {
        return ", ayın son %s günü";
    }
    commaOnlyOnX0() {
        return ", sadece %s günü";
    }
    commaAndOnX0() {
        return ", ve %s";
    }
    commaEveryX0Months() {
        return ", %s ayda bir";
    }
    commaOnlyInX0() {
        return ", sadece %s için";
    }
    commaOnTheLastDayOfTheMonth() {
        return ", ayın son günü";
    }
    commaOnTheLastWeekdayOfTheMonth() {
        return ", ayın son iş günü";
    }
    commaDaysBeforeTheLastDayOfTheMonth() {
        return ", %s ayın son gününden önceki günler";
    }
    firstWeekday() {
        return "ilk iş günü";
    }
    weekdayNearestDayX0() {
        return "%s. günü sonrasındaki ilk iş günü";
    }
    commaOnTheX0OfTheMonth() {
        return ", ayın %s";
    }
    commaEveryX0Days() {
        return ", %s günde bir";
    }
    commaBetweenDayX0AndX1OfTheMonth() {
        return ", ayın %s. ve %s. günleri arası";
    }
    commaOnDayX0OfTheMonth() {
        return ", ayın %s. günü";
    }
    commaEveryX0Years() {
        return ", %s yılda bir";
    }
    commaStartingX0() {
        return ", başlangıç %s";
    }
    daysOfTheWeek() {
        return ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    }
    monthsOfTheYear() {
        return [
            "Ocak",
            "Şubat",
            "Mart",
            "Nisan",
            "Mayıs",
            "Haziran",
            "Temmuz",
            "Ağustos",
            "Eylül",
            "Ekim",
            "Kasım",
            "Aralık",
        ];
    }
}
exports.tr = tr;


/***/ }),

/***/ 202:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.da = void 0;
class da {
    use24HourTimeFormatByDefault() {
        return true;
    }
    anErrorOccuredWhenGeneratingTheExpressionD() {
        return "Der opstod en fejl ved generering af udtryksbeskrivelsen. Tjek cron-ekspressionssyntaxen.";
    }
    at() {
        return "kl";
    }
    atSpace() {
        return "kl ";
    }
    atX0() {
        return "kl %s";
    }
    atX0MinutesPastTheHour() {
        return "%s minutter efter timeskift";
    }
    atX0SecondsPastTheMinute() {
        return "%s sekunder efter minutskift";
    }
    betweenX0AndX1() {
        return "mellem %s og %s";
    }
    commaBetweenDayX0AndX1OfTheMonth() {
        return ", mellem dag %s og %s i måneden";
    }
    commaEveryDay() {
        return ", hver dag";
    }
    commaEveryX0Days() {
        return ", hver %s. dag";
    }
    commaEveryX0DaysOfTheWeek() {
        return ", hver %s. ugedag";
    }
    commaEveryX0Months() {
        return ", hver %s. måned";
    }
    commaEveryX0Years() {
        return ", hvert %s. år";
    }
    commaOnDayX0OfTheMonth() {
        return ", på dag %s i måneden";
    }
    commaOnlyInX0() {
        return ", kun i %s";
    }
    commaOnlyOnX0(s) {
        return ", på enhver %s";
    }
    commaAndOnX0() {
        return ", og på %s";
    }
    commaOnThe() {
        return ", på den ";
    }
    commaOnTheLastDayOfTheMonth() {
        return ", på den sidste dag i måneden";
    }
    commaOnTheLastWeekdayOfTheMonth() {
        return ", på den sidste hverdag i måneden";
    }
    commaDaysBeforeTheLastDayOfTheMonth() {
        return ", %s dage før den sidste dag i måneden";
    }
    commaOnTheLastX0OfTheMonth() {
        return ", på den sidste %s i måneden";
    }
    commaOnTheX0OfTheMonth() {
        return ", på den %s i måneden";
    }
    commaX0ThroughX1() {
        return ", %s til og med %s";
    }
    commaAndX0ThroughX1() {
        return ", og %s til og med %s";
    }
    everyHour() {
        return "hver time";
    }
    everyMinute() {
        return "hvert minut";
    }
    everyMinuteBetweenX0AndX1() {
        return "hvert minut mellem %s og %s";
    }
    everySecond() {
        return "hvert sekund";
    }
    everyX0Hours() {
        return "hver %s. time";
    }
    everyX0Minutes() {
        return "hvert %s. minut";
    }
    everyX0Seconds() {
        return "hvert %s. sekund";
    }
    fifth() {
        return "femte";
    }
    first() {
        return "første";
    }
    firstWeekday() {
        return "første hverdag";
    }
    fourth() {
        return "fjerde";
    }
    minutesX0ThroughX1PastTheHour() {
        return "minutterne fra %s til og med %s hver time";
    }
    second() {
        return "anden";
    }
    secondsX0ThroughX1PastTheMinute() {
        return "sekunderne fra %s til og med %s hvert minut";
    }
    spaceAnd() {
        return " og";
    }
    spaceX0OfTheMonth() {
        return " %s i måneden";
    }
    lastDay() {
        return "sidste dag";
    }
    third() {
        return "tredje";
    }
    weekdayNearestDayX0() {
        return "hverdag nærmest dag %s";
    }
    commaMonthX0ThroughMonthX1() {
        return null;
    }
    commaYearX0ThroughYearX1() {
        return null;
    }
    atX0MinutesPastTheHourGt20() {
        return null;
    }
    atX0SecondsPastTheMinuteGt20() {
        return null;
    }
    commaStartingX0() {
        return ", startende %s";
    }
    daysOfTheWeek() {
        return ["søndag", "mandag", "tirsdag", "onsdag", "torsdag", "fredag", "lørdag"];
    }
    monthsOfTheYear() {
        return [
            "januar",
            "februar",
            "marts",
            "april",
            "maj",
            "juni",
            "juli",
            "august",
            "september",
            "oktober",
            "november",
            "december",
        ];
    }
}
exports.da = da;


/***/ }),

/***/ 234:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.hu = void 0;
class hu {
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
        return "Hiba történt a kifejezésleírás generálásakor. Ellenőrizze a cron kifejezés szintaxisát.";
    }
    everyMinute() {
        return "minden percben";
    }
    everyHour() {
        return "minden órában";
    }
    atSpace() {
        return "Ekkor: ";
    }
    everyMinuteBetweenX0AndX1() {
        return "percenként %s és %s között";
    }
    at() {
        return "Ekkor:";
    }
    spaceAnd() {
        return " és";
    }
    everySecond() {
        return "minden másodpercben";
    }
    everyX0Seconds() {
        return "%s másodpercenként";
    }
    secondsX0ThroughX1PastTheMinute() {
        return "%s. másodpercben %s perc után";
    }
    atX0SecondsPastTheMinute() {
        return "%s. másodpercben";
    }
    everyX0Minutes() {
        return "minden %s. percben";
    }
    minutesX0ThroughX1PastTheHour() {
        return "%s. percben %s óra után";
    }
    atX0MinutesPastTheHour() {
        return "%s. percben";
    }
    everyX0Hours() {
        return "minden %s órában";
    }
    betweenX0AndX1() {
        return "%s és %s között";
    }
    atX0() {
        return "ekkor %s";
    }
    commaEveryDay() {
        return ", minden nap";
    }
    commaEveryX0DaysOfTheWeek() {
        return ", a hét minden %s napján";
    }
    commaX0ThroughX1() {
        return ", %s - %s";
    }
    commaAndX0ThroughX1() {
        return ", és %s - %s";
    }
    first() {
        return "első";
    }
    second() {
        return "második";
    }
    third() {
        return "harmadik";
    }
    fourth() {
        return "negyedik";
    }
    fifth() {
        return "ötödik";
    }
    commaOnThe() {
        return ", ";
    }
    spaceX0OfTheMonth() {
        return " %s a hónapban";
    }
    lastDay() {
        return "az utolsó nap";
    }
    commaOnTheLastX0OfTheMonth() {
        return ", a hónap utolsó %s";
    }
    commaOnlyOnX0() {
        return ", csak ekkor: %s";
    }
    commaAndOnX0() {
        return ", és %s";
    }
    commaEveryX0Months() {
        return ", minden %s hónapban";
    }
    commaOnlyInX0() {
        return ", csak ekkor: %s";
    }
    commaOnTheLastDayOfTheMonth() {
        return ", a hónap utolsó napján";
    }
    commaOnTheLastWeekdayOfTheMonth() {
        return ", a hónap utolsó hétköznapján";
    }
    commaDaysBeforeTheLastDayOfTheMonth() {
        return ", %s nappal a hónap utolsó napja előtt";
    }
    firstWeekday() {
        return "első hétköznap";
    }
    weekdayNearestDayX0() {
        return "hétköznap legközelebbi nap %s";
    }
    commaOnTheX0OfTheMonth() {
        return ", a hónap %s";
    }
    commaEveryX0Days() {
        return ", %s naponként";
    }
    commaBetweenDayX0AndX1OfTheMonth() {
        return ", a hónap %s és %s napja között";
    }
    commaOnDayX0OfTheMonth() {
        return ", a hónap %s napján";
    }
    commaEveryHour() {
        return ", minden órában";
    }
    commaEveryX0Years() {
        return ", %s évente";
    }
    commaStartingX0() {
        return ", %s kezdettel";
    }
    daysOfTheWeek() {
        return ["vasárnap", "hétfő", "kedd", "szerda", "csütörtök", "péntek", "szombat"];
    }
    monthsOfTheYear() {
        return [
            "január",
            "február",
            "március",
            "április",
            "május",
            "június",
            "július",
            "augusztus",
            "szeptember",
            "október",
            "november",
            "december",
        ];
    }
}
exports.hu = hu;


/***/ }),

/***/ 244:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ru = void 0;
const getPhraseByNumber = (str, words) => {
    const number = Number(str);
    return number !== undefined
        ? words[number % 100 > 4 && number % 100 < 20 ? 2 : [2, 0, 1, 1, 1, 2][number % 10 < 5 ? Math.abs(number) % 10 : 5]]
        : words[2];
};
const getPhraseByDayOfWeek = (str, words) => {
    const number = Number(str);
    return number !== undefined
        ? words[number === 0 ? 0 : number === 1 || number === 2 || number === 4 ? 1 : 2]
        : words[1];
};
class ru {
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
    everyMinute() {
        return "каждую минуту";
    }
    everyHour() {
        return "каждый час";
    }
    anErrorOccuredWhenGeneratingTheExpressionD() {
        return "Произошла ошибка во время генерации описания выражения. Проверьте синтаксис крон-выражения.";
    }
    atSpace() {
        return "В ";
    }
    everyMinuteBetweenX0AndX1() {
        return "Каждую минуту с %s по %s";
    }
    at() {
        return "В";
    }
    spaceAnd() {
        return " и";
    }
    everySecond() {
        return "каждую секунду";
    }
    everyX0Seconds(s) {
        return getPhraseByNumber(s, ["каждую %s секунду", "каждые %s секунды", "каждые %s секунд"]);
    }
    secondsX0ThroughX1PastTheMinute() {
        return "секунды с %s по %s";
    }
    atX0SecondsPastTheMinute(s) {
        return getPhraseByNumber(s, ["в %s секунду", "в %s секунды", "в %s секунд"]);
    }
    everyX0Minutes(s) {
        return getPhraseByNumber(s, ["каждую %s минуту", "каждые %s минуты", "каждые %s минут"]);
    }
    minutesX0ThroughX1PastTheHour() {
        return "минуты с %s по %s";
    }
    atX0MinutesPastTheHour(s) {
        return getPhraseByNumber(s, ["в %s минуту", "в %s минуты", "в %s минут"]);
    }
    everyX0Hours(s) {
        return getPhraseByNumber(s, ["каждый %s час", "каждые %s часа", "каждые %s часов"]);
    }
    betweenX0AndX1() {
        return "с %s по %s";
    }
    atX0() {
        return "в %s";
    }
    commaEveryDay() {
        return ", каждый день";
    }
    commaEveryX0DaysOfTheWeek(s) {
        return getPhraseByNumber(s, ["", ", каждые %s дня недели", ", каждые %s дней недели"]);
    }
    commaX0ThroughX1(s) {
        return s && (s[0] == "2" || s[0] == "3") ? ", со %s по %s" : ", с %s по %s";
    }
    commaAndX0ThroughX1(s) {
        return s && (s[0] == "2" || s[0] == "3") ? " и со %s по %s" : " и с %s по %s";
    }
    first(s) {
        return getPhraseByDayOfWeek(s, ["первое", "первый", "первую"]);
    }
    second(s) {
        return getPhraseByDayOfWeek(s, ["второе", "второй", "вторую"]);
    }
    third(s) {
        return getPhraseByDayOfWeek(s, ["третье", "третий", "третью"]);
    }
    fourth(s) {
        return getPhraseByDayOfWeek(s, ["четвертое", "четвертый", "четвертую"]);
    }
    fifth(s) {
        return getPhraseByDayOfWeek(s, ["пятое", "пятый", "пятую"]);
    }
    commaOnThe(s) {
        return s === "2" ? ", во " : ", в ";
    }
    spaceX0OfTheMonth() {
        return " %s месяца";
    }
    lastDay() {
        return "последний день";
    }
    commaOnTheLastX0OfTheMonth(s) {
        return getPhraseByDayOfWeek(s, [", в последнее %s месяца", ", в последний %s месяца", ", в последнюю %s месяца"]);
    }
    commaOnlyOnX0(s) {
        return s && s[0] === "2" ? ", только во %s" : ", только в %s";
    }
    commaAndOnX0() {
        return ", и %s";
    }
    commaEveryX0Months(s) {
        return getPhraseByNumber(s, ["", " каждые %s месяца", " каждые %s месяцев"]);
    }
    commaOnlyInMonthX0() {
        return ", только %s";
    }
    commaOnlyInX0() {
        return ", только в %s";
    }
    commaOnTheLastDayOfTheMonth() {
        return ", в последний день месяца";
    }
    commaOnTheLastWeekdayOfTheMonth() {
        return ", в последний будний день месяца";
    }
    commaDaysBeforeTheLastDayOfTheMonth(s) {
        return getPhraseByNumber(s, [
            ", за %s день до конца месяца",
            ", за %s дня до конца месяца",
            ", за %s дней до конца месяца",
        ]);
    }
    firstWeekday() {
        return "первый будний день";
    }
    weekdayNearestDayX0() {
        return "ближайший будний день к %s числу";
    }
    commaOnTheX0OfTheMonth() {
        return ", в %s месяца";
    }
    commaEveryX0Days(s) {
        return getPhraseByNumber(s, [", каждый %s день", ", каждые %s дня", ", каждые %s дней"]);
    }
    commaBetweenDayX0AndX1OfTheMonth(s) {
        return s && s.substring(0, s.indexOf("-")) == "2" ? ", со %s по %s число месяца" : ", с %s по %s число месяца";
    }
    commaOnDayX0OfTheMonth(s) {
        return s && s[0] == "2" ? ", во %s число месяца" : ", в %s число месяца";
    }
    commaEveryX0Years(s) {
        return getPhraseByNumber(s, [", каждый %s год", ", каждые %s года", ", каждые %s лет"]);
    }
    commaStartingX0() {
        return ", начало %s";
    }
    daysOfTheWeek() {
        return ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"];
    }
    daysOfTheWeekInCase(f = 2) {
        return f == 1
            ? ["воскресенья", "понедельника", "вторника", "среды", "четверга", "пятницы", "субботы"]
            : ["воскресенье", "понедельник", "вторник", "среду", "четверг", "пятницу", "субботу"];
    }
    monthsOfTheYear() {
        return [
            "январь",
            "февраль",
            "март",
            "апрель",
            "май",
            "июнь",
            "июль",
            "август",
            "сентябрь",
            "октябрь",
            "ноябрь",
            "декабрь",
        ];
    }
    monthsOfTheYearInCase(f) {
        return f == 1
            ? [
                "января",
                "февраля",
                "марта",
                "апреля",
                "мая",
                "июня",
                "июля",
                "августа",
                "сентября",
                "октября",
                "ноября",
                "декабря",
            ]
            : this.monthsOfTheYear();
    }
}
exports.ru = ru;


/***/ }),

/***/ 245:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.nb = void 0;
class nb {
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
        return "En feil inntraff ved generering av uttrykksbeskrivelse. Sjekk cron syntaks.";
    }
    at() {
        return "Kl.";
    }
    atSpace() {
        return "Kl.";
    }
    atX0() {
        return "på %s";
    }
    atX0MinutesPastTheHour() {
        return "på %s minutter etter timen";
    }
    atX0SecondsPastTheMinute() {
        return "på %s sekunder etter minuttet";
    }
    betweenX0AndX1() {
        return "mellom %s og %s";
    }
    commaBetweenDayX0AndX1OfTheMonth() {
        return ", mellom dag %s og %s av måneden";
    }
    commaEveryDay() {
        return ", hver dag";
    }
    commaEveryX0Days() {
        return ", hver %s dag";
    }
    commaEveryX0DaysOfTheWeek() {
        return ", hver %s ukedag";
    }
    commaEveryX0Months() {
        return ", hver %s måned";
    }
    commaEveryX0Years() {
        return ", hvert %s år";
    }
    commaOnDayX0OfTheMonth() {
        return ", på dag %s av måneden";
    }
    commaOnlyInX0() {
        return ", bare i %s";
    }
    commaOnlyOnX0() {
        return ", på %s";
    }
    commaAndOnX0() {
        return ", og på %s";
    }
    commaOnThe() {
        return ", på ";
    }
    commaOnTheLastDayOfTheMonth() {
        return ", på den siste dagen i måneden";
    }
    commaOnTheLastWeekdayOfTheMonth() {
        return ", den siste ukedagen i måneden";
    }
    commaDaysBeforeTheLastDayOfTheMonth() {
        return ", %s dager før den siste dagen i måneden";
    }
    commaOnTheLastX0OfTheMonth() {
        return ", på den siste %s av måneden";
    }
    commaOnTheX0OfTheMonth() {
        return ", på den %s av måneden";
    }
    commaX0ThroughX1() {
        return ", %s til og med %s";
    }
    commaAndX0ThroughX1() {
        return ", og %s til og med %s";
    }
    everyHour() {
        return "hver time";
    }
    everyMinute() {
        return "hvert minutt";
    }
    everyMinuteBetweenX0AndX1() {
        return "Hvert minutt mellom %s og %s";
    }
    everySecond() {
        return "hvert sekund";
    }
    everyX0Hours() {
        return "hver %s time";
    }
    everyX0Minutes() {
        return "hvert %s minutt";
    }
    everyX0Seconds() {
        return "hvert %s sekund";
    }
    fifth() {
        return "femte";
    }
    first() {
        return "første";
    }
    firstWeekday() {
        return "første ukedag";
    }
    fourth() {
        return "fjerde";
    }
    minutesX0ThroughX1PastTheHour() {
        return "minuttene fra %s til og med %s etter timen";
    }
    second() {
        return "andre";
    }
    secondsX0ThroughX1PastTheMinute() {
        return "sekundene fra %s til og med %s etter minuttet";
    }
    spaceAnd() {
        return " og";
    }
    spaceX0OfTheMonth() {
        return " %s i måneden";
    }
    lastDay() {
        return "den siste dagen";
    }
    third() {
        return "tredje";
    }
    weekdayNearestDayX0() {
        return "ukedag nærmest dag %s";
    }
    commaStartingX0() {
        return ", starter %s";
    }
    daysOfTheWeek() {
        return ["søndag", "mandag", "tirsdag", "onsdag", "torsdag", "fredag", "lørdag"];
    }
    monthsOfTheYear() {
        return [
            "januar",
            "februar",
            "mars",
            "april",
            "mai",
            "juni",
            "juli",
            "august",
            "september",
            "oktober",
            "november",
            "desember",
        ];
    }
}
exports.nb = nb;


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

/***/ 300:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.pt_BR = void 0;
class pt_BR {
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
    commaOnlyInX0(s) {
        return s && s.length > 1 && s[1] === "-" ? "somente %s" : ", somente em %s";
    }
    commaOnlyOnX0(s) {
        return s && s.length > 1 && s[1] === "-" ? ", somente %s" : ", somente de %s";
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
exports.pt_BR = pt_BR;


/***/ }),

/***/ 327:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.sw = void 0;
class sw {
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
        return "Kuna tatizo wakati wa kutunga msemo. Angalia cron expression syntax.";
    }
    everyMinute() {
        return "kila dakika";
    }
    everyHour() {
        return "kila saa";
    }
    atSpace() {
        return "Kwa ";
    }
    everyMinuteBetweenX0AndX1() {
        return "Kila dakika kwanzia %s hadi %s";
    }
    at() {
        return "Kwa";
    }
    spaceAnd() {
        return " na";
    }
    everySecond() {
        return "kila sekunde";
    }
    everyX0Seconds() {
        return "kila sekunde %s";
    }
    secondsX0ThroughX1PastTheMinute() {
        return "sekunde ya %s hadi %s baada ya dakika";
    }
    atX0SecondsPastTheMinute() {
        return "sekunde %s baada ya dakika";
    }
    everyX0Minutes() {
        return "kila dakika %s";
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
        return "kati ya %s na %s";
    }
    atX0() {
        return "kwenye %s";
    }
    commaEveryDay() {
        return ", kila siku";
    }
    commaEveryX0DaysOfTheWeek() {
        return ", kila siku %s ya wiki";
    }
    commaX0ThroughX1() {
        return ", %s hadi %s";
    }
    commaAndX0ThroughX1() {
        return ", na %s hadi %s";
    }
    first() {
        return "ya kwanza";
    }
    second() {
        return "ya pili";
    }
    third() {
        return "ya tatu";
    }
    fourth() {
        return "ya nne";
    }
    fifth() {
        return "ya tano";
    }
    commaOnThe() {
        return ", kwenye ";
    }
    spaceX0OfTheMonth() {
        return " siku %s ya mwezi";
    }
    lastDay() {
        return "siku ya mwisho";
    }
    commaOnTheLastX0OfTheMonth() {
        return ", siku ya %s ya mwezi";
    }
    commaOnlyOnX0() {
        return ", kwa %s tu";
    }
    commaAndOnX0() {
        return ", na pia %s";
    }
    commaEveryX0Months() {
        return ", kila mwezi wa %s";
    }
    commaOnlyInX0() {
        return ", kwa %s tu";
    }
    commaOnTheLastDayOfTheMonth() {
        return ", siku ya mwisho wa mwezi";
    }
    commaOnTheLastWeekdayOfTheMonth() {
        return ", wikendi ya mwisho wa mwezi";
    }
    commaDaysBeforeTheLastDayOfTheMonth() {
        return ", siku ya %s kabla ya siku ya mwisho wa mwezi";
    }
    firstWeekday() {
        return "siku za kazi ya kwanza";
    }
    weekdayNearestDayX0() {
        return "siku ya kazi karibu na siku ya %s";
    }
    commaOnTheX0OfTheMonth() {
        return ", siku ya %s ya mwezi";
    }
    commaEveryX0Days() {
        return ", kila siku %s";
    }
    commaBetweenDayX0AndX1OfTheMonth() {
        return ", kati ya siku %s na %s ya mwezi";
    }
    commaOnDayX0OfTheMonth() {
        return ", siku ya %s ya mwezi";
    }
    commaEveryX0Years() {
        return ", kila miaka %s";
    }
    commaStartingX0() {
        return ", kwanzia %s";
    }
    daysOfTheWeek() {
        return ["Jumapili", "Jumatatu", "Jumanne", "Jumatano", "Alhamisi", "Ijumaa", "Jumamosi"];
    }
    monthsOfTheYear() {
        return [
            "Januari",
            "Februari",
            "Machi",
            "Aprili",
            "Mei",
            "Juni",
            "Julai",
            "Agosti",
            "Septemba",
            "Oktoba",
            "Novemba",
            "Desemba",
        ];
    }
}
exports.sw = sw;


/***/ }),

/***/ 375:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.nl = void 0;
class nl {
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
    everyMinute() {
        return "elke minuut";
    }
    everyHour() {
        return "elk uur";
    }
    anErrorOccuredWhenGeneratingTheExpressionD() {
        return "Er is een fout opgetreden bij het vertalen van de gegevens. Controleer de gegevens.";
    }
    atSpace() {
        return "Om ";
    }
    everyMinuteBetweenX0AndX1() {
        return "Elke minuut tussen %s en %s";
    }
    at() {
        return "Om";
    }
    spaceAnd() {
        return " en";
    }
    everySecond() {
        return "elke seconde";
    }
    everyX0Seconds() {
        return "elke %s seconden";
    }
    secondsX0ThroughX1PastTheMinute() {
        return "seconden %s t/m %s na de minuut";
    }
    atX0SecondsPastTheMinute() {
        return "op %s seconden na de minuut";
    }
    everyX0Minutes() {
        return "elke %s minuten";
    }
    minutesX0ThroughX1PastTheHour() {
        return "minuut %s t/m %s na het uur";
    }
    atX0MinutesPastTheHour() {
        return "op %s minuten na het uur";
    }
    everyX0Hours() {
        return "elke %s uur";
    }
    betweenX0AndX1() {
        return "tussen %s en %s";
    }
    atX0() {
        return "om %s";
    }
    commaEveryDay() {
        return ", elke dag";
    }
    commaEveryX0DaysOfTheWeek() {
        return ", elke %s dagen van de week";
    }
    commaX0ThroughX1() {
        return ", %s t/m %s";
    }
    commaAndX0ThroughX1() {
        return ", en %s t/m %s";
    }
    first() {
        return "eerste";
    }
    second() {
        return "tweede";
    }
    third() {
        return "derde";
    }
    fourth() {
        return "vierde";
    }
    fifth() {
        return "vijfde";
    }
    commaOnThe() {
        return ", op de ";
    }
    spaceX0OfTheMonth() {
        return " %s van de maand";
    }
    lastDay() {
        return "de laatste dag";
    }
    commaOnTheLastX0OfTheMonth() {
        return ", op de laatste %s van de maand";
    }
    commaOnlyOnX0() {
        return ", alleen op %s";
    }
    commaAndOnX0() {
        return ", en op %s";
    }
    commaEveryX0Months() {
        return ", elke %s maanden";
    }
    commaOnlyInX0() {
        return ", alleen in %s";
    }
    commaOnTheLastDayOfTheMonth() {
        return ", op de laatste dag van de maand";
    }
    commaOnTheLastWeekdayOfTheMonth() {
        return ", op de laatste werkdag van de maand";
    }
    commaDaysBeforeTheLastDayOfTheMonth() {
        return ", %s dagen vóór de laatste dag van de maand";
    }
    firstWeekday() {
        return "eerste werkdag";
    }
    weekdayNearestDayX0() {
        return "werkdag dichtst bij dag %s";
    }
    commaOnTheX0OfTheMonth() {
        return ", op de %s van de maand";
    }
    commaEveryX0Days() {
        return ", elke %s dagen";
    }
    commaBetweenDayX0AndX1OfTheMonth() {
        return ", tussen dag %s en %s van de maand";
    }
    commaOnDayX0OfTheMonth() {
        return ", op dag %s van de maand";
    }
    commaEveryX0Years() {
        return ", elke %s jaren";
    }
    commaStartingX0() {
        return ", beginnend %s";
    }
    daysOfTheWeek() {
        return ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"];
    }
    monthsOfTheYear() {
        return [
            "januari",
            "februari",
            "maart",
            "april",
            "mei",
            "juni",
            "juli",
            "augustus",
            "september",
            "oktober",
            "november",
            "december",
        ];
    }
}
exports.nl = nl;


/***/ }),

/***/ 383:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ko = void 0;
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
exports.ko = ko;


/***/ }),

/***/ 384:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.it = void 0;
class it {
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
        return "È verificato un errore durante la generazione la descrizione espressione. Controllare la sintassi delle espressioni cron.";
    }
    at() {
        return "Alle";
    }
    atSpace() {
        return "Alle ";
    }
    atX0() {
        return "alle %s";
    }
    atX0MinutesPastTheHour() {
        return "al %s minuto passata l'ora";
    }
    atX0SecondsPastTheMinute() {
        return "al %s secondo passato il minuto";
    }
    betweenX0AndX1() {
        return "tra le %s e le %s";
    }
    commaBetweenDayX0AndX1OfTheMonth() {
        return ", tra il giorno %s e %s del mese";
    }
    commaEveryDay() {
        return ", ogni giorno";
    }
    commaEveryX0Days() {
        return ", ogni %s giorni";
    }
    commaEveryX0DaysOfTheWeek() {
        return ", ogni %s giorni della settimana";
    }
    commaEveryX0Months() {
        return ", ogni %s mesi";
    }
    commaEveryX0Years() {
        return ", ogni %s anni";
    }
    commaOnDayX0OfTheMonth() {
        return ", il giorno %s del mese";
    }
    commaOnlyInX0() {
        return ", solo in %s";
    }
    commaOnlyOnX0() {
        return ", solo il %s";
    }
    commaAndOnX0() {
        return ", e il %s";
    }
    commaOnThe() {
        return ", il ";
    }
    commaOnTheLastDayOfTheMonth() {
        return ", l'ultimo giorno del mese";
    }
    commaOnTheLastWeekdayOfTheMonth() {
        return ", nell'ultima settimana del mese";
    }
    commaDaysBeforeTheLastDayOfTheMonth() {
        return ", %s giorni prima dell'ultimo giorno del mese";
    }
    commaOnTheLastX0OfTheMonth() {
        return ", l'ultimo %s del mese";
    }
    commaOnTheX0OfTheMonth() {
        return ", il %s del mese";
    }
    commaX0ThroughX1() {
        return ", %s al %s";
    }
    commaAndX0ThroughX1() {
        return ", e %s al %s";
    }
    everyHour() {
        return "ogni ora";
    }
    everyMinute() {
        return "ogni minuto";
    }
    everyMinuteBetweenX0AndX1() {
        return "Ogni minuto tra le %s e le %s";
    }
    everySecond() {
        return "ogni secondo";
    }
    everyX0Hours() {
        return "ogni %s ore";
    }
    everyX0Minutes() {
        return "ogni %s minuti";
    }
    everyX0Seconds() {
        return "ogni %s secondi";
    }
    fifth() {
        return "quinto";
    }
    first() {
        return "primo";
    }
    firstWeekday() {
        return "primo giorno della settimana";
    }
    fourth() {
        return "quarto";
    }
    minutesX0ThroughX1PastTheHour() {
        return "minuti %s al %s dopo l'ora";
    }
    second() {
        return "secondo";
    }
    secondsX0ThroughX1PastTheMinute() {
        return "secondi %s al %s oltre il minuto";
    }
    spaceAnd() {
        return " e";
    }
    spaceX0OfTheMonth() {
        return " %s del mese";
    }
    lastDay() {
        return "l'ultimo giorno";
    }
    third() {
        return "terzo";
    }
    weekdayNearestDayX0() {
        return "giorno della settimana più vicino al %s";
    }
    commaStartingX0() {
        return ", a partire %s";
    }
    daysOfTheWeek() {
        return ["domenica", "lunedì", "martedì", "mercoledì", "giovedì", "venerdì", "sabato"];
    }
    monthsOfTheYear() {
        return [
            "gennaio",
            "febbraio",
            "marzo",
            "aprile",
            "maggio",
            "giugno",
            "luglio",
            "agosto",
            "settembre",
            "ottobre",
            "novembre",
            "dicembre",
        ];
    }
}
exports.it = it;


/***/ }),

/***/ 386:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.he = void 0;
class he {
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
        return "אירעה שגיאה בעת יצירת תיאור הביטוי. בדוק את תחביר הביטוי cron.";
    }
    everyMinute() {
        return "כל דקה";
    }
    everyHour() {
        return "כל שעה";
    }
    atSpace() {
        return "ב ";
    }
    everyMinuteBetweenX0AndX1() {
        return "כל דקה %s עד %s";
    }
    at() {
        return "ב";
    }
    spaceAnd() {
        return " ו";
    }
    everySecond() {
        return "כל שניה";
    }
    everyX0Seconds() {
        return "כל %s שניות";
    }
    secondsX0ThroughX1PastTheMinute() {
        return "%s עד %s שניות של הדקה";
    }
    atX0SecondsPastTheMinute() {
        return "ב %s שניות של הדקה";
    }
    everyX0Minutes() {
        return "כל %s דקות";
    }
    minutesX0ThroughX1PastTheHour() {
        return "%s עד %s דקות של השעה";
    }
    atX0MinutesPastTheHour() {
        return "ב %s דקות של השעה";
    }
    everyX0Hours() {
        return "כל %s שעות";
    }
    betweenX0AndX1() {
        return "%s עד %s";
    }
    atX0() {
        return "ב %s";
    }
    commaEveryDay() {
        return ", כל יום";
    }
    commaEveryX0DaysOfTheWeek() {
        return ", כל %s ימים בשבוע";
    }
    commaX0ThroughX1() {
        return ", %s עד %s";
    }
    commaAndX0ThroughX1() {
        return ", ו %s עד %s";
    }
    first() {
        return "ראשון";
    }
    second() {
        return "שני";
    }
    third() {
        return "שלישי";
    }
    fourth() {
        return "רביעי";
    }
    fifth() {
        return "חמישי";
    }
    commaOnThe() {
        return ", ב ";
    }
    spaceX0OfTheMonth() {
        return " %s של החודש";
    }
    lastDay() {
        return "היום האחרון";
    }
    commaOnTheLastX0OfTheMonth() {
        return ", רק ב %s של החודש";
    }
    commaOnlyOnX0() {
        return ", רק ב %s";
    }
    commaAndOnX0() {
        return ", וב %s";
    }
    commaEveryX0Months() {
        return ", כל %s חודשים";
    }
    commaOnlyInX0() {
        return ", רק ב %s";
    }
    commaOnTheLastDayOfTheMonth() {
        return ", ביום האחרון של החודש";
    }
    commaOnTheLastWeekdayOfTheMonth() {
        return ", ביום החול האחרון של החודש";
    }
    commaDaysBeforeTheLastDayOfTheMonth() {
        return ", %s ימים לפני היום האחרון בחודש";
    }
    firstWeekday() {
        return "יום החול הראשון";
    }
    weekdayNearestDayX0() {
        return "יום החול הראשון הקרוב אל %s";
    }
    commaOnTheX0OfTheMonth() {
        return ", ביום ה%s של החודש";
    }
    commaEveryX0Days() {
        return ", כל %s ימים";
    }
    commaBetweenDayX0AndX1OfTheMonth() {
        return ", בין היום ה%s וה%s של החודש";
    }
    commaOnDayX0OfTheMonth() {
        return ", ביום ה%s של החודש";
    }
    commaEveryX0Years() {
        return ", כל %s שנים";
    }
    commaStartingX0() {
        return ", החל מ %s";
    }
    daysOfTheWeek() {
        return ["יום ראשון", "יום שני", "יום שלישי", "יום רביעי", "יום חמישי", "יום שישי", "יום שבת"];
    }
    monthsOfTheYear() {
        return ["ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני", "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר"];
    }
}
exports.he = he;


/***/ }),

/***/ 428:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.vi = void 0;
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
exports.vi = vi;


/***/ }),

/***/ 442:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.sl = void 0;
class sl {
    use24HourTimeFormatByDefault() {
        return true;
    }
    anErrorOccuredWhenGeneratingTheExpressionD() {
        return "Pri generiranju opisa izraza je prišlo do napake. Preverite sintakso izraza cron.";
    }
    at() {
        return "Ob";
    }
    atSpace() {
        return "Ob ";
    }
    atX0() {
        return "ob %s";
    }
    atX0MinutesPastTheHour() {
        return "ob %s.";
    }
    atX0SecondsPastTheMinute() {
        return "ob %s.";
    }
    betweenX0AndX1() {
        return "od %s do %s";
    }
    commaBetweenDayX0AndX1OfTheMonth() {
        return ", od %s. do %s. dne v mesecu";
    }
    commaEveryDay() {
        return ", vsak dan";
    }
    commaEveryX0Days() {
        return ", vsakih %s dni";
    }
    commaEveryX0DaysOfTheWeek() {
        return ", vsakih %s dni v tednu";
    }
    commaEveryX0Months() {
        return ", vsakih %s mesecev";
    }
    commaEveryX0Years() {
        return ", vsakih %s let";
    }
    commaOnDayX0OfTheMonth() {
        return ", %s. dan v mesecu";
    }
    commaOnlyInX0() {
        return ", samo v %s";
    }
    commaOnlyOnX0() {
        return ", samo v %s";
    }
    commaAndOnX0() {
        return "in naprej %s";
    }
    commaOnThe() {
        return ", ";
    }
    commaOnTheLastDayOfTheMonth() {
        return ", zadnji %s v mesecu";
    }
    commaOnTheLastWeekdayOfTheMonth() {
        return ", zadnji delovni dan v mesecu";
    }
    commaDaysBeforeTheLastDayOfTheMonth() {
        return ", %s dni pred koncem meseca";
    }
    commaOnTheLastX0OfTheMonth() {
        return ", zadnji %s v mesecu";
    }
    commaOnTheX0OfTheMonth() {
        return ", %s v mesecu";
    }
    commaX0ThroughX1() {
        return ", od %s do %s";
    }
    commaAndX0ThroughX1() {
        return ", in od %s do %s";
    }
    everyHour() {
        return "vsako uro";
    }
    everyMinute() {
        return "vsako minuto";
    }
    everyMinuteBetweenX0AndX1() {
        return "Vsako minuto od %s do %s";
    }
    everySecond() {
        return "vsako sekundo";
    }
    everyX0Hours() {
        return "vsakih %s ur";
    }
    everyX0Minutes() {
        return "vsakih %s minut";
    }
    everyX0Seconds() {
        return "vsakih %s sekund";
    }
    fifth() {
        return "peti";
    }
    first() {
        return "prvi";
    }
    firstWeekday() {
        return "prvi delovni dan";
    }
    fourth() {
        return "četrti";
    }
    minutesX0ThroughX1PastTheHour() {
        return "minute od %s do %s";
    }
    second() {
        return "drugi";
    }
    secondsX0ThroughX1PastTheMinute() {
        return "sekunde od %s do %s";
    }
    spaceAnd() {
        return " in";
    }
    spaceX0OfTheMonth() {
        return " %s v mesecu";
    }
    lastDay() {
        return "zadnjič";
    }
    third() {
        return "tretji";
    }
    weekdayNearestDayX0() {
        return "delovni dan, najbližji %s. dnevu";
    }
    commaMonthX0ThroughMonthX1() {
        return null;
    }
    commaYearX0ThroughYearX1() {
        return null;
    }
    atX0MinutesPastTheHourGt20() {
        return null;
    }
    atX0SecondsPastTheMinuteGt20() {
        return null;
    }
    commaStartingX0() {
        return ", začenši %s";
    }
    daysOfTheWeek() {
        return ["Nedelja", "Ponedeljek", "Torek", "Sreda", "Četrtek", "Petek", "Sobota"];
    }
    monthsOfTheYear() {
        return [
            "januar",
            "februar",
            "marec",
            "april",
            "maj",
            "junij",
            "julij",
            "avgust",
            "september",
            "oktober",
            "november",
            "december",
        ];
    }
}
exports.sl = sl;


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

/***/ 471:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.zh_TW = void 0;
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
exports.zh_TW = zh_TW;


/***/ }),

/***/ 472:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.pt_PT = void 0;
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
exports.pt_PT = pt_PT;


/***/ }),

/***/ 477:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.fr = void 0;
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
exports.fr = fr;


/***/ }),

/***/ 545:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.es = void 0;
class es {
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
        return "Ocurrió un error mientras se generaba la descripción de la expresión. Revise la sintaxis de la expresión de cron.";
    }
    at() {
        return "A las";
    }
    atSpace() {
        return "A las ";
    }
    atX0() {
        return "a las %s";
    }
    atX0MinutesPastTheHour() {
        return "a los %s minutos de la hora";
    }
    atX0SecondsPastTheMinute() {
        return "a los %s segundos del minuto";
    }
    betweenX0AndX1() {
        return "entre las %s y las %s";
    }
    commaBetweenDayX0AndX1OfTheMonth() {
        return ", entre los días %s y %s del mes";
    }
    commaEveryDay() {
        return ", cada día";
    }
    commaEveryX0Days() {
        return ", cada %s días";
    }
    commaEveryX0DaysOfTheWeek() {
        return ", cada %s días de la semana";
    }
    commaEveryX0Months() {
        return ", cada %s meses";
    }
    commaOnDayX0OfTheMonth() {
        return ", el día %s del mes";
    }
    commaOnlyInX0() {
        return ", sólo en %s";
    }
    commaOnlyOnX0() {
        return ", sólo el %s";
    }
    commaAndOnX0() {
        return ", y el %s";
    }
    commaOnThe() {
        return ", en el ";
    }
    commaOnTheLastDayOfTheMonth() {
        return ", en el último día del mes";
    }
    commaOnTheLastWeekdayOfTheMonth() {
        return ", en el último día de la semana del mes";
    }
    commaDaysBeforeTheLastDayOfTheMonth() {
        return ", %s días antes del último día del mes";
    }
    commaOnTheLastX0OfTheMonth() {
        return ", en el último %s del mes";
    }
    commaOnTheX0OfTheMonth() {
        return ", en el %s del mes";
    }
    commaX0ThroughX1() {
        return ", de %s a %s";
    }
    commaAndX0ThroughX1() {
        return ", y de %s a %s";
    }
    everyHour() {
        return "cada hora";
    }
    everyMinute() {
        return "cada minuto";
    }
    everyMinuteBetweenX0AndX1() {
        return "cada minuto entre las %s y las %s";
    }
    everySecond() {
        return "cada segundo";
    }
    everyX0Hours() {
        return "cada %s horas";
    }
    everyX0Minutes() {
        return "cada %s minutos";
    }
    everyX0Seconds() {
        return "cada %s segundos";
    }
    fifth() {
        return "quinto";
    }
    first() {
        return "primero";
    }
    firstWeekday() {
        return "primer día de la semana";
    }
    fourth() {
        return "cuarto";
    }
    minutesX0ThroughX1PastTheHour() {
        return "del minuto %s al %s pasada la hora";
    }
    second() {
        return "segundo";
    }
    secondsX0ThroughX1PastTheMinute() {
        return "En los segundos %s al %s de cada minuto";
    }
    spaceAnd() {
        return " y";
    }
    spaceX0OfTheMonth() {
        return " %s del mes";
    }
    lastDay() {
        return "el último día";
    }
    third() {
        return "tercer";
    }
    weekdayNearestDayX0() {
        return "día de la semana más próximo al %s";
    }
    commaEveryX0Years() {
        return ", cada %s años";
    }
    commaStartingX0() {
        return ", comenzando %s";
    }
    daysOfTheWeek() {
        return ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
    }
    monthsOfTheYear() {
        return [
            "enero",
            "febrero",
            "marzo",
            "abril",
            "mayo",
            "junio",
            "julio",
            "agosto",
            "septiembre",
            "octubre",
            "noviembre",
            "diciembre",
        ];
    }
}
exports.es = es;


/***/ }),

/***/ 577:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.pl = void 0;
class pl {
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
        return "Wystąpił błąd podczas generowania opisu wyrażenia cron. Sprawdź składnię wyrażenia cron.";
    }
    at() {
        return "O";
    }
    atSpace() {
        return "O ";
    }
    atX0() {
        return "o %s";
    }
    atX0MinutesPastTheHour() {
        return "w %s minucie";
    }
    atX0SecondsPastTheMinute() {
        return "w %s sekundzie";
    }
    betweenX0AndX1() {
        return "od %s do %s";
    }
    commaBetweenDayX0AndX1OfTheMonth() {
        return ", od %s-ego do %s-ego dnia miesiąca";
    }
    commaEveryDay() {
        return ", co dzień";
    }
    commaEveryX0Days() {
        return ", co %s dni";
    }
    commaEveryX0DaysOfTheWeek() {
        return ", co %s dni tygodnia";
    }
    commaEveryX0Months() {
        return ", co %s miesięcy";
    }
    commaEveryX0Years() {
        return ", co %s lat";
    }
    commaOnDayX0OfTheMonth() {
        return ", %s-ego dnia miesiąca";
    }
    commaOnlyInX0() {
        return ", tylko %s";
    }
    commaOnlyOnX0() {
        return ", tylko %s";
    }
    commaAndOnX0() {
        return ", i %s";
    }
    commaOnThe() {
        return ", ";
    }
    commaOnTheLastDayOfTheMonth() {
        return ", ostatni dzień miesiąca";
    }
    commaOnTheLastWeekdayOfTheMonth() {
        return ", ostatni dzień roboczy miesiąca";
    }
    commaDaysBeforeTheLastDayOfTheMonth() {
        return ", %s dni przed ostatnim dniem miesiąca";
    }
    commaOnTheLastX0OfTheMonth() {
        return ", ostatni %s miesiąca";
    }
    commaOnTheX0OfTheMonth() {
        return ", %s miesiąca";
    }
    commaX0ThroughX1() {
        return ", od %s do %s";
    }
    commaAndX0ThroughX1() {
        return ", i od %s do %s";
    }
    everyHour() {
        return "co godzinę";
    }
    everyMinute() {
        return "co minutę";
    }
    everyMinuteBetweenX0AndX1() {
        return "Co minutę od %s do %s";
    }
    everySecond() {
        return "co sekundę";
    }
    everyX0Hours() {
        return "co %s godzin";
    }
    everyX0Minutes() {
        return "co %s minut";
    }
    everyX0Seconds() {
        return "co %s sekund";
    }
    fifth() {
        return "piąty";
    }
    first() {
        return "pierwszy";
    }
    firstWeekday() {
        return "pierwszy dzień roboczy";
    }
    fourth() {
        return "czwarty";
    }
    minutesX0ThroughX1PastTheHour() {
        return "minuty od %s do %s";
    }
    second() {
        return "drugi";
    }
    secondsX0ThroughX1PastTheMinute() {
        return "sekundy od %s do %s";
    }
    spaceAnd() {
        return " i";
    }
    spaceX0OfTheMonth() {
        return " %s miesiąca";
    }
    lastDay() {
        return "ostatni dzień";
    }
    third() {
        return "trzeci";
    }
    weekdayNearestDayX0() {
        return "dzień roboczy najbliższy %s-ego dnia";
    }
    commaStartingX0() {
        return ", startowy %s";
    }
    daysOfTheWeek() {
        return ["niedziela", "poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota"];
    }
    monthsOfTheYear() {
        return [
            "styczeń",
            "luty",
            "marzec",
            "kwiecień",
            "maj",
            "czerwiec",
            "lipiec",
            "sierpień",
            "wrzesień",
            "październik",
            "listopad",
            "grudzień",
        ];
    }
}
exports.pl = pl;


/***/ }),

/***/ 580:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.fa = void 0;
class fa {
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
        return "خطایی در نمایش توضیحات این وظیفه رخ داد. لطفا ساختار آن را بررسی کنید.";
    }
    everyMinute() {
        return "هر دقیقه";
    }
    everyHour() {
        return "هر ساعت";
    }
    atSpace() {
        return "در ";
    }
    everyMinuteBetweenX0AndX1() {
        return "هر دقیقه بین %s و %s";
    }
    at() {
        return "در";
    }
    spaceAnd() {
        return " و";
    }
    everySecond() {
        return "هر ثانیه";
    }
    everyX0Seconds() {
        return "هر %s ثانیه";
    }
    secondsX0ThroughX1PastTheMinute() {
        return "ثانیه %s تا %s دقیقه گذشته";
    }
    atX0SecondsPastTheMinute() {
        return "در %s قانیه از دقیقه گذشته";
    }
    everyX0Minutes() {
        return "هر %s دقیقه";
    }
    minutesX0ThroughX1PastTheHour() {
        return "دقیقه %s تا %s ساعت گذشته";
    }
    atX0MinutesPastTheHour() {
        return "در %s دقیقه پس از ساعت";
    }
    everyX0Hours() {
        return "هر %s ساعت";
    }
    betweenX0AndX1() {
        return "بین %s و %s";
    }
    atX0() {
        return "در %s";
    }
    commaEveryDay() {
        return ", هر روز";
    }
    commaEveryX0DaysOfTheWeek() {
        return ", هر %s روز از هفته";
    }
    commaX0ThroughX1() {
        return ", %s تا %s";
    }
    commaAndX0ThroughX1() {
        return ", و %s تا %s";
    }
    first() {
        return "اول";
    }
    second() {
        return "دوم";
    }
    third() {
        return "سوم";
    }
    fourth() {
        return "چهارم";
    }
    fifth() {
        return "پنجم";
    }
    commaOnThe() {
        return ", در ";
    }
    spaceX0OfTheMonth() {
        return " %s ماه";
    }
    lastDay() {
        return "آخرین روز";
    }
    commaOnTheLastX0OfTheMonth() {
        return ", در %s ماه";
    }
    commaOnlyOnX0() {
        return ", فقط در %s";
    }
    commaAndOnX0() {
        return ", و در %s";
    }
    commaEveryX0Months() {
        return ", هر %s ماه";
    }
    commaOnlyInX0() {
        return ", فقط در %s";
    }
    commaOnTheLastDayOfTheMonth() {
        return ", در آخرین روز ماه";
    }
    commaOnTheLastWeekdayOfTheMonth() {
        return ", در آخرین روز ماه";
    }
    commaDaysBeforeTheLastDayOfTheMonth() {
        return ", %s روز قبل از آخرین روز ماه";
    }
    firstWeekday() {
        return "اولین روز";
    }
    weekdayNearestDayX0() {
        return "روز نزدیک به روز %s";
    }
    commaOnTheX0OfTheMonth() {
        return ", در %s ماه";
    }
    commaEveryX0Days() {
        return ", هر %s روز";
    }
    commaBetweenDayX0AndX1OfTheMonth() {
        return ", بین روز %s و %s ماه";
    }
    commaOnDayX0OfTheMonth() {
        return ", در %s ماه";
    }
    commaEveryMinute() {
        return ", هر minute";
    }
    commaEveryHour() {
        return ", هر ساعت";
    }
    commaEveryX0Years() {
        return ", هر %s سال";
    }
    commaStartingX0() {
        return ", آغاز %s";
    }
    daysOfTheWeek() {
        return ["یک‌شنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنج‌شنبه", "جمعه", "شنبه"];
    }
    monthsOfTheYear() {
        return ["ژانویه", "فوریه", "مارس", "آپریل", "مه", "ژوئن", "ژوئیه", "آگوست", "سپتامبر", "اکتبر", "نوامبر", "دسامبر"];
    }
}
exports.fa = fa;


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

/***/ 612:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.allLocalesLoader = void 0;
const allLocales = __webpack_require__(107);
class allLocalesLoader {
    load(availableLocales) {
        for (var property in allLocales) {
            if (allLocales.hasOwnProperty(property)) {
                availableLocales[property] = new allLocales[property]();
            }
        }
    }
}
exports.allLocalesLoader = allLocalesLoader;


/***/ }),

/***/ 616:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ja = void 0;
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
exports.ja = ja;


/***/ }),

/***/ 714:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.af = void 0;
class af {
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
        return ", jaar %s na %s";
    }
    use24HourTimeFormatByDefault() {
        return true;
    }
    anErrorOccuredWhenGeneratingTheExpressionD() {
        return "Daar was 'n fout om die tydsuitdrukking the genereer. Raadpleeg asb die uitdrukking formaat.";
    }
    everyMinute() {
        return "elke minuut";
    }
    everyHour() {
        return "elke uur";
    }
    atSpace() {
        return "Teen ";
    }
    everyMinuteBetweenX0AndX1() {
        return "Elke minuut tussen %s en %s";
    }
    at() {
        return "Teen";
    }
    spaceAnd() {
        return " en";
    }
    everySecond() {
        return "elke sekonde";
    }
    everyX0Seconds() {
        return "elke %s sekonde";
    }
    secondsX0ThroughX1PastTheMinute() {
        return "sekonde %s deur na %s na die minuut";
    }
    atX0SecondsPastTheMinute() {
        return "teen %s sekondes na die minuut";
    }
    everyX0Minutes() {
        return "elke %s minute";
    }
    minutesX0ThroughX1PastTheHour() {
        return "minute %s deur na %s na die uur";
    }
    atX0MinutesPastTheHour() {
        return "teen %s minute na die uur";
    }
    everyX0Hours() {
        return "elke %s ure";
    }
    betweenX0AndX1() {
        return "tussen %s en %s";
    }
    atX0() {
        return "teen %s";
    }
    commaEveryDay() {
        return ", elke dag";
    }
    commaEveryX0DaysOfTheWeek() {
        return ", elke %s dae van die week";
    }
    commaX0ThroughX1() {
        return ", %s deur na %s";
    }
    commaAndX0ThroughX1() {
        return ", en %s deur na %s";
    }
    first() {
        return "eerste";
    }
    second() {
        return "tweede";
    }
    third() {
        return "derde";
    }
    fourth() {
        return "vierde";
    }
    fifth() {
        return "vyfde";
    }
    commaOnThe() {
        return ", op die ";
    }
    spaceX0OfTheMonth() {
        return " %s van die maand";
    }
    lastDay() {
        return "die laaste dag";
    }
    commaOnTheLastX0OfTheMonth() {
        return ", op die laaste %s van die maand";
    }
    commaOnlyOnX0() {
        return ", net op %s";
    }
    commaAndOnX0() {
        return ", en op %s";
    }
    commaEveryX0Months() {
        return ", elke %s maande";
    }
    commaOnlyInX0() {
        return ", net in %s";
    }
    commaOnTheLastDayOfTheMonth() {
        return ", op die laaste dag van die maand";
    }
    commaOnTheLastWeekdayOfTheMonth() {
        return ", op die laaste weeksdag van die maand";
    }
    commaDaysBeforeTheLastDayOfTheMonth() {
        return ", %s dae voor die laaste dag van die maand";
    }
    firstWeekday() {
        return "eerste weeksdag";
    }
    weekdayNearestDayX0() {
        return "weeksdag naaste aan dag %s";
    }
    commaOnTheX0OfTheMonth() {
        return ", op die %s van die maande";
    }
    commaEveryX0Days() {
        return ", elke %s dae";
    }
    commaBetweenDayX0AndX1OfTheMonth() {
        return ", tussen dag %s en %s van die maand";
    }
    commaOnDayX0OfTheMonth() {
        return ", op dag %s van die maand";
    }
    commaEveryHour() {
        return ", elke uur";
    }
    commaEveryX0Years() {
        return ", elke %s jare";
    }
    commaStartingX0() {
        return ", beginnende %s";
    }
    daysOfTheWeek() {
        return ["Sondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrydag", "Saterdag"];
    }
    monthsOfTheYear() {
        return [
            "Januarie",
            "Februarie",
            "Maart",
            "April",
            "Mei",
            "Junie",
            "Julie",
            "Augustus",
            "September",
            "Oktober",
            "November",
            "Desember",
        ];
    }
}
exports.af = af;


/***/ }),

/***/ 800:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.sv = void 0;
class sv {
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
        return "Ett fel inträffade vid generering av uttryckets beskrivning. Kontrollera cron-uttryckets syntax.";
    }
    everyMinute() {
        return "varje minut";
    }
    everyHour() {
        return "varje timme";
    }
    atSpace() {
        return "Kl ";
    }
    everyMinuteBetweenX0AndX1() {
        return "Varje minut mellan %s och %s";
    }
    at() {
        return "Kl";
    }
    spaceAnd() {
        return " och";
    }
    everySecond() {
        return "varje sekund";
    }
    everyX0Seconds() {
        return "varje %s sekund";
    }
    secondsX0ThroughX1PastTheMinute() {
        return "sekunderna från %s till och med %s efter minuten";
    }
    atX0SecondsPastTheMinute() {
        return "på %s sekunder efter minuten";
    }
    everyX0Minutes() {
        return "var %s minut";
    }
    minutesX0ThroughX1PastTheHour() {
        return "minuterna från %s till och med %s efter timmen";
    }
    atX0MinutesPastTheHour() {
        return "på %s minuten efter timmen";
    }
    everyX0Hours() {
        return "var %s timme";
    }
    betweenX0AndX1() {
        return "mellan %s och %s";
    }
    atX0() {
        return "kl %s";
    }
    commaEveryDay() {
        return ", varje dag";
    }
    commaEveryX0DaysOfTheWeek() {
        return ", var %s dag i veckan";
    }
    commaX0ThroughX1() {
        return ", %s till %s";
    }
    commaAndX0ThroughX1() {
        return ", och %s till %s";
    }
    first() {
        return "första";
    }
    second() {
        return "andra";
    }
    third() {
        return "tredje";
    }
    fourth() {
        return "fjärde";
    }
    fifth() {
        return "femte";
    }
    commaOnThe() {
        return ", den ";
    }
    spaceX0OfTheMonth() {
        return " %sen av månaden";
    }
    lastDay() {
        return "den sista dagen";
    }
    commaOnTheLastX0OfTheMonth() {
        return ", på sista %s av månaden";
    }
    commaOnlyOnX0() {
        return ", varje %s";
    }
    commaAndOnX0() {
        return ", och på %s";
    }
    commaEveryX0Months() {
        return ", var %s månad";
    }
    commaOnlyInX0() {
        return ", bara på %s";
    }
    commaOnTheLastDayOfTheMonth() {
        return ", på sista dagen av månaden";
    }
    commaOnTheLastWeekdayOfTheMonth() {
        return ", på sista veckodag av månaden";
    }
    commaDaysBeforeTheLastDayOfTheMonth() {
        return ", %s dagar före den sista dagen i månaden";
    }
    firstWeekday() {
        return "första veckodag";
    }
    weekdayNearestDayX0() {
        return "veckodagen närmast dag %s";
    }
    commaOnTheX0OfTheMonth() {
        return ", på den %s av månaden";
    }
    commaEveryX0Days() {
        return ", var %s dag";
    }
    commaBetweenDayX0AndX1OfTheMonth() {
        return ", mellan dag %s och %s av månaden";
    }
    commaOnDayX0OfTheMonth() {
        return ", på dag %s av månaden";
    }
    commaEveryX0Years() {
        return ", var %s år";
    }
    commaStartingX0() {
        return ", startar %s";
    }
    daysOfTheWeek() {
        return ["söndag", "måndag", "tisdag", "onsdag", "torsdag", "fredag", "lördag"];
    }
    monthsOfTheYear() {
        return [
            "januari",
            "februari",
            "mars",
            "april",
            "maj",
            "juni",
            "juli",
            "augusti",
            "september",
            "oktober",
            "november",
            "december",
        ];
    }
}
exports.sv = sv;


/***/ }),

/***/ 805:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ca = void 0;
class ca {
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
        return "S'ha produït un error mentres es generava la descripció de l'expressió. Revisi la sintaxi de la expressió de cron.";
    }
    at() {
        return "A les";
    }
    atSpace() {
        return "A les ";
    }
    atX0() {
        return "a les %s";
    }
    atX0MinutesPastTheHour() {
        return "als %s minuts de l'hora";
    }
    atX0SecondsPastTheMinute() {
        return "als %s segonds del minut";
    }
    betweenX0AndX1() {
        return "entre les %s i les %s";
    }
    commaBetweenDayX0AndX1OfTheMonth() {
        return ", entre els dies %s i %s del mes";
    }
    commaEveryDay() {
        return ", cada dia";
    }
    commaEveryX0Days() {
        return ", cada %s dies";
    }
    commaEveryX0DaysOfTheWeek() {
        return ", cada %s dies de la setmana";
    }
    commaEveryX0Months() {
        return ", cada %s mesos";
    }
    commaOnDayX0OfTheMonth() {
        return ", el dia %s del mes";
    }
    commaOnlyInX0() {
        return ", sólo en %s";
    }
    commaOnlyOnX0() {
        return ", només el %s";
    }
    commaAndOnX0() {
        return ", i el %s";
    }
    commaOnThe() {
        return ", en el ";
    }
    commaOnTheLastDayOfTheMonth() {
        return ", en l'últim dia del mes";
    }
    commaOnTheLastWeekdayOfTheMonth() {
        return ", en l'últim dia de la setmana del mes";
    }
    commaDaysBeforeTheLastDayOfTheMonth() {
        return ", %s dies abans de l'últim dia del mes";
    }
    commaOnTheLastX0OfTheMonth() {
        return ", en l'últim %s del mes";
    }
    commaOnTheX0OfTheMonth() {
        return ", en el %s del mes";
    }
    commaX0ThroughX1() {
        return ", de %s a %s";
    }
    commaAndX0ThroughX1() {
        return ", i de %s a %s";
    }
    everyHour() {
        return "cada hora";
    }
    everyMinute() {
        return "cada minut";
    }
    everyMinuteBetweenX0AndX1() {
        return "cada minut entre les %s i les %s";
    }
    everySecond() {
        return "cada segon";
    }
    everyX0Hours() {
        return "cada %s hores";
    }
    everyX0Minutes() {
        return "cada %s minuts";
    }
    everyX0Seconds() {
        return "cada %s segons";
    }
    fifth() {
        return "cinquè";
    }
    first() {
        return "primer";
    }
    firstWeekday() {
        return "primer dia de la setmana";
    }
    fourth() {
        return "quart";
    }
    minutesX0ThroughX1PastTheHour() {
        return "del minut %s al %s passada l'hora";
    }
    second() {
        return "segon";
    }
    secondsX0ThroughX1PastTheMinute() {
        return "En els segons %s al %s de cada minut";
    }
    spaceAnd() {
        return " i";
    }
    spaceX0OfTheMonth() {
        return " %s del mes";
    }
    lastDay() {
        return "l'últim dia";
    }
    third() {
        return "tercer";
    }
    weekdayNearestDayX0() {
        return "dia de la setmana més proper al %s";
    }
    commaEveryX0Years() {
        return ", cada %s anys";
    }
    commaStartingX0() {
        return ", començant %s";
    }
    daysOfTheWeek() {
        return ["diumenge", "dilluns", "dimarts", "dimecres", "dijous", "divendres", "dissabte"];
    }
    monthsOfTheYear() {
        return [
            "gener",
            "febrer",
            "març",
            "abril",
            "maig",
            "juny",
            "juliol",
            "agost",
            "setembre",
            "octubre",
            "novembre",
            "desembre",
        ];
    }
}
exports.ca = ca;


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


/***/ }),

/***/ 815:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.my = void 0;
class my {
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
        return "Terdapat ralat semasa menjana penerangan ungkapan. Sila periksa sintaks ungkapan cron.";
    }
    everyMinute() {
        return "setiap minit";
    }
    everyHour() {
        return "setiap jam";
    }
    atSpace() {
        return "Pada ";
    }
    everyMinuteBetweenX0AndX1() {
        return "Setiap minit antara %s dan %s";
    }
    at() {
        return "Pada";
    }
    spaceAnd() {
        return " dan";
    }
    everySecond() {
        return "setiap saat";
    }
    everyX0Seconds() {
        return "setiap %s saat";
    }
    secondsX0ThroughX1PastTheMinute() {
        return "saat ke %s hingga %s selepas minit";
    }
    atX0SecondsPastTheMinute() {
        return "pada %s saat selepas minit";
    }
    everyX0Minutes() {
        return "setiap %s minit";
    }
    minutesX0ThroughX1PastTheHour() {
        return "minit ke %s hingga %s selepas jam";
    }
    atX0MinutesPastTheHour() {
        return "pada %s minit selepas jam";
    }
    everyX0Hours() {
        return "setiap %s jam";
    }
    betweenX0AndX1() {
        return "antara %s dan %s";
    }
    atX0() {
        return "pada %s";
    }
    commaEveryDay() {
        return ", setiap hari";
    }
    commaEveryX0DaysOfTheWeek() {
        return ", setiap %s hari dalam minggu";
    }
    commaX0ThroughX1() {
        return ", %s hingga %s";
    }
    commaAndX0ThroughX1() {
        return ", dan %s hingga %s";
    }
    first() {
        return "pertama";
    }
    second() {
        return "kedua";
    }
    third() {
        return "ketiga";
    }
    fourth() {
        return "keempat";
    }
    fifth() {
        return "kelima";
    }
    commaOnThe() {
        return ", pada ";
    }
    spaceX0OfTheMonth() {
        return " %s pada bulan";
    }
    lastDay() {
        return "hari terakhir";
    }
    commaOnTheLastX0OfTheMonth() {
        return ", pada %s terakhir bulan";
    }
    commaOnlyOnX0() {
        return ", hanya pada %s";
    }
    commaAndOnX0() {
        return ", dan pada %s";
    }
    commaEveryX0Months() {
        return ", setiap bulan %s";
    }
    commaOnlyInX0() {
        return ", hanya pada %s";
    }
    commaOnTheLastDayOfTheMonth() {
        return ", pada hari terakhir bulan";
    }
    commaOnTheLastWeekdayOfTheMonth() {
        return ", pada minggu terakhir bulan";
    }
    commaDaysBeforeTheLastDayOfTheMonth() {
        return ", %s hari sebelum hari terakhir bulan";
    }
    firstWeekday() {
        return "hari pertama minggu bekerja";
    }
    weekdayNearestDayX0() {
        return "hari bekerja yang terdekat dengan %s";
    }
    commaOnTheX0OfTheMonth() {
        return ", pada %s bulan";
    }
    commaEveryX0Days() {
        return ", setiap %s hari";
    }
    commaBetweenDayX0AndX1OfTheMonth() {
        return ", antara hari %s dan %s dalam bulan";
    }
    commaOnDayX0OfTheMonth() {
        return ", pada hari %s dalam bulan";
    }
    commaEveryHour() {
        return ", setiap jam";
    }
    commaEveryX0Years() {
        return ", setiap %s tahun";
    }
    commaStartingX0() {
        return ", bermula %s";
    }
    daysOfTheWeek() {
        return ["Ahad", "Isnin", "Selasa", "Rabu", "Khamis", "Jumaat", "Sabtu"];
    }
    monthsOfTheYear() {
        return [
            "Januari",
            "Februari",
            "Mac",
            "April",
            "Mei",
            "Jun",
            "Julai",
            "Ogos",
            "September",
            "Oktober",
            "November",
            "Disember",
        ];
    }
}
exports.my = my;


/***/ }),

/***/ 846:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ro = void 0;
class ro {
    use24HourTimeFormatByDefault() {
        return true;
    }
    anErrorOccuredWhenGeneratingTheExpressionD() {
        return "Eroare la generarea descrierii. Verificați sintaxa.";
    }
    at() {
        return "La";
    }
    atSpace() {
        return "La ";
    }
    atX0() {
        return "la %s";
    }
    atX0MinutesPastTheHour() {
        return "la și %s minute";
    }
    atX0SecondsPastTheMinute() {
        return "la și %s secunde";
    }
    betweenX0AndX1() {
        return "între %s și %s";
    }
    commaBetweenDayX0AndX1OfTheMonth() {
        return ", între zilele %s și %s ale lunii";
    }
    commaEveryDay() {
        return ", în fiecare zi";
    }
    commaEveryX0Days() {
        return ", la fiecare %s zile";
    }
    commaEveryX0DaysOfTheWeek() {
        return ", la fiecare a %s-a zi a săptămânii";
    }
    commaEveryX0Months() {
        return ", la fiecare %s luni";
    }
    commaEveryX0Years() {
        return ", o dată la %s ani";
    }
    commaOnDayX0OfTheMonth() {
        return ", în ziua %s a lunii";
    }
    commaOnlyInX0() {
        return ", doar în %s";
    }
    commaOnlyOnX0() {
        return ", doar %s";
    }
    commaAndOnX0() {
        return ", și %s";
    }
    commaOnThe() {
        return ", în ";
    }
    commaOnTheLastDayOfTheMonth() {
        return ", în ultima zi a lunii";
    }
    commaOnTheLastWeekdayOfTheMonth() {
        return ", în ultima zi lucrătoare a lunii";
    }
    commaDaysBeforeTheLastDayOfTheMonth() {
        return ", %s zile înainte de ultima zi a lunii";
    }
    commaOnTheLastX0OfTheMonth() {
        return ", în ultima %s a lunii";
    }
    commaOnTheX0OfTheMonth() {
        return ", în %s a lunii";
    }
    commaX0ThroughX1() {
        return ", de %s până %s";
    }
    commaAndX0ThroughX1() {
        return ", și de %s până %s";
    }
    everyHour() {
        return "în fiecare oră";
    }
    everyMinute() {
        return "în fiecare minut";
    }
    everyMinuteBetweenX0AndX1() {
        return "În fiecare minut între %s și %s";
    }
    everySecond() {
        return "în fiecare secundă";
    }
    everyX0Hours() {
        return "la fiecare %s ore";
    }
    everyX0Minutes() {
        return "la fiecare %s minute";
    }
    everyX0Seconds() {
        return "la fiecare %s secunde";
    }
    fifth() {
        return "a cincea";
    }
    first() {
        return "prima";
    }
    firstWeekday() {
        return "prima zi a săptămânii";
    }
    fourth() {
        return "a patra";
    }
    minutesX0ThroughX1PastTheHour() {
        return "între minutele %s și %s";
    }
    second() {
        return "a doua";
    }
    secondsX0ThroughX1PastTheMinute() {
        return "între secunda %s și secunda %s";
    }
    spaceAnd() {
        return " și";
    }
    spaceX0OfTheMonth() {
        return " %s a lunii";
    }
    lastDay() {
        return "ultima zi";
    }
    third() {
        return "a treia";
    }
    weekdayNearestDayX0() {
        return "cea mai apropiată zi a săptămânii de ziua %s";
    }
    commaMonthX0ThroughMonthX1() {
        return ", din %s până în %s";
    }
    commaYearX0ThroughYearX1() {
        return ", din %s până în %s";
    }
    atX0MinutesPastTheHourGt20() {
        return "la și %s de minute";
    }
    atX0SecondsPastTheMinuteGt20() {
        return "la și %s de secunde";
    }
    commaStartingX0() {
        return ", pornire %s";
    }
    daysOfTheWeek() {
        return ["duminică", "luni", "marți", "miercuri", "joi", "vineri", "sâmbătă"];
    }
    monthsOfTheYear() {
        return [
            "ianuarie",
            "februarie",
            "martie",
            "aprilie",
            "mai",
            "iunie",
            "iulie",
            "august",
            "septembrie",
            "octombrie",
            "noiembrie",
            "decembrie",
        ];
    }
}
exports.ro = ro;


/***/ }),

/***/ 849:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.uk = void 0;
class uk {
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
    everyMinute() {
        return "щохвилини";
    }
    everyHour() {
        return "щогодини";
    }
    anErrorOccuredWhenGeneratingTheExpressionD() {
        return "ВІдбулася помилка підчас генерації опису. Перевірта правильність написання cron виразу.";
    }
    atSpace() {
        return "О ";
    }
    everyMinuteBetweenX0AndX1() {
        return "Щохвилини між %s та %s";
    }
    at() {
        return "О";
    }
    spaceAnd() {
        return " та";
    }
    everySecond() {
        return "Щосекунди";
    }
    everyX0Seconds() {
        return "кожні %s секунд";
    }
    secondsX0ThroughX1PastTheMinute() {
        return "з %s по %s секунду";
    }
    atX0SecondsPastTheMinute() {
        return "о %s секунді";
    }
    everyX0Minutes() {
        return "кожні %s хвилин";
    }
    minutesX0ThroughX1PastTheHour() {
        return "з %s по %s хвилину";
    }
    atX0MinutesPastTheHour() {
        return "о %s хвилині";
    }
    everyX0Hours() {
        return "кожні %s годин";
    }
    betweenX0AndX1() {
        return "між %s та %s";
    }
    atX0() {
        return "о %s";
    }
    commaEveryDay() {
        return ", щоденно";
    }
    commaEveryX0DaysOfTheWeek() {
        return ", кожен %s день тижня";
    }
    commaX0ThroughX1() {
        return ", %s по %s";
    }
    commaAndX0ThroughX1() {
        return ", та %s по %s";
    }
    first() {
        return "перший";
    }
    second() {
        return "другий";
    }
    third() {
        return "третій";
    }
    fourth() {
        return "четвертий";
    }
    fifth() {
        return "п'ятий";
    }
    commaOnThe() {
        return ", в ";
    }
    spaceX0OfTheMonth() {
        return " %s місяця";
    }
    lastDay() {
        return "останній день";
    }
    commaOnTheLastX0OfTheMonth() {
        return ", в останній %s місяця";
    }
    commaOnlyOnX0() {
        return ", тільки в %s";
    }
    commaAndOnX0() {
        return ", і в %s";
    }
    commaEveryX0Months() {
        return ", кожен %s місяць";
    }
    commaOnlyInX0() {
        return ", тільки в %s";
    }
    commaOnTheLastDayOfTheMonth() {
        return ", в останній день місяця";
    }
    commaOnTheLastWeekdayOfTheMonth() {
        return ", в останній будень місяця";
    }
    commaDaysBeforeTheLastDayOfTheMonth() {
        return ", %s днів до останнього дня місяця";
    }
    firstWeekday() {
        return "перший будень";
    }
    weekdayNearestDayX0() {
        return "будень найближчий до %s дня";
    }
    commaOnTheX0OfTheMonth() {
        return ", в %s місяця";
    }
    commaEveryX0Days() {
        return ", кожен %s день";
    }
    commaBetweenDayX0AndX1OfTheMonth() {
        return ", між %s та %s днями місяця";
    }
    commaOnDayX0OfTheMonth() {
        return ", на %s день місяця";
    }
    commaEveryX0Years() {
        return ", кожні %s роки";
    }
    commaStartingX0() {
        return ", початок %s";
    }
    daysOfTheWeek() {
        return ["неділя", "понеділок", "вівторок", "середа", "четвер", "п'ятниця", "субота"];
    }
    monthsOfTheYear() {
        return [
            "січень",
            "лютий",
            "березень",
            "квітень",
            "травень",
            "червень",
            "липень",
            "серпень",
            "вересень",
            "жовтень",
            "листопад",
            "грудень",
        ];
    }
}
exports.uk = uk;


/***/ }),

/***/ 892:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.el = void 0;
class el {
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
        return "Παρουσιάστηκε σφάλμα κατά τη δημιουργία της περιγραφής. Ελέγξτε τη σύνταξη της έκφρασης cron.";
    }
    everyMinute() {
        return "κάθε λεπτό";
    }
    everyHour() {
        return "κάθε ώρα";
    }
    atSpace() {
        return "Στις ";
    }
    everyMinuteBetweenX0AndX1() {
        return "Κάθε λεπτό μεταξύ %s και %s";
    }
    at() {
        return "Στις";
    }
    spaceAnd() {
        return " και";
    }
    everySecond() {
        return "κάθε δευτερόλεπτο";
    }
    everyX0Seconds() {
        return "κάθε %s δευτερόλεπτα";
    }
    secondsX0ThroughX1PastTheMinute() {
        return "δευτερόλεπτα %s έως %s μετά το λεπτό";
    }
    atX0SecondsPastTheMinute() {
        return "στα %s δευτερόλεπτα μετά το λεπτό";
    }
    everyX0Minutes() {
        return "κάθε %s λεπτά";
    }
    minutesX0ThroughX1PastTheHour() {
        return "λεπτά %s έως %s μετά την ώρα";
    }
    atX0MinutesPastTheHour() {
        return "στα %s λεπτά μετά την ώρα";
    }
    everyX0Hours() {
        return "κάθε %s ώρες";
    }
    betweenX0AndX1() {
        return "μεταξύ %s και %s";
    }
    atX0() {
        return "στις %s";
    }
    commaEveryDay() {
        return ", κάθε μέρα";
    }
    commaEveryX0DaysOfTheWeek() {
        return ", κάθε %s ημέρες της εβδομάδας";
    }
    commaX0ThroughX1() {
        return ", %s έως %s";
    }
    commaAndX0ThroughX1() {
        return ", και %s έως %s";
    }
    first() {
        return "πρώτη";
    }
    second() {
        return "δεύτερη";
    }
    third() {
        return "τρίτη";
    }
    fourth() {
        return "τέταρτη";
    }
    fifth() {
        return "πέμπτη";
    }
    commaOnThe() {
        return ", στην ";
    }
    spaceX0OfTheMonth() {
        return " %s του μήνα";
    }
    lastDay() {
        return "την τελευταία ημέρα";
    }
    commaOnTheLastX0OfTheMonth() {
        return ", την τελευταία %s του μήνα";
    }
    commaOnlyOnX0() {
        return ", μόνο την %s";
    }
    commaAndOnX0() {
        return ", και την %s";
    }
    commaEveryX0Months() {
        return ", κάθε %s μήνες";
    }
    commaOnlyInX0() {
        return ", μόνο το %s";
    }
    commaOnTheLastDayOfTheMonth() {
        return ", την τελευταία ημέρα του μήνα";
    }
    commaOnTheLastWeekdayOfTheMonth() {
        return ", την τελευταία εργάσιμη ημέρα του μήνα";
    }
    commaDaysBeforeTheLastDayOfTheMonth() {
        return ", %s ημέρες πριν την τελευταία ημέρα του μήνα";
    }
    firstWeekday() {
        return "πρώτη εργάσιμη ημέρα";
    }
    weekdayNearestDayX0() {
        return "εργάσιμη ημέρα πλησιέστερη στην ημέρα %s";
    }
    commaOnTheX0OfTheMonth() {
        return ", στην %s του μήνα";
    }
    commaEveryX0Days() {
        return ", κάθε %s ημέρες";
    }
    commaBetweenDayX0AndX1OfTheMonth() {
        return ", μεταξύ ημέρας %s και %s του μήνα";
    }
    commaOnDayX0OfTheMonth() {
        return ", την ημέρα %s του μήνα";
    }
    commaEveryHour() {
        return ", κάθε ώρα";
    }
    commaEveryX0Years() {
        return ", κάθε %s χρόνια";
    }
    commaStartingX0() {
        return ", ξεκινώντας %s";
    }
    daysOfTheWeek() {
        return ["Κυριακή", "Δευτέρα", "Τρίτη", "Τετάρτη", "Πέμπτη", "Παρασκευή", "Σάββατο"];
    }
    monthsOfTheYear() {
        return [
            "Ιανουάριος",
            "Φεβρουάριος",
            "Μάρτιος",
            "Απρίλιος",
            "Μάιος",
            "Ιούνιος",
            "Ιούλιος",
            "Αύγουστος",
            "Σεπτέμβριος",
            "Οκτώβριος",
            "Νοέμβριος",
            "Δεκέμβριος"
        ];
    }
}
exports.el = el;


/***/ }),

/***/ 907:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.sk = void 0;
class sk {
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
        return "Pri vytváraní popisu došlo k chybe. Skontrolujte prosím správnosť syntaxe cronu.";
    }
    everyMinute() {
        return "každú minútu";
    }
    everyHour() {
        return "každú hodinu";
    }
    atSpace() {
        return "V ";
    }
    everyMinuteBetweenX0AndX1() {
        return "Každú minútu medzi %s a %s";
    }
    at() {
        return "V";
    }
    spaceAnd() {
        return " a";
    }
    everySecond() {
        return "každú sekundu";
    }
    everyX0Seconds() {
        return "každých %s sekúnd";
    }
    secondsX0ThroughX1PastTheMinute() {
        return "sekundy od %s do %s";
    }
    atX0SecondsPastTheMinute() {
        return "v %s sekúnd";
    }
    everyX0Minutes() {
        return "každých %s minút";
    }
    minutesX0ThroughX1PastTheHour() {
        return "minúty od %s do %s";
    }
    atX0MinutesPastTheHour() {
        return "v %s minút";
    }
    everyX0Hours() {
        return "každých %s hodín";
    }
    betweenX0AndX1() {
        return "medzi %s a %s";
    }
    atX0() {
        return "v %s";
    }
    commaEveryDay() {
        return ", každý deň";
    }
    commaEveryX0DaysOfTheWeek() {
        return ", každých %s dní v týždni";
    }
    commaX0ThroughX1() {
        return ", od %s do %s";
    }
    commaAndX0ThroughX1() {
        return ", a od %s do %s";
    }
    first() {
        return "prvý";
    }
    second() {
        return "druhý";
    }
    third() {
        return "tretí";
    }
    fourth() {
        return "štvrtý";
    }
    fifth() {
        return "piaty";
    }
    commaOnThe() {
        return ", ";
    }
    spaceX0OfTheMonth() {
        return " %s v mesiaci";
    }
    lastDay() {
        return "posledný deň";
    }
    commaOnTheLastX0OfTheMonth() {
        return ", posledný %s v mesiaci";
    }
    commaOnlyOnX0() {
        return ", iba v %s";
    }
    commaAndOnX0() {
        return ", a v %s";
    }
    commaEveryX0Months() {
        return ", každých %s mesiacov";
    }
    commaOnlyInX0() {
        return ", iba v %s";
    }
    commaOnTheLastDayOfTheMonth() {
        return ", posledný deň v mesiaci";
    }
    commaOnTheLastWeekdayOfTheMonth() {
        return ", posledný pracovný deň v mesiaci";
    }
    commaDaysBeforeTheLastDayOfTheMonth() {
        return ", %s dní pred posledným dňom v mesiaci";
    }
    firstWeekday() {
        return "prvý pracovný deň";
    }
    weekdayNearestDayX0() {
        return "pracovný deň najbližšie %s. dňu";
    }
    commaOnTheX0OfTheMonth() {
        return ", v %s v mesiaci";
    }
    commaEveryX0Days() {
        return ", každých %s dní";
    }
    commaBetweenDayX0AndX1OfTheMonth() {
        return ", medzi dňami %s a %s v mesiaci";
    }
    commaOnDayX0OfTheMonth() {
        return ", %s. deň v mesiaci";
    }
    commaEveryX0Years() {
        return ", každých %s rokov";
    }
    commaStartingX0() {
        return ", začínajúcich %s";
    }
    daysOfTheWeek() {
        return ["Nedeľa", "Pondelok", "Utorok", "Streda", "Štvrtok", "Piatok", "Sobota"];
    }
    monthsOfTheYear() {
        return [
            "Január",
            "Február",
            "Marec",
            "Apríl",
            "Máj",
            "Jún",
            "Júl",
            "August",
            "September",
            "Október",
            "November",
            "December",
        ];
    }
}
exports.sk = sk;


/***/ }),

/***/ 939:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.zh_CN = void 0;
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
exports.zh_CN = zh_CN;


/***/ }),

/***/ 971:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.cs = void 0;
class cs {
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
        return "Při vytváření popisu došlo k chybě. Zkontrolujte prosím správnost syntaxe cronu.";
    }
    everyMinute() {
        return "každou minutu";
    }
    everyHour() {
        return "každou hodinu";
    }
    atSpace() {
        return "V ";
    }
    everyMinuteBetweenX0AndX1() {
        return "Každou minutu mezi %s a %s";
    }
    at() {
        return "V";
    }
    spaceAnd() {
        return " a";
    }
    everySecond() {
        return "každou sekundu";
    }
    everyX0Seconds() {
        return "každých %s sekund";
    }
    secondsX0ThroughX1PastTheMinute() {
        return "sekundy od %s do %s";
    }
    atX0SecondsPastTheMinute() {
        return "v %s sekund";
    }
    everyX0Minutes() {
        return "každých %s minut";
    }
    minutesX0ThroughX1PastTheHour() {
        return "minuty od %s do %s";
    }
    atX0MinutesPastTheHour() {
        return "v %s minut";
    }
    everyX0Hours() {
        return "každých %s hodin";
    }
    betweenX0AndX1() {
        return "mezi %s a %s";
    }
    atX0() {
        return "v %s";
    }
    commaEveryDay() {
        return ", každý den";
    }
    commaEveryX0DaysOfTheWeek() {
        return ", každých %s dní v týdnu";
    }
    commaX0ThroughX1() {
        return ", od %s do %s";
    }
    commaAndX0ThroughX1() {
        return ", a od %s do %s";
    }
    first() {
        return "první";
    }
    second() {
        return "druhý";
    }
    third() {
        return "třetí";
    }
    fourth() {
        return "čtvrtý";
    }
    fifth() {
        return "pátý";
    }
    commaOnThe() {
        return ", ";
    }
    spaceX0OfTheMonth() {
        return " %s v měsíci";
    }
    lastDay() {
        return "poslední den";
    }
    commaOnTheLastX0OfTheMonth() {
        return ", poslední %s v měsíci";
    }
    commaOnlyOnX0() {
        return ", pouze v %s";
    }
    commaAndOnX0() {
        return ", a v %s";
    }
    commaEveryX0Months() {
        return ", každých %s měsíců";
    }
    commaOnlyInX0() {
        return ", pouze v %s";
    }
    commaOnTheLastDayOfTheMonth() {
        return ", poslední den v měsíci";
    }
    commaOnTheLastWeekdayOfTheMonth() {
        return ", poslední pracovní den v měsíci";
    }
    commaDaysBeforeTheLastDayOfTheMonth() {
        return ", %s dní před posledním dnem v měsíci";
    }
    firstWeekday() {
        return "první pracovní den";
    }
    weekdayNearestDayX0() {
        return "pracovní den nejblíže %s. dni";
    }
    commaOnTheX0OfTheMonth() {
        return ", v %s v měsíci";
    }
    commaEveryX0Days() {
        return ", každých %s dnů";
    }
    commaBetweenDayX0AndX1OfTheMonth() {
        return ", mezi dny %s a %s v měsíci";
    }
    commaOnDayX0OfTheMonth() {
        return ", %s. den v měsíci";
    }
    commaEveryX0Years() {
        return ", každých %s roků";
    }
    commaStartingX0() {
        return ", začínající %s";
    }
    daysOfTheWeek() {
        return ["Neděle", "Pondělí", "Úterý", "Středa", "Čtvrtek", "Pátek", "Sobota"];
    }
    monthsOfTheYear() {
        return [
            "Leden",
            "Únor",
            "Březen",
            "Duben",
            "Květen",
            "Červen",
            "Červenec",
            "Srpen",
            "Září",
            "Říjen",
            "Listopad",
            "Prosinec",
        ];
    }
}
exports.cs = cs;


/***/ }),

/***/ 972:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.be = void 0;
class be {
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
    everyMinute() {
        return "кожную хвіліну";
    }
    everyHour() {
        return "кожную гадзіну";
    }
    anErrorOccuredWhenGeneratingTheExpressionD() {
        return "Адбылася памылка падчас генерацыі апісання выразы. Праверце сінтаксіс крон-выразы.";
    }
    atSpace() {
        return "У ";
    }
    everyMinuteBetweenX0AndX1() {
        return "Кожную хвіліну з %s да %s";
    }
    at() {
        return "У";
    }
    spaceAnd() {
        return " і";
    }
    everySecond() {
        return "кожную секунду";
    }
    everyX0Seconds() {
        return "кожныя %s секунд";
    }
    secondsX0ThroughX1PastTheMinute() {
        return "секунды з %s па %s";
    }
    atX0SecondsPastTheMinute() {
        return "у %s секунд";
    }
    everyX0Minutes() {
        return "кожныя %s хвілін";
    }
    minutesX0ThroughX1PastTheHour() {
        return "хвіліны з %s па %s";
    }
    atX0MinutesPastTheHour() {
        return "у %s хвілін";
    }
    everyX0Hours() {
        return "кожныя %s гадзін";
    }
    betweenX0AndX1() {
        return "з %s па %s";
    }
    atX0() {
        return "у %s";
    }
    commaEveryDay() {
        return ", кожны дзень";
    }
    commaEveryX0DaysOfTheWeek() {
        return ", кожныя %s дзён тыдня";
    }
    commaX0ThroughX1() {
        return ", %s па %s";
    }
    commaAndX0ThroughX1() {
        return ", і %s па %s";
    }
    first() {
        return "першы";
    }
    second() {
        return "другі";
    }
    third() {
        return "трэці";
    }
    fourth() {
        return "чацвёрты";
    }
    fifth() {
        return "пяты";
    }
    commaOnThe() {
        return ", у ";
    }
    spaceX0OfTheMonth() {
        return " %s месяца";
    }
    lastDay() {
        return "апошні дзень";
    }
    commaOnTheLastX0OfTheMonth() {
        return ", у апошні %s месяца";
    }
    commaOnlyOnX0() {
        return ", толькі ў %s";
    }
    commaAndOnX0() {
        return ", і ў %s";
    }
    commaEveryX0Months() {
        return ", кожныя %s месяцаў";
    }
    commaOnlyInX0() {
        return ", толькі ў %s";
    }
    commaOnTheLastDayOfTheMonth() {
        return ", у апошні дзень месяца";
    }
    commaOnTheLastWeekdayOfTheMonth() {
        return ", у апошні будні дзень месяца";
    }
    commaDaysBeforeTheLastDayOfTheMonth() {
        return ", %s дзён да апошняга дня месяца";
    }
    firstWeekday() {
        return "першы будны дзень";
    }
    weekdayNearestDayX0() {
        return "найбліжэйшы будны дзень да %s";
    }
    commaOnTheX0OfTheMonth() {
        return ", у %s месяцы";
    }
    commaEveryX0Days() {
        return ", кожныя %s дзён";
    }
    commaBetweenDayX0AndX1OfTheMonth() {
        return ", з %s па %s лік месяца";
    }
    commaOnDayX0OfTheMonth() {
        return ", у %s лік месяца";
    }
    commaEveryX0Years() {
        return ", кожныя %s гадоў";
    }
    commaStartingX0() {
        return ", пачатак %s";
    }
    daysOfTheWeek() {
        return ["нядзеля", "панядзелак", "аўторак", "серада", "чацвер", "пятніца", "субота"];
    }
    monthsOfTheYear() {
        return [
            "студзень",
            "люты",
            "сакавік",
            "красавік",
            "травень",
            "чэрвень",
            "ліпень",
            "жнівень",
            "верасень",
            "кастрычнік",
            "лістапад",
            "снежань",
        ];
    }
}
exports.be = be;


/***/ }),

/***/ 976:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.id = void 0;
class id {
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
        return "Terjadi kesalahan saat membuat deskripsi ekspresi. Periksa sintaks ekspresi cron.";
    }
    everyMinute() {
        return "setiap menit";
    }
    everyHour() {
        return "setiap jam";
    }
    atSpace() {
        return "Pada ";
    }
    everyMinuteBetweenX0AndX1() {
        return "Setiap menit diantara %s dan %s";
    }
    at() {
        return "Pada";
    }
    spaceAnd() {
        return " dan";
    }
    everySecond() {
        return "setiap detik";
    }
    everyX0Seconds() {
        return "setiap %s detik";
    }
    secondsX0ThroughX1PastTheMinute() {
        return "detik ke %s sampai %s melewati menit";
    }
    atX0SecondsPastTheMinute() {
        return "pada %s detik lewat satu menit";
    }
    everyX0Minutes() {
        return "setiap %s menit";
    }
    minutesX0ThroughX1PastTheHour() {
        return "menit ke %s sampai %s melewati jam";
    }
    atX0MinutesPastTheHour() {
        return "pada %s menit melewati jam";
    }
    everyX0Hours() {
        return "setiap %s jam";
    }
    betweenX0AndX1() {
        return "diantara %s dan %s";
    }
    atX0() {
        return "pada %s";
    }
    commaEveryDay() {
        return ", setiap hari";
    }
    commaEveryX0DaysOfTheWeek() {
        return ", setiap hari %s  dalam seminggu";
    }
    commaX0ThroughX1() {
        return ", %s sampai %s";
    }
    commaAndX0ThroughX1() {
        return ", dan %s sampai %s";
    }
    first() {
        return "pertama";
    }
    second() {
        return "kedua";
    }
    third() {
        return "ketiga";
    }
    fourth() {
        return "keempat";
    }
    fifth() {
        return "kelima";
    }
    commaOnThe() {
        return ", di ";
    }
    spaceX0OfTheMonth() {
        return " %s pada bulan";
    }
    lastDay() {
        return "hari terakhir";
    }
    commaOnTheLastX0OfTheMonth() {
        return ", pada %s terakhir bulan ini";
    }
    commaOnlyOnX0() {
        return ", hanya pada %s";
    }
    commaAndOnX0() {
        return ", dan pada %s";
    }
    commaEveryX0Months() {
        return ", setiap bulan %s ";
    }
    commaOnlyInX0() {
        return ", hanya pada %s";
    }
    commaOnTheLastDayOfTheMonth() {
        return ", pada hari terakhir bulan ini";
    }
    commaOnTheLastWeekdayOfTheMonth() {
        return ", pada hari kerja terakhir setiap bulan";
    }
    commaDaysBeforeTheLastDayOfTheMonth() {
        return ", %s hari sebelum hari terakhir setiap bulan";
    }
    firstWeekday() {
        return "hari kerja pertama";
    }
    weekdayNearestDayX0() {
        return "hari kerja terdekat %s";
    }
    commaOnTheX0OfTheMonth() {
        return ", pada %s bulan ini";
    }
    commaEveryX0Days() {
        return ", setiap %s hari";
    }
    commaBetweenDayX0AndX1OfTheMonth() {
        return ", antara hari %s dan %s dalam sebulan";
    }
    commaOnDayX0OfTheMonth() {
        return ", pada hari %s dalam sebulan";
    }
    commaEveryHour() {
        return ", setiap jam";
    }
    commaEveryX0Years() {
        return ", setiap %s tahun";
    }
    commaStartingX0() {
        return ", mulai pada %s";
    }
    daysOfTheWeek() {
        return ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
    }
    monthsOfTheYear() {
        return [
            "Januari",
            "Februari",
            "Maret",
            "April",
            "Mei",
            "Juni",
            "Juli",
            "Agustus",
            "September",
            "Oktober",
            "November",
            "Desember",
        ];
    }
}
exports.id = id;


/***/ }),

/***/ 988:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.fi = void 0;
class fi {
    use24HourTimeFormatByDefault() {
        return true;
    }
    anErrorOccuredWhenGeneratingTheExpressionD() {
        return "Virhe kuvauksen generoinnissa. Tarkista cron-syntaksi.";
    }
    at() {
        return "Klo";
    }
    atSpace() {
        return "Klo ";
    }
    atX0() {
        return "klo %s";
    }
    atX0MinutesPastTheHour() {
        return "%s minuuttia yli";
    }
    atX0MinutesPastTheHourGt20() {
        return "%s minuuttia yli";
    }
    atX0SecondsPastTheMinute() {
        return "%s sekunnnin jälkeen";
    }
    betweenX0AndX1() {
        return "%s - %s välillä";
    }
    commaBetweenDayX0AndX1OfTheMonth() {
        return ", kuukauden päivien %s ja %s välillä";
    }
    commaEveryDay() {
        return ", joka päivä";
    }
    commaEveryHour() {
        return ", joka tunti";
    }
    commaEveryMinute() {
        return ", joka minuutti";
    }
    commaEveryX0Days() {
        return ", joka %s. päivä";
    }
    commaEveryX0DaysOfTheWeek() {
        return ", joka %s. viikonpäivä";
    }
    commaEveryX0Months() {
        return ", joka %s. kuukausi";
    }
    commaEveryX0Years() {
        return ", joka %s. vuosi";
    }
    commaOnDayX0OfTheMonth() {
        return ", kuukauden %s päivä";
    }
    commaOnlyInX0() {
        return ", vain %s";
    }
    commaOnlyOnX0() {
        return ", vain %s";
    }
    commaOnThe() {
        return ",";
    }
    commaOnTheLastDayOfTheMonth() {
        return ", kuukauden viimeisenä päivänä";
    }
    commaOnTheLastWeekdayOfTheMonth() {
        return ", kuukauden viimeisenä viikonpäivänä";
    }
    commaOnTheLastX0OfTheMonth() {
        return ", kuukauden viimeinen %s";
    }
    commaOnTheX0OfTheMonth() {
        return ", kuukauden %s";
    }
    commaX0ThroughX1() {
        return ", %s - %s";
    }
    commaAndX0ThroughX1() {
        return ", %s - %s";
    }
    commaDaysBeforeTheLastDayOfTheMonth() {
        return ", %s päivää ennen kuukauden viimeistä päivää";
    }
    commaStartingX0() {
        return ", alkaen %s";
    }
    everyHour() {
        return "joka tunti";
    }
    everyMinute() {
        return "joka minuutti";
    }
    everyMinuteBetweenX0AndX1() {
        return "joka minuutti %s - %s välillä";
    }
    everySecond() {
        return "joka sekunti";
    }
    everyX0Hours() {
        return "joka %s. tunti";
    }
    everyX0Minutes() {
        return "joka %s. minuutti";
    }
    everyX0Seconds() {
        return "joka %s. sekunti";
    }
    fifth() {
        return "viides";
    }
    first() {
        return "ensimmäinen";
    }
    firstWeekday() {
        return "ensimmäinen viikonpäivä";
    }
    fourth() {
        return "neljäs";
    }
    minutesX0ThroughX1PastTheHour() {
        return "joka tunti minuuttien %s - %s välillä";
    }
    second() {
        return "toinen";
    }
    secondsX0ThroughX1PastTheMinute() {
        return "joka minuutti sekunttien %s - %s välillä";
    }
    spaceAnd() {
        return " ja";
    }
    spaceAndSpace() {
        return " ja ";
    }
    spaceX0OfTheMonth() {
        return " %s kuukaudessa";
    }
    third() {
        return "kolmas";
    }
    weekdayNearestDayX0() {
        return "viikonpäivä lähintä %s päivää";
    }
    atX0SecondsPastTheMinuteGt20() {
        return null;
    }
    commaMonthX0ThroughMonthX1() {
        return null;
    }
    commaYearX0ThroughYearX1() {
        return null;
    }
    lastDay() {
        return "viimeinen päivä";
    }
    commaAndOnX0() {
        return ", ja edelleen %s";
    }
    daysOfTheWeek() {
        return ["sunnuntai", "maanantai", "tiistai", "keskiviikko", "torstai", "perjantai", "lauantai"];
    }
    monthsOfTheYear() {
        return [
            "tammikuu",
            "helmikuu",
            "maaliskuu",
            "huhtikuu",
            "toukokuu",
            "kesäkuu",
            "heinäkuu",
            "elokuu",
            "syyskuu",
            "lokakuu",
            "marraskuu",
            "joulukuu",
        ];
    }
}
exports.fi = fi;


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
const allLocalesLoader_1 = __webpack_require__(612);
expressionDescriptor_1.ExpressionDescriptor.initialize(new allLocalesLoader_1.allLocalesLoader());
exports["default"] = expressionDescriptor_1.ExpressionDescriptor;
let cronstrue_i18n_toString = expressionDescriptor_1.ExpressionDescriptor.toString;
exports.toString = cronstrue_i18n_toString;

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});