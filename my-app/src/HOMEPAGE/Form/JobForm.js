import React,{useState,useEffect} from "react"
import "./JobForm.css"
import Card from "../../Boxes/Card";

const JobForm = (props) => {
    
const[location,updateLocation] = useState()
const [jobDescription,updateJobDescription] = useState()
const locationHandler = (event) =>{
    setTimeout(() =>{
        updateLocation(event.target.value)
        console.log('location')
    },5000)//adding these functions to input so not as many renders and chnages happen as much this will help the website run smoother and faster not having to handle so many requests
  
}
const jobdescriptionHandler = (event) =>{
   
    setTimeout(() =>{
        updateJobDescription(event.target.value)
        console.log('changes ')
    },5000)
   
   
  
   
    
    
   
}
const submitHandler = (event) =>{
    event.preventDefault()
    
    props.inputs(jobDescription,location)
}


    
    return (
        <Card>
            <form onSubmit={submitHandler} className="job_Form">
                <div className="job-search">
                    <label htmlFor="job-label" className = "job-label">search jobs</label>
                    <input type="text" id="job-search" placeholder="job description" onChange={jobdescriptionHandler}></input>
                </div>
                <div className="location-search">
                    <label htmlFor="location" className = "location">location</label>
                    <input type="text" id="location" placeholder="#zipcode" onChange={locationHandler}></input>
                </div>
                <button className="job-button" type="submit">Search</button>

            </form>
            </Card>
          


            )
}

            export default JobForm;