import React, { useState, useEffect } from "react";
import { Banner } from "../../components/Banner";
import { Card } from "../../components/Card";
import image1 from '../../images/Image1.png';
import data from '../../data/data.json';
import "./style/card/card.css";
import "./style/banner-home/banner-home.css";

export function Home() {

    const [cardData, setCardData] = useState([]); // Création de l'état pour les données des cartes

    useEffect(() => {
        setCardData(data); // Mettre à jour l'état avec les données
    }, []);

    return (
        <>
            <Banner page='home' sentance='Chez vous, partout et ailleurs' image={image1} />
            <Card data={cardData} image={image1} /> {/* Utiliser les données de l'état */}
        </>
    );
}