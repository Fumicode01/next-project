import { Fragment } from "react"

import Hero from '../components/home-page/hero'

const Home = () => {
  return (
      <Fragment>
          <Hero />
          <FeaturedPost />
      </Fragment>
  )
}

export default Home