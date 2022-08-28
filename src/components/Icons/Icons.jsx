import { ReactComponent as IconHome } from '../../images/IconHome.svg';
import { ReactComponent as Google } from '../../images/google.svg';
import { ReactComponent as Eye } from '../../images/eye.svg';
import s from './Icons.module.css';
export function IconHomeKapusta() {
  return <IconHome className={s.kapusta} />;
}

export function GoogleIconHome() {
  return <Google />;
}

export function EyeIcon() {
  return <Eye />;
}
