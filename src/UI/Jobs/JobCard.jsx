import React from 'react'
import"./JobList.css"
import { GiSuitcase } from "react-icons/gi";
import { GiWallet } from "react-icons/gi";
import { FaClock } from "react-icons/fa6";
import { GiWorld } from "react-icons/gi";
import { FaAddressCard } from "react-icons/fa";
import { IoShareSocial } from "react-icons/io5";
import { BiSolidSave } from "react-icons/bi";

const JobCard = ({item}) => {

    const {jobType, companyLogo, jobTitle, companyName, experience, ctc, duration, location, keySkills, postTime} = item;

    return (
    <div className='job-card'>
                    <p className='job-type'>{jobType}</p>
                    <div className='company-info'>
                        <img src={companyLogo} alt="image" />
                        <div>
                            <p className='job-title'>{jobTitle}</p>
                            <p className='company-name'>{companyName}</p>
                        </div>
                    </div>
                    <div className='job-info'>
                        <div className='flex'>
                            <GiSuitcase size={25} />
                            <p>{experience}</p>
                        </div>
                        <div className='flex'>
                            <GiWallet size={24} />
                            <p>{ctc}</p>
                        </div>
                        <div className='flex'>
                            <FaClock size={24} />
                            <p>{duration}</p>
                        </div>
                    </div>
                    <div className='flex'>
                        <GiWorld size={24} />
                        <p>{location}</p>
                    </div>
                    <div className='key-skills-container'>
                        <p className='key-skills-heading'>Key Skills:</p>
                        <div className='key-skills-main'>
                            {
                                keySkills.map((curEle) => <p> {curEle},</p>)
                            }
                        </div>
                    </div>
                    <p className='post-time'>Posted <span>{postTime}</span></p>
                    <div className='job-apply'>
                        <div className='job-menu'>
                            <FaAddressCard size={24} />
                            <IoShareSocial size={24} />
                            <BiSolidSave size={24} />
                        </div>
                        <button className='apply-btn'>APPLY</button>
                    </div>
                </div>
  )
}

export default JobCard
