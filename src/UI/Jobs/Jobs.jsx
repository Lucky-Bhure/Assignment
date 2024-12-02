import React from 'react'
import "./Jobs.css"
import { FaCaretDown } from "react-icons/fa";
import JobContainer from './JobContainer';

const Jobs = () => {
  return (
    <div className='job-page'>
      <div className='candidate-notification'>
        <p className='notification'>dhanuja.m got selected for a Job!</p>
      </div>
      <div className='search-container'>
        <p>Search Job</p>
        <input type="text" placeholder='Type keyword..' className='input-field' />
        <button className='selection-box'><p>Select Location</p> <FaCaretDown /></button>
        <button className='selection-box'><p>Select Experience</p> <FaCaretDown /></button>
        <button className='selection-box'><p>Select Salary</p> <FaCaretDown /></button>
        <button className='search-btn'>Search</button>
      </div>
      <div className='jobs-Container'>
        <JobContainer />
      </div>

    </div>
  )
}

export default Jobs
