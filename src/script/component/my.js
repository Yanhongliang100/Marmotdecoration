import React from 'react'

class My extends React.Component {
	constructor(props){
	  super(props)
	  this.reginser=this.reginser.bind(this);
	  this.login=this.login.bind(this);

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
						window.location.href = "http://localhost:9000/#/board"
					}else{
						console.log("服务器繁忙，请稍后注册")
					}
				})	
	}
	login(){
		var username = this.refs.username.value;
		var pwd = this.refs.pwd.value;
		if(username == "" ||pwd == "" ){
			alert("请完善您的信息")
		}else{
			var url2="http://datainfo.duapp.com/shopdata/userinfo.php?status=login&userID="+userId+"&password="+pwd
            
			localStorage.setItem("username",username);
		}
	}
	
  render() {
    return (
      <div className="m-my">
          <div className="my-reginser">
            <input type="text" ref="userId"/>
            <input type="text" ref="pwd"/>
            <button onClick={this.reginser}>注册</button> 
          </div>
          <div className="my-login">
            <input type="text" ref="username"/><br/>
			<input type="password" ref="pwd"/><br/>
			<input type="button" value="登录" onClick={this.login}/><br/>
          </div>
          
      </div>
    )
  }
  componentDidMount() {
  	
  }
}

export default My
