import {Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis} from 'recharts';

function HeroStats({ name, powerstats }) {
    return (
      <div>
          <RadarChart
      style={{ width: '100%', height: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }}
      responsive
      outerRadius="80%"
      data={powerstats ? [
        { subject: 'Combat', A: powerstats.combat },
        { subject: 'Durability', A: powerstats.durability },
        { subject: 'Intelligence', A: powerstats.intelligence },
        { subject: 'Power', A: powerstats.power },
        { subject: 'Speed', A: powerstats.speed },
        { subject: 'Strength', A: powerstats.strength },
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
      <Radar name={name} dataKey="A" stroke="#646cff" fill="#646cff" fillOpacity={0.6} />
    </RadarChart>
        </div>
    )
}

export default HeroStats;