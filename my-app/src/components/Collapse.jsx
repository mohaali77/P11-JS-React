export function Collapse({ title, paragraph }) {
    return <>
        <div className="collapse">
            <div className="collapse_band_1">
                <div className="collapse_band_title">{title}</div>
                <i className="fa-solid fa-angle-up"></i>
            </div>
            <div className="collapse_band_2">
                <p className="collapse_band_paragraph">{paragraph}</p>
            </div>
        </div>
    </>
}