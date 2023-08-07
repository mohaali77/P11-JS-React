export function Slideshow({ image }) {
    return <>
        <section className="slideshow_container_housedetails">
            <img src={image} alt="" />
            <i className="fa-solid fa-angle-left"></i>
            <i className="fa-solid fa-angle-right"></i>
            <div className="slideshow_counter">1/4</div>
        </section>
    </>
}