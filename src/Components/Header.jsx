import React from 'react'
import { IoMenu } from "react-icons/io5";
import { BiFoodMenu } from "react-icons/bi";

function Header() {
  return (
    <header className='  w-full text-white  py-7 bg-[#67AD5B]'>
        <div className="container m-auto flex justify-between items-center">
            <div className=" flex gap-3 items-center">
                <BiFoodMenu size={35}/>
                <h1 className=' font-bold'>TO-DO APP</h1>
            </div>
            <div>
            <div className="relative mt-2 rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <span className="text-gray-500 sm:text-sm"></span>
                </div>
                <input
                id="price"
                name="price"
                type="text"
                placeholder="Search"
                className="block outline-none w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset placeholder:text-gray-400  sm:text-sm sm:leading-6"
                />
            </div>
            </div>
            <IoMenu size={35} className=' cursor-pointer' />
        </div>
    </header>
  )
}

export default Header