import React from 'react'

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
	            {this.state.logo}
	        </div>
	      </div>
	    	
	    	
    	
    )
  }
  componentDidMount() {
    let url = 'http://localhost:3000/getList.php'
    fetch(url)
      .then(response=>response.json())
      .then(res=>{
         console.log(res.data[0].com_info.logosmall)
         let imgLis = res.data.map(val=>{
         	console.log(val)
        return (
        	<div>
        	<ul className="ulTuKu">
	              <li>
	                <img className="ulImg" src={val.com_info.logosmall}/>
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
      })
      
      
      
      
      
  }
}

export default Search
