import React, { useState } from 'react';
// import './App.css';
function Contact() {
    const[data,upadteData] =useState(
        {
           fullname:'',
           phone:'',
           email:'',
           massage:'',
        } 
    );
    function InputEvent(e){
       const {name,value}=e.target;
       upadteData((preVal)=>{
          return{
            ...preVal,
            [name]:value,

          }
       })
    }
    const formSubmit=(e)=>{e.preventDefault();
        alert(`data :${data.fullname}`);
    };
  return (
    <>
      <div className='my-5'>
          <h1 className='text-center'>Contact Us</h1>
      </div>
      <div className='container contact_div'>
          <div className='row'> 
             <div className='col-md-6 col-10 mx-auto shadow p-3 rounded'>
                <form onSubmit={formSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" placeholder="name" name="fullname" onChange={InputEvent} value={data.fullname}/>
                    </div>
                     <div className="mb-3">
                        <label  className="form-label">Phone Number</label>
                        <input type="text" className="form-control" id="phone" placeholder="phone@example.com" name="phone" onChange={InputEvent} value={data.phone}/>
                    </div>
                    <div className="mb-3">
                        <label  className="form-label">Email Id</label>
                        <input type="email" className="form-control" id="email" placeholder="email@example.com" name="email" onChange={InputEvent} value={data.email}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Massage</label>
                        <textarea className="form-control" id="massage" rows="3" name="massage" onChange={InputEvent} value={data.massage}></textarea>
                    </div>

                    <div className="col-12">
                        <button className="btn btn-outline-primary" type="submit">Submit</button>
                     </div>
                </form>
             </div>
          </div>

      </div>
    </>
  );
}

export default Contact;