//Import Fonctionnalités, Hook, Bibliothèque...
import { Link } from "react-router-dom";

//On récupère les données transmisent par les pages parentes
export function Card({ data }) {
    return <section id='cardSection'>

        {
            // avec la méthode map, pour chaque cartes des données on créé un article avec ses infos respectives.  
            data.map((card) => (

                <article className='card' key={card.id}>
                    <Link to={`/details/${card.id}`}>
                        <div className="card_title">{card.title}</div>
                        <div className="card_mask"></div>
                        <img src={card.cover} alt="" />
                    </Link>
                </article>

            ))}
    </section>
}