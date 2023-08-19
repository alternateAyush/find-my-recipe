'use client'
import React from 'react'
import {BiSearch} from 'react-icons/bi'
import { useState } from 'react'
import { mealListFetch } from '@/api'

type Props={
    searchQuery:string,
    setSearchQuery:any,
    setLoader:any,
    setMealList:any
} 

const SearchBar=({searchQuery,setSearchQuery,setMealList,setLoader}:Props)=>{
    const handleOnChange=(e:any)=>{
        setSearchQuery(e.target.value);
    }
    const handleSearch=async ()=>{
        setLoader(true);
        const meals=await mealListFetch(searchQuery);
        if(meals.success)
        {
            setMealList(meals.data.hits);
            setLoader(false);
        }        
    }
    return <div className='w-full flex flex-row justify-center items-stretch bg-white shadow rounded-full p-1'>
        <input onChange={(e)=>{handleOnChange(e)}} className='bg-white w-full text-base text-lime-700 py-1 px-2 focus:outline-0 border-l rounded-l-full border-white'/>
        <button onClick={()=>{handleSearch()}}className='text-lime-400 hover:text-lime-800 border-r rounded-r-full border-white'><BiSearch size={20}/></button>
    </div>
}

export default SearchBar;