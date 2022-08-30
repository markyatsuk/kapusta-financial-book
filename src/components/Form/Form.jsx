import s from './Form.module.css';
import { useState } from 'react';
import { GoogleIconHome } from '../../components/Icons/Icons';
import Notiflix from 'notiflix';
export default function Form() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
    let joinedPassword;
    const emailArr = email.split('@');
    if (emailArr[0].length < 2) {
      Notiflix.Notify.warning("Email must contain 2 symbols before '@'!");
      return;
    }
    const passwordArr = password.split(' ');
    if (passwordArr.length > 2) {
      joinedPassword = passwordArr.join('');
    }
    console.log('email', email);
    console.log('password', joinedPassword);
    setEmail('');
    setPassword('');
    e.target.reset();
  }

  const isDisabled = () => {
    if (email === '' || password === '') return true;
  };

  function togglePassword(e) {
    e.preventDefault();
    const inputEl = e.currentTarget.previousSibling;
    if (inputEl.getAttribute('type') === 'password') {
      inputEl.setAttribute('type', 'text');
    } else {
      inputEl.setAttribute('type', 'password');
    }
  }
  return (
    <div className={s.formContainer}>
      <p className={s.help}>You can log in with your Google Account:</p>
      <button className={s.googleBtn}>
        <a
          className={s.googleLink}
          href="https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?access_type=offline&client_id=530617987889-27act2dq0attad58rnt5j32gapooa5sc.apps.googleusercontent.com&prompt=consent&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fapi%2Fauth%2Fgoogle-redirect&response_type=code&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile&flowName=GeneralOAuthFlow"
        >
          {' '}
          <GoogleIconHome /> <span className={s.btn__span}>Google</span>
        </a>
      </button>
      <p className={s.help}>
        Or log in using e-mail and password, after registering:
      </p>
      <form action="" onSubmit={handleFormSubmit} className={s.form}>
        <p className={s.prompt}>Email:</p>
        <input
          className={s.form__input + ' ' + s.form__inputMargin}
          type="email"
          name="email"
          title=""
          required
          onChange={handleChange}
          placeholder="your@email.com"
          autoComplete="on"
          minLength="10"
          maxLength="63"
        />
        <p className={s.prompt}>Password:</p>
        <div className={s.passwordContainer}>
          <input
            className={s.form__input + ' ' + s.password}
            type="password"
            name="password"
            title=""
            required
            placeholder="password"
            autoComplete="current-password"
            id="current-password"
            onChange={handleChange}
          />
          <a href="!" className={s.passwordControl} onClick={togglePassword}>
            .
          </a>
        </div>

        <div className={s.buttonContainer}>
          <button
            className={s.authBtn + ' ' + s.activeBtn}
            disabled={isDisabled()}
          >
            Login
          </button>
          <button className={s.authBtn} disabled={isDisabled()}>
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
}
