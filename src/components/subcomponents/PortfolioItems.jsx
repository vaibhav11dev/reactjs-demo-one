import React from 'react'
import { BiPlus, BiLink } from "react-icons/bi";

const PortfolioItems = (props) => {
    return (
        <div className="row portfolio-container">

            {
                props.portfolioItems.map(
                    (val, i) => (
                        <div className="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp" key={i}>
                            <div className="portfolio-wrap">
                                <figure>
                                    <img src={require(`../../assets/img/portfolio/portfolio-${i+1}.jpg`)} className="img-fluid" alt="" />
                                    <a href={require(`../../assets/img/portfolio/portfolio-${i+1}.jpg`)} data-gallery="portfolioGallery" className="link-preview portfolio-lightbox" title="Preview">
                                        <BiPlus />
                                    </a>
                                    <a href="portfolio-details.html" className="link-details" title="More Details">
                                        <BiLink />
                                    </a>
                                </figure>
                                <div className="portfolio-info">
                                    <h4><a href="portfolio-details.html">{val.title}</a></h4>
                                    <p>{val.category}</p>
                                </div>
                            </div>
                        </div>
                    )
                )
            }


        </div>
    )
}

export default PortfolioItems