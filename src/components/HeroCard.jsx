import React from 'react';
import HeroStats from './HeroStats';

function HeroCard({ hero }) {
  const [showDetails, setShowDetails] = React.useState(false);

  return (
    <div className="hero-card">
      <img src={hero.image.url} alt={hero.name} className="hero-image" />
      <h2>{hero.name}</h2>
      <p onClick={() => setShowDetails(c => !c)}>{ showDetails ? 'Hide details ↑' : 'Show details →' }</p>
      {showDetails && (
        <div>
          <h3>Biography:</h3>
          <p><span>Full Name:</span> {hero.biography['full-name']}</p>
          <p><span>Place of Birth:</span> {hero.biography['place-of-birth']}</p>
          <p><span>First Appearance:</span> {hero.biography['first-appearance']}</p>
          <p><span>Publisher:</span> {hero.biography.publisher}</p>
          <p><span>Alignment:</span> {hero.biography.alignment}</p>

          <h3>Power Stats:</h3>
          <HeroStats name={hero.name} powerstats={hero.powerstats} />
        </div>
      )}
    </div>
  );
}

export default HeroCard;