import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import UserRegisterContex from '../Store/UserRegisterContex';
import "./Register.css";

export const Register = () => {
   const navigate= useNavigate();
const[state,dispatch]=useContext(UserRegisterContex);
    const [enteredValue, setEnteredValue] = useState({
        name: "",
        email: "",
        password:"",
      });

      const submitHandler = (e) => {
        e.preventDefault();
        // dataCtx.addItem(enteredValue);
        setEnteredValue({...enteredValue, [e.target.name] : ''});
        dispatch({
          type: "ADD",
          payload: enteredValue,
        });
        navigate("/Login");
      };
      const valueChangeHandler = (e) => {
        setEnteredValue({
          ...enteredValue,
          id:Math.random().toString(),
          [e.target.name]: e.target.value,
        });
      };
  return (
    <section className="vh-100 bg-image" style={{backgroundImage: 'url("https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp")'}}>
    <div className="mask d-flex align-items-center h-100 gradient-custom-3">
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-9 col-lg-7 col-xl-6">
            <div className="card" style={{borderRadius: '15px'}}>
              <div className="card-body p-5">
                <h2 className="text-uppercase text-center mb-5">Create an account</h2>
                <form onSubmit={submitHandler}>
                  <div className="form-outline mb-4">
                    <input type="text"  className="form-control form-control-lg" name="name" value={enteredValue.name} onChange={valueChangeHandler}/>
                    <label className="form-label">Your Name</label>
                  </div>
                  <div className="form-outline mb-4">
                    <input type="email"  className="form-control form-control-lg" name="email" value={enteredValue.email} onChange={valueChangeHandler}/>
                    <label className="form-label" >Your Email</label>
                  </div>
                  <div className="form-outline mb-4">
                    <input type="password"  className="form-control form-control-lg" name="password" value={enteredValue.password} onChange={valueChangeHandler}/>
                    <label className="form-label">Password</label>
                  </div>
                  <div className="d-flex justify-content-center">
                    <button type="submit" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register</button>
                  </div>
                  <p className="text-center text-muted mt-5 mb-0">Have already an account? <a className="fw-bold text-body"><u><Link to="/Login">Login here</Link></u></a></p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  

  )
}
