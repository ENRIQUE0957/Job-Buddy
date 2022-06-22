import React from "react";
import classes from './Job.module.css'
const Job = (props) =>{
    
    return(
        <div className={classes.job}>
            <ul className={classes.list}>
                <li>{props.jobName}</li>
                <p>{props.description}</p>
                
            </ul>
        </div>
    )
}

export default Job;