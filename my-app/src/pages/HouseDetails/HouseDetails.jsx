import { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import { Slideshow } from '../../components/Slideshow'
import { Rating } from '../../components/Rating'
import { Collapse } from "../../components/Collapse";
import data from '../../data/data.json'
import image2 from '../../images/Image2.png'
import './style/collapse.css'
import './style/housedetails.css'
import './style/rating.css'
import './style/slideshow.css'

export function HouseDetails() {

    // Récupérer l'ID de l'URL
    const { id } = useParams();

    console.log(data);

    // Recherchez la maison correspondant à l'ID dans la liste
    const selectedHouse = data.find((house) => house.id === id);

    // Si l'ID est invalide ou ne correspond pas à une maison existante, redirigez vers la page d'erreur
    if (!selectedHouse) {
        return <Navigate to="/error" />;
    }

    const getDataFromID = data.find(obj => obj.id === id);

    return <>
        <Slideshow pictures={getDataFromID.pictures} image={image2} />
        <section className="information_container">
            <div className="information_titleLocation_tagList">
                <div className="information_title_location">
                    <h1 className="information_title">{getDataFromID.title}</h1>
                    <div className="information_location">{getDataFromID.location}</div>
                </div>
                <ul className="information_tagList">
                    {getDataFromID.tags.map((tag, index) => (
                        <h3 key={index} className="information_tag">{tag}</h3>
                    ))}
                </ul>
            </div>
            <div className="information_namePicture_rating">
                <div className="information_name_picture">
                    <h2 className="information_name">{getDataFromID.host.name}</h2>
                    <img className="information_picture" src={getDataFromID.host.picture} alt="" />
                </div>
                <Rating rating={getDataFromID.rating} />
            </div>
        </section>
        <section className="collapse_container_housedetails">
            <Collapse title='Description' paragraph={getDataFromID.description} />
            <Collapse title='Equipement' equipments={getDataFromID.equipments} />
        </section>
    </>
}
