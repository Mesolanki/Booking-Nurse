import React from 'react'

const Servicescard = ({ icon, title, description }) => {
    return (
        <div>
            <div className="card">
                <div className="icon-container">
                    <div className="icon-bg"></div>
                    <img src={icon} alt={title} className="icon" />
                </div>
                <h3 className="card-title">{title}</h3>
                <p className="card-text">{description}</p>
                <button className="explore-btn">Explore More</button>
            </div>
        </div>
    )
}

export default Servicescard
