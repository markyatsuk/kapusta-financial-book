import PropTypes from 'prop-types';
import { Mobile, Default } from 'services/mediaQuery';
import logoutsvg from '../../images/svg/header/logout-btn.svg';
import s from './LogoutButton.module.css';

const LogoutButton = ({ isRender, onLogOut }) => {
  return isRender ? (
    <button type="button" className={s.btn} onClick={onLogOut}>
      <Mobile>
        <svg className={s.icon}>
          <use href={`${logoutsvg}#Capa_1`} />
        </svg>
      </Mobile>

      <Default>
        <p className={s.text}>Log out</p>
      </Default>
    </button>
  ) : null;
};

LogoutButton.propTypes = {
  isRender: PropTypes.bool,
  onLogOut: PropTypes.func.isRequired,
};

LogoutButton.defaultProps = {
  isRender: true,
};

export default LogoutButton;
