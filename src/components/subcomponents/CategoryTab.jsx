import React from 'react'

const CategoryTab = (props) => {
  return (
    <div className="row">
            <div className="col-lg-12">
                <ul id="portfolio-flters">
                    {
                        props.tabsData.map(
                            (val, i) => (
                                <li className={props.class === val ? 'filter-active' : ''} onClick={()=> props.filterCategory(val)} key={i}>{val}</li>
                            )
                        )
                    }
                </ul>
            </div>
        </div>
  )
}

export default CategoryTab