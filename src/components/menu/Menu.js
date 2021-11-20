import { Link } from 'react-router-dom'
import styles from '../menu/Menu.module.css'
import { useContext } from 'react'
import { ApiContext } from '../../context/ApiContext';


const Menu = () => {

  const {activeLink} = useContext(ApiContext);

  return (
    <>
      <li >
        {
          activeLink === 'home' ? <Link className={styles.modified} to='/'>Página Inicial</Link> : <Link className={styles.home} to='/'>Página Inicial</Link>
        }
      </li>
      <li>
        {
          activeLink === 'health' ? <Link className={styles.modified} to='/saude'>Saúde</Link> : <Link to='/saude'>Saúde</Link>
        }
      </li>
      <li>
        {
          activeLink === 'politics' ? <Link className={styles.modified} to='/politica'>Política</Link> : <Link to='/politica'>Política</Link>
        }
      </li>
      <li>
        {
          activeLink === 'science' ? <Link className={styles.modified} to='/ciencia'>Ciência</Link> : <Link to='/ciencia'>Ciência</Link>
        }
      </li>
      <li>
        {
          activeLink === 'world' ? <Link className={styles.modified} to='/mundo'>Mundo</Link> : <Link to='/mundo'>Mundo</Link>
        }
      </li>
    </>
  )
}

export default Menu;
