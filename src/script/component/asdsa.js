import React from 'react'
import Carousel from '../../component_dev/carousel/src/'


class Aaaaa extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      swiperList: [<div/>]
    }
  }
login() {
		var userID = this.refs.username.value;
		console.log(userID)
		var password = this.refs.pwd.value;
		if (userID == "" || password == "") {
			alert("请完善您的信息")
		} else {
			var url = "http://datainfo.duapp.com/shopdata/userinfo.php?status=login&userID=" + userID + "&password=" + password;
			fetch(url)
				.then(response => response.json())
				.then(response => {
					if (response == 0) {
						alert("用户名不存在!");
					} else if (response == 2) {
						alert("用户名密码不符!");
					} else if (response) {
						userID = response.userID;
						console.log(userID)
						window.location.href = "http://localhost:9000/#/my?userID=" + userID;
					}



				})
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
<div className="my-reginser">
            <input type="text" ref="userId"/>
            <input type="text" ref="pwd"/>
            <button onClick={this.reginser}>注册</button> 
          </div>
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
      <div className="m-board">
        <div className="swiper">
          <Carousel autoplay={false}>
            {this.state.swiperList}
          </Carousel>
        </div>
        <div className="model">
           <ul>
              <li>
                  <i></i>
                  <b></b>
              </li>
           </ul>
        </div>
        <ul>
          <li>
            <div>
              <b></b>
              <i></i>
            </div>
            <ul>
              <li>
                <i></i>
                <b></b>
              </li>
              <li>
                <i></i>
                <b></b>
              </li>
            </ul>
          </li>
        </ul>
        
      </div>
    )
  }

  componentDidMount() {
    let url = 'http://localhost:3000/banner.php'
    fetch(url)
      .then(response=>response.json())
      .then(res=>{
      //console.log(res.data[0].img_url)
      let Lis = res.data.map(val=>{
        return (<li className="item"><img className="img" src={val.img_url} /></li>)
      })
      this.setState({
        swiperList: Lis
      })
      })
  }
}

export default Aaaa
