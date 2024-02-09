import { async } from 'regenerator-runtime'
import { API_URL } from './config.js'
import { getJSON } from './helpers.js'
import { REC_PER_PG } from './config.js'

export const state = {
    recipe: {},
    search: {
        query: '',
        results: [],
        page: 1,
        resultsPerPage: REC_PER_PG,
    },
    bookmarks: [],
}

export const loadRecipe = async function (id) {
    try {
        const data = await getJSON(`${API_URL}${id}`)

        console.log(data.data.recipe)

        const recipe = data.data.recipe
        state.recipe = {
            id: recipe.id,
            title: recipe.title,
            image: recipe.image_url,
            publisher: recipe.publisher,
            servings: +recipe.servings,
            sourceUrl: recipe.source_url,
            ingredients: recipe.ingredients,
            cookingTime: recipe.cooking_time
        }

        if (state.bookmarks.some(bookmark => bookmark.id === id)) {
            state.recipe.bookmarked = true
        } else {
            state.recipe.bookmarked = false
        }
        // console.log(state.recipe)
    } catch (err) {
        console.error(`${err} **`)
        throw err;
    }
}

export const loadSearchResult = async function (query) {
    try {
        state.search.query = query
        const data = await getJSON(`${API_URL}?search=${query}`)
        console.log(data)

        state.search.results = data.data.recipes.map(rec => {
            return {
                id: rec.id,
                title: rec.title,
                image: rec.image_url,
                publisher: rec.publisher,
            }
        })
        state.search.page = 1
        // console.log(state.search.results)
    } catch (err) {
        console.error(`${err} **`)
        throw err;
    }
}

export const getSearchResultPage = function (page) {
    state.search.page = page

    const start = (page - 1) * state.search.resultsPerPage //0
    const end = page * state.search.resultsPerPage//9

    return state.search.results.slice(start, end)
}

export const updateServings = function (newServings) {
    state.recipe.ingredients.forEach(ing => {
        ing.quantity = (ing.quantity * newServings) / state.recipe.servings
    });

    state.recipe.servings = newServings
}

export const addBookmark = function (recipe) {
    //addbookmark
    state.bookmarks.push(recipe)

    //mark current recipe as bookmark
    if (recipe.id === state.recipe.id) {
        state.recipe.bookmarked = true
    }
}

export const deleteBookmark = function (id) {
    const index = state.bookmarks.findIndex(el => el.id === id)
    state.bookmarks.splice(index, 1)

    if (id === state.recipe.id) {
        state.recipe.bookmarked = false
    }
}