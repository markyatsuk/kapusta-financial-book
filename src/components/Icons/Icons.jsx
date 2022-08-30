import { ReactComponent as IconHomeMobile } from '../../images/IconHomeMobile.svg';
import { ReactComponent as IconHomeTablet } from '../../images/IconHomeTablet.svg';
import { ReactComponent as IconHomeDesktop } from '../../images/IconHomeDesktop.svg';
import { ReactComponent as Cabbage } from '../../images/cabbage.svg';
import { ReactComponent as Google } from '../../images/google.svg';
import { ReactComponent as Eye } from '../../images/eye.svg';
import s from './Icons.module.css';
import { Desktop, Tablet, Mobile, Default } from 'services/mediaQuery';
import CabbagePair from '../../images/CabbagePair.png';
import CabbageGroup from '../../images/CabbageGroup.png';
export function IconHomeKapustaMobile() {
  return (
    <Mobile>
      <IconHomeMobile className={s.kapusta} />
    </Mobile>
  );
}
export function IconHomeKapustaTablet() {
  return (
    <Tablet>
      <IconHomeTablet className={s.kapusta} />
    </Tablet>
  );
}
export function IconHomeKapustaDesktop() {
  return (
    <Desktop>
      <IconHomeDesktop className={s.kapusta} />
    </Desktop>
  );
}

export function CabbageIconTop() {
  return (
    <Mobile>
      <span className={s.cabbageIconTop}>
        <Cabbage />
      </span>
    </Mobile>
  );
}

export function CabbageIconBottom() {
  return (
    <Mobile>
      <span className={s.cabbageIconBottom}>
        <Cabbage />
      </span>
    </Mobile>
  );
}

export function CabbagePairBottom() {
  return (
    <Default>
      <img src={CabbagePair} alt="cabbage pair" className={s.cabbagePair} />
    </Default>
  );
}

export function CabbageGroupTop() {
  return (
    <Default>
      <img src={CabbageGroup} alt="cabbage group" className={s.cabbageGroup} />
    </Default>
  );
}

export function GoogleIconHome() {
  return <Google />;
}

export function EyeIcon() {
  return <Eye />;
}
