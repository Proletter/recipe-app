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
  const [query, setQuery] = useState('rice')
 
  useEffect(() => {
        getRecipes()
 
 
 
      }, [query])
  
  const getRecipes = async() => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${API_KEY}`)
    const data = await response.json()
    console.log(data.hits)
    setRecipes(data.hits)
    
  }

  const searchUpdate = e => {    
    setState(e.target.value)
  }

  const runQuery = (e) => {
   //prevent form from submitting. Commented out
    e.preventDefault()

    //encoding URI to account for spaces
    setQuery(encodeURI(state))
  }
  console.log(state)
  return (
    <div className="App">
      <form className="search-form" onSubmit={runQuery}>
        <input className="search-bar" onChange={searchUpdate}></input>
        <button className="search-button" type="submit">button</button>
      </form>

      {recipes.map(recipe => (
        < Recipes title = {
          recipe.recipe.label
        }
        key = {
          recipe.recipe.image
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
