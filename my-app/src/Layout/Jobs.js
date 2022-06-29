import React from "react";
import Modal from "../UI/Modal";
import Job from "./Job";
import classes from "./Jobs.module.css"
const Jobs = (props)=>{
   /*
    
    const mappedJobs = props.jobs.results.map((jobs)=>{
       return{
        jobName:jobs.name,
        salary:jobs.salary,
        description:jobs.description,
        zipCode:jobs.zipCode
        
       }
    })
    console.log(mappedJobs)
    
  
/*
   {props.jobs.map((job) =>(
    <Job 
    jobName ={job.job1}
    description = {job.description}
    salary = {job.salary}
    zipCode = {job.zipCode}
    />
))}
*/

console.log(props.jobs.results.map((job)=>{
    console.log(job.name)
}))


    
return(
        <div className={classes.jobs}>
       
      
        
       
        </div>
) 
}

export default Jobs;