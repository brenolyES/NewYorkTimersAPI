import style from '../header/Header.module.css'
import Menu from '../menu/Menu';
import { Link } from 'react-router-dom'

const Header = () => {
  const url = "https://images.squarespace-cdn.com/content/v1/599fa17ee4fcb5aed048dd88/1615907030151-VBYM1L94WUY8KO2M6O3P/446-4462709_transparent-cannonball-clipart-high-resolution-new-york-times.png";
  return (
    <div className={style.body}>
      <div className={style.left}>
        <img className={style.logoImg} src={url} alt="Logo NYT" />
        <strong className={style.title}><Link to='/'>New York Times</Link></strong>
      </div>
      <div className={style.rigth}>
        <ul>
        <Menu />
        </ul>
      </div>
    </div>
  )
}

export default Header;
