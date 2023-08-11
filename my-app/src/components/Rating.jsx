//On récupère la note transmisent par la page parente
export function Rating({ rating }) {

    //on crée des constantes pour chaque étoiles de 0 à 5
    const zeroStarRate = '0'
    const oneStarRate = '1'
    const twoStarRate = '2'
    const threeStarRate = '3'
    const fourStarRate = '4'
    const fiveStarRate = '5'

    //on crée des variables pour chaque étoiles de 0 à 5
    let isZeroTrue = false
    let isOneTrue = false
    let isTwoTrue = false
    let isThreeTrue = false
    let isFourTrue = false
    let isFiveTrue = false

    //Si la valeur de la note transmise est égal à une des constantes. 
    if (zeroStarRate === rating) {
        //On définis la variable correspondante au nombre d'étoile comme true. 
        isZeroTrue = true;
    } else if (oneStarRate === rating) {
        isOneTrue = true
    } else if (twoStarRate === rating) {
        isTwoTrue = true
    } else if (threeStarRate === rating) {
        isThreeTrue = true
    } else if (fourStarRate === rating) {
        isFourTrue = true
    } else if (fiveStarRate === rating) {
        isFiveTrue = true
    }

    /*Pour chaque possibilité de note, on créer une condition. Par exemple, si isZero = true,
    cela signifie que la note de la maison est de 0, donc on créé les icones étoiles
    en attribuant pour chacune des icone la class 'no-star' qui rendra les étoiles grises.*/
    return <>
        <div className="rating-container">
            {isZeroTrue ?
                <>
                    <i className="no-star fa-solid fa-star"></i>
                    <i className="no-star fa-solid fa-star"></i>
                    <i className="no-star fa-solid fa-star"></i>
                    <i className="no-star fa-solid fa-star"></i>
                    <i className="no-star fa-solid fa-star"></i>
                </>
                : null
            }
            {isOneTrue ?
                <>
                    <i className="fa-solid fa-star"></i>
                    <i className="no-star fa-solid fa-star"></i>
                    <i className="no-star fa-solid fa-star"></i>
                    <i className="no-star fa-solid fa-star"></i>
                    <i className="no-star fa-solid fa-star"></i>
                </>
                : null
            }
            {isTwoTrue ?
                <>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="no-star fa-solid fa-star"></i>
                    <i className="no-star fa-solid fa-star"></i>
                    <i className="no-star fa-solid fa-star"></i>
                </>
                : null
            }
            {isThreeTrue ?
                <>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="no-star fa-solid fa-star"></i>
                    <i className="no-star fa-solid fa-star"></i>
                </>
                : null
            }
            {isFourTrue ?
                <>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="no-star fa-solid fa-star"></i>
                </>
                : null
            }
            {isFiveTrue ?
                <>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                </>
                : null
            }
        </div>
    </>
}