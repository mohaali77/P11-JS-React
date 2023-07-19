import { Link } from "react-router-dom"
import "../../pages/Error/style/error.css"

export function Error() {
    return <section id='error'>
        <div id='errorNumber'>404</div>
        <div id='errorMessage'>Oups! La page que vous demandez n'existe pas.</div>
        <div id='returnHome'><Link to='/'>Retourner sur la page d’accueil</Link></div>
    </section>

}
