//Import Composants
import { Banner } from "../../components/Banner";
import { Card } from "../../components/Card";
//Import Fichiers et Données
import image1 from '../../images/Image1.png';
import data from '../../data/data.json';
//Import CSS
import "./style/card/card.css";
import "./style/banner-home/banner-home.css";

export function Home() {
    return (
        <>
            <Banner page='home' sentance='Chez vous, partout et ailleurs' image={image1} />
            <Card data={data} image={image1} />
        </>
    );
}