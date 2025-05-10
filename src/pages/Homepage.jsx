import React from 'react'
import ComponentBanner from '../components/ComponentBanner'
import Technologies from '../components/Technologies'
import Internship from '../components/Internship'
import Contactme from '../components/Contactme'
import Nav from '../components/Nav'
import Navs from '../components/Nav'
const Homepage = () => {
  return (
    <div>
    <Navs/>
        <ComponentBanner/>
        <Technologies/>
     <Internship/>
     <Contactme/>
    </div>
  )
}

export default Homepage