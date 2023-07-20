import { useState, useEffect } from "react"
import { Banner } from "../../components/Banner"
import { Card } from "../../components/Card"
import image1 from '../../images/Image1.png'
import "../../pages/Home/style/banner_home.css"
import "../../pages/Home/style/card.css"
import data from '../../data/data.json'
const sentance = 'Chez vous, partout et ailleurs'


export function Home() {

    const [card, setCard] = useState([])

    useEffect(() => {
        setCard(data)
    }, [])

    return <div>
        <Banner sentance={sentance} image={image1} />
        <Card data={data} image={image1} />
    </div>
}
