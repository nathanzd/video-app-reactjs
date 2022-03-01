import React from 'react'
import styles from './Header.module.css'
import logo from '../Assets/logofit.png' 

const Header = ({black}) => {
    
  return (
    <header className={`${black ? styles.black:''}`} >
        <div className={`${styles.logo}`}>
            <a href=''>
                <img src={logo} className={`${styles.logoimg}`} alt='Movies'/>
            </a>
        </div>
        <div className={`${styles.user}`}>
            <a href=''>
                <img src='https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png' alt='Usuario' />
            </a>
        </div>
    </header>
  )
}

export default Header