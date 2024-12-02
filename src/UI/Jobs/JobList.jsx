import React from 'react'
import "./JobList.css"
import { jobs } from '../../../public/Json/SiteData';
import JobCard from './JobCard';
import { FaCaretDown } from "react-icons/fa";


const JobList = () => {
    return (
        <>
            <div className='jobs-pages'>
                <div className='page'>
                    <p className='show'>Show</p>
                    <p className='job-no'>20 <FaCaretDown /></p>
                    <p className='per-page'>per page</p>
                </div>
                <div>
                    <p className='per-page'>Showing 1 to 20 of 8650</p>
                </div>
            </div>
            <div className='job-list'>
                {
                    jobs.map((item) => <JobCard  item= {item}/>)
                }
            </div>
        </>
    )
}

export default JobList
