'use client'
import React from 'react'
import {BiSearch} from 'react-icons/bi'
import { useState } from 'react'
import { mealListFetch } from '@/api'

type Props={
    setLoader:any,
    setMealList:any
} 

const SearchBar=({setMealList,setLoader}:Props)=>{
    const [searchQuery,setSearchQuery]=useState("");
    const handleOnChange=(e:any)=>{
        setSearchQuery(e.target.value);
    }
    const handleSearch=async ()=>{
        setLoader(true);
        const meals=await mealListFetch(searchQuery);
        setMealList(meals.hits);
        setLoader(false);
    }

    return <div className='w-full flex flex-row justify-center items-stretch bg-slate-100 shadow rounded-full p-1'>
        <input onChange={(e)=>{handleOnChange(e)}} className='bg-slate-100 w-full text-base text-lime-700 py-1 px-2 focus:outline-0 border-l rounded-l-full'/>
        <button onClick={()=>{handleSearch()}}className='text-lime-400 hover:text-lime-800 border-r rounded-r-full'><BiSearch size={20}/></button>
    </div>
}

export default SearchBar;