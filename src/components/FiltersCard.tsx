'use client'
import React,{useState} from "react";

const dietList = [
    "balanced",
    "high-fiber",
    "high-protien",
    "low-carb",
    "low-fat",
    "low-sodium"
]

const cuisineTypeList = [
    "American",
    "Asian",
    "British",
    "Caribbean",
    "Central Europe",
    "Chinese",  
    "Eastern Europe",  
    "French",  
    "Indian",  
    "Italian",  
    "Japanese",  
    "Kosher",  
    "Mediterranean",  
    "Mexican",  
    "Middle East",  
    "Nordic",  
    "South American",  
    "South East Asian",  
]

const mealTypeList = [
    "Breakfast",
    "Dinner",
    "Lunch",
    "Snack",
    "Teatime"
]

const dishTypeList=[
    "Biscuits and cookies",
    "Bread",
    "Cereals",
    "Condiments and sauces",
    "Desserts",
    "Drinks",
    "Main course",
    "Pancake",
    "Preps",
    "Preserve",
    "Salad",
    "Sandwiches",
    "Side dish",
    "Soup",
    "Starter",
    "Sweets"
]

const healthList = [
    "alcohol-cocktail",
    "alcohol-free",
    "celery-free",
    "crustacean-free",
    "dairy-free",
    "DASH",
    "egg-free",
    "fish-free",
    "fodmap-free",
    "gluten-free",
    "immuno-supportive",
    "keto-friendly",
    "kidney-friendly",
    "kosher",
    "low-fat-abs",
    "low-potassium",
    "low-sugar",
    "lupine-free",
    "Mediterranean",
    "mollusk-free",
    "mustard-free",
    "no-oil-added",
    "paleo",
    "peanut-free",
    "prescatarian",
    "pork-free",
    "red-meat-free",
    "sesame-free",
    "shellfish-free",
    "soy-free",
    "sugar-conscious",
    "sulfite-free",
    "tree-nut-free",
    "vegan",
    "vegetarian",
    "wheat-free",
]

type Props={
    searchQuery:string,
    setSearchQuery:any
}


const FiltersCard=({searchQuery,setSearchQuery}:Props)=>{
    const [diet,setDiet] = useState("balanced");
    const [cuisineType,setCuisine] = useState("American");
    const [mealType,setMealType] = useState("Breakfast");
    const [dishType,setDishType] = useState("Biscuits and Cookies");
    const [health,setHealth] = useState("alcohol-cocktail");
    const handleChangeCuisineType=(event:any)=>{
        console.log(event.target.value);
        setCuisine(event.target.value);
    }
    const handleChangeDiet=(event:any)=>{
        console.log(event.target.value);
        setDiet(event.target.value);
    }
    const handleChangeMealType=(event:any)=>{
        console.log(event.target.value);
        setMealType(event.target.value);
    }
    const handleChangeDishType=(event:any)=>{
        console.log(event.target.value);
        setDishType(event.target.value);
    }
    const handleChangeHealth=(event:any)=>{
        console.log(event.target.value);
        setHealth(event.target.value);
    }
    const handleClickApplyFilter=()=>{
        setSearchQuery(`&diet=${diet}&cuisineType=${cuisineType}&mealType=${mealType}&dishType=${dishType}&health=${health}`)
        console.log(searchQuery);
    }
    const dropDownCSS = "outline-none m-2 p-2 border-b-2 text-black font-bold border-black bg-transparent";
    const optionCSS = "text-black font-bold bg-lime-200 overflow-visible";
    return <div className='flex flex-col h-auto p-2 w-auto bg-lime-200 border rounded'>
        <div className="flex flex-col justify-stretch lg:flex-row lg:justify-between lg:items-center">
            <select className={dropDownCSS} onChange={handleChangeCuisineType}>
                {cuisineTypeList.map((item,idx)=>{
                    return <option className={optionCSS} key={idx} value={item}>{item}</option>
                })}
            </select>
            <select className={dropDownCSS} onChange={handleChangeDiet}>
                {dietList.map((item,idx)=>{
                    return <option className={optionCSS} key={idx} value={item}>{item}</option>
                })}
            </select>
        </div>
        <div className="flex flex-col justify-stretch lg:flex-row lg:justify-between lg:items-center">
            <select className={dropDownCSS} onChange={handleChangeMealType}>
                {mealTypeList.map((item,idx)=>{
                    return <option className={optionCSS} key={idx} value={item}>{item}</option>
                })}
            </select>
            <select className={dropDownCSS} onChange={handleChangeDishType}>
                {dishTypeList.map((item,idx)=>{
                    return <option className={optionCSS} key={idx} value={item}>{item}</option>
                })}
            </select>
        </div>        
        <div className="flex flex-col justify-stretch lg:flex-row lg:justify-between lg:items-center">
            <select className={dropDownCSS} onChange={handleChangeHealth}>
                {healthList.map((item,idx)=>{
                    return <option className={optionCSS} key={idx} value={item}>{item}</option>
                })}
            </select>
            <button onClick={handleClickApplyFilter} className="bg-lime-500 p-2 m-1 text-white font-bold border rounded">Apply Filters</button>
        </div>        
    </div>
}

export default FiltersCard;