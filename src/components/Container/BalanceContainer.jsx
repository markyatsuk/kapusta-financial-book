import s from './Container.module.css';

const BalanceContainer = ({ children }) => (
  <div className={s.container}>{children}</div>
);

export default BalanceContainer;
