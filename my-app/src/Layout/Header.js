import React,{Fragment} from "react"
//imported fragment react hook to avoid div-soup
//importing header.css module as classes 
import classes from './Header.module.css'
import limeimage from "../../src/slice-lime.jpg"
//importing the header logo img as an object 


const Header = (props) =>{
    return (
        <Fragment>
        <header className={classes.header}>
        <h2 className={classes.title}>JobBuddy!</h2>
        <img src = {limeimage} alt = "headerLogo" className={classes.headerLogo}/>
            <ul className={classes.Headerlist}>
            <li ><button className={classes.button}>SIGN UP!</button></li>
            <li><button className={classes.button}>my jobs</button></li>

            </ul>
        </header>
        </Fragment>
        


    )
}
//exporting the header module so we can import in another component 
export default Header;