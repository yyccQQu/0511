import React, { Component } from "react";

import MUtil from 'util/mm.jsx'
import User from 'service/user-service.jsx'
import './index.scss'

const _mm = new MUtil();
const _user = new User();


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  // 当用户名发生改变
  onInputChange(e) {
    let inputValue = e.target.value,
      inputName = e.target.name;
    this.setState({
      [inputName]: inputValue
    });
  }
  // 当用户提交表单
  onSubmit(){
      _user
        .login({
          username: this.state.username,
          password: this.state.password
        })
        .then(res => {
          console.log(1234)
        }, err => {});
  }

  onInputKeyUp(e){
        if(e.keyCode === 13){
            this.onSubmit();
        }
    }

  render() {
    return (
      <div className="col-md-4 col-md-offset-4">
        <div className="panel panel-default login-panel">
          <div className="panel-heading">欢迎登录 - MMALL管理系统</div>
          <div className="panel-body">
            <div>
              <div className="form-group">
                <input
                  type="text"
                  name="username"
                  className="form-control"
                  placeholder="请输入用户名"
                  onKeyUp={e => this.onInputKeyUp(e)}
                  onChange={e => this.onInputChange(e)}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="请输入密码"
                  onKeyUp={e => this.onInputKeyUp(e)}
                  onChange={e => this.onInputChange(e)}
                />
              </div>
              <button
                className="btn btn-lg btn-primary btn-block"
                onClick={e => {
                  this.onSubmit(e);
                }}
              >
                登录
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;