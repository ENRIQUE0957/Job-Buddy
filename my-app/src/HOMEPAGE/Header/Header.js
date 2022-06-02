import React from 'react'
import "./Header.css"

const Header = () =>{
return(

<div className = "Main-header">


<ul className = "list">
<li className = "title"><h2 className='Job-buddy'>job buddy</h2></li>
<li className = "find-jobs">Find jobs</li>
<li className = "reviews">
<button className = "button">reviews</button>
    </li>
<li><button className = "button">Sign Up</button></li>     

    
</ul> 

</div>

    
)
}
export default Header