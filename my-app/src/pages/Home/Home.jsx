import { Banner } from "../../components/Banner"
import { Card } from "../../components/Card"
import image1 from '../../images/Image1.png'
import "../../pages/Home/style/banner_home.css"
import "../../pages/Home/style/card.css"
const sentance = 'Chez vous, partout et ailleurs'

export function Home() {
    return <div>
        <Banner sentance={sentance} image={image1} />
        <Card />
    </div>
}
