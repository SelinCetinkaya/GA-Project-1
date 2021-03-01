# Recipe Finder

# Project Overview

## Project Name

[Recipe Finder](https://selincetinkaya.github.io/Recipe-Finder/)

## Project Description

Can't decide what to cook for dinner? Bored of your cookbooks? Stuck in a cooking rut? With Recipe Finder, users can easily search The Meal DB for recipes by meal name and category. Additionally, users can generate a random recipe. The search will result in a the title of the recipe(s), area the recipe is from, the category, a photo, and the full recipe ingredients and directions.

## API and Data Sample

The Meal DB
https://www.themealdb.com/api.php
Code snippet (by recipe name):

```{
    "meals": [
        {
            "idMeal": "52771",
            "strMeal": "Spicy Arrabiata Penne",
            "strDrinkAlternate": null,
            "strCategory": "Vegetarian",
            "strArea": "Italian",
            "strInstructions": "Bring a large pot of water to a boil. Add kosher salt to the boiling water, then add the pasta. Cook according to the package instructions, about 9 minutes.\r\nIn a large skillet over medium-high heat, add the olive oil and heat until the oil starts to shimmer. Add the garlic and cook, stirring, until fragrant, 1 to 2 minutes. Add the chopped tomatoes, red chile flakes, Italian seasoning and salt and pepper to taste. Bring to a boil and cook for 5 minutes. Remove from the heat and add the chopped basil.\r\nDrain the pasta and add it to the sauce. Garnish with Parmigiano-Reggiano flakes and more basil and serve warm.",
            "strMealThumb": "https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg",
            "strTags": "Pasta,Curry",
            "strYoutube": "https://www.youtube.com/watch?v=1IszT_guI08",
            "strIngredient1": "penne rigate",
```
The Meal DB
https://www.themealdb.com/api.php
Code snippet (by recipe category):
```
{
    "meals": [
        {
            "strMeal": "Baked salmon with fennel & tomatoes",
            "strMealThumb": "https://www.themealdb.com/images/media/meals/1548772327.jpg",
            "idMeal": "52959"
        },
        {
            "strMeal": "Cajun spiced fish tacos",
            "strMealThumb": "https://www.themealdb.com/images/media/meals/uvuyxu1503067369.jpg",
            "idMeal": "52819"
        },
```

Foodish random food photo API
https://foodish-api.herokuapp.com/
Code snippet:
```
{
    "image": "https://foodish-api.herokuapp.com/images/burger/burger60.jpg"
}
```


## Wireframes

[Wireframe](https://wireframe.cc/1wNLfi)

### MVP/PostMVP

#### MVP 

- Find and use 1 external api to fetch recipe name and category
- Allow user to search recipes by name of recipe (input)
- Allow user to search recipes by category (dropdown)
- Allow user to recieve a random recipe
- Clear previous recipe when searching for a new recipe
- Design for desktop and smartphone sizes

#### PostMVP  

- Full recipe hidden until user clicks a "view full recipe" button
- Second api to generate random food image at top of the page on load
- User can choose to keep the previously searched recipe on the page while searching for/listing more
- Animations
- Category API call will grab IDs and do another API call for the full recipe information

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Feb 22-23| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|Feb 23| Project Approval / Create HTML, CSS, and JS files| Complete
|Feb 24| API calls functioning, logging to console | Complete
|Feb 25| API calls rendering to DOM / Basic CSS  | Complete
|Feb 26| PostMVP / More Advanced CSS| Complete
|March 1| Presentations | Incomplete

## Priority Matrix

[Priority Matrix](https://lucid.app/lucidchart/invitations/accept/de05d9c2-ac7c-4925-9260-a697f7fcff41)

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Random Food Image | L | 3hrs| 2hrs | 2hrs |
| Input Form | H | 3hrs| 3hrs | 3hrs |
| Dropdown Menu | H | 3hrs| 2hrs | 2hrs |
| Food Name API Call | H | 3hrs| 2hrs | 2hrs |
| Food Category API Call | H | 4hrs| 5hrs | 5hrs |
| Random Recipe button/API Call | H | 3hrs| 3hrs | 3hrs |
| Append Recipe to DOM | H | 4hrs| 2.5hrs | 2.5hrs |
| Basic CSS | H | 5hrs| 5hrs | 6hrs |
| Responsive Design | H | 3hrs| 4hrs | 4hrs |
| Advanced CSS / Animations/Transitions | M | 4hrs| 3hrs | 3hrs |
| Clear Previous Results | M | 2hrs| 1.5hrs | 1.5hrs |
| Total |  | 37hrs| 34hrs | 34hrs |

## Code Snippet

I was really proud of being able to use a template literal to make this function look so clean. I originally was using document.querySelector and appending each individual item but changed it to this and am very happy with how it looks.

```
async function appendRecipe(meal) {
  const title = meal.strMeal
  const imgSRC = meal.strMealThumb
  const id = meal.idMeal
  let recipe =
    `<div class="recipe-element">
    <h4 class='title'>${title}</h4>
    <img class='image' src="${imgSRC}" alt="recipe-image"/>
    <button id="results-button" onclick="showFullRecipe(${id})">View Recipe</button>
    </div>`
  document.querySelector('.search-results').insertAdjacentHTML('beforeend', recipe)
  document.querySelector('.search-results').scrollIntoView()
}
```

## Change Log
 Instead of listing or expanding the recipe details on the page itself, I used a modal that opens when a button is clicked with all of the additional information. I thought this would be a visually more simple way to display the data.
