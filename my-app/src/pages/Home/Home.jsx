import "./style/card.css"
import "./style/banner-home.css"
import { useState, useEffect } from "react"
import { Banner } from "../../components/Banner"
import { Card } from "../../components/Card"
import image1 from '../../images/Image1.png'
import data from '../../data/data.json'

export function Home() {

    const [card, setCard] = useState([])

    useEffect(() => {
        setCard(data)
    }, [])

    return <>
        <Banner page='home' sentance='Chez vous, partout et ailleurs' image={image1} />
        <Card data={data} image={image1} />
    </>
}
