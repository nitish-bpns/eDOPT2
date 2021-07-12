import React from 'react'
import './style.css'

export default function approval() {
    return (
        <div style= {{overflowX: "auto"}}>
        <center>
            <h3 style={{color: "#f1b12a"}}> Approval </h3>
        </center>
        <table className ="approval-table" style= {{color: "black",borderCollapse: "collapse", width: "80%", border: "1px solid black", margin: "0 auto"}}>
        <tbody style= {{border: "1px"}}>
        <tr> 
            <th colspan="3">Student</th> 
            <th colspan="3">Donor</th> 
            <th colspan="1" rowSpan= "2">Approve/Deny</th> 
        </tr> 
        <tr> 
            <th className= "student-name">Name</th> 
            <th className= "student-id">ID</th> 
            <th className= "student-email">Email</th> 
            <th className= "donor-name">Name</th> 
            <th className= "donor-id">ID</th> 
            <th className= "donor-email">Email</th>
            

        </tr> 
        <tr> 
            <td>Yash</td> 
            <td>852548</td> 
            <td>hbsv@gmail.com</td> 
            <td>Yogesh</td> 
            <td>77548</td> 
            <td>yogesh@gmail.com</td> 
            <td>
            <a href="/" style={{ border: "1px solid", backgroundColor:"green", margin:"1%", borderRadius:"20px", padding:"2px 5px"}}>Approve</a>
            <a href="/" style={{backgroundColor:"red", margin:"1%", borderRadius:"20px", padding:"2px 5px"}}>Deny</a>
            </td>
        </tr><tr> 
            <td>Yash</td> 
            <td>852548</td> 
            <td>hbsv@gmail.com</td> 
            <td>Yogesh</td> 
            <td>77548</td> 
            <td>yogesh@gmail.com</td> 
            <td>
            <a href="/" style={{ border: "1px solid", backgroundColor:"green", margin:"1%", borderRadius:"20px", padding:"2px 5px"}}>Approve</a>
            <a href="/" style={{backgroundColor:"red", margin:"1%", borderRadius:"20px", padding:"2px 5px"}}>Deny</a>
            </td>
        </tr><tr> 
            <td>Yash</td> 
            <td>852548</td> 
            <td>hbsv@gmail.com</td> 
            <td>Yogesh</td> 
            <td>77548</td> 
            <td>yogesh@gmail.com</td> 
            <td>
            <a href="/" style={{ border: "1px solid", backgroundColor:"green", margin:"1%", borderRadius:"20px", padding:"2px 5px"}}>Approve</a>
            <a href="/" style={{backgroundColor:"red", margin:"1%", borderRadius:"20px", padding:"2px 5px"}}>Deny</a>
            </td>
        </tr>

        </tbody>
      </table>
        </div>
    )
}
