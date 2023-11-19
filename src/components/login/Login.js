import React from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  
    let navigate = useNavigate();


    return (
        <>
            <div className="header">
                <div className="inner-header flex">
                    <div id="container">
                        <div className="form-wrap">
                            <h1>Sign In</h1>
                            <div id="alerts">Welcome Back!</div>
                            <form id="input_form" >
                                <div className="form-group">
                                    <label for="email">Email</label>
                                    <input type="text" name="email" id="email" placeholder="admin@gmail.com"

                                    />
                                </div>
                                <div className="form-group">
                                    <label for="password">Password</label>
                                    <input type="password" placeholder="admin" name="password" id="password"


                                    />
                                </div>

                                <Link to={'/home'} id="submit" >
                                    Sign In changedd
                                </Link>

                              <div className='foo'>Don't Have An Account?  &nbsp; <Link className='lin' to={"/register"}>Register Here!</Link></div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>

            <div className="content flex">
                <footer>
                <p className="terms">
                                    By Clicking the Sign In Button, you agree to our
                                    &nbsp;
                                    <a href="#">Terms & Conditions</a>&nbsp; and &nbsp;
                                    <a href="#">Privacy Polict</a>
                                    
                                </p>
                    
                </footer>
            </div>
        </>
    )
}
export default Login