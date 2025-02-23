import React from "react";
// import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Schedule1 from '../../images/Schedule1.svg';
// import Schedule2 from '../../images/Schedule2.svg';
// import Schedule3 from '../../images/Schedule3.svg';

const ScheduleSection = () => {
  // Settings for the carousel
  // const settings = {
  //     dots: true,
  //     speed: 500,
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //     autoplay: true,
  //     autoplaySpeed: 3000, // Speed at which to autoplay
  // };

  return (
    <div id="schedule" className="relative p-8 text-center">
      <h2 className="text-3xl md:text-6xl text-textColor font-racesport mb-3">
        SCHEDULE
      </h2>
      <div id="slider">
        {/* <Slider {...settings} className='flex items-center justify-center'>
                    <div className='h-screen flex items-center justify-center'>
                        <img src={Schedule1} alt="Schedule1" className='mx-auto' />
                    </div>
                    <div className='h-screen flex items-center justify-center'>
                        <img src={Schedule2} alt="Schedule2" className='mx-auto' />
                    </div>
                    <div className='h-screen flex items-center justify-center'>
                        <img src={Schedule3} alt="Schedule3" className='mx-auto' />
                    </div>
                </Slider> */}
        <p className="text-2xl md:text-4xl font-jetbrains text-textColor">
          Coming soon!!
        </p>
      </div>
    </div>
  );
};

export default ScheduleSection;
