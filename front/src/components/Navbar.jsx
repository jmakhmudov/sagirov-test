import '../styles/Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';

const Navbar = ({ links }) => {
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
                {links.map(link => (
                    <a key={link.name} href={link.url}>{link.name}</a>
                ))}
            </ul>

            <FontAwesomeIcon onClick={openMenu} className='bars' icon={faBars} size='xl' />

            <div className='navlinks-mob-box' ref={navMob}>
                <ul className="navlinks-mob">
                    {links.map(link => (
                        <a key={link.name} href={link.url}>{link.name}</a>
                    ))}
                </ul>

                <FontAwesomeIcon className='close' onClick={closeMenu} icon={faX} size='xl' />
            </div>
        </nav>
    )
}

export default Navbar