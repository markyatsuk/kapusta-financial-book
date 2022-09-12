import { FcCalendar } from 'react-icons/fc';
import CalendarPicker from '../DayPicker/DayPicker';
import s from './DateForm.module.css';

const DateForm = ({ date, handleCalendarClick, closePicker, picker }) => {
  return (
    <div className={s.dateForm} onClick={handleCalendarClick}>
      <FcCalendar />
      {picker && <CalendarPicker closeHandler={closePicker} startDate={date} />}

      <p>{date}</p>
    </div>
  );
};

export default DateForm;
