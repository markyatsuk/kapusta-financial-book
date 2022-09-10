import HomeContainer from '../../components/Container/HomeContainer';
import {
  IconHomeKapustaMobile,
  IconHomeKapustaTablet,
  IconHomeKapustaDesktop,
  CabbageIconTop,
  CabbageIconBottom,
  CabbagePairBottom,
  CabbageGroupTop,
} from '../../components/Icons/Icons';
import Form from '../../components/Form/Form';
import s from './AuthView.module.css';
import {
  isMobile,
  isTablet,
  isDesktop,
  isNotMobile,
} from '../../services/mediaQuery';
const AuthView = () => (
  <section className={s.homeSection}>
    <div className={s.background}>
      {isNotMobile && <CabbageGroupTop />}
      {isMobile && <CabbageIconTop />}
    </div>
    <HomeContainer>
      <div className={s.preformContainer}>
        {isMobile && <IconHomeKapustaMobile />}
        {isTablet && <IconHomeKapustaTablet />}
        {isDesktop && <IconHomeKapustaDesktop />}
        <p className={s.afterTitle}>Smart Finance</p>
      </div>
      <Form />
    </HomeContainer>
    {isMobile && <CabbageIconBottom />}
    {isNotMobile && <CabbagePairBottom />}
  </section>
);

export default AuthView;
