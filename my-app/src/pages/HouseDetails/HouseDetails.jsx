import { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import { Slideshow } from '../../components/Slideshow'
import { Rating } from '../../components/Rating'
import data from '../../data/data.json'
import './style/collapse.css'
import './style/housedetails.css'
import './style/rating.css'
import './style/slideshow.css'
import image2 from '../../images/Image2.png'
import profile from '../../images/Image1.png'
import { Collapse } from "../../components/Collapse";

export function HouseDetails() {

    const [card, setCard] = useState([])

    useEffect(() => {
        setCard(data)
    }, [])

    // Récupérer l'ID de l'URL
    const { id } = useParams();

    console.log(id);

    // Recherchez la maison correspondant à l'ID dans la liste
    const selectedHouse = data.find((house) => house.id === id);

    // Si l'ID est invalide ou ne correspond pas à une maison existante, redirigez vers la page d'erreur
    if (!selectedHouse) {
        return <Navigate to="/error" />;
    }

    return <>
        <Slideshow image={image2} />
        <section className="information_container">
            <div className="information_titleLocation_namePicture">
                <div className="information_title_location">
                    <h1 className="information_title">Cozy loft on the Canal Saint-Martin</h1>
                    <div className="information_location">Paris, Ile-de-France</div>
                </div>
                <div className="information_name_picture">
                    <h2 className="information_name">Nom Prénom</h2>
                    <img className="information_picture" src={profile} alt="" />
                </div>
            </div>
            <div className="information_tag_rating">
                <ul className="information_list">
                    <h3 className="information_tag">tag</h3>
                    <h3 className="information_tag">tag</h3>
                    <h3 className="information_tag">tag</h3>
                </ul>
                <Rating />
            </div>
        </section>
        <section className="collapse_container_housedetails">
            <Collapse />
            <Collapse />
        </section>
    </>
}
