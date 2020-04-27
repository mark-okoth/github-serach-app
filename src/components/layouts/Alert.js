import React from 'react'

 const Alert = () => {
    return (
     alert !==null &&(
         <div className={`container ${alert.type}`}>
           <p className="blue-grey-text">{alert.message}</p>  
         </div>
     )
    )
}
export default Alert;