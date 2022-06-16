import React,{Fragment} from "react";
import classes from "./HomeScreen.module.css"
import Form from "./Form";
import Modal from "../UI/Modal";
const HomeScreen = (props) =>{
    //function to return zipcode from form 
    const inputs = (zipcode,job) =>{
        console.log(zipcode,job)
    }
    return(
        <Fragment>
            <Modal>
            <Form inputHandle = {inputs}>

            </Form>
            </Modal>



        </Fragment>
    )
}



export default HomeScreen;