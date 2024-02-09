import * as model from './model.js'
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultView from './views/resultView.js';
import paginationViews from './views/paginationViews.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime.js'

// if (module.hot) {
//   module.hot.accept;
// }


const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1)//for getting the id from url
    // console.log(id)

    if (!id) return;
    recipeView.renderSpinner()

    // 1) ---------Loading recipe-------------
    await model.loadRecipe(id) //returns a promise as we need to handle 
    const { recipe } = model.state


    // 2) --------Rendering the recipe-----------
    recipeView.render(model.state.recipe)

    // controlServings()

  } catch (err) {
    throw err
  }
}
// controlRecipes()

const controlSearchResults = async function () {
  try {
    resultView.renderSpinner()

    //get search query
    const query = searchView.getQuery()
    if (!query) return;
    // searchView.clearInput()

    //load results
    await model.loadSearchResult(query)

    //render 
    // console.log(model.state.search.results)
    resultView.render(model.getSearchResultPage(6))

    //render initial pagination button
    paginationViews.render(model.state.search)

  } catch (err) {
    console.log(err)
    throw err
  }
}
// controlSearchResults()
const controlPagination = function (goToPage) {
  resultView.render(model.getSearchResultPage(goToPage))

  paginationViews.render(model.state.search)
}

const controlServings = function (newServings) {
  //update therecipe serving
  model.updateServings(newServings)

  //update the recipeview 
  // recipeView.render(model.state.recipe)
  recipeView.update(model.state.recipe)
}

const controlAddBookmark = function (newBookmark) {
  if (!model.state.recipe.bookmarked) {
    model.addBookmark(model.state.recipe)
  }
  else { model.deleteBookmark(model.state.recipe.id) }

  model.addBookmark(model.state.recipe);
  console.log(model.state.recipe)
  recipeView.update(model.state.recipe)

}

const init = function () {
  recipeView.addHandlerRender(controlRecipes)
  recipeView.addHandlerUpdateServings(controlServings)
  recipeView.addHandlerAddBookmark(controlAddBookmark)
  searchView.addHandlerSearch(controlSearchResults)
  paginationViews.addHandlerClick(controlPagination)
  // controlServings()
}
init()