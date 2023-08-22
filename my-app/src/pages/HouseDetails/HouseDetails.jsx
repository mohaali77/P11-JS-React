//Import Fonctionnalités, Hook, Bibliothèque...
import { useParams, Navigate } from "react-router-dom";
//Import Composants
import { Slideshow } from '../../components/Slideshow'
import { Rating } from '../../components/Rating'
import { Collapse } from "../../components/Collapse";
//Données
import data from '../../data/data.json'
//Import CSS
import './style/collapse-housedetails/collapse-housedetails.css'
import './style/housedetails/housedetails.css'
import './style/rating/rating.css'
import './style/slideshow/slideshow.css'

export function HouseDetails() {

    // Récupérer l'ID de l'URL
    const { id } = useParams();

    // On récupère l'objet du tableau possedant le même ID que celui dans l'URL
    const getDataFromID = data.find(obj => obj.id === id);

    // Si aucun ID n'est trouvé, on redirige vers la page d'erreur
    if (!getDataFromID) {
        return <Navigate to="/error" />;
    }

    return <>
        <Slideshow pictures={getDataFromID.pictures} />
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
