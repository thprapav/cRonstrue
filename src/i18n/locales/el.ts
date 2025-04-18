// Greek

import { Locale } from "../locale";
export class el implements Locale {
  atX0SecondsPastTheMinuteGt20(): string|null {
    return null;
  }
  atX0MinutesPastTheHourGt20(): string|null {
    return null;
  }
  commaMonthX0ThroughMonthX1(): string|null {
    return null;
  }
  commaYearX0ThroughYearX1(): string|null {
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