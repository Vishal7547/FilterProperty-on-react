import React from 'react'
import './TableData'
import { useState } from 'react'
import './Table.css'
import {Container,Row,Button, NavItem} from 'react-bootstrap'
import {Colleges} from './TableData'

function Table() {
  
const [filterData,setFilterData] =useState('')


  return (
    <div className='bg-light' style={{width:"100%",height:"100vh"}}>
        <Container>
            <Row><h5 className='mt-3' style={{FontWeight:"Bold",color:"green"}}>Filter College Name or Course Name</h5></Row>
            <Row className='my-5' > 
             <input class="form-control me-2"
             className='w-25 colorSet'
              type="search"
               placeholder="Search"
                aria-label="Search"
                onChange={(i)=>{
                    setFilterData(i.target.value)
                }}

                 style={{cursor:"pointer",
                
                 outline:"none",
                 borderRadius:"30px",
               
                 }}/>

                 </Row>
                 <Row 
                  style={{textAlign:"center",
                  }} >
          


 <table class="table table-dark  table-responsive">
  <thead>
    <tr>
      <th >College Name</th>
      <th>Courses</th>
      <th >Duration</th>
      <th>Fee</th>
    </tr>
  </thead>
  <tbody>
  {
 Colleges.filter((item)=>{
  if(filterData==''){
      return item
  }else if(item.college.toLocaleLowerCase().includes(filterData.toLocaleLowerCase()) 
  ||
   item.coursesName.toLocaleLowerCase().includes(filterData.toLocaleLowerCase())){
      return item
  }
}).map((item,index)=>(
<tr>
      <th>{item.college}</th>
      <td>{item.coursesName}</td>
      <td>{item.duration}</td>
      <td>{item.fee}</td>
    </tr>
  
 ))
}
    
  </tbody>
</table>



                        
            </Row>
        </Container>
    </div>
  )
}

export default Table