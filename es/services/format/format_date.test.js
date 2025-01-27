import { formatDate } from './format_date';
import moment from 'moment';
describe('formatDate', function () {
  // 1st January 1999 02:03:04.005
  var value = new Date(1999, 0, 1, 2, 3, 4, 5);
  test('no config - date value', function () {
    expect(formatDate(value)).toBe('1 Jan 1999 02:03');
  });
  test('no config - number value', function () {
    expect(formatDate(value.getTime())).toBe('1 Jan 1999 02:03');
  });
  test('no config - string value', function () {
    expect(formatDate(value.toISOString())).toBe('1 Jan 1999 02:03');
  });
  test('no config - no value', function () {
    expect(formatDate()).toBe('');
  });
  test('with config - no value', function () {
    expect(formatDate(undefined, {
      nil: '-'
    })).toBe('-');
  });
  test('with config - "date" format', function () {
    expect(formatDate(value, 'date')).toBe('1 Jan 1999');
  });
  test('with config - "longDate" format', function () {
    expect(formatDate(value, 'longDate')).toBe('01 January 1999');
  });
  test('with config - "shortDate" format', function () {
    expect(formatDate(value, 'shortDate')).toBe('1 Jan 99');
  });
  test('with config - "dateTime" format', function () {
    expect(formatDate(value, 'dateTime')).toBe('1 Jan 1999 02:03');
  });
  test('with config - "longDateTime" format', function () {
    expect(formatDate(value, 'longDateTime')).toBe('01 January 1999 02:03:04');
  });
  test('with config - "shortDateTime" format', function () {
    expect(formatDate(value, 'shortDateTime')).toBe('1 Jan 99 02:03');
  });
  test('with config - "iso8601" format', function () {
    expect(formatDate(value, 'iso8601')).toBe("1999-01-01T02:03:04.005".concat(formatTimezoneOffset(value.getTimezoneOffset())));
  });
  test('with config - "calendarDate" format', function () {
    var options = {
      refTime: value // 1st January 1999 02:03:04.005 (Friday)

    };
    var oneMonthFromNow = moment(options.refTime).add(1, 'month').toDate();
    expect(formatDate(oneMonthFromNow, {
      format: 'calendarDate',
      options: options
    })).toBe('1st Feb 1999');
    var twoDaysFromNow = moment(options.refTime).add(2, 'day').toDate();
    expect(formatDate(twoDaysFromNow, {
      format: 'calendarDate',
      options: options
    })).toBe('Sunday');
    var oneDayFromNow = moment(options.refTime).add(1, 'day').toDate();
    expect(formatDate(oneDayFromNow, {
      format: 'calendarDate',
      options: options
    })).toBe('Tomorrow');
    var anMinuteAgo = moment(options.refTime).subtract(1, 'minute').toDate();
    expect(formatDate(anMinuteAgo, {
      format: 'calendarDate',
      options: options
    })).toBe('Today');
    var oneDayAgo = moment(options.refTime).subtract(1, 'day').toDate();
    expect(formatDate(oneDayAgo, {
      format: 'calendarDate',
      options: options
    })).toBe('Yesterday');
    var twoDaysWeekAgo = moment(options.refTime).subtract(2, 'day').toDate();
    expect(formatDate(twoDaysWeekAgo, {
      format: 'calendarDate',
      options: options
    })).toBe('Last Wednesday');
    var oneMonthAgo = moment(options.refTime).subtract(1, 'month').toDate();
    expect(formatDate(oneMonthAgo, {
      format: 'calendarDate',
      options: options
    })).toBe('1st Dec 1998');
  });
  test('with config - "calendarDateTime" format', function () {
    var options = {
      refTime: value // 1st January 1999 02:03:04.005

    };
    var oneMonthFromNow = moment(options.refTime).add(1, 'month').toDate();
    expect(formatDate(oneMonthFromNow, {
      format: 'calendarDateTime',
      options: options
    })).toBe('1st Feb 1999 at 2:03AM');
    var twoDaysFromNow = moment(options.refTime).add(2, 'day').toDate();
    expect(formatDate(twoDaysFromNow, {
      format: 'calendarDateTime',
      options: options
    })).toBe('Sunday at 2:03AM');
    var oneDayFromNow = moment(options.refTime).add(1, 'day').toDate();
    expect(formatDate(oneDayFromNow, {
      format: 'calendarDateTime',
      options: options
    })).toBe('Tomorrow at 2:03AM');
    var anMinuteAgo = moment(options.refTime).subtract(1, 'minute').toDate();
    expect(formatDate(anMinuteAgo, {
      format: 'calendarDateTime',
      options: options
    })).toBe('Today at 2:02AM');
    var oneDayAgo = moment(options.refTime).subtract(1, 'day').toDate();
    expect(formatDate(oneDayAgo, {
      format: 'calendarDateTime',
      options: options
    })).toBe('Yesterday at 2:03AM');
    var twoDaysWeekAgo = moment(options.refTime).subtract(2, 'day').toDate();
    expect(formatDate(twoDaysWeekAgo, {
      format: 'calendarDateTime',
      options: options
    })).toBe('Last Wednesday at 2:03AM');
    var oneMonthAgo = moment(options.refTime).subtract(1, 'month').toDate();
    expect(formatDate(oneMonthAgo, {
      format: 'calendarDateTime',
      options: options
    })).toBe('1st Dec 1998 at 2:03AM');
  });
  test('with config - custom format', function () {
    expect(formatDate(value, 'YYYY-MM-DD')).toBe('1999-01-01');
  });
});

function formatTimezoneOffset(offset) {
  if (offset === 0) {
    return '+00:00';
  }

  var sign = offset > 0 ? '-' : '+';
  offset = Math.abs(offset);
  var hrs = Math.floor(offset / 60);
  var mins = offset - hrs * 60;
  return "".concat(sign).concat(hrs < 9 ? '0' : '').concat(hrs, ":").concat(mins < 9 ? '0' : '').concat(mins);
}