import React from 'react';
import {Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis} from 'recharts';

function HeroCard({ hero }) {
  const [showStats, setShowStats] = React.useState(false);

  console.log(hero);
  return (
    <div className="hero-card">
      <img src={hero.image.url} alt={hero.name} className="hero-image" />
      <h2>{hero.name}</h2>
      <p onClick={() => setShowStats(c => !c)}>Show stats →</p>
      {showStats && (
        <div>
          <RadarChart
      style={{ width: '100%', height: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }}
      responsive
      outerRadius="80%"
      data={hero.powerstats ? [
        { subject: 'Combat', A: hero.powerstats.combat },
        { subject: 'Durability', A: hero.powerstats.durability },
        { subject: 'Intelligence', A: hero.powerstats.intelligence },
        { subject: 'Power', A: hero.powerstats.power },
        { subject: 'Speed', A: hero.powerstats.speed },
        { subject: 'Strength', A: hero.powerstats.strength },
      ] : []}
      margin={{
        top: 20,
        left: 20,
        right: 20,
        bottom: 20,
      }}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis />
      <Radar name={hero.name} dataKey="A" stroke="#646cff" fill="#646cff" fillOpacity={0.6} />
    </RadarChart>
        </div>
      )}
    </div>
  );
}

export default HeroCard;