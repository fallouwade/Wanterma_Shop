import React, { useState } from 'react';

export default function Nav() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div>
            <nav className='bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 shadow-lg'>
                <div className='flex items-center justify-between px-24 py-5'>
                    {/* Brand */}
                    <div>
                        <span className='navbar-brand'>
                            <a href="" className='font-bold text-xl text-red-600'>Wanterma</a>
                        </span>
                    </div>

                    {/* Toggle Button for Mobile */}
                    <button
                        onClick={toggleMobileMenu}
                        type="button"
                        className="inline-flex items-center w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-default"
                        aria-expanded={isMobileMenuOpen}
                    >
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>

                    {/* Desktop Navigation */}
                    <div className='hidden sm:flex text-[#212529] space-x-8'>
                        <ul className="flex space-x-8">
                            <li><a href="" className='hover:text-red-700'>All</a></li>
                            <li><a href="" className='hover:text-red-600'>Men</a></li>
                            <li><a href="" className='hover:text-red-600'>Women</a></li>
                            <li><a href="" className='hover:text-red-600'>Children</a></li>
                            <li><a href="" className='hover:text-red-600'>Sale</a></li>
                            <li>
                                <a href="" className='hover:text-red-600 pr-2'>Chariot</a>
                                <span className="font-medium text-x text-white px-1 bg-red-500 rounded-md">0</span>
                            </li>
                        </ul>
                    </div>

                    {/* Mobile Navigation Drawer */}
                    <div
                        className={`fixed top-0 left-0 z-50 w-64 h-full bg-white shadow-lg  duration-300 ease-in-out ${
                            isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
                        } sm:hidden`}
                    >
                        <button
                            onClick={toggleMobileMenu}
                            className="absolute top-4 right-4 text-gray-700"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                        <div>
                            <ul className="flex flex-col text-[#212529] space-y-4 px-4 pt-6">
                                <li><a href="" className='hover:text-red-700'>All</a></li>
                                <li><a href="" className='hover:text-red-600'>Men</a></li>
                                <li><a href="" className='hover:text-red-600'>Women</a></li>
                                <li><a href="" className='hover:text-red-600'>Children</a></li>
                                <li><a href="" className='hover:text-red-600'>Sale</a></li>
                                <li>
                                    <a href="" className='hover:text-red-600 pr-2'>Chariot</a>
                                    <span className="font-medium text-x text-white px-1 bg-red-500 rounded-md">0</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}
