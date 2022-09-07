import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import transactionsSelectors from '../../redux/transactions/transactions-selectors';
import s from './Balance.module.css';
import Notiflix from 'notiflix';
import transactionsOperations from '../../redux/transactions/transactions-operations';
import Notification from '../../components/Notification/Notification';

const Balance = ({ hide, width }) => {
  const balance = useSelector(transactionsSelectors.getTotalBalance);
  const dispatch = useDispatch();
  const [sum, setSum] = useState(null);
  const [setPromptClose, setClosePrompt] = useState(true);
  const toggleWindow = () => {
    setClosePrompt(setClosePrompt => !setClosePrompt);
  };

  const onHandleChange = e => setSum(e.currentTarget.value);

  const onhandleSubmit = e => {
    e.preventDefault();
    if (sum === null) {
      Notiflix.Notify.info('You should earn some money and come back))', {
        timeout: 2000,
      });
      return;
    }
    dispatch(transactionsOperations.setBalance({ balance: sum }));
  };
  return (
    <form onSubmit={onhandleSubmit} className={s.reportBalance}>
      <label htmlFor="balans" className={s.balanceLabel}>
        Balance:
        <div className={s.buttonsGroup}>
          {balance === 0 ? (
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
                // className={s.balanceInput}
                autoComplete="off"
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
                {`${balance}.00`} UAH
              </p>
              <button className={`${s.balanceButton} ${hide}`} disabled>
                CONFIRM
              </button>
            </>
          )}
        </div>
      </label>
    </form>
  );
};
export default Balance;
