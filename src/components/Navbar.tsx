'use client'
import React from 'react';
import Link from 'next/link';
import {GiHotMeal} from 'react-icons/gi';

const Navbar=()=>{
    return <header className='z-50 bg-lime-400 text-white p-4 fixed shadow t-0 r-0 w-full flex flex-col space-y-2 items-center md:space-y-0 md:flex-row md:justify-between '>
        <div className="text-2xl font-semibold"><h1>Find My Recipe</h1></div>
        <ul className='flex flex-row space-x-4'>
            <Link href='/'>Home</Link>
            <Link href='/nav/searchRecipe'>Search</Link>
            <Link href=''>About</Link>
        </ul>
    </header>
}

export default Navbar;