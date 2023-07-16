import logo from '../logo/LOGO_header.png'
import { Link } from 'react-router-dom'

export function Header() {
    return <header>
        <img src={logo} alt="logo de l'entreprise KASA" />
        <nav>
            <ul>
                <li id='accueil'><Link to='/'>Accueil</Link></li>
                <li id='aPropos'><Link to='/about'>A Propos</Link></li>
            </ul>
        </nav>
    </header>
}