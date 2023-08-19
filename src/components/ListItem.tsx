import react from 'react';
import Image from 'next/image';

type listItem={
    item:string,
    img:string,
}

const ListItem=({item,img}:listItem)=>{
    return <div className='flex flex-row bg-white shadow rounded my-2 text-xl p-3 border-l-2 border-b-2 border-lime-400 text-lime-800'>
        <div className='shrink-0 relative w-8 h-8 mr-2 border rounded-full shadow-md'><Image className='rounded-full object-fit' src={img} alt={item} fill/></div>
        <span>{item}</span>
        </div>
}

export default ListItem;