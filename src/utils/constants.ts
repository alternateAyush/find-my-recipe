export const API_ID = process.env.FOOD_API_ID;
export const API_KEY = process.env.FOOD_API_KEY;
export const API_ROOT = `https://api.edamam.com/api/recipes/v2?type=public&app_id=${API_ID}&app_key=${API_KEY}&random=true`;

export const API_URLS = {
  query: (mealName?:string) => `${API_ROOT}&q=${mealName}`,
};
