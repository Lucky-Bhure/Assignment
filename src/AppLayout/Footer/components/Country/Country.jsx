import React from 'react'
import "./Country.css"
import { country } from "../../../../../public/Json/SiteData.js"

const Country = () => {
  return (
    <div className='footer-container'>
      <h2>INTERNATIONAL JOBS</h2>
      <div>
        {
          country.map((item) => {
            return (
              <p>#{item}</p>
            )
          })
        }
      </div>
    </div>
  )
}

export default Country
