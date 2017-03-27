import React from 'react'

class Search extends React.Component {
	constructor (props) {
    super(props)
    this.state = {
      title: ''
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
	            <ul className="TuKu">
	              <li>
	                <img src="./image/decorate_company_logo.png"/>
	                <p>
	                   <i>轻舟装饰</i>
	                   <b>2天前</b>
	                </p>
	                <img src="./image/image_love_nor.png" />
	              </li>
	            </ul>
	            <p>[华悦铭悦世家]·三居室·120~180㎡·35万</p>
	            
	        </div>
	      </div>
	    	
	    	
    	
    )
  }
}

export default Search
