//Import Fichiers
import logo from '../logo/LOGO_footer.png'
//CSS
import '../styles/footer/footer.css'

export function Footer() {
    return <footer>
        <img src={logo} alt='Logo du site internet Kasa' />
        <p>© 2020 Kasa. All rights reserved</p>
    </footer>
}