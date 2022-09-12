import { useFetchSummaryQuery } from '../../redux/transactions/transactionsApi';
import months from '../../data/months.json';
import s from './Summary.module.css';

const Summary = ({ type = 'expense' }) => {
  const { data } = useFetchSummaryQuery(type);

  return (
    <div className={s.container}>
      <p className={s.title}>Summary</p>
      <ul className={s.list}>
        {data?.transactions &&
          [...data.transactions]
            .sort((a, b) => b._id.month - a._id.month)
            .map(({ _id, total }, index) => {
              return (
                index < 6 && (
                  <tr key={_id.month} className={s.item}>
                    <td className={s.description}>{months[_id.month]}</td>
                    <td className={s.description}>{total}</td>
                  </tr>
                )
              );
            })}
      </ul>
    </div>
  );
};

export default Summary;
