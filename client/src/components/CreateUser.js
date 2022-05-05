
import React, { Component } from 'react'
import { connect } from 'react-redux';
//import "bootstrap/dist/css/bootstrap.min.css";
export default class SignUp extends Component {
  render() {
    return (
      <form>
        <h3>Sign Up</h3>
        <div className="mb-3">
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
          />
        </div>
        <div className="mb-3">

          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="mb-3">

      <label>Password Verification</label>
      <input
    type="password"
    className="form-control"
    placeholder="Enter password"
    />
</div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/signIn">sign in?</a>
        </p>
      </form>
    )
  }
}