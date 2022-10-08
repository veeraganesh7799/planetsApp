import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import PlanetItem from '../PlanetItem'
import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props

  const settings = {
    dots: false,
    slideToShow: 1,
    slideToScroll: 1,
  }

  return (
    <div className="planets-display-container">
      <h1 className="planets-heading">PLANETS</h1>
      <div testid="planets">
        <Slider {...settings}>
          {planetsList.map(eachPlanet => (
            <PlanetItem key={eachPlanet.id} eachPlanet={eachPlanet} />
          ))}
        </Slider>
      </div>
    </div>
  )
}
export default PlanetsSlider
