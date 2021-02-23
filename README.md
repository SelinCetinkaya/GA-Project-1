# Recipe Finder

# Project Overview

## Project Name

Recipe Finder

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
- Category API call will grab recipe names and do another API call for the names of those recipes
- Allow user to recieve a random recipe
- Clear previous recipe when searching for a new recipe
- Designed for desktop and smartphone sizes

#### PostMVP  

- Full recipe hidden until user clicks a "view full recipe" button
- Second api to generate random food image at top of the page on load
- User can choose to keep the previously searched recipe on the page while searching for/listing more
- Animations

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Feb 22-23| Prompt / Wireframes / Priority Matrix / Timeframes | Incomplete
|Feb 23| Project Approval / Create HTML, CSS, and JS files| Incomplete
|Feb 24| API calls functioning, logging to console | Incomplete
|Feb 25| API calls rendering to DOM / Basic CSS  | Incomplete
|Feb 26| PostMVP / More Advanced CSS| Incomplete
|March 1| Presentations | Incomplete

## Priority Matrix

[Priority Matrix](https://lucid.app/lucidchart/invitations/accept/de05d9c2-ac7c-4925-9260-a697f7fcff41)

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Random Food Image | L | 3hrs| hrs | hrs |
| Input Form | H | 3hrs| hrs | hrs |
| Dropdown Menu | H | 3hrs| hrs | hrs |
| Food Name API Call | H | 3hrs| hrs | hrs |
| Food Category API Call | H | 4hrs| hrs | hrs |
| Random Recipe button/API Call | H | 3hrs| hrs | hrs |
| Append Recipe to DOM | H | 4hrs| hrs | hrs |
| Basic CSS | H | 3hrs| hrs | hrs |
| Advanced CSS / Animations/Transitions | M | 4hrs| hrs | hrs |
| Clear Previous Results | M | 1hrs| hrs | hrs |
| Full Recipe button | L | 3hrs| hrs | hrs |
| Total |  | 34hrs| hrs | hrs |

## Code Snippet


## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  
