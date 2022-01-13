import React, { useState } from 'react'
import './Pagination.css'

function Pagination(props) {
    const [currentPage, setCurrentPage] = useState(window.location.href);
    return (
        <div className="pagination">
            {props.pages.map((page, index) => {
                if(currentPage.includes(page.slug)) {
                    return (
                        <a className="pagination-link-active" href={`#${page.slug}`}>
                            {index+1}
                        </a>
                    )
                }
                else {
                    return (
                        <a className="pagination-link" href={`#${page.slug}`} onClick={()=>setCurrentPage(page.slug)}>
                            {index+1}
                        </a>
                    )
                }
            })}
        </div>
    )
}

export default Pagination;
