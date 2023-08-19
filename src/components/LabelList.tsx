import React from "react";
import { Label } from ".";

const LabelList=({dietLabels,bgColor,textColor}:any)=>{
    return <div className='flex flex-row justify-center flex-wrap md:justify-start'>
    {dietLabels?.map((item:any,idx:any)=>{
        return <Label key={idx} title={item} bgColor={bgColor} textColor={textColor}/>
    })}
</div>
}

export default LabelList;