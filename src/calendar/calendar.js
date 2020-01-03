import * as dateLocale from  'date-fns/locale';
// import {
//   isThisMonth,
// } from 'date-fns';
import {
  // addYears,
  formatWithOptions,
  eachDayOfInterval,
  startOfMonth,
  endOfMonth,
  addMonths,
  isSameMonth,
  // getWeekOfMonth,
  // getWeeksInMonth,
  startOfWeek,
  endOfWeek
} from 'date-fns/fp';

function createCalendarTitleFormat(locale) {
  if (locale.code === 'ko') {
    return formatWithOptions({ locale }, `yyyy년 MMM`);
  }
  return formatWithOptions({ locale }, 'yyyy MMM');
};

function createCalendarDay(currentDate, locale) {
  const dateToDay = formatWithOptions({ locale }, 'd');
  return eachDayOfInterval({
    start: startOfWeek(startOfMonth(currentDate)),
    end: endOfWeek(endOfMonth(currentDate))
  }).map(date => {
    return {
      id: date.toString(),
      date: date,
      day: dateToDay(date),
      isThisMonth: isSameMonth(currentDate, date)
    };
  });
};

function goToPrev() {
  return addMonths(-1);
};

function goToNext() {
  return addMonths(1);
};

class Calendar {
  constructor(options = {}) {
    // TODO check validate options
    const locale = options.locale ? dateLocale[options.locale] : dateLocale.ko;
    const date = options.date ? options.date : new Date(); // check date object

    // console.log(getWeeksInMonth(date))
    // console.log(startOfWeek(startOfMonth(date)))
    // console.log(endOfWeek(endOfMonth(date)))


    this.locale = locale;
    this.date = date;
    this.dateToTitle = createCalendarTitleFormat(locale)(date);
    this.dayList = createCalendarDay(date, locale);

    this.prev = this.prev.bind(this);
    this.forward = this.forward.bind(this);
    this.getDateTitle = this.getDateTitle.bind(this);
  }

  getDateTitle() {
    return createCalendarTitleFormat(this.locale)(this.date);
  }

  getDayList() {
    return createCalendarDay(this.date, this.locale);
  }

  prev() {
    this.date = goToPrev()(this.date);
    return this.date;
  }

  forward() {
    this.date = goToNext()(this.date);
    return this.date;
  }
};

export default Calendar;