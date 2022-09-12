import { ReactComponent as CalendarIcon } from '../../images/svg/calendar.svg';
import CalendarPicker from '../DayPicker/DayPicker';
import s from './DateForm.module.css';

const DateForm = ({ date, handleCalendarClick, closePicker, picker }) => {
  return (
    <div className={s.dateForm} onClick={handleCalendarClick}>
      <CalendarIcon className={s.icon} />
      {picker && <CalendarPicker closeHandler={closePicker} startDate={date} />}

      <p>{date}</p>
    </div>
  );
};

export default DateForm;
