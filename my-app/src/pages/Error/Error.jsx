//Import Fonctionnalités, Hook, Bibliothèque...
import { Link } from "react-router-dom"
//Import CSS
import "./style/error/error.css"

export function Error() {
    return <section id='error'>
        <div id='errorNumber'>404</div>
        <div id='errorMessage'>Oups! La page que vous demandez n'existe pas.</div>
        <div id='returnHome'><Link to='/'>Retourner sur la page d’accueil</Link></div>
    </section>

}
