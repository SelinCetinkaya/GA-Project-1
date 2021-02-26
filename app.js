//========================================
//Random food image
//========================================

async function getRandomImage() {
  const randomImageUrl = 'https://foodish-api.herokuapp.com/api/'
  try {
    const randomImage = await axios.get(randomImageUrl)
    const appendImage = `<img id="header-image" src=${randomImage.data.image} alt="header-image"/>`
    document.querySelector('body').insertAdjacentHTML('afterbegin', appendImage)
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
      appendRecipe(meal)
    });
    return response
  } catch (err) {
    console.error(err)
  }
}

function getNameValue(e) {
  e.preventDefault
  removeRecipes()
  let inputValue = document.querySelector('#input').value
  getRecipeName(inputValue)
  document.querySelector('#input').value = ""
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
    optionValue(categoriesArray)
  } catch (err) {
    console.error(err)
  }
}
getCategories()

function optionValue(categoryList) {
  const dropdown = document.querySelector('#categories')
  for (let i = 0; i < categoryList.length; i++) {
    const option = document.createElement('option')
    option.textContent = categoryList[i].strCategory
    getCategories.value = categoryList[i].strCategory
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

//========================= Modal stuff
//https://www.w3schools.com/howto/howto_css_modals.asp

const modal = document.querySelector('#my-modal')
const closeButton = document.querySelector('#close-button')

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

closeButton.onclick = function() {
  modal.style.display = "none";
}

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
  const fullRecipeUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  try {
    const response = await axios.get(fullRecipeUrl)
    return response.data.meals[0]
  } catch (err) {
    console.error(err)
  }
}

async function appendRecipe(meal) {
  const title = meal.strMeal
  const imgSRC = meal.strMealThumb
  const id = meal.idMeal
  let recipe =
    `<div class="recipe-element">
    <h4 class='title'>${title}</h4>
    <img class='image' src="${imgSRC}" alt="recipe-image"/>
    <button onclick="showFullRecipe(${id})">View Recipe</button>
    </div>`
  document.querySelector('.search-results').insertAdjacentHTML('beforeend', recipe)
  document.querySelector('.search-results').scrollIntoView()
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
//Modal Content
//=================================================

async function showFullRecipe(id) {
  try {
    const meal = await getFullRecipe(id)
    const name = meal.strMeal
    const instructions = meal.strInstructions
    const source = meal.strSource
    const recipe = `<h2>${name}</h2>Here are the recipe details. Bon appetit!
${getIngredientList(meal)}

<br/>${instructions}
<br/>${source ? `<a target='_blank' href='${source}'>Show recipe source.</a>` : 'Source not available.'}`
    const modal = document.querySelector('#my-modal')
    const content = document.querySelector('#recipe-content')
    content.innerHTML = recipe
    modal.style.display = "block";
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
      str = str.concat(`<li>${ingredient} - ${measurement}</li>`)
    }
  }
  return str
}
