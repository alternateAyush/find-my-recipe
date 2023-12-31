import React from 'react';

const Label=({bgColor,title,textColor}:any)=>{
    return <div className={`m-1 py-1 px-2 rounded-full shrink-0 whitespace-nowrap ${bgColor} ${textColor} shadow`}>{title}</div>
}

export default Label;