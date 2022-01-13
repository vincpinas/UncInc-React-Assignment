import React from 'react'
import './Pagination.css'

function Pagination(props) {
    const findPageIndex = () => props.pages.findIndex(page => {
        return page.id === props.currentPage.data.id
    })

    const forward = () => {
        if(findPageIndex() < props.pages.length-1) {
            props.setCurrentPage({data:{...props.pages[findPageIndex()+1]}, href:`http://localhost:3000/#${props.pages[findPageIndex()+1].slug}`})
            window.location.href = `http://localhost:3000/#${props.pages[findPageIndex()+1].slug}`
        }
    }

    const backward = () => {
        if(findPageIndex() > 0) {
            props.setCurrentPage({data:{...props.pages[findPageIndex()-1]}, href:`http://localhost:3000/#${props.pages[findPageIndex()-1].slug}`})
            window.location.href = `http://localhost:3000/#${props.pages[findPageIndex()-1].slug}`
        }
    }
    return (
        <div className="pagination">
            <button className="pagination-link" onClick={()=>backward()}>←</button>
            {props.pages.map((page, index) => {
                if(props.currentPage.href.includes(page.slug)) {
                    return (
                        <a className="pagination-link-active" href={`#${page.slug}`} key={index} >
                            {page.id}
                        </a>
                    )
                }
                else {
                    return (
                        <a className="pagination-link" href={`#${page.slug}`} key={index} 
                           onClick={()=>props.setCurrentPage({data:{...page}, href:`http://localhost:3000/#${page.slug}`})}>
                            {page.id}
                        </a>
                    )
                }
            })}
            <button className="pagination-link" onClick={()=>forward()}>→</button>
        </div>
    )
}

export default Pagination;
