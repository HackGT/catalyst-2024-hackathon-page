import React from 'react';
// Import Slider and necessary CSS
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Stingray from '../../images/Stingray.svg';
import Bubbles from '../../images/Bubbles.png';
import Shell from '../../images/Shell.svg';

const ScheduleSection = () => {
    // Settings for the carousel
    const settings = {
        dots: true, // Show dot indicators at the bottom
        infinite: true, // Infinite looping
        speed: 500, // Transition speed
        slidesToShow: 1, // Number of slides to show at a time
        slidesToScroll: 1, // Number of slides to scroll on each swipe
        autoplay: true, // Enable autoplay
        autoplaySpeed: 3000, // Speed at which to autoplay
    };

    return (
        <div id="schedule" className="relative p-10 text-center">
            <h2 className="text-3xl md:text-6xl text-textColorDark font-coco font-bold mb-3">SCHEDULE - COMING SOON!</h2>
            <p className="text-xl md:text-3xl italic font-bubblegum">
                *subject to change as details arrive <br /> and will be updated accordingly
            </p>
            {/* Carousel */}
            <Slider {...settings}>
                <div>
                    <img src={Stingray} alt="Stingray" />
                </div>
                <div>
                    <img src={Bubbles} alt="Bubbles" />
                </div>
                <div>
                    <img src={Shell} alt="Shell" />
                </div>
                {/* Add more slides as needed */}
            </Slider>
        </div>
    );
};

export default ScheduleSection;