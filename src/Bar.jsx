import React from 'react'

const Bar = ({ quote, textColor, bgColor }) => {
    return (
        <div className="bar"
            style={{
                width: '100%',
                color: textColor,
                backgroundColor: bgColor
            }}>
            <h3>{quote}</h3>
        </div>
    )
}

export default Bar