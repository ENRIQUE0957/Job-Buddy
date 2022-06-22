import React from "react";
import Modal from "../UI/Modal";
import Job from "./Job";
import classes from "./Jobs.module.css"
const Jobs = (props)=>{
    const jobs = props.jobs
    const mappedJobs = jobs.map((jobs)=>{
       return{
        jobName:jobs.job1,
        salary:jobs.salary,
        description:jobs.description,
        zipCode:jobs.zipCode
        
       }
    })
    console.log(mappedJobs)
    

    
return(
        <div className={classes.jobs}>
        {props.jobs.map((job) =>(
            <Job 
            jobName ={job.job1}
            description = {job.description}
            salary = {job.salary}
            zipCode = {job.zipCode}
            />
        ))}
        
        
       
        </div>
) 
}

export default Jobs;