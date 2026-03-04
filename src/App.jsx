import './App.css'
import React from 'react';
import HeroCard from './components/HeroCard';
import useHeroes from './hooks/useHeroes'
import Loader from './components/common/Loader';

function App() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const { heroes, isPending, error, fetchHeroes, numberOfResultsShown, setNumberOfResultsShown } = useHeroes(searchQuery);
  return (
    <>
    <h1>Superheroes</h1>
    <div className='search-bar'>
      <input type="text" value={searchQuery} placeholder="Search for a hero..." onChange={(e) => setSearchQuery(e.target.value)}/>
    
      <button onClick={fetchHeroes}>Search</button>
    </div>

    {heroes.length === 0 && !isPending && !error && <p>No heroes shown at the moment. Please enter the name of your favourite hero</p>}
    
    {isPending && <Loader />}
    
    {error && <p>Error: {error}</p>}
    {heroes.length > 0 && (
      <div className="hero-list">
        {heroes.slice(0, numberOfResultsShown).map(hero => (
          <HeroCard key={hero.id} hero={hero} />
        ))}
        {numberOfResultsShown < heroes.length && (
          <button onClick={() => setNumberOfResultsShown(c => c + 10)}>Show more</button>
        )}
      </div>
    )}
    </>
  )
}

export default App
