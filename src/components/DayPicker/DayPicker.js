import { useEffect, useState, useRef } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import styles from './DayPicker.module.css';
import useOnClickOutside from '../../hooks/useOnClickOutside';

export default function CalendarPicker({ startDate, closeHandler, align }) {
  const ref = useRef();
  const [selectedDay, setSelectedDay] = useState();
  const [close, setClose] = useState(false);

  useOnClickOutside(ref, () => closeHandler(selectedDay));
  useEffect(() => {
    setSelectedDay(startDate);
    if (close) {
      closeHandler(selectedDay);
    }
    /*eslint-disable-next-line*/
  }, [close, startDate]);

  const handleDayClick = day => {
    setSelectedDay(day.toLocaleString().split(',')[0]);

    setClose(true);
  };

  const modifiers = {
    today: new Date(),
    selectedDay: selectedDay,
  };
  const modifiersStyles = {
    today: {
      color: '#ff751d',
      backgroundColor: 'white',
    },
    selectedDay: {
      color: 'white',
      backgroundColor: '#ff751d',
    },
  };

  return (
    <div className={`${styles.pickerWrapper} ${align}`} ref={ref}>
      <DayPicker
        selectedDays={[selectedDay, modifiers.today]}
        onDayClick={handleDayClick}
        months={MONTHS}
        weekdaysLong={WEEKDAYS_LONG}
        weekdaysShort={WEEKDAYS_SHORT}
        firstDayOfWeek={1}
        modifiers={modifiers}
        modifiersStyles={modifiersStyles}
        showOutsideDays
      />
    </div>
  );
}

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const WEEKDAYS_LONG = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const WEEKDAYS_SHORT = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
