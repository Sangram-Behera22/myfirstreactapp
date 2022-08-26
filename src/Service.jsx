import React from 'react';
import Sdata from './Sdata';
import Card from './Card';
// import './App.css';
function Service() {
  return (
    <>
     <div className="my-5">
            <div className="container-fluid nav-bg">
                <div className="row "> 
                    <div className="col-10 mx-auto">
                        <h1 className='text-center m-4'>Our Services</h1>
                         <div className='row gy-4'>  
                                {
                                    Sdata.map((item,index)=>{
                                        return(     
                                            <Card  imgsrc={item.imgsrc} title={item.title} key={index}/> 
                                        );
                                    })
                                }
                         </div>
                    </div>
                </div>
            </div>
      </div>       
    </>
  );
}

export default Service;