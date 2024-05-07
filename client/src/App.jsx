import { useState } from 'react'
import './App.css'
import Searchbar from './components/searchBar/SearchBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Searchbar></Searchbar>
    </>
  )
}

export default App
