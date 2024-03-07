import React from 'react';
import { Link } from 'react-scroll';

const Header = () => {
    return (
        <nav className="fixed w-full z-50 hidden md:flex h-navBar bg-headerTeal drop-shadow-md py-4">
            <div className="container mx-auto px-4">
                <ul className="flex justify-between">
                    <li><a href="/" className="text-navText text-teal-900 font-coco hover:text-teal-600"><Link to="home" spy={true} smooth={true} duration={500} offset={-50}>HOME</Link></a></li>
                    <li><a href="/about" className="text-navText text-teal-900 font-coco hover:text-teal-600"><Link to="about" spy={true} smooth={true} duration={500} offset={-75}>ABOUT</Link></a></li>
                    <li><a href="/tracks" className="text-navText text-teal-900 font-coco hover:text-teal-600"><Link to="tracks" spy={true} smooth={true} duration={500} offset={-50}>TRACKS</Link></a></li>
                    <li><a href="/schedule" className="text-navText text-teal-900 font-coco hover:text-teal-600"><Link to="schedule" spy={true} smooth={true} duration={500} offset={-50}>SCHEDULE</Link></a></li>
                    <li><a href="/faq" className="text-navText text-teal-900 font-coco hover:text-teal-600"><Link to="faq" spy={true} smooth={true} duration={500} offset={-50}>FAQ</Link></a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;