'use client'
import React from 'react'
import {BiSearch} from 'react-icons/bi'
import { useState } from 'react'
import { mealListFetch } from '@/api'
import {AiOutlineUp,AiOutlineDown} from 'react-icons/ai'
import { FiltersCard } from '.'

type Props={
    searchQuery:string,
    setSearchQuery:any,
    setLoader:any,
    setMealList:any
} 

const SearchBar=({searchQuery,setSearchQuery,setMealList,setLoader}:Props)=>{
    const [filtersCard,setFiltersCard] = useState(false);
    const handleOnChange=(e:any)=>{
        setSearchQuery(`&q=${e.target.value}`);
        console.log(searchQuery);
    }
    const handleSearch=async ()=>{
        console.log(searchQuery);
        setLoader(true);
        const meals=await mealListFetch(searchQuery);
        if(meals.success)
        {
            setMealList(meals.data.hits);
            setLoader(false);
        }        
    }
    return <div className='w-full flex flex-col justify-center items-center '>
        <div className='w-full flex flex-col justify-center items-center'>
            <div className='w-full flex flex-row justify-center items-stretch bg-white shadow rounded-full p-1'>
                <input onChange={(e)=>{handleOnChange(e)}} className='bg-white w-full text-base text-lime-700 py-1 px-2 focus:outline-0 border-l rounded-l-full border-white'/>
                <button onClick={()=>{handleSearch()}}className='text-lime-400 hover:text-lime-800 border-r rounded-r-full border-white'><BiSearch size={20}/></button>
            </div>
            <button onClick={()=>{setFiltersCard(!filtersCard)}}className='text-slate-900 bg-transparent border border-transparent rounded-full m-2 p-1 opacity-50'>
                {(filtersCard)? <AiOutlineUp size={20}/>:<AiOutlineDown size={20}/>}
            </button>
        </div>
        <div className={`${(filtersCard)? 'block' : 'hidden'} w-full bg-lime-200`}>
            <FiltersCard searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
        </div>
    </div>
}

export default SearchBar;