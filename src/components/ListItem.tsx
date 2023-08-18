import react from 'react';

const ListItem=({item,img}:any)=>{
    return <div className='bg-white text-black shadow rounded my-2 text-xl p-3 border-b-2 border-lime-400'>
        <div className=''></div>
        <span>{item}</span>
        </div>
}

export default ListItem;