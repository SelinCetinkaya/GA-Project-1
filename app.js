//=========================================
//Search by name 
//=========================================

async function getRecipeName(input) {
  const nameEndpoint = `https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`
  try {
    const response = await axios.get(nameEndpoint)
    //append data to dom
    console.log(response.data.meals)
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
//Categories Dropdown
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
  try {
    const reseponse = await axios.get(categoryItemUrl)
    //append data here
    console.log(reseponse.data.meals)
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
    console.log(response.data.meals)
    return response
    // appendRecipe()
  } catch (err) {
    console.error(err)
  }
}
const randomButton = document.querySelector('#random')
randomButton.addEventListener('click', getRandom)


