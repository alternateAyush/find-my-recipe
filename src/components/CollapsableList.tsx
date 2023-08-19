'use client'
import React,{useState} from "react";
import {AiOutlineDown,AiOutlineUp} from 'react-icons/ai'
import {BsFillCaretDownFill,BsFillCaretUpFill} from 'react-icons/bs';

const CollapsableList=({title,nutrientsList}:any)=>{
    const [hide,setHide] = useState(true);
    return <div className="shadow-md rounded-md">
        <div className={`border bg-lime-400 border-lime-400  ${(hide)? 'rounded-md':'rounded-t-md'} flex flex-row items-center justify-between`}>
            <h1 className="text-3xl text-white font-semibold m-2">{title}</h1>
            {(hide)? 
                <button onClick={()=>{setHide(false)}}className='hover:text-slate-100 text-white m-2'><BsFillCaretDownFill size={25}/></button>:
                <button onClick={()=>{setHide(true)}}className='hover:text-slate-100 text-white m-2'><BsFillCaretUpFill size={25}/></button>
            }
        </div>
        <div className={`${(hide)? 'h-0 ':'h-auto border-b-2'} flex flex-col space-y-2 overflow-hidden bg-white  border-lime-400 rounded-b-md`}>
            {nutrientsList?.map((nutrient:any,idx:any)=>{
                return <div key={idx} className="p-2 w-full relative border-b-2 border-lime-200">
                    <h1 className="my-2 text-xl font-semibold text-lime-600">{nutrient.label}</h1> 
                    <div className="flex flex-col justify-between space-y-2 items-center text-lime-800 font-semibold px-2 md:flex-row md:space-y-0">
                        <div className="flex flex-row justify-between w-full md:w-1/3">
                            <span>Total</span>
                            <span>{`${nutrient.total.toFixed(2)} ${nutrient.unit}`}</span>
                        </div>
                        <div className="none md:block md:h-5 rounded md:border-2 md:border-lime-200"></div>
                        <div className="block w-5/6 border-2 border-lime-200 rounded-full md:hidden"></div>
                        <div className="flex flex-row justify-between w-full md:w-1/3">
                            <span>Daily</span>
                            <span>{`${nutrient.daily.toFixed(2)} %`}</span>
                        </div>                       
                    </div>                   
                </div>
            })}
        </div>
    </div>
}

export default CollapsableList;