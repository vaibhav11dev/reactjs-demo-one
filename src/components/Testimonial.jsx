import React, { Component, Fragment } from 'react';
import SectionTitle from './subcomponents/SectionTitle';
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import Slider from "react-slick";
import testimonialList from '../elements/TestimonialList';


export default class Testimonial extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                  breakpoint: 992,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
        };

        return (
            <section id="testimonials" className="testimonials section-bg">
                <div className="container">

                    <SectionTitle title='Testimonials' subtitle='Necessitatibus eius consequatur ex aliquid fuga eum quidem' />

                    <div className="testimonials-slider" data-aos="fade-up" data-aos-delay="100">
                        <Fragment>
                            <Slider {...settings}>
                                {
                                    testimonialList.map(
                                        (val, i) => {
                                            const author = val.author.split(' - ');
                                            return (
                                                <div className="testimonial-item" key={i}>
                                                    <p>
                                                        <FaQuoteLeft className='quote-icon-left' />
                                                        {val.title}
                                                        <FaQuoteRight className='quote-icon-right' />
                                                    </p>
                                                    <img src={require(`../assets/img/testimonials/testimonials-${i + 1}.jpg`)} className="testimonial-img" alt="" />
                                                    <h3>{author[0]}</h3>
                                                    <h4>{author[1]}</h4>
                                                </div>
                                            )
                                        }
                                    )
                                }

                            </Slider>
                        </Fragment>
                    </div>
                </div>
            </section>
        )
    }
}
