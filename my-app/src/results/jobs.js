import React,{useEffect,useState} from "react"

const Jobs = (props) =>{
   const [selectedJob,UpdatedSelectedJob] = useState()
   const [selectedLocation, UpdateSelectedLocation] = useState()
   let [returnedJob,UpdatereturnedJob] = useState()
    // implemented this logic because our code was running before we actually got our input values from the form 
    let inputsArray = props.inputValues
    useEffect(() =>{
        UpdateSelectedLocation(()=>{
            return inputsArray
        }
        )
       
    },[inputsArray])
        
    console.log(selectedLocation)
    const jobs = props.arrayofJobs
    const newJobs = jobs
    
    
    for(const object of newJobs){
        console.log(object.zipcode)
        if(selectedLocation === undefined){
            console.log('not rendered yet')
        }else{
            if(String(object.zipcode) === selectedLocation[1]){
                console.log(object)//store returned job into state so we can render the job to the UI
                returnedJob = object
                console.log(returnedJob)
            }
        }
        
    }
    console.log(returnedJob)
    
    //need to iterate through array of jobs 

         
    


    //need to add logic to compare zip code of inputs to objects 

        
        
       /*for(let i = 0; i < props.arrayofJobs.length; i++){
           if(String(props.arrayofJobs[i].zipcode) === inputZipCode){
           const selectedJob = props.arrayofJobs[i]
           console.log(selectedJob)
          
           
           
           

       }
       */
       
        /*props.arrayofJobs.map((object) =>{
            
            if(String(object.zipcode) === inputZipCode){
                
                return object 
                
               
               
            }
            
            
        })
        */
         //getting the Inputvalue for the zipcode and the certain job
          
    
   
        
        
        
    
    
    
  

    //our array of 
    
    //console.log(jobsArray,inputs)
    //getting the input values and storing them in seperate variables
   
       
   
  
    

    
    
    return(
        <div>
           
        </div>
    )

    }

export default Jobs;