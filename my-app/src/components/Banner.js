import pictureBanner from '../images/Image1.png'

export function Banner() {
    return <section id='banner'>
        <div id='maskPicture'></div>
        <img src={pictureBanner} alt='' />
        <div id='bannerSentence'>Chez vous, partout et ailleurs</div>
    </section>
}