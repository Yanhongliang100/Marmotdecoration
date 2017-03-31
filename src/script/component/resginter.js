import React from 'react'
import fetchData from '../util/util.fetch.js'
import { Link } from 'react-router'
class Resginter extends React.Component {
	constructor(props){
	  super(props)
	  this.reginser=this.reginser.bind(this);
	  this.state={
	  	
	  }
	}
	
	reginser () {
		var userId = this.refs.userId.value;
		console.log(userId)
		var pwd = this.refs.pwd.value;
		console.log(pwd)
		var url = "http://datainfo.duapp.com/shopdata/userinfo.php?status=register&userID="+userId+"&password="+pwd;
		fetch(url)
				.then(response => response.json())
				.then(res => {
					console.log(res)
					if(res==0){
						console.log("用户名重名")
					}else if(res==1){
						console.log("注册成功")
						window.location.href = "http://localhost:9000/#/my"
					}else{
						console.log("服务器繁忙，请稍后注册")
					}
				})	
	}
	
  render() {
    return (
    	
    	<div className="my-reginser">
    	    <div>
            <p>用户名:<input type="text" placeholder="请输入用户名" ref="userId"/></p><br/>
            <p>新密码:<input type="text" placeholder="请输入密码" ref="pwd"/></p><br/>
            <p>确密码:<input type="text" placeholder="请确认密码" /></p><br/>
            <button onClick={this.reginser}>注册</button> </div>
        </div>
       
    )
  }
  componentDidMount() {
  	
  }
}

export default Resginter
