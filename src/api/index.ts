const apiId=process.env.NEXT_PUBLIC_FOOD_API_ID
const apiKey=process.env.NEXT_PUBLIC_FOOD_API_KEY
const baseUrl=`https://api.edamam.com/api/recipes/v2?type=public&app_id=${apiId}&app_key=${apiKey}`;
const fetchData=async(url:string)=>{
    try{
        const res=await fetch(url);
        const data=await res.json();
        console.log(data.hits);
        return {data:data,success:true};
    }
    catch(e)
    {
        return {success:false};
    }    
}
export const mealListFetch=(searchQuery:string)=>{
    return fetchData(`${baseUrl}&q=${searchQuery}&random=false`);
}
export const moreMealListFetch=(searchQuery:string)=>{
    return fetchData(`${baseUrl}&q=${searchQuery}&random=true`);
}
export const mealRecipeFetch=(mealId:any)=>{
    return fetchData(`https://api.edamam.com/api/recipes/v2/${mealId}?type=public&app_id=${apiId}&app_key=${apiKey}`);
}