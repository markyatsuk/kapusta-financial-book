import React, { useState } from 'react';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import s from './Report.module.css';
import Balance from '../Balance';
import { CurrentAmount, CurrentMonth } from './';
import ArrowToGoBack from '../ArrowToGoBack';
import { IconsKeeper } from '../Icons/Icons';

const Report = ({
  month,
  year,
  onHandleClickRight,
  onHandleClickLeft,
  setCategory,
  expenses,
  incomes,
  expensesReport,
  incomeReport,
  setTitle,
  setHasChanged,
}) => {
  const [type, setType] = useState('expense');
  const onClick = () => {
    if (type === 'expense') {
      setType('income');
      setTitle('income');
    }
    if (type === 'income') {
      setType('expense');
      setTitle('expense');
    }
  };

  return (
    <div className={s.reportContainer}>
      <div className={`${s.navigation} ${s.section}`}>
        <ArrowToGoBack />
        <div className={s.navigationWrapper}>
          <Balance hide={s.buttonNone} width={s.buttonWidth} />
          <CurrentMonth
            currentMonth={month}
            currentYear={year}
            onHandleClickRight={onHandleClickRight}
            onHandleClickLeft={onHandleClickLeft}
          />
        </div>
      </div>
      <CurrentAmount
        currentMonth={month}
        currentYear={year}
        expenses={expenses}
        incomes={incomes}
      />
      <div className={`${s.reportWrapper} ${s.section}`}>
        <div className={`${s.titleWrapper} ${s.sectionReportTitle}`}>
          <div className={s.titleContainer}>
            <ArrowBackIosIcon
              style={{ color: '#FF751D' }}
              fontSize="small"
              onClick={onClick}
            />
            {type === 'expense' ? (
              <h1 className={s.reportTitle}>expenses</h1>
            ) : (
              <h1 className={s.reportTitle}>income</h1>
            )}
            <ArrowForwardIosIcon
              style={{ color: '#FF751D' }}
              fontSize="small"
              onClick={onClick}
            />
          </div>
          <ul className={s.reportList}>
            {!incomeReport && !expensesReport ? (
              <p>
                The report will be available after you enter data on your income
                and expenses for the selected period.
              </p>
            ) : type === 'income' ? (
              incomeReport?.map(el => {
                switch (el._id) {
                  case 'Additional income':
                    return (
                      <li
                        className={s.reportCard}
                        key={el._id}
                        // style={category === el._id && {border: "1px #FF751D solid"}}
                        onClick={() => {
                          setCategory(el._id);
                          setHasChanged(true);
                        }}
                      >
                        <p className={s.summary}>{`${el.summary} UAH`}</p>
                        <IconsKeeper.AddincomeIcon />
                        <p className={s.reportCardTitle}>{el._id}</p>
                      </li>
                    );
                  case 'Salary':
                    return (
                      <li
                        className={s.reportCard}
                        key={el._id}
                        // style={category === el._id && {border: "1px #FF751D solid"}}
                        onClick={() => {
                          setCategory(el._id);
                          setHasChanged(true);
                        }}
                      >
                        <p>{`${el.summary} UAH`}</p>
                        <IconsKeeper.SalaryIcon />
                        <p className={s.reportCardTitle}>{el._id}</p>
                      </li>
                    );
                  case 'Other':
                    return (
                      <li
                        className={s.reportCard}
                        key={el._id}
                        // style={category === el._id && {border: "1px #FF751D solid"}}
                        onClick={() => {
                          setCategory(el._id);
                          setHasChanged(true);
                        }}
                      >
                        <p>{`${el.summary} UAH`}</p>
                        <IconsKeeper.UtilitiesIcon />
                        <p className={s.reportCardTitle}>{el._id}</p>
                      </li>
                    );
                  default:
                    return null;
                }
              })
            ) : (
              expensesReport?.map(el => {
                switch (el._id) {
                  case 'Alcohol':
                    return (
                      <li
                        className={s.reportCard}
                        key={el._id}
                        // style={category === el._id && {border: "1px #FF751D solid"}}
                        onClick={() => {
                          setCategory(el._id);
                          setHasChanged(true);
                        }}
                      >
                        <p className={s.reportCardSum}>{`${el.summary} UAH`}</p>
                        <IconsKeeper.AlcoholIcon />
                        <p className={s.reportCardTitle}>{el._id}</p>
                      </li>
                    );
                  case 'Products':
                    return (
                      <li
                        className={s.reportCard}
                        key={el._id}
                        // style={category === el._id && {border: "1px #FF751D solid"}}
                        onClick={() => {
                          setCategory(el._id);
                          setHasChanged(true);
                        }}
                      >
                        <p className={s.reportCardSum}>{`${el.summary} UAH`}</p>
                        <IconsKeeper.FoodIcon />
                        <p className={s.reportCardTitle}>{el._id}</p>
                      </li>
                    );
                  case 'Entertainment':
                    return (
                      <li
                        className={s.reportCard}
                        key={el._id}
                        // style={category === el._id && {border: "1px #FF751D solid"}}
                        onClick={() => {
                          setCategory(el._id);
                          setHasChanged(true);
                        }}
                      >
                        <p className={s.reportCardSum}>{`${el.summary} UAH`}</p>
                        <IconsKeeper.KiteIcon />
                        <p className={s.reportCardTitle}>{el._id}</p>
                      </li>
                    );
                  case 'Health':
                    return (
                      <li
                        className={s.reportCard}
                        key={el._id}
                        // style={category === el._id && {border: "1px #FF751D solid"}}
                        onClick={() => {
                          setCategory(el._id);
                          setHasChanged(true);
                        }}
                      >
                        <p className={s.reportCardSum}>{`${el.summary} UAH`}</p>
                        <IconsKeeper.HealthIcon />
                        <p className={s.reportCardTitle}>{el._id}</p>
                      </li>
                    );
                  case 'Transport':
                    return (
                      <li
                        className={s.reportCard}
                        key={el._id}
                        // style={category === el._id && {border: "1px #FF751D solid"}}
                        onClick={() => {
                          setCategory(el._id);
                          setHasChanged(true);
                        }}
                      >
                        <p className={s.reportCardSum}>{`${el.summary} UAH`}</p>
                        <IconsKeeper.CarIcon />
                        <p className={s.reportCardTitle}>{el._id}</p>
                      </li>
                    );
                  case 'Technique':
                    return (
                      <li
                        className={s.reportCard}
                        key={el._id}
                        // style={category === el._id && {border: "1px #FF751D solid"}}
                        onClick={() => {
                          setCategory(el._id);
                          setHasChanged(true);
                        }}
                      >
                        <p className={s.reportCardSum}>{`${el.summary}UAH`}</p>
                        <IconsKeeper.ToolsIcon />
                        <p className={s.reportCardTitle}>{el._id}</p>
                      </li>
                    );
                  case 'Education':
                    return (
                      <li
                        className={s.reportCard}
                        key={el._id}
                        // style={category === el._id && {border: "1px #FF751D solid"}}
                        onClick={() => {
                          setCategory(el._id);
                          setHasChanged(true);
                        }}
                      >
                        <p className={s.reportCardSum}>{`${el.summary} UAH`}</p>
                        <IconsKeeper.BookIcon />
                        <p className={s.reportCardTitle}>{el._id}</p>
                      </li>
                    );
                  case 'Sport,Hobies':
                    return (
                      <li
                        className={s.reportCard}
                        key={el._id}
                        // style={category === el._id && {border: "1px #FF751D solid"}}
                        onClick={() => {
                          setCategory(el._id);
                          setHasChanged(true);
                        }}
                      >
                        <p className={s.reportCardSum}>{`${el.summary} UAH`}</p>
                        <IconsKeeper.SportIcon />
                        <p className={s.reportCardTitle}>{el._id}</p>
                      </li>
                    );
                  case 'Other':
                    return (
                      <li
                        className={s.reportCard}
                        key={el._id}
                        // style={category === el._id && {border: "1px #FF751D solid"}}
                        onClick={() => {
                          setCategory(el._id);
                          setHasChanged(true);
                        }}
                      >
                        <p className={s.reportCardSum}>{`${el.summary} UAH`}</p>
                        <IconsKeeper.UtilitiesIcon />
                        <p className={s.reportCardTitle}>{el._id}</p>
                      </li>
                    );
                  case 'Communal, Communication':
                    return (
                      <li
                        className={s.reportCard}
                        key={el._id}
                        // style={category === el._id && {border: "1px #FF751D solid"}}
                        onClick={() => {
                          setCategory(el._id);
                          setHasChanged(true);
                        }}
                      >
                        <p className={s.reportCardSum}>{`${el.summary} UAH`}</p>
                        <IconsKeeper.UfoIcon />
                        <p className={s.reportCardTitle}>{el._id}</p>
                      </li>
                    );
                  case 'Housing':
                    return (
                      <li
                        className={s.reportCard}
                        key={el._id}
                        // style={category === el._id && {border: "1px #FF751D solid"}}
                        onClick={() => {
                          setCategory(el._id);
                          setHasChanged(true);
                        }}
                      >
                        <p className={s.reportCardSum}>{`${el.summary} UAH`}</p>
                        <IconsKeeper.CouchIcon />
                        <p className={s.reportCardTitle}>{el._id}</p>
                      </li>
                    );

                  default:
                    return null;
                }
              })
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Report;
