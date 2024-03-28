import React from 'react';
// Import Slider and necessary CSS
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Schedule1 from '../../images/Schedule1.svg';
import Schedule2 from '../../images/Schedule2.svg';
import Schedule3 from '../../images/Schedule3.svg';

const ScheduleSection = () => {
    // Settings for the carousel
    const settings = {
        dots: true, // Show dot indicators at the bottom
        infinite: true, // Infinite looping
        speed: 500, // Transition speed
        slidesToShow: 1, // Number of slides to show at a time
        slidesToScroll: 1, // Number of slides to scroll on each swipe
        autoplay: false, // Enable autoplay
        // autoplaySpeed: 3000, // Speed at which to autoplay
    };

    return (
        <div id="schedule" className="relative p-10 text-center">
            <h2 className="text-3xl md:text-6xl text-textColorDark font-coco font-bold mb-3">SCHEDULE - COMING SOON!</h2>
            <p className="text-xl md:text-3xl italic font-bubblegum">
                *subject to change as details arrive <br /> and will be updated accordingly
            </p>
            {/* Carousel */}
            <div id="slider">
                <Slider {...settings} className='h-screen flex items-center justify-center'>
                    <div className='h-screen flex items-center justify-center'>
                        <img src={Schedule1} alt="Schedule1" className='h-screen flex items-center justify-center'/>
                    </div>
                    <div>
                        <img src={Schedule2} alt="Schedule2" />
                    </div>
                    <div>
                        <img src={Schedule3} alt="Schedule3" />
                    </div>
                    {/* Add more slides as needed */}
                </Slider>
            </div>
            
        </div>
    );
};

export default ScheduleSection;