export function Collapse({ title, paragraph }) {
    return <>
        <div id="collapse">
            <div id="collapse_band_1">
                <div id="collapse_band_title">{title}</div>
                <i id="collapse_band_angle" className="fa-solid fa-angle-up"></i>
            </div>
            <div id="collapse_band_2">
                <p id="collapse_band_paragraph">{paragraph}</p>
            </div>
        </div>
    </>
}