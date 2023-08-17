const baseUrl="https://api.edamam.com/api/recipes/v2?type=public&app_id=c558f139&app_key=1d0744b6782077580691fd347d9508d6&random=true";
const fetchData=async(url:string)=>{
    const res=await fetch(url);
    const data=await res.json();
    console.log(data.hits);
    return data;
}
export const mealListFetch=(searchQuery:string)=>{
    return fetchData(baseUrl+`baseUrl&q=${searchQuery}`);
}