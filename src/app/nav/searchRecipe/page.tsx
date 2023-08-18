'use client'
import React from "react";
import { SearchBar } from "@/components";
import { useState,useEffect} from "react";
import {AiOutlineLoading} from 'react-icons/ai';
import {MdExpandMore} from 'react-icons/md';
import {Card} from "@/components";
import { mealListFetch } from "@/api";
export const getStaticProps=async ()=>{
    const res=await fetch("https://api.edamam.com/api/recipes/v2?type=public&app_id=c558f139&app_key=1d0744b6782077580691fd347d9508d6&random=true&q=indian");
    const data=await res.json();
    console.log(data);
    return {
        props:{
            data
        }
    }
}

const SearchRecipe=()=>{ 
    const [loader,setLoader]=useState(false);
    const [moreLoader,setMoreLoader]=useState(false);
    const [searchQuery,setSearchQuery]=useState("");
    const [mealList,setMealList] = useState([]);
    const handleGetMore=async ()=>{
        setMoreLoader(true);
        const meals=await mealListFetch(searchQuery);
        const newArr:any=[];
        newArr.push(...mealList);
        newArr.push(...meals.hits);
        setMealList(newArr);
        setMoreLoader(false);
    }
    return <main className="pt-20 relative">
        <div className="py-5 z-40 w-full fixed t-0 r-0 bg-transparent flex flex-row justify-center items-center">
            <div className="w-full md:w-1/3">
                <SearchBar 
                searchQuery={searchQuery} 
                setSearchQuery={setSearchQuery}
                setMealList={setMealList} 
                setLoader={setLoader}/>
            </div>
        </div>
        <div className={`fixed top-1/2 space-x-4 left-1/2 ${(loader)? 'block':'hidden'} align-middle text-lime-500 font-bold`}><AiOutlineLoading className="animate-spin" size={30}/></div>
        <div className={`${(loader)? 'hidden':'flex'} w-full flex-col justify-center items-center flex-wrap md:flex-row md:justify-center`}>
            {mealList.map((item:any,idx)=>{
                return <Card key={idx} meal={item}></Card>
            })}
        </div>
        <div className={`${(mealList.length===0)? 'hidden':'block'} flex flex-row w-full justify-center items-center`}>
            {(moreLoader)? <AiOutlineLoading className="animate-spin text-lime-500" size={40}/>:<button onClick={()=>{handleGetMore()}}><MdExpandMore className="text-lime-500" size={40}/></button>}
        </div>               
    </main>
}

export default SearchRecipe;