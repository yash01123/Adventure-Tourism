import React from 'react'

const Navbar = () => {
  return (
    <div className="bg-white lg:pb-">
    <div className="mx-auto max-w-screen-2xl px- md:px-8">
      <header className="flex items-center justify-between py-1 md:py-1">
        {/* logo - start */}
        <a
          href="/"
          className="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl"
          aria-label="logo"
        >
          <svg
            width={95}
            height={94}
            viewBox="0 0 95 94"
            className="h-auto w-6 text-indigo-500"
            fill="currentColor"
            xmlns="https://www.svgrepo.com/show/530664/genetic-research.svg"
          >
            <path d="M96 0V47L48 94H0V47L48 0H96Z" />
          </svg>
          NUkkkad Blog
        </a>
        {/* logo - end */}
        {/* nav - start */}
        <nav className="hidden gap-12 lg:flex">
          <a
            href="#"
            className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
          >
            Home
          </a>
          <a
            href="#"
            className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
          >
            About
            
          </a>
          <a
            href="#"
            className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
          >
            Contact
          </a>
          <a
            href="#"
            className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
          >
            
          </a>
        </nav>
        {/* nav - end */}
        {/* buttons - start */}
        <div className="-ml-8 hidden flex-col gap-2.5 sm:flex-row sm:justify-center lg:flex lg:justify-start">
          <a
            href="#"
            className="inline-block rounded-lg px-4 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:text-indigo-500 focus-visible:ring active:text-indigo-600 md:text-base"
          >
            Log In
          </a>
          <a
            href="#"
            className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
          >
            Sign up
          </a>
        </div>
       
       
      </header>
      
    </div>
  </div>
  
  )
}

export default Navbar;