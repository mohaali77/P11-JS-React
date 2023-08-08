import { useState } from "react";

export function Slideshow({ image, pictures }) {

    /*pictures.map((picture, index) => (
        console.log(picture)
    ));*/

    const [count, setCount] = useState(0); // Initialisation du compteur à 0

    const handleNavigateLeft = () => {
        console.log('left')
        setCount(count - 1); // Incrémente le compteur de 1
        console.log(count);

    }

    const handleNavigateRight = () => {
        console.log('right');
        setCount(count + 1); // Incrémente le compteur de 1
        console.log(count);
    }

    return <>
        <section className="slideshow_container_housedetails">
            <img src={image} alt="" />
            <i onClick={handleNavigateLeft} className="fa-solid fa-angle-left"></i>
            <i onClick={handleNavigateRight} className="fa-solid fa-angle-right"></i>
            <div className="slideshow_counter">1/4</div>
        </section>
    </>
}