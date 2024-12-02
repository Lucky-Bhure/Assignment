import React from "react";
import "./JobContainer.css";
import { TiPlus } from "react-icons/ti";
import { BsSearch } from "react-icons/bs";
import { quickJobs } from "../../../public/Json/SiteData";
import JobList from "./JobList";
import JobPages from "./JobPages";

const JobContainer = () => {
    return (
        <>
            <div className="filter-container">
                <div className="filter-section">
                    <div className="main-filter">
                        <p className="main-filter-heading">Filters</p>
                        <p>Keywords</p>
                        <input className="main-filter-input" type="text" placeholder="Type Keywords and Press Enter..." />
                    </div>
                    <div>
                        <div className="keyword-div">
                            <p>Experience</p>
                            <TiPlus />
                        </div>
                        <div className="keyword-div">
                            <p>Work Mode</p>
                            <TiPlus />
                        </div>
                        <div className="keyword-div">
                            <p>Job Type</p>
                            <TiPlus />
                        </div>
                    </div>
                </div>
                <div className="filter-section">
                    <div className="quick-job-heading">
                        <p>Quick Job Search</p>
                        <BsSearch color="rgb(3, 16, 118)" />
                    </div>
                    <div className="quick-job-keywords">
                        {
                            quickJobs.map((item) => {
                                return (
                                    <p>#{item}</p>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="jobs-field">
                <JobList />
                <JobPages />
            </div>
            <div className="advertisement-container">
                <p>Advertisement Section</p>
            </div>
        </>
    );
};

export default JobContainer;
