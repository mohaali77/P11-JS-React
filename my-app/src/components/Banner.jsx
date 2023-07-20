export function Banner({ image, sentance }) {
    return <section id='banner'>
        <div id='maskPicture'></div>
        <img src={image} alt='' />
        <div id='bannerSentence'>{sentance}</div>
    </section>
}