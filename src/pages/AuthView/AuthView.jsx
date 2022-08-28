import HomeContainer from 'components/Container/HomeContainer';
import { IconHomeKapusta } from 'components/Icons/Icons';
import Form from 'components/Form/Form';
import s from './AuthView.module.css';
const AuthView = () => (
  <section className={s.homeSection}>
    <HomeContainer>
      <div className={s.preformContainer}>
        <IconHomeKapusta />
        <p className={s.afterTitle}>Smart Finance</p>
      </div>
      <Form />
    </HomeContainer>
  </section>
);

export default AuthView;
