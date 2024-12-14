import Image from 'next/image'
import React from 'react'
import SearchInput from './SearchInput'
import { IoChevronDownSharp, IoLocationOutline } from "react-icons/io5";
import UsersNavigation from './UsersNavigation';
import { FaHamburger } from 'react-icons/fa';

export default function MiddleHeader() {
  return (
    <div className='flex my-4 items-center justify-between'>
      <button className='lg:hidden px-2'>
        <FaHamburger className='text-2xl'/>
      </button>
      <div className='w-full  md:w-auto flex justify-center'>
        <Image alt='logo' src={'/logo/logo.svg fill.png'} width={150} height={150} />
      </div>
      <div className=' flex-1 flex lg:px-10 gap-x-10'>
        <SearchInput />
        <div className='lg:flex gap-x-1 items-center border-gray border shadow-md px-2 hidden'>
          <IoLocationOutline className='' /> 
          <span className='text-green  font-semibold'>Your location</span>
          <IoChevronDownSharp />

        </div>
      </div>
      <div>
        <UsersNavigation />
      </div>
    </div>
  )
}
