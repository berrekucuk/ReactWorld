import React from 'react'
import { NavLink } from 'react-router-dom'


function Login() {

    const fncLogin = (evt: React.FormEvent) =>{
        evt.preventDefault()
        console.log('Login')
    }


  return (
    <>
        {/* row, sayfayı 12 eşit parçaya bölmemizi sağlar. */}
        <div className='row'>
            <div className='col-12 col-md-3 col-lg-4'></div>
            <div className='col-12 col-md-6 col-lg-4'>
                <h2>USER LOGIN</h2>
                    <form onSubmit={fncLogin}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email Address</label>
                        <input required type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input required type="password" className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <button type="submit" className="btn btn-primary">Submit</button>
                        <NavLink to='/register' className="btn btn-success">Register</NavLink>
                    </div>                    
                    </form>
            </div>
            <div className='col-12 col-md-3 col-lg-4'></div>
        </div>
    </>
)
}

export default Login