//Import Fonctionnalités, Hook, Bibliothèque...
import { useState } from "react";

export function Slideshow({ pictures }) {

    //on définit un state réprésentant l'index initial comme 0
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    //Au clic, 
    const handleNavigateLeft = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? pictures.length - 1 : prevIndex - 1));

    }

    const handleNavigateRight = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === pictures.length - 1 ? 0 : prevIndex + 1));

    }

    return <>
        <section className="slideshow_container_housedetails">
            <img src={pictures[currentImageIndex]} alt='' />
            <i onClick={handleNavigateLeft} className="fa-solid fa-angle-left"></i>
            <i onClick={handleNavigateRight} className="fa-solid fa-angle-right"></i>
            <div className="slideshow_counter">{currentImageIndex + 1}/{pictures.length}</div>
        </section>
    </>
}