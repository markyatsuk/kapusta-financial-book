import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import s from './Balance.module.css';
import Notiflix from 'notiflix';
import { authOperations, authSelectors } from '../../redux/auth';
import Notification from '../../components/Notification/Notification';

const Balance = ({ hide, width }) => {
  const dispatch = useDispatch();

  const balance = useSelector(authSelectors.getUserBalance);

  const [sum, setSum] = useState(null);

  const [setPromptClose, setClosePrompt] = useState(true);

  const toggleWindow = () => {
    setClosePrompt(setClosePrompt => !setClosePrompt);
  };

  const onHandleChange = e => setSum(e.currentTarget.value);

  const handleSubmit = e => {
    e.preventDefault();
    if (sum === null) {
      Notiflix.Notify.info('You should earn some money and come back))', {
        timeout: 1500,
      });
      return;
    }

    dispatch(authOperations.updateBalance({ balance: +sum }));
  };
  return (
    <form onSubmit={handleSubmit} className={s.reportBalance}>
      <label htmlFor="balance" className={s.balanceLabel}>
        Balance:
        <div className={s.buttonsGroup}>
          {balance === 0 || balance === null ? (
            <>
              {setPromptClose && <Notification onClose={toggleWindow} />}
              <input
                type="text"
                name="name"
                maxLength="10"
                placeholder="00.00"
                onChange={onHandleChange}
                className={
                  width
                    ? `${s.balanceInputReport} ${s.balanceInput}`
                    : `${s.balanceInput}`
                }
                autoComplete="off"
                // id="balance"
              />
              <button
                className={
                  width
                    ? `${s.balanceInputReport} ${s.balanceButton}`
                    : `${s.balanceButton} `
                }
                type="submit"
              >
                CONFIRM
              </button>
            </>
          ) : (
            <>
              <p
                className={
                  width
                    ? `${s.balanceInput} ${s.balanceInputReport}`
                    : `${s.balanceInput}`
                }
              >
                {balance} UAH
              </p>
            </>
          )}
        </div>
      </label>
    </form>
  );
};
export default Balance;
