async function getCategories() {
  const categoriesUrl = 'https://www.themealdb.com/api/json/v1/1/categories.php'
  try {
    const response = await axios.get(categoriesUrl)
    const categoriesArray = response.data.categories
    optionValue(categoriesArray)
    console.log(categoriesArray)
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
    console.log(categoryList[i].strCategory)
    dropdown.append(option)
  }
}