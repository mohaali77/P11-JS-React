import logo from '../logo/LOGO_header.png'
import { Link, useLocation } from 'react-router-dom'
import { useEffect, useRef } from 'react';

export function Header() {

    const getPage = useLocation();

    const home = useRef(null);
    const about = useRef(null);


    useEffect(() => {
        if (getPage.pathname === '/') {
            home.current.classList.add('actualPage');
        } else {
            home.current.classList.remove('actualPage');
        }

        if (getPage.pathname === '/about') {
            about.current.classList.add('actualPage');
        } else {
            about.current.classList.remove('actualPage');
        }
    }, [getPage.pathname]);


    return <header>
        <Link to='/'><img src={logo} alt="logo de l'entreprise KASA" /></Link>
        <nav>
            <ul>
                <li ref={home} id='accueil'><Link to='/'>Accueil</Link></li>
                <li ref={about} id='aPropos'><Link to='/about'>A Propos</Link></li>
            </ul>
        </nav>
    </header>
}