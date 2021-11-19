import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/saude'>Saúde</Link>
      </li>
      <li>
        <Link to='/politica'>Política</Link>
      </li>
      <li>
        <Link to='/ciencia'>Ciência</Link>
      </li>
      <li>
        <Link to='/mundo'>Mundo</Link>
      </li>
    </>
  )
}

export default Menu;
