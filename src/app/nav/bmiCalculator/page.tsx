'use client'
import React,{useState} from 'react';

const BmiCalculator=()=>{
    const [weight,setWeight] = useState();
    const [height,setHeight] = useState();
    const handleClear=()=>{
    }
    return <main className='m-0 px-2 pt-24 flex flex-row justify-center'>
            <div className='mt-4 p-4 bg-white shadow-md flex flex-col space-y-2 w-5/6 md:w-1/3 md:mt-0'>
                <div className='flex flex-col justify-between items-center md:flex-row '>
                    <span className='font-semibold text-lime-700'>{`Your height (cm)`}</span>
                    <input id='height' type='number' value={height} min={120} max={220} required className='w-1/2  py-1 px-2 border border-b-2 border-slate-200 border-b-lime-600 rounded focus:outline-0 focus:border-lime-600'/>
                </div>
                <div className='flex flex-col justify-between items-center md:flex-row '>
                    <span className='font-semibold text-lime-700'>{`Your weight (kg)`}</span>
                    <input id='weight' type='number' value={weight}  min={30} max={200} required className='w-1/2 py-1 px-2 border border-b-2 border-slate-200 border-b-lime-600 rounded focus:outline-0 focus:border-lime-600' />
                </div>
                <div className=' flex flex-col items-center md:flex-row md:justify-between'>
                    <button  className='text-white bg-lime-500 font-semibold m-1 p-2 w-2/3 border rounded-md hover:bg-lime-600 md:w-1/2'>
                        Clear
                    </button>
                    <button className='text-white bg-lime-500 font-semibold m-1 p-2 w-2/3 border rounded-md hover:bg-lime-600 md:w-1/2'>
                        Calculator
                    </button>
                </div>
                <hr className='w-full border border-lime-600'/>
                <div className=''></div>
            </div>        
    </main>
}

export default BmiCalculator;