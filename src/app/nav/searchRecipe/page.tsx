'use client'
import React from "react";
import { SearchBar } from "@/components";
import { useState,useEffect} from "react";
import {AiOutlineLoading} from 'react-icons/ai';
import {Card} from "@/components";
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
    const [mealList,setMealList] = useState([]);
    return <main className="pt-20 relative">
        <div className="py-5 z-40 w-full fixed t-0 r-0 bg-transparent flex flex-row justify-center items-center">
            <div className="w-full md:w-1/3"><SearchBar setMealList={setMealList} setLoader={setLoader}/></div>
        </div>
        <div className={`fixed top-1/2 space-x-4 left-1/2 ${(loader)? 'block':'hidden'} align-middle text-lime-500 font-bold`}><AiOutlineLoading className="animate-spin" size={30}/></div>
        <div className={`${(loader)? 'hidden':'flex'} w-full flex-col justify-center flex-wrap md:flex-row`}>
            {mealList.map((item:any,idx)=>{
            return <Card key={idx} meal={item}></Card>
        })}</div>       
    </main>
}

export default SearchRecipe;