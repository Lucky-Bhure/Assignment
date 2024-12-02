import React from 'react'
import "./Header.css"
import LoginButtons from './LoginButtons/LoginButtons'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>

      <div className='logo-info'>
        <a href="/"><img src="logonew.svg" alt="logo" className='logo' /></a>
        <p>BRINGING YOU <span>THE PERFECT JOB</span></p>
      </div>

      <div className='login-info'>
        <div className='login-para'>
          <NavLink to={"/jobs"} className={({isActive}) => isActive ? "links active" : "links"}>Jobs</NavLink>
          <NavLink to={"/employers-list"} className={({isActive}) => isActive ? "links active" : "links"}>Active Employers</NavLink>
          <p>Pricing</p>
        </div>

        <div className='login-btn'>
          <LoginButtons />
        </div>
      </div>
    </div>
  )
}

export default Header