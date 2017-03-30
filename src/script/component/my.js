import React from 'react'
import fetchData from '../util/util.fetch.js'
import { Link } from 'react-router'
class My extends React.Component {
	constructor(props){
	  super(props)
	  this.login=this.login.bind(this);
	  this.state={
	  	
	  }
	}
	
	login(){
		var username = this.refs.username.value;
		var pwd = this.refs.pwd.value;
		if(username == "" ||pwd == "" ){
			alert("请完善您的信息")
		}else{
			var url="http://datainfo.duapp.com/shopdata/userinfo.php?status=login&userID="+username+"&password="+pwd
            fetchData(url, function (res) {
            	console.log(res)
            }.bind(this))
			localStorage.setItem("username",username);
		}
	}
	
  render() {
    return (
      <div className="m-my">
          <div className="my-login">
            <div><i><img src="./image/icon_login_user.png"/></i><input type="text" placeholder="请输入用户名" ref="username"/></div><br/>
			<div><i><img src="./image/icon_login_password.png"/></i><input type="password" placeholder="请输入密码" ref="pwd"/></div><br/>
            
            <div className="yonghu">
                <button className="buttona" onClick={this.login}>登录</button><br/>
                <Link to="/resginter"><button className="buttona">注册</button></Link><br/>
            </div>
			
          </div>
          
      </div>
    )
  }
  componentDidMount() {
  	
  }
}

export default My
