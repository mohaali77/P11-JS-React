//On récupère les données transmisent par les pages parentes
export function Banner({ image, sentance, page }) {

    return <section id={`${page}-banner`}>
        <div id='maskPicture'></div>
        <img src={image} alt='' />
        <div id='bannerSentence'>{sentance}</div>
    </section>
}