import s from './Button.module.css';

const Button = ({ type, className, children }) => (
  <button type={type} className={s[className]}>
    {children}
  </button>
);

export default Button;
