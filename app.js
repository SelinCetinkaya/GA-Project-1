//========================================
//Random food image
//========================================

async function getRandomImage() {
  const randomImageUrl = 'https://foodish-api.herokuapp.com/api/'
  try {
    const randomImage = await axios.get(randomImageUrl)
    const appendImage = `<img id="header-image" src=${randomImage.data.image} alt="header-image"/>`
    document.querySelector('body').insertAdjacentHTML('afterbegin', appendImage)
    // console.log(randomImage)
  } catch (err) {
    console.error(err)
  }
}
getRandomImage()


//=========================================
//Search by name 
//=========================================

async function getRecipeName(input) {
  const nameEndpoint = `https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`
  try {
    const response = await axios.get(nameEndpoint)
    const mealsArr = response.data.meals
    mealsArr.forEach(meal => {
      // appendRecipe(meal.strMeal, meal.strMealThumb)
      appendRecipe(meal)
    });
    return response
  } catch (err) {
    console.error(err)
  }
}
// getRecipeName('spaghetti')

function getNameValue(e) {
  e.preventDefault
  removeRecipes()
  let inputValue = document.querySelector('#input').value
  getRecipeName(inputValue)
  document.querySelector('#input').value = ""
  console.log(inputValue)
}

const nameForm = document.querySelector('#search')
nameForm.addEventListener('click', getNameValue)

//==========================================
//Categories search dropdown
//==========================================


async function getCategories() {
  const categoriesUrl = 'https://www.themealdb.com/api/json/v1/1/categories.php'
  try {
    const response = await axios.get(categoriesUrl)
    const categoriesArray = response.data.categories
    // console.log(response)
    optionValue(categoriesArray)
    // console.log(categoriesArray)
  } catch (err) {
    console.error(err)
  }
}
getCategories()

function optionValue(categoryList) {
  const dropdown = document.querySelector('#categories')
  // console.log(dropdown)
  for (let i = 0; i < categoryList.length; i++) {
    const option = document.createElement('option')
    option.textContent = categoryList[i].strCategory
    getCategories.value = categoryList[i].strCategory
    // console.log(categoryList[i].strCategory)
    dropdown.append(option)
  }
}

function getCat(e) {
  e.preventDefault()
  removeRecipes()
  const categoryValue = document.querySelector('#categories').value
  getCategoryItems(categoryValue)
  document.querySelector('#categories').value = 'Choose a Category'
}

async function getCategoryItems(category) {
  const categoryItemUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
  // const idUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  try {
    const response = await axios.get(categoryItemUrl)
    const categoriesArr = response.data.meals
    categoriesArr.forEach(meal => {
      appendRecipe(meal)
    });
  } catch (err) {
    console.error(err)
  }
}


const categoryForm = document.querySelector('#category-search')
categoryForm.addEventListener('submit', getCat)

//=========================================
//Random recipe button
//=========================================

function getRandom(e) {
  e.preventDefault()
  removeRecipes()
  randomRecipe()
}

async function randomRecipe() {
  const randomUrl = 'https://www.themealdb.com/api/json/v1/1/random.php'
  try {
    const response = await axios.get(randomUrl)
    const random = response.data.meals
    // console.log(random)
    appendRecipe(random[0])
    console.log(response)
    return response
    // appendRecipe()
  } catch (err) {
    console.error(err)
  }
}
const randomButton = document.querySelector('#random')
randomButton.addEventListener('click', getRandom)


//==================================
//Append
//==================================
async function getFullRecipe(id) {
  // console.log(id)
  const fullRecipeUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  try {
    const response = await axios.get(fullRecipeUrl)
    // console.log(response)
    return response.data.meals[0].strSource
  } catch (err) {
    console.error(err)
  }
}

async function redirectToRecipe(meal) {
  // console.log(meal.idMeal)
  const source = meal.strSource || await getFullRecipe(meal.idMeal)
  if (!source) {
    alertFullRecipe(meal.idMeal)
  } else {
    const element = document.createElement('a')
    element.setAttribute('target', '_blank')
    element.setAttribute('href', source)
    element.click()
  }
}

async function appendRecipe(meal) {
  // console.log(meal)
  const title = meal.strMeal
  const imgSRC = meal.strMealThumb
  const el = document.createElement('div')
  el.className = "recipe-element"
  let recipe =
    `<h4 class='title'>${title}</h4>
    <img class='image' src="${imgSRC}" alt="recipe-image"/>`
  el.insertAdjacentHTML('beforeend', recipe)
  const moreInfoButton = document.createElement('button')
  moreInfoButton.innerHTML = "View More"
  moreInfoButton.className = 'view-more'
  moreInfoButton.addEventListener('click', () => { redirectToRecipe(meal) })
  el.append(moreInfoButton)
  document.querySelector('.search-results').append(el)
}


//========================================
//Remove
//========================================

function removeRecipes() {
  const remove = document.querySelector('.search-results')
  while (remove.lastChild) {
    remove.removeChild(remove.lastChild)
  }
}

//=================================================
//No Recipe Source
//=================================================

async function alertFullRecipe(id) {
  const instructionsUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  try {
    const response = await axios.get(instructionsUrl)
    const meal = response.data.meals[0]
    const name = meal.strMeal
    const instructions = meal.strInstructions
    const recipe = `Oh no! It looks like there is no link for the ${name} recipe! Here are the recipe details. Bon appetit!
Ingredients:
${getIngredientList(meal)}
${instructions}`
    alert(recipe)
  }
  catch (err) {
    console.error(err)
  }
}

function getIngredientList(meal) {
  let str = ''
  for (let i = 0; i < 21; i++) {
    const ingredient = meal[`strIngredient${i + 1}`]
    const measurement = meal[`strMeasure${i + 1}`]
    if (ingredient && measurement) {
      str = str.concat(`${measurement} ${ingredient} \n`)
    }
  }
  return str
}
