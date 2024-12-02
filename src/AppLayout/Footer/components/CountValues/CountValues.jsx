import React from 'react'
import "../../Footer.css"
import { companyInformation } from '../../../../../public/Json/SiteData';


const CountValues = () => {
  return (
    <div className="footer2">
        {
            companyInformation.map((item) => {
                return (
                    <div className='item-box'>
                        <p>{item.title}</p>
                        <p className='value'>{item.value}</p>
                    </div>
                )
            })
        }
    </div>
  )
}

export default CountValues
