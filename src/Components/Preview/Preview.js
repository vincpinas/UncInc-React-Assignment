import React from 'react'
import './Preview.css'

function Preview(props) {
    return (
        <div className="preview">
            <p>Name: {props.currentPage.data.name}</p>
            <p>Personality: {props.currentPage.data.personality}</p>
            <p>Slug: {props.currentPage.data.slug}</p>
            <p>Current Page: {props.currentPage.href}</p>
        </div>
    )
}

export default Preview
