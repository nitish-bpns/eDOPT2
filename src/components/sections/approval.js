import React from 'react'
import './style.css'
import {useState, useEffect,useContext} from 'react';
import axios from "../../api/axios";
import { Link,Redirect } from 'react-router-dom';


const Approval=()=> {
    
    
    const [approvals,Setapprovals]=useState([])
    useEffect(() => {
        axios.get('/admin/getapprovel', {
            headers : {
                nothing:'nothing'
            },withCredentials:true
        }).then((response) => {
                console.log(response.data)
                Setapprovals(response.data.data)
            })
        },[])
    
   


    const approvehandler=(e)=>{
        const index=e.target.value
        console.log(index)
        //Action('approve',val)
        axios.get('/admin/approve',{
            params:{
                'studentid':approvals[index].studentid,
                'donoremail':approvals[index].donoremail,
                'action':'approve'
            }
            
        }).then((response)=>{
            console.log(response.data)
            window.location.reload();
        })
    }
    const denyhandler=(e)=>{
        const index=e.target.value
        console.log(index)
        //Action('approve',val)
        axios.get('/admin/approve',{
            params:{
                'studentid':approvals[index].studentid,
                'donoremail':approvals[index].donoremail,
                'action':'deny'
            }
            }).then((response)=>{
                console.log(response.data)
                window.location.reload();
        })
    }
    
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
            <th colSpan="2" rowSpan="2">Status</th>
        </tr> 
        <tr> 
            <th className= "student-name">Name</th> 
            <th className= "student-id">ID</th> 
            <th className= "student-email">Email</th> 
            <th className= "donor-name">Name</th> 
            <th className= "donor-id">ID</th> 
            <th className= "donor-email">Email</th>
        </tr> 
        {approvals.map((item,index)=>{
            return(
                <tr> 
        
            <td>{item.studentname}</td> 
            <td>{item.studentid}</td> 
            <td>{item.studentemail}</td> 
            <td>{item.donorname}</td> 
            <td>NA</td> 
            <td>{item.donoremail}</td> 
            
            <td>
            <button onClick={approvehandler} value={index} style={{ border: "1px solid", backgroundColor:"green", margin:"1%", borderRadius:"20px", padding:"2px 5px"}}>Approve</button>
            <button onClick={denyhandler} value={index} style={{backgroundColor:"red", margin:"1%", borderRadius:"20px", padding:"2px 5px"}}>Deny</button>
            </td>
            <td>{item.status}</td>
        </tr>
            )
        })}
       
        

        </tbody>
      </table>
        </div>
    );
}


export default Approval