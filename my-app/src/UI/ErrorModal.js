import React,{Children, Fragment,useState} from "react"
import ReactDom from 'react-dom'
import classes from "./ErrorModal.module.css"
//importing react so we can use the portal method from the reactDOm'

const ErrorModal = (props)=>{
    const[closeErrorModal,updateCloseErrorModal]=useState(true)
   const ModalOverlay = ()=>{
    return(
        <div className ={classes.modal}>
            {props.children}
        </div>
    )
   }
   const closeModal = () =>{
    //this is for the closing of the error modal when clicked 
    updateCloseErrorModal(false)
   }
   const BackDrop = (props)=>{
    return(
        <div className={classes.backdrop} onClick ={closeModal} >
            {props.children}
        </div>
    )
    }
   //creating a variable for the parent elment we want to portal this too
   const errorParentElement = document.getElementById('errorModal')
   
    return (
      <Fragment>
        {ReactDom.createPortal(closeErrorModal&& <ModalOverlay ></ModalOverlay>,errorParentElement)}
        {ReactDom.createPortal(closeErrorModal && <BackDrop onClick ={closeModal}></BackDrop>,errorParentElement)}
      </Fragment>
    )
}

export default ErrorModal