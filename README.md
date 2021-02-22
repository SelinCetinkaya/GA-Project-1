# GA-Project-1

# Project Overview

## Project Name

The name of your project with deployed URL.

## Project Description

Easily search The Meal DB for recipes by meal name and category. Additionally, users can generate a random recipe. The search will result in a the title of the recipe(s), area the recipe is from, the category, a photo, and the full recipe ingredients and directions.

## API and Data Sample

The Meal DB
https://www.themealdb.com/api.php
Code snippet:

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
            "strIngredient2": "olive oil",
            "strIngredient3": "garlic",
            "strIngredient4": "chopped tomatoes",
            "strIngredient5": "red chile flakes",
            "strIngredient6": "italian seasoning",
            "strIngredient7": "basil",
            "strIngredient8": "Parmigiano-Reggiano",
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

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP 

- Find and use 2 external apis
- Render random food image on page load
- Allow user to search recipes by name of recipe (input)
- Allow user to search recipes by category (dropdown)
- Category API call will grab recipe names and do another API call for the names of those recipes
- Allow user to recieve a random recipe
- Clear previous recipe when searching for a new recipe

#### PostMVP  

- Full recipe hidden until user clicks a "view full recipe" button
- User can choose to keep the previously searched recipe on the page while searching for/listing more

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Feb 22-23| Prompt / Wireframes / Priority Matrix / Timeframes | Incomplete
|Feb 23| Project Approval / Create HTML, CSS, and JS files| Incomplete
|Feb 24| API calls functioning, logging to console | Incomplete
|Feb 25| API calls rendering to DOM / Basic CSS  | Incomplete
|Feb 26| PostMVP / More Advanced CSS| Incomplete
|March 1| Presentations | Incomplete

## Priority Matrix

[Priority Matrix](https://lucid.app/lucidchart/invitations/accept/f750c208-638c-47cc-acc3-f4e772128670)

## Timeframes

Tell us how long you anticipate spending on each area of development. Be sure to consider how many hours a day you plan to be coding and how many days you have available until presentation day.

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Throughout your project, keep track of your Time Invested and Actual Time and update your README regularly.

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Random Food Image | H | 3hrs| hrs | hrs |
| Input Form | H | 3hrs| hrs | hrs |
| Dropdown Menu | H | 3hrs| hrs | hrs |
| Food Name API Call | H | 3hrs| hrs | hrs |
| Food Category API Call | H | 4hrs| hrs | hrs |
| Append Recipe to DOM | H | 4hrs| hrs | hrs |
| Basic CSS | H | 3hrs| hrs | hrs |
| Advanced CSS | H | 4hrs| hrs | hrs |
| Clear Previous | H | 1hrs| hrs | hrs |
| Full Recipe button | H | 3hrs| hrs | hrs |
| Total | H | 31hrs| hrs | hrs |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  
