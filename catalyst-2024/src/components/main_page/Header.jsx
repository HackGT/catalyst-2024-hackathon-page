import React from 'react';

const Header = () => {
    return (
        <nav className="fixed top-0 w-full z-50 hidden md:flex h-navBar bg-headerTeal py-4">
            <div className="container mx-auto px-4">
                <ul className="flex justify-between">
                    <li><a href="/" className="text-navText text-teal-900 font-coco hover:text-teal-600">HOME</a></li>
                    <li><a href="/about" className="text-navText text-teal-900 font-coco hover:text-teal-600">ABOUT</a></li>
                    <li><a href="/tracks" className="text-navText text-teal-900 font-coco hover:text-teal-600">TRACKS</a></li>
                    <li><a href="/schedule" className="text-navText text-teal-900 font-coco hover:text-teal-600">SCHEDULE</a></li>
                    <li><a href="/faq" className="text-navText text-teal-900 font-coco hover:text-teal-600">FAQ</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;
