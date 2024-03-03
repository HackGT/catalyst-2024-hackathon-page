import React from 'react';
import { Link } from 'react-scroll';

const Header = () => {
    return (
        <nav className="fixed w-full z-50 hidden md:flex h-navBar bg-headerTeal py-4">
            <div className="container mx-auto px-4">
                <ul className="flex justify-between">
                    <li><Link to="front" smooth={true} duration={500} className="text-navText text-teal-900 font-coco hover:text-teal-600">HOME</Link></li>
                    <li><Link to="about" smooth={true} duration={500} className="text-navText text-teal-900 font-coco hover:text-teal-600">ABOUT</Link></li>
                    <li><Link to="tracks" smooth={true} duration={500} className="text-navText text-teal-900 font-coco hover:text-teal-600">TRACKS</Link></li>
                    <li><Link to="schedule" smooth={true} duration={500} className="text-navText text-teal-900 font-coco hover:text-teal-600">SCHEDULE</Link></li>
                    <li><Link to="faq" smooth={true} duration={500} className="text-navText text-teal-900 font-coco hover:text-teal-600">FAQ</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;