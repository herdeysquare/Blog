import React from 'react'


import "../css/card.css"

const Cards = ({ img, text, title, alt, id }) => {
    return (<>
        <div className='card'>
            <img src={img} alt={title} className='user' />
            <div className="class-info">
                <h3>{title}</h3>
                <p>{text}</p>
            </div>

        </div>
    </>
    )
}

export default Cards