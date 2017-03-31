import React from 'react'
import fetchData from '../util/util.fetch.js'
import Carousel from '../../component_dev/carousel/src/'
import Scroller from '../../component_dev/scroller/src/'
import Popup from '../../component_dev/popup/src/'
class Listxi extends React.Component {
	constructor (props){
		super(props)
		
		this.state = {
			img:"",
			img2:"",
			img3: '',
	        img4: '',
	        img5: '',
	        show:false
		}
	}
	  render() {
	    return (
	      <div className="m-listxi">
	            <Carousel autoplay={false} dots={false} loop={true}>
				    <li className="item"><img className="img" src="//img1.qunarzz.com/qs/1610/a6/01d1ad00e4b9e102.jpg" /></li>  
				    <li className="item"><img className="img" src="//img1.qunarzz.com/qs/1610/a6/01d1ad00e4b9e102.jpg" /></li>  
				    <li className="item"><img className="img" src="//img1.qunarzz.com/qs/1610/a6/01d1ad00e4b9e102.jpg" /></li>  
				</Carousel>
				<p className="p">
				  <b>天兴家园</b>
				  <i>二居室复式·180~300㎡·72万</i>
				</p>
				<div>
				<div className="tuce">
				    <p>相关图册</p>
				    <div className="listtuce">
				         <div className="tu">
				            <img src={this.state.img} />
				            <i>【 嘉铭铜城】·复式</i>
				         </div>
				         <div className="tu">
				            <img src={this.state.img2} />
				            <i>【华润西山墅】·别墅</i>
				         </div>
				         
				    </div>
				</div>
				<div className="tuce tucece">
				    
				    <div className="listtuce">
				         <div className="tu">
				            <img src={this.state.img3} />
				            <i>【 嘉铭铜城】·复式</i>
				         </div>
				         <div className="tu">
				            <img src={this.state.img4} />
				            <i>【华润西山墅】·别墅</i>
				         </div>
				         
				    </div>
				</div>
				</div>
				<div className="last">
				    <ul>
				      <li>
				         <i><img src={this.state.img5}/></i>
				         <b>龙辉佳艺装饰</b>
				      </li>
				      <Popup show={this.state.show} height={200} onMaskTap={this.mokaung.bind(this)} >
						    <p>请输入手机号</p>
					  </Popup>
				      <li className="mianfei" onClick={this.motaikaung.bind(this)}>免费设计</li> 
                            
						
				      
				    </ul>
				</div>
	      </div>
	    )
	}
	motaikaung () {
		
		this.setState({
	        show: true	
	    })
	}
	mokaung () {
		
		this.setState({
	        show: false
	    })
	}
	componentDidMount() {
  	    var that = this
  	    var url = window.location.href
  	    function getUrlSearch(url,name){
			var position = url.indexOf("?");
			if(position != -1){
				var search = url.substr(position+1);
				var username = search.substr(search.indexOf("=")+1)
				return username;
			}
			return "";
		}
        console.log(getUrlSearch(window.location.href,"goods_id"))
        
        let formData = new FormData();  
		formData.append("classID","2");  
		
        fetch("http://localhost:3000/getListone.php")
        .then((response) => {
        	return response.json()
        })
        .then((res) => {
        	console.log(res)
        	 var img1=res.data[0].img1
        	 var img2=res.data[0].img2
        	 var img3=res.data[1].img1
        	 var img4=res.data[1].img2
        	 var img5=res.data[1].com_info.logosmall
        	this.setState({
	        	img: img1,
	        	img2: img2,
	        	img3: img3,
	        	img4: img4,
	        	img5: img5
	        })
        	
        })

       
    }
}

export default Listxi
