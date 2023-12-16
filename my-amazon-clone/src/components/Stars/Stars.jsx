import React from 'react'

const Stars = ({ stars, reviews }) => {


    const renderStar = () => {

        const fullStar = Math.round(stars)
        const halfStar = 5 - stars
        console.log(`fullStar: ${fullStar}, halfStar: ${halfStar}  star: ${stars}` )
        const starCon = []
        // rendring full star
        for (let i = 0; i < fullStar; i++) {
            starCon.push()
        }


        return starCon
    }
    renderStar()

    return (
        <>
            {renderStar()}
            {/* <h2>Half Stars: <i className="ri-star-half-line" style={{}}></i><i className="ri-star-half-line" style={{}}></i> </h2>
            <h2>Empty Stars:    <i className="ri-star-line" style={{}}></i>    <i className="ri-star-line" style={{}}></i>    <i className="ri-star-line"></i> </h2> */}

        </>
    )
}

export default Stars