import { useEffect, useState, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  useFetchByDateQuery,
  useDeleteTransactionMutation,
} from '../../../redux/transactions/transactionsApi';
import { authOperations } from '../../../redux/auth';

import s from './TransactionsListMobile.module.css';
import EditTransaction from '../../EditTransaction';
import contextProps from '../../../context/context';
import { authSelectors } from '../../../redux/auth';

export default function TransactionsListMobile() {
  const { type, date, setNewDate } = useContext(contextProps);
  const [deleteTransaction] = useDeleteTransactionMutation();
  const { data } = useFetchByDateQuery(date);
  console.log(data);
  const [modalEdit, setModalEdit] = useState(false);
  const [transaction, setTransaction] = useState('');
  const dispatch = useDispatch();
  const balance = useSelector(authSelectors.getUserBalance);
  const handleDeleteClick = id => {
    const trans = data.result.find(item => item._id === id);
    console.log(trans);
    const newBalance =
      trans.type === 'income' ? balance - trans.sum : balance + trans.sum;
    dispatch(authOperations.updateBalance({ balance: newBalance }));
    deleteTransaction(id);
    setTransaction(id);
  };

  const onEditCalcel = () => {
    setModalEdit(false);
    setTransaction('');
  };

  return (
    <>
      {modalEdit && (
        <EditTransaction
          onDateChange={setNewDate}
          transaction={data.result.find(item => item._id === transaction)}
          cancelChanges={onEditCalcel}
        />
      )}
      <div className={s.tsList__container}>
        <ul>
          {data?.result &&
            data.result
              .filter(item => item.type === type)
              .map(transaction => (
                <li className={s.listItem}>
                  <p className={s.listItem__subCategory}>
                    {transaction.subCategory}
                    <p className={s.listItem__date}>
                      {transaction.date.day +
                        '.' +
                        transaction.date.month +
                        '.' +
                        transaction.date.year}
                    </p>
                  </p>
                  <p className={s.listItem__category}>{transaction.category}</p>

                  <p
                    className={s.listItem__sum}
                    style={
                      transaction.type === 'income'
                        ? { color: '#407946' }
                        : { color: '#E7192E' }
                    }
                  >
                    {transaction.type === 'income'
                      ? `${transaction.sum}.00 UAH.`
                      : `- ${transaction.sum}.00 UAH.`}
                  </p>

                  <button
                    className={s.buttonsGroup}
                    onClick={() => handleDeleteClick(transaction._id)}
                  >
                    <svg
                      width="18"
                      height="18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#a)" fill="#52555F">
                        <path d="m16.308 4.023-.397-1.191a1.109 1.109 0 0 0-1.053-.759h-3.34V.986A.987.987 0 0 0 10.532 0H7.473a.987.987 0 0 0-.985.986v1.087h-3.34c-.478 0-.901.305-1.053.759l-.397 1.191a.894.894 0 0 0 .846 1.174h.415l.915 11.307c.068.839.78 1.496 1.62 1.496h7.203c.84 0 1.553-.657 1.62-1.496l.915-11.307h.23a.894.894 0 0 0 .846-1.174ZM7.543 1.055h2.92v1.018h-2.92V1.055Zm5.723 15.364a.575.575 0 0 1-.57.526H5.496a.575.575 0 0 1-.57-.526L4.017 5.197h10.157l-.908 11.222ZM2.77 4.143l.326-.977a.055.055 0 0 1 .052-.038h11.71c.024 0 .045.015.052.038l.326.977H2.77Z" />
                        <path d="m11.585 16.381.027.001a.527.527 0 0 0 .527-.5l.495-9.506a.527.527 0 0 0-1.054-.055l-.495 9.506a.527.527 0 0 0 .5.554ZM5.891 15.883a.527.527 0 0 0 1.053-.057L6.426 6.32a.527.527 0 1 0-1.054.057l.519 9.506ZM9.009 16.382a.527.527 0 0 0 .527-.527V6.348a.527.527 0 1 0-1.054 0v9.507c0 .29.236.527.527.527Z" />
                      </g>
                      <defs>
                        <clipPath id="a">
                          <path fill="#fff" d="M0 0h18v18H0z" />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                </li>
              ))}
        </ul>
      </div>
    </>
  );
}
