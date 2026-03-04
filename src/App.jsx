import './App.css'
import React from 'react';
import HeroCard from './components/HeroCard';
import useHeroes from './hooks/useHeroes'

function App() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const { heroes, isPending, error, fetchHeroes } = useHeroes(searchQuery);
  return (
    <>
    <h1>Superheroes</h1>
    <div className='search-bar'>
      <input type="text" value={searchQuery} placeholder="Search for a hero..." onChange={(e) => setSearchQuery(e.target.value)}/>
    
      <button onClick={fetchHeroes}>Search</button>
    </div>

    {heroes.length === 0 && !isPending && !error && <p>No heroes shown at the moment. Please enter the name of your favourite hero</p>}
    
    {isPending && <p>Loading...</p>}
    
    {error && <p>Error: {error}</p>}
    <div className="hero-list">
      {heroes.map(hero => (
        <HeroCard key={hero.id} hero={hero} />
      ))}
    </div>
    
    </>
  )
}

export default App
