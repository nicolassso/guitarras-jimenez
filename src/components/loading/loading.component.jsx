import React from 'react'
import './loading.styles.scss'

function Loading() {
    return (
        <div className='loading-page'>
            <div className="loading-content">
                <div className="spin"></div>
            </div>
        </div>
    )
}

export default Loading;