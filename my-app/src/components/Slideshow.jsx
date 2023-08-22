//Import Fonctionnalités, Hook, Bibliothèque...
import { useState } from "react";

export function Slideshow({ pictures }) {

    //on définit un state réprésentant l'index initial comme 0
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    //on créer une variable isOnePicture que l'on définit comme false.
    let isOnePicture = false

    //si le nombre de photo du tableau est égal ou inférieur à 1, alors on définis isOnePicture à true
    if (pictures.length <= 1) {
        isOnePicture = true
    }
    const handleNavigateLeft = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? pictures.length - 1 : prevIndex - 1));

    }

    const handleNavigateRight = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === pictures.length - 1 ? 0 : prevIndex + 1));

    }

    return <>
        <section className="slideshow_container_housedetails">
            <img src={pictures[currentImageIndex]} alt='' />
            {
                //si isOnePicture = true, les boutons de navigation et le compteur ne s'affiche pas
                //sinon on les affiche
                isOnePicture ?
                    null
                    : <> <i onClick={handleNavigateLeft} className="fa-solid fa-angle-left"></i>
                        <i onClick={handleNavigateRight} className="fa-solid fa-angle-right"></i>
                        <div className="slideshow_counter">{currentImageIndex + 1}/{pictures.length}</div>
                    </>
            }
        </section>
    </>
}