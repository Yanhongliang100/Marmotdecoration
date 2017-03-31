import React from 'react'
import fetchData from '../util/util.fetch.js'
import { Link } from 'react-router'
import Carousel from '../../component_dev/carousel/src/'
import Scroller from '../../component_dev/scroller/src/'
class Decoration extends React.Component {
	constructor (props){
		super(props)
		this.state = {
			list:'',
			list1:''
		}
	}
  render() {
    return (
      <div className="m-decoration">
        <div className="img">
            <img src="./image/decoration.png"/>
        </div>
        <div className="center" >
            <p>推荐品牌</p>
            <Scroller 
					    scrollX={true}
					    scrollY={false}
					    bounce={true}
					    
					>
	            <div className="aaa">
				    {this.state.list}
			    </div>
					</Scroller>
        </div>
        <div className="content">
            <div>
            <ul>
                <li>全部区域</li>
                <li>全部</li>
                <li>默认排序</li>    
            </ul> 
            </div>
            
            {this.state.list1}
        </div>
        
      </div>
    )
  }
  componentDidMount () {
  	var url = "http://localhost:3000/getList.php";
  	fetchData(url, function (res) {
  		console.log(res)
  		let Lis = res.data.map( val=>{
  			console.log(val.com_info.logosmall)
            return (<div><img  src={val.com_info.logosmall} /></div>)
        })
  		this.setState({
            list: Lis, 
        })
  	}.bind(this))
  	
  	fetchData(url, function (res) {
  		console.log(res)
  		let list1 = res.data.map( val=>{
  			console.log(val.com_info.logosmall)
            return (
            	<ul>
	               <li className="li"><img src={val.com_info.logosmall} /></li>
	               <li>
	                  <b>{val.com_info.comsimpname}</b>
	                  <i>12套设计&nbsp;&nbsp; 7个案列</i>
	                  <p>朝阳区&nbsp;北京市朝阳区高碑店</p>
	               </li>
	            </ul>
            	
            )
        })
                
        
  		this.setState({
            list1: list1
        })
  	}.bind(this))
  }
  
}

export default Decoration
