import React from 'react'
import './style.css'


export default function require_amt() {
    return (
        
        <div style= {{overflowX: "auto"}}>
            <center>
            <h3 style={{color: "#f1b12a"}}> Amount Required </h3>
        </center>
        <table className="require-amount-table" style= {{color: "black",borderCollapse: "collapse", width: "80%", border: "1px solid black", margin: "0 auto"}}>
        <tbody style= {{border: "1px"}}>
        <tr> 
            <th colspan="3">Student</th> 
            <th colspan="3">Donor</th>
            <th colspan="2" rowSpan= "2">Amount Required</th> 
            
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
             <input type="text" name="amount-rqrd" placeholder="Enter amount" read-write style= {{border: "none"}}/>
            </td>
            <th>
            <a href="/" style={{backgroundColor:"green", margin:"1%", borderRadius:"20px", padding: "2px 5px"}}>Update</a>
            </th>
        </tr><tr> 
            <td>Yash</td> 
            <td>852548</td> 
            <td>hbsv@gmail.com</td> 
            <td>Yogesh</td> 
            <td>77548</td> 
            <td>yogesh@gmail.com</td> 
            <td>
             <input type="text" name="amount-rqrd" placeholder="Enter amount" read-write style= {{border: "none"}}/>
            </td>
            <th>
            <a href="/" style={{backgroundColor:"green", margin:"1%", borderRadius:"20px", padding: "2px 5px"}}>Update</a>
            </th>
        </tr><tr> 
            <td>Yash</td> 
            <td>852548</td> 
            <td>hbsv@gmail.com</td> 
            <td>Yogesh</td> 
            <td>77548</td> 
            <td>yogesh@gmail.com</td> 
            <td>
             <input type="text" name="amount-rqrd" placeholder="Enter amount" read-write style= {{border: "none"}}/>
            </td>
            <th>
            <a href="/" style={{backgroundColor:"green", margin:"1%", borderRadius:"20px", padding: "2px 5px"}}>Update</a>
            </th>
        </tr>

        </tbody>
      </table>
        </div>
    )
}
