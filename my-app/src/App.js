import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './HOMEPAGE/Header/Header';
import JobForm from './HOMEPAGE/Form/JobForm';
import Card from './Boxes/Card';
import Jobs from './results/Jobs';
function App(props) {
  const [inputArray,updateinputArray]=useState()
  const jobsArray = [
    {
      id:'sf',
      location:"oklahoma",
      zipcode:73134,
      job:'sofwareDeveloper',
      salary:10000.00,
      description:'Software developers conceive of, design, and build computer programs. Some develop new applications for mobile or desktop use, while others build underlying operating systems. Either way, software developers identify user needs, build programs, test out new software, and make improvements.'
    
    },
    {
      id:'bk',
      location:"los-angeles",
      zipcode:72133,
      job:"banker",
      salary:50.00,
      description:'Bankers, also known as retail bankers, interact with clients on a daily basis by assisting with services such as setting up checking and savings accounts, authorizing loans, and moving money. They also counsel clients on banking products and services. Completely free trial, no card required.'
    
    },
    {
      id:'hs',
      location:"florida",
      zipcode:74567,
      job:"heart-surgeon",
      salary:20000.00,
      description:'A cardiac surgeon is a type of cardiothoracic surgeon who specializes in operating on the heart, its valves and structures, and the important veins and arteries near it. General cardiothoracic surgeons focus on all of the organs of the upper abdomen, including the lungs, esophagus, and heart.'
    
    }



  ]
  const inputValues = (job,location) =>{
    updateinputArray(() =>{
      let newArray = []
      newArray.push(job,location)
      //a problem i had here was actually updating the state array 
      //lol somehting i was forgeting to do was actually returning the created array so we can get the content back outside of the function 
      //return also stops execution
      
      return newArray
      
      
    })
  
    
  }
  console.log(inputArray)
  
 
  
  
  
  return (
    
     <div className = "App-header">
    <Header></Header>
    <JobForm inputs = {inputValues}></JobForm>
    <Jobs arrayofJobs = {jobsArray} inputValues = {inputArray}></Jobs>
    </div>
    
    

  )    
}


export default App;
