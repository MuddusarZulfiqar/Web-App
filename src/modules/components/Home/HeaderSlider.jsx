import React from 'react'
import {Link} from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function HeaderSlider() 
{
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:true
      };
    return (
        <>
           <div className="slider-area">
			<div className="block-slider block-slider4">
				<Slider {...settings} id="bxslider-home4">
					<li className="slickItems">
						<img src="/img/h4-slide.png" alt="Slide" />
						<div className="caption-group">
							<h2 className="caption title">
								iPhone <span className="primary">6 <strong>Plus</strong></span>
							</h2>
							<h4 className="caption subtitle">Dual SIM</h4>
							<Link className="caption button-radius" to="/"><span className="icon"></span>Shop now</Link>
						</div>
					</li>
					<li className="slickItems">
                        <img src="/img/h4-slide2.png" alt="Slide" />
						<div className="caption-group">
							<h2 className="caption title">
								by one, get one <span className="primary">50% <strong>off</strong></span>
							</h2>
							<h4 className="caption subtitle">school supplies & backpacks.*</h4>
							<Link className="caption button-radius" to="/"><span className="icon"></span>Shop now</Link>
						</div>
					</li>
					<li className="slickItems">
                        <img src="/img/h4-slide3.png" alt="Slide" />
						<div className="caption-group">
							<h2 className="caption title">
								Apple <span className="primary">Store <strong>Ipod</strong></span>
							</h2>
							<h4 className="caption subtitle">Select Item</h4>
							<Link className="caption button-radius" to="/"><span className="icon"></span>Shop now</Link>
						</div>
					</li>
					<li className="slickItems">
                        <img src="/img/h4-slide4.png" alt="Slide" />
						<div className="caption-group">
						  <h2 className="caption title">
								Apple <span className="primary">Store <strong>Ipod</strong></span>
							</h2>
							<h4 className="caption subtitle">& Phone</h4>
							<Link className="caption button-radius" to="/"><span className="icon"></span>Shop now</Link>
						</div>
					</li>
				</Slider>
			</div>
        </div> 
        </>
    )
}

export default HeaderSlider
