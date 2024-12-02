import React from 'react'
import "./LoginButtons.css"
import { NavLink } from 'react-router-dom'

const LoginButtons = () => {
  return (
    <>
      <NavLink to={"/jobseekerlogin"} className='jobseeker btn'>Jobseeker Login</NavLink>
      <NavLink to={"employerlogin"} className='employer btn'>Employer login</NavLink>
    </>
  )
}

export default LoginButtons
