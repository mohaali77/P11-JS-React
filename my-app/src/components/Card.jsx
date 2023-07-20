export function Card({ data, image }) {
    console.log(data);
    console.log(data.id);
    return <section id='cardSection'>

        {data.map((item) => (
            <div className='card' key={item.id}>
                <p>ID: {item.id}</p>
                <p>Nom: {item.title}</p>
            </div>
        ))}
    </section>
}