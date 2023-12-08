import React from 'react'

const Factoid = ( { factoid, color} ) => {
    return (
        <div className="facts">
            <h4
                style={{color: color }}>{factoid}</h4>
        </div>
    )
}

export default Factoid