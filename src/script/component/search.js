import React from 'react'
import fetchData from '../util/util.fetch.js'
import Scroller from '../../component_dev/scroller/src/'
import { Link } from 'react-router'

class Search extends React.Component {
	constructor (props) {
    super(props)
    this.state = {
      logo: ''
    }
  }
	
  render() {
    return (
    	
	      <div className="m-search">
	        <form className="yo-search">
	          <label className="action">
	            <span className="yo-ico"></span>
	            <input type="text" className="input" placeholder="搜索图库" />
	          </label>
	        </form>
	        <div className="activeList">
	            <p className="activeListP"><img src="./image/img_letf_active_list.png" />30天活跃榜<img src="./image/img_right_active_list.png" /></p>
	            <ul className="activeListUl">
	               <li><img className="imgsanshi" src="./image/champion_icon.png" /></li>
	               <li><img src="./image/decorate_style_01.png" /></li>
	               <li><img src="./image/decorate_style_02.png" /></li>
	               <li><img src="./image/decorate_style_03.png" /></li>
	            </ul>
	        </div>
	        
	        <div className="imgTuKu">
	            <Scroller
				    ref="scroller"
				    usePullRefresh={true}
				    onRefresh={() => {
				        
				        setTimeout(() => {
                            this.setState({
				                logo: this.state.logo
				            })
				            this.refs.scroller.stopRefreshing(true); // 这个调用也可以放在异步操作的回调里之后    
                        }, 5000);	
			            
			          
				
				        
				    }}
				    
				    ref="scroller"
				    useLoadMore={true}
				   
				    onLoad={() => {
				    	setTimeout(() => {
				    		
				    	
				        fetchData('http://localhost:3000/getlistl.php', function (res) {
				        	        let imgLiss = res.data.map(val=>{
						         	console.log(val)
								        return (
								        	<div>
								        	<ul className="ulTuKu">
									              <li>
									                <Link to="/listxi"><img className="ulImg" src={val.com_info.logosmall}/></Link>
									                <p>
									                   <i>{val.com_info.comsimpname}</i>
									                   <b>{val.check_time}</b>
									                </p>
									              </li>
									              <li><img className="ulImg2" src="./image/image_love_nor.png" /></li>
									              
									        </ul>
									        <div className="sanImg">
									                <div className="bigImg">
									                   <img src={val.index_image_url} />
									                </div>
									                <div className="smallImg">
									                   <img src={val.img1} />
									                   <img src={val.img2} />
									                </div>
									        </div>
									        <p>{val.title}</p>
									        </div>    
									            )
								    })
			                this.setState({
			                  logo: this.state.logo.concat(imgLiss)
			                })
			                this.refs.scroller.stopRefreshing(true); // 这个调用也可以放在异步操作的回调里之后
			            }.bind(this))
				      },5000)
				   }}
				>
				    {this.state.logo}
				</Scroller>
	            
	        </div>
	      </div>
	    	
	    	
    	
    )
  }
  componentDidMount() {
    let url = 'http://localhost:3000/getList.php'
    fetchData(url, function (res) {
    	console.log(res.data[0].com_info.logosmall)
         let imgLis = res.data.map(val=>{
         	console.log(val)
        return (
        	<div>
        	<ul className="ulTuKu">
	              <li>
	                <Link to="/listxi/good_id?good_id=65553"><img className="ulImg" src={val.com_info.logosmall}/></Link>
	                <p>
	                   <i>{val.com_info.comsimpname}</i>
	                   <b>{val.check_time}</b>
	                </p>
	              </li>
	              <li><img className="ulImg2" src="./image/image_love_nor.png" /></li>
	              
	        </ul>
	        <div className="sanImg">
	                <div className="bigImg">
	                   <img src={val.index_image_url} />
	                </div>
	                <div className="smallImg">
	                   <img src={val.img1} />
	                   <img src={val.img2} />
	                </div>
	        </div>
	        <p>{val.title}</p>
	        </div>    
	            )
      })
        this.setState({
        	logo: imgLis
        
        }) 
    	
    }.bind(this))  
    
      
      
      
      
      
  }
}

export default Search
