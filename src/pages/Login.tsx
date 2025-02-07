import React from 'react'


function Login() {
  return (
    <>
        {/* row, sayfayı 12 eşit parçaya bölmemizi sağlar. */}
        <div className='row'>
            <div className='col-12 col-md-3 col-lg-4'></div>
            <div className='col-12 col-md-3 col-lg-4'>
                <h2>USER LOGIN</h2>
                    <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email Address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
            </div>
            <div className='col-12 col-md-3 col-lg-4'></div>
        </div>
    </>
)
}

export default Login