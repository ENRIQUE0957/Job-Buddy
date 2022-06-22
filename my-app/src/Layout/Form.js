import React, { useReducer, useState, useEffect, useRef } from "react";
import classes from "./Form.module.css"
import ErrorModal from "../UI/ErrorModal";





const Form = props => {
    const [inputZipCode, updateInputZipcode] = useState('')
    const [inputJob, updateInputJob] = useState('')
    const locationRef = useRef()
    const [erroModal, updateErorrModal] = useState(true)






    //event listener  for the zipcode 
    const locationHandler = (event) => {
        
        console.log(event.target.value)
        updateInputZipcode(event.target.value)
             
        
    }
    //event listener for the job-description 


    //function to handle location event
    const jobHandler = (event) => {
        updateInputJob(event.target.value)
        

    }
    
    const submitHandler = event => {
        event.preventDefault()
        if(inputZipCode.length >= 5 && inputJob.length >1 ){
            props.inputHandle(inputZipCode,inputJob) 
            updateErorrModal(true)
            
            
        }else{
            updateErorrModal(false)
        }
        console.log(inputJob.length)
       
       
        updateInputJob('')
        updateInputZipcode('')


            



        
       




        //function to handle location event
    }
   



    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <h2>Search Jobs</h2>
            <label className={classes.label} htmlFor="location">location</label>
            <input value={inputZipCode} onChange={locationHandler} className={classes.input} id="location"></input>
            {!erroModal &&<ErrorModal >Not a valid response</ErrorModal>}
            <label className={classes.label} htmlFor="job">Job-Description</label>
            <input value={inputJob} onChange={jobHandler} className={classes.input} id="job"></input>
            <button>submit</button>
        </form>

    )
}

export default Form;