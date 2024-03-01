import React from 'react';

const Header = () => {
    return (
        <nav className="bg-teal-200 py-4">
            <ul className="flex justify-center space-x-4">
                <li><a href="/" className="text-teal-900 hover:text-teal-600">HOME</a></li>
                <li><a href="/about" className="text-teal-900 hover:text-teal-600">ABOUT</a></li>
                <li><a href="/tracks" className="text-teal-900 hover:text-teal-600">TRACKS</a></li>
                <li><a href="/schedule" className="text-teal-900 hover:text-teal-600">SCHEDULE</a></li>
                <li><a href="/faq" className="text-teal-900 hover:text-teal-600">FAQ</a></li>
            </ul>
        </nav>
    );
};

export default Header;