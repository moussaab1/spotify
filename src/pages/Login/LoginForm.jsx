import React, { Component } from 'react';
import loginIcon from "./images/login_icon.png"
import auth from "../../config/auth";

import "./LoginForm.css"

class LoginForm extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const access_token = auth.getAuthTokenFromUrl();
    if (access_token) {
        this.props.history.push("/search");
    }
    else{
      this.props.history.push("/");
    }
   
  }

  render() {
    return (
        <div className="col text-center">
            <button className="btn btn-sm login_btn"   onClick={(event) => auth.login(event)}>
                <span>Login </span>
                <img className="login_image" src={loginIcon} alt=""/>
            </button>
        </div>)
     
  }
}
export default LoginForm ;