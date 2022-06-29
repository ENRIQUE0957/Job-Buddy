import React, { useReducer, useState, useEffect, useRef } from "react";
import classes from "./Form.module.css"
import ErrorModal from "../UI/ErrorModal";

const zipCodeReducer = (state,action) =>{
    if(action.type === "USER-ZIPCODE"){
        return{value:action.val,isValid:action.val.length>=5}
    }
    if(action.type === "ZipCode-BLUR"){
        return{value:state.value,isValid:state.value.length>=5}
    }
    return{value:state,isValid:false};
}

const jobReducer = (state,action)=>{
    if(action.type === "JOB-DESCRIPTION"){
        return{value:action.val,isValid:action.val.lenght>5}
    }
    if(action.type === "BLUR"){
        return{value:state.value,isValid:state.value.length>5}
    }
    return{value:state,isValid:false}
}

const Form = props => {
    const[formisValid,setFormisValid]=useState(false)
    const [inputZipCode, updateInputZipcode] = useState('')
    const [inputJob, updateInputJob] = useState('')
    const locationRef = useRef('')
    const [erroModal, updateErorrModal] = useState(true)
    const [defaultValue,updateDefaultValue] = useState(false)
    const [zipCodeInput,dispatchZipcode]=useReducer(zipCodeReducer,({value:'',isValid:null}))
    const [jobInput,dispatchJob]=useReducer(jobReducer,({value:'',isValid:null}))
    const{isValid,zipCodeisValid} = zipCodeInput
    const{isValid1,jobInputisValid} = jobInput

    useEffect(()=>{
    const indentifier = setTimeout(()=>{
        console.log('checking form validity')
        setFormisValid(
        zipCodeisValid && jobInputisValid
        )
    
        
        

    },500);
    return () =>{
        console.log('cleaned up')
        clearTimeout(indentifier)
    }
    },[zipCodeisValid,jobInputisValid])



    //event listener  for the zipcode 
    const locationHandler = (event) => {
      dispatchZipcode({val:event.target.value,type:"USER-ZIPCODE"})
       
      
       //to handle state for formisValid      
        setFormisValid(event.target.value.length >=5)
    }
    //event listener for the job-description 

    const validateZipcode = (event)=>{
        dispatchJob({type:"ZipCode-BLUR"})
    }
    //function to handle location event
    const jobHandler = (event) => {
        dispatchJob({val:event.target.value,type:"JOB-DESCRIPTION"})
        
        
        setFormisValid(event.target.value.length > 5)
    }
    const validateJobLocation = (event)=>{
        dispatchJob({type:"BLUR"})
    }
    //function to test the geogle API
    async function geogleAPI(){
       const response =  await fetch(`https://www.themuse.com/api/public/jobs?category=${jobInput.value}&page=1`)
       const data =await response.json()
       console.log(data)
       props.asyncData(data)
    }
    const submitHandler = event => {
        event.preventDefault()
        console.log(zipCodeInput)
        props.inputHandle(zipCodeInput.value,jobInput.value)
        updateDefaultValue(true)
        console.log(jobInput)
        
       
        
        //updateErorrModal(jobInput.value.length>0 && zipCodeInput.value.length>=5)
        /*event.preventDefault()
        if(inputZipCode.length >= 5 && inputJob.length >0 ){
            props.inputHandle(inputZipCode,inputJob) 
            updateErorrModal(false)
            
            
        }else{
            updateErorrModal(true)
        }
        console.log(inputJob.length)
       
       
        updateInputJob('')
        updateInputZipcode('')

        */
            



        
       




        //function to handle location event
    }
   



    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <h2>Search Jobs</h2>
            {defaultValue&&<p>Success!!</p>}
            <div >
            <label className={classes.label} htmlFor="location">location</label>
            <input   ref={locationRef} className = {`${formisValid === false?classes.invalid:classes.inputBox}`} onChange={locationHandler} onBlur={validateZipcode} id="location"></input>
            </div>
            {!erroModal&&<ErrorModal >Not a valid response</ErrorModal>}
            
            <label className={classes.label} htmlFor="job">Job-Description</label>
            <input  type="text"  className = {`${formisValid === false?classes.invalid:classes.inputBox}`}onChange={jobHandler} onBlur = {validateJobLocation} id="job"></input>
            
            <button className={`${formisValid === false?classes.disabled:classes.input}`} onClick={geogleAPI}>submit</button>
        </form>

    )
}

export default Form;