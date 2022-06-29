import React,{Fragment,useState} from "react";
import classes from "./HomeScreen.module.css"
import Form from "./Form";
import Modal from "../UI/Modal";
import Jobs from "./Jobs";
const HomeScreen = (props) =>{
    const [showJobs,UpdateShowJobs] = useState(false)
    const [data1,updateJobData] = useState([])
    const jobSelection  =[
        {
        job1:"Full-stack-developer",
        zipCode:'73134',
        description:'build software and help companies solve solutions with coding skills',
        salary:'1000,000',
        Benefits:'yes'
        },
        
        {
        job1:"FrontEnd-developer",
        zipCode:'73120',
        description:'build software and help companies solve solutions with coding skills',
        salary:'75,000',
        Benefits:'yes'
        },

        {
        job1:"Back-end-developer",
        zipCode:'73150',
        description:'build software and help companies solve solutions with coding skills',
        salary:'90,000',
        Benefits:'yes'
            }
    ]
    //function to return zipcode from form 
    const inputs = (zipcode,job) =>{
        console.log(zipcode,job)
        
    }
    const webData = (data)=>{
        //console.log(data)
        updateJobData(data)
        
        
    }
    console.log(data1)
    return(
        <Fragment>
            <Modal>
            <Form inputHandle = {inputs} asyncData = {webData}>

            </Form>
            </Modal>

             <Jobs jobs ={data1} ></Jobs>



        </Fragment>
    )
}



export default HomeScreen;