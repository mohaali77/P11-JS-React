import { Link } from "react-router-dom";

export function Card({ data }) {
    return <section id='cardSection'>

        {data.map((card) => (

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