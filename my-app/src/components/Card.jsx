import { Link } from "react-router-dom";

export function Card({ data, image }) {
    console.log(data);
    return <section id='cardSection'>

        {data.map((card) => (
            <article className='card' key={card.id}>
                <Link to={`/details/${card.id}`}>
                    <div>Nom: {card.title}</div>
                </Link>
            </article>
        ))}
    </section>
}