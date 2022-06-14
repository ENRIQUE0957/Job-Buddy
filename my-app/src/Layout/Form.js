import React from "react";
import classes from "./Form.module.css"
const Form = props =>{
    return (
        <form className={classes.form}>
            <h2>Search Jobs</h2>
            <label htmlFor="location">location</label>
            <input id = "location"></input>
            <label htmlFor="job">Job-Description</label>
            <input id = "job"></input>
        </form>
        
    )
}

export default Form;