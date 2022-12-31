import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'
// Importando imagem como um componente
import {ReactComponent as Dogs} from '../assets/img/dogs.svg'
import { userContext } from '../Context/UserContext'

const Header = () => {
  const {data} = React.useContext(userContext);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link to='/' aria-label='Dogs - Home' className={styles.logo}>
          <Dogs />
        </Link>
        {data && data.email}
        {data !== null ? <Link to='/account' className={styles.login}>{data.nome}</Link> : <Link to='/login' className={styles.login}>Login / Criar</Link>}
      </nav>
    </header>
  )
}

export default Header