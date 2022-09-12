import { useFetchSummaryQuery } from '../../redux/transactions/transactionsApi';
import months from '../../data/summary.json';
import s from './Summary.module.css';

const Summary = ({ type = 'expense' }) => {
  const { data } = useFetchSummaryQuery(type);

  return (
    <div className={s.container}>
      <p className={s.title}>Summary</p>
      <table className={s.list}>
        <>
          <tbody>
            {data?.transactions &&
              [...data.transactions]
                .sort((a, b) => b._id.month - a._id.month)
                .map(({ _id, total }, index) => {
                  return (
                    index < 6 && (
                      <tr className={s.item} key={_id.month}>
                        <td className={s.description}>{months[_id.month]}</td>
                        <td className={s.description}>{total}</td>
                      </tr>
                    )
                  );
                })}
          </tbody>
        </>
      </table>
    </div>
  );
};

export default Summary;
