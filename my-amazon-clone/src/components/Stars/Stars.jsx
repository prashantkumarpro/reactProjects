import React from 'react'


const Stars = ({ stars, reviews }) => {


    const renderStar = () => {

        const fullStar = Math.floor(stars)
        const halfStar = stars - fullStar
        const renameigStars = 5 - fullStar - (halfStar > 0 ? 1 : 0)
    
        const starCon = []
        // rendring full star
        for (let i = 0; i < fullStar; i++) {
            starCon.push(<i key={i} className="ri-star-fill" style={{ color: '#F3A847' }}></i>)
        }
        // rendring half star
        if (halfStar > 0 && halfStar < 1) {
            starCon.push(<i key='key' className="ri-star-half-line" style={{ color: '#F3A847' }}></i>)
        }
        // rendring empty star
        for (let index = 0; index < renameigStars; index++) {
            starCon.push(<i key={`empty-${index}`} className="ri-star-line" style={{ color: '#F3A847' }}></i>)
        }


        return starCon
    }


    return (
        <>
            {stars} {renderStar()} <span style={{ color: '#186592', fontWeight: '500' }}> {reviews} ratings</span>
            <br />

        </>
    )
}

export default Stars