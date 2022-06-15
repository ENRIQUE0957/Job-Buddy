import React from "react";
import classes from "./Form.module.css"
const Form = props =>{
    return (
        <form className={classes.form}>
            <h2>Search Jobs</h2>
            <label  className = {classes.label}htmlFor="location">location</label>
            <input className={classes.input} id = "location"></input>
            <label className = {classes.label}htmlFor="job">Job-Description</label>
            <input className = {classes.input}id = "job"></input>
        </form>
        
    )
}

export default Form;