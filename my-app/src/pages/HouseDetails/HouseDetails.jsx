import { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import data from '../../data/data.json'

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

    return <div>
        < h1>HouseDetailSs</h1>
    </div>
}
