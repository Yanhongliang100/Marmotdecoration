import React from 'react'
import fetchData from '../util/util.fetch.js'

class Listxi extends React.Component {
	constructor (props){
		super(props)
		this.state = {
			list:''
		}
	}
	  render() {
	    return (
	      <div className="m-listxi">
	         详情详情   
	      </div>
	    )
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
        })

       
    }
}

export default Listxi
