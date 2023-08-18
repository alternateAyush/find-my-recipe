import React from 'react';

const Label=({bgColor,title,textColor}:any)=>{
    return <div className={`m-1 py-1 px-2 rounded-full ${bgColor} ${textColor} shadow`}>{title}</div>
}

export default Label;