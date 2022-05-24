import React,{useState,useEffect} from "react"
import Card from "../../Boxes/Card";
import "./JobForm.css"
const JobForm = (props) => {
    
const[location,updateLocation] = useState()
const [jobDescription,updateJobDescription] = useState()
const locationHandler = (event) =>{
    
    updateLocation(event.target.value)
}
const jobdescriptionHandler = (event) =>{
    updateJobDescription(event.target.value)
   
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