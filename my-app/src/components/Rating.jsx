export function Rating({ rating }) {
    console.log(rating);

    const zeroStarRate = '0'
    const oneStarRate = '1'
    const twoStarRate = '2'
    const threeStarRate = '3'
    const fourStarRate = '4'
    const fiveStarRate = '5'

    let isZeroTrue = false
    let isOneTrue = false
    let isTwoTrue = false
    let isThreeTrue = false
    let isFourTrue = false
    let isFiveTrue = false

    if (zeroStarRate === rating) {
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