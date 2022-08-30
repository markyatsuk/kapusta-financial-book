import s from './Container.module.css';

const HomeContainer = ({ children }) => (
  <div className={s.homeContainer}>{children}</div>
);

export default HomeContainer;
