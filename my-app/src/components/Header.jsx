//Import Fichiers
import logo from '../logo/LOGO_header.png'
//Import Fonctionnalités, Hook, Bibliothèque...
import { Link, useLocation } from 'react-router-dom'
import { useEffect, useRef } from 'react';
//CSS
import '../styles/header/header.css'

export function Header() {

    //on récupère le nom de la page présente dans l'URL.
    const getPage = useLocation();

    //constant useRef DOM
    const home = useRef(null);
    const about = useRef(null);

    //Condition : 
    useEffect(() => {
        //Si nous sommes sur la page d'accueil, on ajoute une classe qui ajoutera une bordure en dessous 
        // de "Accueil" dans le header. Sinon on le supprime. 
        if (getPage.pathname === '/') {
            home.current.classList.add('actualPage');
        } else {
            home.current.classList.remove('actualPage');
        }

        //Si nous sommes sur la page "A propos", on ajoute une classe qui ajoutera une bordure en dessous 
        // de "A Propos" dans le header. Sinon on le supprime.
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