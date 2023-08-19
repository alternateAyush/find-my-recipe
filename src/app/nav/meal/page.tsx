'use client'
import React,{useState,useEffect} from 'react';
import { mealRecipeFetch } from '@/api';
import { AiOutlineLoading } from 'react-icons/ai';
import Image from 'next/image';
import {useSearchParams } from 'next/navigation';
import {ListItem,LabelList,CollapsableList} from '@/components';
import Link from 'next/link';
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
            if(res.success)
            {
                setRecipe(res.data.recipe); 
                console.log(res.data.recipe.image);          
                setLoader(false);
            }            
        }
        fetchRecipe();
    },[])
    return (loader)?
        <div className={`fixed top-1/2 space-x-4 left-1/2 block align-middle text-lime-500 font-bold`}>
            <AiOutlineLoading className="animate-spin" size={30}/>
        </div> :
        <main className='relative pt-24 flex flex-col px-4 pb-4'>    
        <div className='flex flex-col justify-center items-center md:flex-row  md:justify-start'>
            <div className='relative m-2.5 m-l-0 h-400 w-full shrink-0  md:w-400 border-2 rounded-md overflow-hidden shadow-md border-white'>
                <Image src={recipe.image} alt={recipe.label} className='object-contain' fill/>
            </div>
            <div className='flex flex-col items-center md:items-start'>
                <h1 className='text-4xl text-lime-600 font-bold m-2'>{recipe.label}</h1>
                <div className='flex flex-col'>
                    <LabelList dietLabels={recipe.cautions} bgColor="bg-red-600" textColor="text-white"/>
                    <LabelList dietLabels={recipe.dietLabels} bgColor="bg-emerald-400" textColor="text-white"/>
                    <LabelList dietLabels={recipe.healthLabels} bgColor="bg-green-400" textColor="text-white"/>
                </div>
            </div>            
        </div>
        <div className='flex flex-col my-3 w-full items-center md:items-start'>
            <h1 className='text-3xl text-lime-600 font-semibold my-2'>Ingredients</h1>
            <div className='flex flex-col w-full'>
                {recipe.ingredients?.map((item:any,idx:any)=>{
                    return <ListItem key={idx} item={item?.text} img={item?.image}/>
                })}
            </div>
        </div>
        <div>
            <CollapsableList title="Total Nutrients" nutrientsList={recipe.digest}/>
        </div>
        <div className='flex flex-row justify-center items-center p-2 text-lime-800'>            
            <Link href={recipe.url} target='_blank' className='hover:text-lime-500'>
                <span>{`source: ${recipe.source}`}</span>
            </Link>
        </div>
    </main>
}

export default Meal;