import '../styles/Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';

const Navbar = () => {
    const navMob = useRef(null)

    const openMenu = () => {
        navMob.current.style.top = 0
    }

    const closeMenu = () => {
        navMob.current.style.top = '-100dvh'
    }

    return (
        <nav className="navbar">
            <img src="./logo.png" alt="Logo" />

            <ul className="navlinks">
                <li>Главная</li>
                <li>Технология</li>
                <li>Графика полетов</li>
                <li>Гарантии</li>
                <li>О компании</li>
                <li>Контакты</li>
            </ul>

            <FontAwesomeIcon onClick={openMenu} className='bars' icon={faBars} size='xl'/>

            <div className='navlinks-mob-box' ref={navMob}>
                <ul className="navlinks-mob">
                    <li>Главная</li>
                    <li>Технология</li>
                    <li>Графика полетов</li>
                    <li>Гарантии</li>
                    <li>О компании</li>
                    <li>Контакты</li>
                </ul>

                <FontAwesomeIcon className='close' onClick={closeMenu} icon={faX} size='xl'/>
            </div>
        </nav>
    )
}

export default Navbar