import React, { Component } from 'react'

export class Navbar extends Component {
  render() {
    return (
        <>
        <div className="min-h-full">
        <nav className="bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                    <img className="h-8 w-8" src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Apple_News_icon_%28iOS%29.png" alt="NewsApp Icon"/>
                    <a href="/" className="text-white px-3 py-2 rounded-md text font-medium" aria-current="page">NewsApp</a>
                </div>
                <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6">
                    {/* <!-- Profile dropdown --> */}
                    <div className="ml-3 relative">
                        
                <div className="hidden md:block">
                    <div className="ml-10 flex items-center justify-items-center space-x-4">
                    {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                        <a href="/" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Top Headlines</a>

                        <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Sports</a>

                        <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Technology</a>

                        <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Politics</a>

                        <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">World</a>
                    </div>
                </div>
                    </div>
                </div>
                </div>
                <div className="-mr-2 flex md:hidden">
                {/* <!-- Mobile menu button --> */}
                <button type="button" className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    {/* <!--
                    Heroicon name: outline/menu

                    Menu open: "hidden", Menu closed: "block"
                    --> */}
                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    {/* <!--
                    Heroicon name: outline/x

                    Menu open: "block", Menu closed: "hidden"
                    --> */}
                    <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                </div>


                <div className="hidden md:block dropdown dropdown-hover">
                <label tabIndex="0" class="bg-gray-800 border-none btn m-1">India</label>
                <ul tabIndex="0" class="dropdown-content menu p-2 shadow bg-gray-800 text-white rounded-md w-52">
                    <li className="hover:bg-red-500 rounded"><a href="/">United States</a></li>
                    <li className="hover:bg-red-500 rounded"><a href="/">Canada</a></li>
                    <li className="hover:bg-red-500 rounded"><a href="/">Japan</a></li>
                    <li className="hover:bg-red-500 rounded"><a href="/">South Korea</a></li>
                </ul>
                </div>
            </div>
            </div>



            {/* <!-- Mobile menu, show/hide based on menu state. --> */}
            <div className="hidden md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                <a href="/" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Top Headlines</a>

                <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Sports</a>

                <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Technology</a>

                <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Politics</a>

                <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">World</a>
            </div>
            </div>
        </nav>
        </div>
        </>
    )
  }
}

export default Navbar