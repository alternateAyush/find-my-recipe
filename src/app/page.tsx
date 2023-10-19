import Image from 'next/image'
import Link from 'next/link'
import backImg from '../static/findMyRecipeBackImg.jpg';

const ImgStyle:any={
  objectFit:'cover'
}

export default function Home() {
  return (
    <main className="relative  w-screen min-h-screen h-auto flex items-center  justify-center pt-28">
        <div className='-z-10 absolute top-0 left-0 w-full h-full'>
          <Image  src={backImg} alt='' fill={true} style={ImgStyle}/>
        </div>
        <div className=' w-3/4 bg-black-opacity text-white p-2 border border-transparent rounded shadow flex flex-col flex-start items-center '>
          <h2 className="text-2xl font-bold">Welcome to &quot;Find My Recipe&quot;!</h2>
          <p>Explore a world of culinary delights in our extensive dish collection. Whether you&apos;re seeking a specific recipe, navigating by dietary choices, hankering for a particular cuisine, or aiming for a healthier meal, we&apos;ve got you covered. With a diverse array of dishes categorized into 6 diet types, 18 cuisines, 5 meal types, 16 dish varieties, and tagged with 36 health labels, finding the perfect recipe is a breeze.</p>
          <h2 className="text-lg font-bold">Discover the Culinary Experience:</h2>
          <p>At &quot;Find My Recipe,&quot; we believe that food is more than sustenance; it&apos;s an adventure. For every recipe, you&apos;ll find valuable information:</p>
          <ul>
            <li><p><span className='font-bold'>Allergies Associated:</span>Identify potential allergens.</p></li>
            <li><p><span className='font-bold'>Health Benefits:</span>Learn how each dish contributes to your well-being.</p></li>
            <li><p><span className='font-bold'>Ingredients: </span>Get the complete list of what you&apos;ll need.</p></li>
            <li><p><span className='font-bold'>Nutrient Value Comparison: </span>See how the dish measures up to your daily nutritional requirements.</p></li>
          </ul>
          <p>Whether you&apos;re a seasoned chef or a kitchen novice, our user-friendly interface and extensive database make every cooking endeavor a delightful experience. Start your culinary journey today, searching by recipe name or exploring based on your preferences. &quot;Find My Recipe&quot; is here to help you find the perfect dish for every occasion. Happy cooking!</p>
          <Link href='/nav/searchRecipe' className="m-2 border border-transparent rounded p-2 bg-lime-400 text-white font-bold">Explore</Link>
        </div>  
    </main>
  )
}
