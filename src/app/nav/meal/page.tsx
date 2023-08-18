'use client'
import React,{useState,useEffect} from 'react';
import { mealRecipeFetch } from '@/api';
import { AiOutlineLoading } from 'react-icons/ai';
import Image from 'next/image';
import {useSearchParams } from 'next/navigation';
import { Label,ListItem } from '@/components';
const temp:any={};
const Meal=()=>{
    const searchParams = useSearchParams();
    const mealId = searchParams.get('mealId');
    // const data = router.query;
    const [loader,setLoader] = useState(true);
    const [recipe,setRecipe] = useState(temp);
    const [thumbnail,setThumbnail] = useState("");
    useEffect(()=>{
        console.log(mealId);
        const fetchRecipe=async ()=>{
            setLoader(true);
            const res=await mealRecipeFetch(mealId);
            setRecipe(res.recipe); 
            console.log(res.recipe.image);          
            setLoader(false);
        }
        fetchRecipe();
    },[])
    return (loader)?
        <div className={`fixed top-1/2 space-x-4 left-1/2 block align-middle text-lime-500 font-bold`}>
            <AiOutlineLoading className="animate-spin" size={30}/>
        </div> :
        <main className='relative pt-24 flex flex-col px-4'>    
        <div className='flex flex-col justify-center items-center md:flex-row  md:justify-start'>
            <div className='relative m-2.5 m-l-0 h-400 w-full shrink-0  md:w-400 border-2 rounded-md overflow-hidden shadow-md border-white'>
                <Image src={recipe.image} alt={recipe.label} className='object-contain' fill/>
            </div>
            <div className='flex flex-col items-center'>
                <h1 className='text-4xl text-lime-600 font-bold my-2'>{recipe.label}</h1>
                <div className='flex flex-col'>
                    <div className='flex flex-row justify-start flex-wrap'>
                        {recipe.cautions?.map((item:any,idx:any)=>{
                            return <Label key={idx} title={item} bgColor="bg-red-600" textColor="text-white"/>
                        })}
                    </div>
                    <div className='flex flex-row justify-start flex-wrap'>
                        {recipe.dietLabels?.map((item:any,idx:any)=>{
                            return <Label key={idx} title={item} bgColor="bg-emerald-400" textColor="text-white"/>
                        })}
                    </div>
                    <div className='flex flex-row flex-wrap'>
                        {recipe.healthLabels?.map((item:any,idx:any)=>{
                            return <Label key={idx} title={item} bgColor="bg-green-400" textColor="text-white"/>
                        })}
                    </div>
                </div>
            </div>            
        </div>
        <div className='flex flex-col my-3 w-full items-center md:items-start'>
            <h1 className='text-3xl text-lime-600 font-semibold my-2'>Ingredients</h1>
            <div className='flex flex-col w-full'>
                {recipe.ingredients?.map((item:any,idx:any)=>{
                    return <ListItem key={idx} item={item?.text} img={item?.img}/>
                })}
            </div>
        </div>
    </main>
}

export default Meal;