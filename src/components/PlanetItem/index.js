// Write your code here
import './index.css'

const PlanetItem = props => {
  const {eachPlanet} = props
  const {name, imageUrl, description} = eachPlanet

  return (
    <div className="planet-list">
      <div className="image-container">
        <img src={imageUrl} alt={`planet ${name}`} className="img-planet" />
      </div>
      <p className="planet-name">{name}</p>
      <p className="description">{description}</p>
    </div>
  )
}

export default PlanetItem
