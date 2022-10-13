import React from 'react'

function SectionTitle(props) {
    return (
        <div className="section-title">
            <h2>{props.title}</h2>
            <p>{props.subtitle}</p>
        </div>
    )
}

export default SectionTitle