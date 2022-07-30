import React from 'react'

const Categories = ({ categories, activeCategory, filterItem }) => {
    return (
        <div className='btn-container'>
            {categories.map((category, index) => {
                return (
                    <button type='button' className={
                        `${activeCategory === category ? "filter-btn active" : "filter-btn"}`
                    }
                        key={index} onClick={() => filterItem(category)}
                    >{category}</button>
                )
            })}

        </div>
    )
}

export default Categories
