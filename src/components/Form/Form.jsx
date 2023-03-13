import s from './Form.module.css';
import { useState, useEffect } from 'react';
import { GoogleIconHome } from '../../components/Icons/Icons';
import Notiflix from 'notiflix';
import authOperations from '../../redux/auth/auth-operations';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Form() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoginBtnActive, setIsLoginBtnActive] = useState(true);
  const [isRegisterBtnActive, setIsRegisterBtnActive] = useState(false);
  const [isPromptActive, setIsPromptActive] = useState(false);
  const [isShownPassword, setIsShownPassword] = useState(false);

  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '/auth/login') {
      setIsLoginBtnActive(true);
      setIsRegisterBtnActive(false);
    } else if (location.pathname === '/auth/register') {
      setIsLoginBtnActive(false);
      setIsRegisterBtnActive(true);
    }
  }, [location.pathname]);

  function handleChange({ target: { name, value } }) {
    switch (name) {
      case 'email':
        return setEmail(value.trim());
      case 'password':
        return setPassword(value.trim());
      default:
        return;
    }
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    if (email === '' || password === '') {
      setIsPromptActive(true);
      return;
    }
    const emailArr = email.split('@');
    if (emailArr[0].length < 2) {
      Notiflix.Notify.warning("Email must contain 2 symbols before '@'!", {
        timeout: 1500,
      });
      return;
    }
    if (emailArr[0].startsWith('-') || email.endsWith('-')) {
      Notiflix.Notify.warning(
        'Email cannot have ' - ' at the beginning or end',
      );
      return;
    }
    const passwordArr = password.split(' ');
    if (passwordArr.length >= 2) {
      const joinedPassword = passwordArr.join('');
      setPassword(joinedPassword);
    }
    try {
      if (location.pathname === '/auth/login') {
        dispatch(authOperations.logIn({ email, password }));
      } else if (location.pathname === '/auth/register') {
        dispatch(authOperations.register({ email, password }));
      }
    } catch (error) {
      console.log(error.message);
    }

    setEmail('');
    setPassword('');
    e.target.reset();
  }

  function switchButtons(e) {
    if (e.currentTarget.type === 'button') {
      if (location.pathname === '/auth/login') {
        navigate('/auth/register');
      } else {
        navigate('/auth/login');
      }
      setIsLoginBtnActive(!isLoginBtnActive);
      setIsRegisterBtnActive(!isRegisterBtnActive);
    }
  }

  function togglePassword(e) {
    e.preventDefault();
    const inputEl = e.currentTarget.parentNode.firstChild;
    if (inputEl.getAttribute('type') === 'password') {
      inputEl.setAttribute('type', 'text');
      setIsShownPassword(true);
    } else {
      inputEl.setAttribute('type', 'password');
      setIsShownPassword(false);
    }
  }
  return (
    <div className={s.formContainer}>
      <p className={s.help}>You can log in with your Google Account:</p>
      <button className={s.googleBtn}>
        <a
          className={s.googleLink}
          href="https://finance-book-server.onrender.com/api/auth/google"
          // href="http://localhost:3000/api/auth/google"
        >
          <GoogleIconHome /> <span className={s.btn__span}>Google</span>
        </a>
      </button>
      <p className={s.help}>
        Or log in using e-mail and password, after registering:
      </p>
      <form action="" onSubmit={handleFormSubmit} className={s.form}>
        <p className={s.prompt}>
          <span className={isPromptActive ? s.warning : s.hidden}>*</span>Email:
        </p>
        <input
          className={s.form__input}
          type="email"
          name="email"
          title=""
          onChange={handleChange}
          placeholder="your@email.com"
          autoComplete="on"
          minLength="10"
          maxLength="63"
          pattern="[a-z0-9.-]+@[a-z0-9.]+.[a-z]{2,4}$"
        />
        <p className={isPromptActive ? s.warning : s.hidden}>
          this is a required field
        </p>
        <p className={s.prompt + ' ' + s.promptMargin}>
          <span className={isPromptActive ? s.warning : s.hidden}>*</span>
          Password:
        </p>
        <div className={s.passwordContainer}>
          <input
            className={s.form__input + ' ' + s.password}
            type="password"
            name="password"
            title=""
            placeholder="password"
            autoComplete="current-password"
            id="current-password"
            onChange={handleChange}
            minLength={6}
          />
          <p className={isPromptActive ? s.warning : s.hidden}>
            this is a required field
          </p>
          <a
            href="!"
            className={isShownPassword ? s.view : s.hiddenPassword}
            onClick={togglePassword}
          >
            {' '}
          </a>
        </div>

        <div className={s.buttonContainer}>
          <button
            className={isLoginBtnActive ? s.activeBtn : s.authBtn}
            onClick={switchButtons}
            type={isLoginBtnActive ? 'submit' : 'button'}
          >
            Login
          </button>
          <button
            type={isRegisterBtnActive ? 'submit' : 'button'}
            className={isRegisterBtnActive ? s.activeBtn : s.authBtn}
            onClick={switchButtons}
          >
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
}
