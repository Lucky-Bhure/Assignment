import React from 'react'
import "../Country/Country.css"
import {cityData} from "../../../../../public/Json/SiteData.js"

const IndiaCity = () => {
  return (
    <div className='footer-container'>
      <h2>JOBS IN INDIA</h2>
      <div>
      {
          cityData.map((item) => {
            return (
              <p>#{item}</p>
            )
          })
      }
      </div>
    </div>
  )
}

export default IndiaCity
