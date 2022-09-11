import { FcCalendar } from 'react-icons/fc';
import CalendarPicker from '../DayPicker/DayPicker';
import s from './DateForm.module.css';

const DateForm = ({
  date,
  handleCalendarClick,
  closePicker,
  picker,
  align,
}) => {
  return (
    <div className={s.dateForm} onClick={handleCalendarClick}>
      <div className={s.calendarOverley}>
        <FcCalendar />
        {picker && (
          <CalendarPicker
            closeHandler={closePicker}
            startDate={date}
            align={align}
          />
        )}
      </div>
      <p>{date}</p>
    </div>
  );
};

export default DateForm;
