//=========================================
//Search by name 
//=========================================

async function getRecipeName(input) {
  const nameEndpoint = `https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`
  try {
    const response = await axios.get(nameEndpoint)
    const mealsArr = response.data.meals
    mealsArr.forEach(meal => {
      appendRecipe(meal.strMeal, meal.strMealThumb)
    });
    return response
  } catch (err) {
    console.error(err)
  }
}
// getRecipeName('spaghetti')

function getNameValue(e) {
  e.preventDefault
  const inputValue = document.querySelector('#input').value
  getRecipeName(inputValue)
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
    // console.log(categoriesArray)
  } catch (err) {
    console.error(err)
  }
}
getCategories()

function optionValue(categoryList) {
  const dropdown = document.querySelector('#category')
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
  //remove data
  const categoryValue = document.querySelector('#category').value
  getCategoryItems(categoryValue)
}

async function getCategoryItems(category) {
  const categoryItemUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
  // const idUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  try {
    const response = await axios.get(categoryItemUrl)
    const categoriesArr = response.data.meals
    categoriesArr.forEach(meal => {
      appendRecipe(meal.strMeal, meal.strMealThumb)
    });
    // categoriesArr.forEach(meal => {
    //   console.log(meal.idMeal)
    // });
    //append data here
  } catch (err) {
    console.error(err)
  }
}


const categoryForm = document.querySelector('.category-search')
categoryForm.addEventListener('submit', getCat)

//=========================================
//Random recipe button
//=========================================

function getRandom(e) {
  e.preventDefault()
  //remove data
  randomRecipe()
}

async function randomRecipe() {
  const randomUrl = 'https://www.themealdb.com/api/json/v1/1/random.php'
  try {
    const response = await axios.get(randomUrl)
    const random = response.data.meals
    console.log(random)
    appendRecipe(random[0].strMeal, random[0].strMealThumb)
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

function appendRecipe(title, imgSRC) {
  let recipe =
    `<div class="recipe-element>"
      <h3 class="title">${title}</h3>
      <img class="image" src="${imgSRC}" alt="recipe-image"/>
    </div>`
  document.querySelector('.search-results').insertAdjacentHTML('beforeend', recipe)
}

