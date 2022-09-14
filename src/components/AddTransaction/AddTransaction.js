import { useState, useContext, useRef, useEffect } from 'react';
import { useCreateTransactionMutation } from '../../redux/transactions/transactionsApi';
import { ReactComponent as CalcIcon } from '../../images/svg/calculator.svg';
import contextProps from '../../context/context';
import DateForm from '../DateForm';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { gsap, Power3 } from 'gsap';
import s from './AddTransaction.module.css';
import Dropdown from '../Dropdown';
import CalculatorInput from '../CalculatorInput';
import { authOperations, authSelectors } from '../../redux/auth';
import { useDispatch, useSelector } from 'react-redux';
import Notiflix from 'notiflix';

export default function AddTransaction({ onCloseForm }) {
  const dispatch = useDispatch();
  const balance = useSelector(authSelectors.getUserBalance);
  const { type, picker, handleCalendarClick, closePicker, date } =
    useContext(contextProps);

  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');

  const [calc, setCalc] = useState(false);
  const [sum, setSum] = useState('');

  const [createTransaction] = useCreateTransactionMutation();

  const viewPort = useWindowDimensions();

  const handleSubmit = async e => {
    e.preventDefault();
    if (category === '') {
      Notiflix.Notify.warning('Please, choose a category', {
        timeout: 1500,
      });
      return;
    }
    if (!Number(sum) || Number(sum) < 1) {
      Notiflix.Notify.warning('Sum must be a number and equal to at least 1', {
        timeout: 1500,
      });
      return;
    }
    const transaction = {
      type,
      date: {
        day: date.split('.')[0],
        month: date.split('.')[1],
        year: date.split('.')[2],
      },
      category,
      subCategory: description,
      sum: Number(sum),
    };
    const { data } = await createTransaction(transaction);

    // const newBalance =
    //   transaction.type === 'income'
    //     ? balance + transaction.sum
    //     : balance - transaction.sum;

    dispatch(authOperations.updateBalance({ balance: data.balance }));

    cleanState();
  };

  const handleSubmitMobile = e => {
    handleSubmit(e);
    onCloseForm();
  };

  const handleCalcClick = () => {
    setCalc(true);
  };

  const closeCalc = result => {
    setSum(result);

    setCalc(false);
  };

  const handleChangeDescription = e => {
    setDescription(e.target.value);
  };

  const handleChangeSum = e => {
    setSum(e.target.value);
  };
  const cleanState = () => {
    setDescription('');
    setCategory('');
    setSum('');
  };

  let enterRef = useRef(null);
  let clearRef = useRef(null);

  useEffect(() => {
    if (viewPort.width > 767) {
      gsap.fromTo(
        enterRef,
        1,
        {
          opacity: 0,
          x: -800,
        },
        {
          x: 0,
          opacity: 1,
          ease: Power3.easeInOut,
        },
      );

      gsap.fromTo(
        clearRef,
        1,
        {
          opacity: 0,
          x: 800,
        },
        {
          x: 0,
          opacity: 1,
          ease: Power3.easeInOut,
        },
      );
    }
    return;
  }, [viewPort.width]);

  return (
    <>
      {viewPort.width >= 1280 && (
        <>
          <form onSubmit={handleSubmit} className={s.containerForm}>
            <DateForm
              date={date}
              handleCalendarClick={handleCalendarClick}
              closePicker={closePicker}
              picker={picker}
            />
            <div className={s.inputForm}>
              <label className={s.labelDescriptions}>
                <input
                  className={s.inputDescriptions}
                  value={description}
                  name="description"
                  id="description"
                  type="text"
                  minLength={3}
                  maxLength={20}
                  placeholder={
                    type === 'expense'
                      ? 'Product description'
                      : 'Income description'
                  }
                  required
                  onChange={handleChangeDescription}
                />
              </label>
              <label className={s.labelSelect}>
                <div className={s.positionIcon}>
                  <Dropdown category={category} setCategory={setCategory} />
                </div>
              </label>
              <label className={s.labelSum}>
                <div className={s.positionIcon}>
                  <input
                    className={s.inputSum}
                    value={sum}
                    name="sum"
                    id="sum"
                    type="text"
                    minLength={1}
                    maxLength={10}
                    placeholder="0.00"
                    required
                    onChange={handleChangeSum}
                  />
                  <div className={s.calculatorIcon}>
                    <div onClick={handleCalcClick}>
                      <CalcIcon />
                      {calc && (
                        <CalculatorInput onCloseCalculator={closeCalc} />
                      )}
                    </div>
                  </div>
                </div>
              </label>
            </div>
            <div className={s.positionButton}>
              <div ref={el => (enterRef = el)}>
                <button type="submit" className={`${s.button} ${s.buttonLeft}`}>
                  INPUT
                </button>
              </div>
              <div ref={el => (clearRef = el)}>
                <button
                  type="button"
                  onClick={cleanState}
                  className={`${s.button} ${s.buttonRight}`}
                >
                  CLEAR
                </button>
              </div>
            </div>
          </form>
        </>
      )}
      {viewPort.width >= 768 && viewPort.width < 1280 && (
        <>
          <div>
            <form onSubmit={handleSubmit} className={s.containerForm768}>
              <div className={s.containerFormTablet}>
                <DateForm
                  date={date}
                  handleCalendarClick={handleCalendarClick}
                  closePicker={closePicker}
                  picker={picker}
                />
                <div className={s.inputForm}>
                  <label className={s.labelDescriptions}>
                    <input
                      className={s.inputDescriptions}
                      value={description}
                      name="description"
                      id="description"
                      type="text"
                      placeholder={
                        type === 'expense'
                          ? 'Product description'
                          : 'Income description'
                      }
                      required
                      onChange={handleChangeDescription}
                      minLength={3}
                      maxLength={20}
                    />
                  </label>
                  <label className={s.labelSelect}>
                    <div className={s.positionIcon}>
                      <Dropdown category={category} setCategory={setCategory} />
                    </div>
                  </label>
                  <label className={s.labelSum}>
                    <div className={s.positionIcon}>
                      <input
                        className={s.inputSum}
                        value={sum}
                        name="sum"
                        id="sum"
                        type="string"
                        placeholder="0.00"
                        required
                        onChange={handleChangeSum}
                      />
                      <div className={s.calculatorIcon}>
                        <div onClick={handleCalcClick}>
                          <CalcIcon />
                          {calc && (
                            <CalculatorInput onCloseCalculator={closeCalc} />
                          )}
                        </div>
                      </div>
                    </div>
                  </label>
                </div>
              </div>
              <div className={s.positionButton}>
                <div ref={el => (enterRef = el)}>
                  <button
                    type="submit"
                    className={`${s.button} ${s.buttonLeft}`}
                  >
                    INPUT
                  </button>
                </div>
                <div ref={el => (clearRef = el)}>
                  <button
                    type="button"
                    onClick={cleanState}
                    className={`${s.button} ${s.buttonRight}`}
                  >
                    CLEAR
                  </button>
                </div>
              </div>
            </form>
          </div>
        </>
      )}
      {viewPort.width < 768 && (
        <>
          <div>
            <form onSubmit={handleSubmitMobile} className={s.containerForm320}>
              <div className={s.containerFormTablet}>
                <div className={s.inputForm}>
                  <label>
                    <input
                      className={s.inputDescriptions}
                      value={description}
                      name="description"
                      id="description"
                      type="text"
                      placeholder={
                        type === 'expense'
                          ? 'Product description'
                          : 'Income description'
                      }
                      required
                      onChange={handleChangeDescription}
                      minLength={3}
                      maxLength={20}
                    />
                  </label>
                  <label>
                    <div>
                      <Dropdown category={category} setCategory={setCategory} />
                    </div>
                  </label>
                  <label>
                    <div className={s.positionInputSum}>
                      <div>
                        <input
                          className={s.inputSum}
                          value={sum}
                          name="sum"
                          id="sum"
                          type="string"
                          placeholder="0.00"
                          required
                          onChange={handleChangeSum}
                        />
                      </div>
                      <div className={s.positionIcon}>
                        <div onClick={handleCalcClick}>
                          <CalcIcon className={s.icon} />
                          {calc && (
                            <CalculatorInput onCloseCalculator={closeCalc} />
                          )}
                        </div>
                      </div>
                    </div>
                  </label>
                </div>
              </div>
              <div className={s.positionButton}>
                <button type="submit" className={`${s.button} ${s.buttonLeft}`}>
                  INPUT
                </button>
                <button
                  type="button"
                  onClick={cleanState}
                  className={`${s.button} ${s.buttonRight}`}
                >
                  CLEAR
                </button>
              </div>
            </form>
          </div>
        </>
      )}
    </>
  );
}
