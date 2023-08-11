//Import Fonctionnalités, Hook, Bibliothèque...
import React, { useRef } from 'react';

export function Collapse({ equipments, title, paragraph }) {

    //méthode useRef avec laquelle on récupérera les éléments du DOM
    const angleBtn = useRef(null);
    const collapseOpenClose = useRef(null);

    //fontion handleClick qui au clic ajoutera ou supprimera les classes reponsables des animations
    const handleClick = () => {
        angleBtn.current.classList.toggle('rotate');
        collapseOpenClose.current.classList.toggle('collapse_band_2_show');
    }

    return <>
        <div className="collapse">
            <div className="collapse_band_1">
                <div className="collapse_band_title">{title}</div>
                <i ref={angleBtn} onClick={handleClick} className="fa-solid fa-angle-down"></i>
            </div>
            <div ref={collapseOpenClose} className="collapse_band_2">
                <p className="collapse_band_paragraph">{paragraph}</p>
                {
                    //si les données équipement existent. On les affichent, sinon non. 
                    equipments ?
                        equipments.map((equipment, index) => (
                            <p key={index} className="collapse_band_equipments">{equipment}</p>
                        )) : <p className="collapse_band_equipments"></p>
                }
            </div>
        </div>
    </>
}