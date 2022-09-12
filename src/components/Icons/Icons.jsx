import { ReactComponent as IconHomeMobile } from '../../images/IconHomeMobile.svg';
import { ReactComponent as IconHomeTablet } from '../../images/IconHomeTablet.svg';
import { ReactComponent as IconHomeDesktop } from '../../images/IconHomeDesktop.svg';
import { ReactComponent as Cabbage } from '../../images/cabbage.svg';
import { ReactComponent as Google } from '../../images/google.svg';
import { ReactComponent as Eye } from '../../images/eye.svg';
import { ReactComponent as Addincome } from '../../images/svg/income/addincome.svg';
import { ReactComponent as Salary } from '../../images/svg/income/salary.svg';
import { ReactComponent as Alcohol } from '../../images/svg/category/alcohol.svg';
import { ReactComponent as Book } from '../../images/svg/category/book.svg';
import { ReactComponent as Car } from '../../images/svg/category/car.svg';
import { ReactComponent as Couch } from '../../images/svg/category/couch.svg';
import { ReactComponent as Food } from '../../images/svg/category/food.svg';
import { ReactComponent as Health } from '../../images/svg/category/health.svg';
import { ReactComponent as Kite } from '../../images/svg/category/kite.svg';
import { ReactComponent as Sport } from '../../images/svg/category/sport.svg';
import { ReactComponent as Tools } from '../../images/svg/category/tools.svg';
import { ReactComponent as Ufo } from '../../images/svg/category/ufo.svg';
import { ReactComponent as Utilities } from '../../images/svg/category/utilities.svg';

import s from './Icons.module.css';
import { Desktop, Tablet, Mobile, Default } from '../../services/mediaQuery';
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

export function AddincomeIcon() {
  return <Addincome />;
}

export function SalaryIcon() {
  return <Salary />;
}

export function AlcoholIcon() {
  return <Alcohol />;
}

export function BookIcon() {
  return <Book />;
}

export function CarIcon() {
  return <Car />;
}

export function CouchIcon() {
  return <Couch />;
}

export function FoodIcon() {
  return <Food />;
}

export function HealthIcon() {
  return <Health />;
}

export function KiteIcon() {
  return <Kite />;
}

export function SportIcon() {
  return <Sport />;
}

export function ToolsIcon() {
  return <Tools />;
}

export function UfoIcon() {
  return <Ufo />;
}

export function UtilitiesIcon() {
  return <Utilities />;
}

export const IconsKeeper = {
  AlcoholIcon,
  BookIcon,
  FoodIcon,
  CarIcon,
  HealthIcon,
  KiteIcon,
  SportIcon,
  UfoIcon,
  UtilitiesIcon,
  ToolsIcon,
  CouchIcon,
  SalaryIcon,
  AddincomeIcon,
};
