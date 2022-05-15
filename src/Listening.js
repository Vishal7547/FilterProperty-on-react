import './Listening.css'
import { Button } from 'react-bootstrap';
import Shirts1 from '../src/Images/Shirt1.png'
import Shirts2 from '../src/Images/Shirt2.png'
import Shirts3 from '../src/Images/Shirt3.png'
function Listening(){
    return(
        <>
        {/* <h1>hello Listening</h1> */}
        {/* <Button>HIi World</Button> */}
        <div className='container color'>
          <div className='row recent '><h1>Recent Listening</h1></div>
          <div className='row yourRecent' style={{textAlign:"start"}}><p>Your Recent Product Listing on simuverse</p></div>
          <div className='row '>
               <div className='col-8 increase' >
                  <div style={{display:"flex"}} className="justify-content-between"><div className='date'>TODAY</div> <div className='date'>16/04/22</div></div>
                  </div> 
          </div>
          <div className='row justify-content-between' style={{borderBottom:"1px solid #CCCCCC "}}>
            <div className='col-md-8  mb-2 box-1 pb-4' style={{border:"1px solid #FFFFFF"}}>
                <div className='row'>
                    <div className='col-6 sameDesign'  style={{textAlign:"start"}}><p>Product name</p></div>
                    <div className='col-3 sameDesign'  style={{textAlign:"end"}}><p>price per piece</p></div>
                    <div className='col-3 sameDesign'  style={{textAlign:"end"}}><p>price</p></div>
                </div>
                <div className='row'>
                    <div className='col-12 sameDesign' style={{textAlign:"start"}}><p>Details</p></div>
                    <div className='col-6 lorem' style={{textAlign:"justify"}}><p>Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa.dard sin dal sedicesimo</p></div>
                    <div className='col-3 sameDesign'  style={{textAlign:"end"}}><p>Quality</p></div>
                    <div className='col-3 sameDesign' style={{textAlign:"end"}}><p>1 X 20</p></div>
                </div>
            </div>
            <div className='col-md-3 col-sm-4 margin-top-1 cardDesign mb-2 p-1'>
                
                    <img src={Shirts1} alt="" className="img-fluid"/> 
               
            </div>

          </div>

          {/* <div className='row mt-3'>
              <div className='col-6'  style={{textAlign:"start"}}><p>LAST MONTH</p></div>
              <div className='col-6'  style={{textAlign:"start"}}><p>15/03/22</p></div>
          </div> */}
          <div className='row mt-3 '>
               <div className='col-8 increase' >
                  <div style={{display:"flex"}} className="justify-content-between"><div className='date'>LAST MONTH</div> <div className='date'>15/03/22</div></div>
                  </div> 
          </div>
            
          <div className='row justify-content-between' >
            <div className='col-md-8 mb-2 box-2 pb-4' style={{border:"1px solid #FFFFFF"}}>
                <div className='row'>
                    <div className='col-6 sameDesign'  style={{textAlign:"start"}}><p>Product name</p></div>
                    <div className='col-3 sameDesign'  style={{textAlign:"end"}}><p>price per piece</p></div>
                    <div className='col-3 sameDesign'  style={{textAlign:"end"}}><p>price</p></div>
                </div>
                <div className='row'>
                    <div className='col-12 sameDesign' style={{textAlign:"start"}}><p>Details</p></div>
                    <div className='col-6 lorem' style={{textAlign:"justify"}}><p>Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa.dard sin dal sedicesimo</p></div>
                    <div className='col-3 sameDesign'  style={{textAlign:"end"}}><p>Quality</p></div>
                    <div className='col-3 sameDesign' style={{textAlign:"end"}}><p>1 X 20</p></div>
                </div>
            </div>
            <div className='col-md-3 col-sm-4 cardDesign margin-top-2 p-1'>
               <img src={Shirts2} className="img-fluid"/> 
            </div>

          </div>


          <div className='row justify-content-between' >
            <div className='col-md-8 mb-2 box-3 pb-4' style={{border:"1px solid #FFFFFF"}}>
                <div className='row'>
                    <div className='col-6 sameDesign'  style={{textAlign:"start"}}><p>Product name</p></div>
                    <div className='col-3 sameDesign'  style={{textAlign:"end"}}><p>price per piece</p></div>
                    <div className='col-3 sameDesign'  style={{textAlign:"end"}}><p>price</p></div>
                </div>
                <div className='row'>
                    <div className='col-12 sameDesign' style={{textAlign:"start"}}><p>Details</p></div>
                    <div className='col-6 lorem' style={{textAlign:"justify"}}><p>Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa.dard sin dal sedicesimo</p></div>
                    <div className='col-3 sameDesign'  style={{textAlign:"end"}}><p>Quality</p></div>
                    <div className='col-3 sameDesign' style={{textAlign:"end"}}><p>1 X 20</p></div>
                </div>
            </div>
            <div className='col-md-3 col-sm-4 cardDesign mt-4 p-1'>
            <img src={Shirts3} className="img-fluid "/> 
            </div>

          </div>
          
          <div className='row mt-4' > <div className='col-12 ' ><button className='btn btn-design' style={{textAlign:"center"}}>View More</button>   </div> </div>


          
        </div>

        </>
    )
}

export default Listening