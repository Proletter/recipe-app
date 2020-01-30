import React from 'react'
import {
  API_KEY,
  APP_ID
} from './config'
import { useEffect, useState } from 'react'
import Recipes from './components/recipes'




const App = () => {
  const [recipes, setRecipes] = useState([])
  const [state, setState] = useState([])
 
  useEffect(async () => {
        getRecipes()
  }, [])
  
  const getRecipes = async() => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${API_KEY}`)
    const data = await response.json()
    console.log(data.hits)
    setRecipes(data.hits)
    
  }

  const searchUpdate = e => {

    const newState = e.target.value
    setState(newState)
  }

  console.log(state)
  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" onChange={searchUpdate}></input>
        <button className="search-button" >button</button>
      </form>

      {recipes.map(recipe => (
        < Recipes title = {
          recipe.recipe.label
        }
        key = {
          recipe.recipe.label
        }
        image = {
          recipe.recipe.image
        }
        calories = {
          recipe.recipe.calories
        }
        />
      ))}

    </div>

  )
}
export default App;
