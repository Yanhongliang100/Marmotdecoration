import React from 'react'
import Carousel from '../../component_dev/carousel/src/'


class Content extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: ''
    }
  }
  render () {
    return (
       <div className="m-content">
          <header></header>
          <section>ggg</section>
          <footer>
              <ul>
                 <li className="li">
                    <img src="./image/img_letf_active_list.png"/>
                    <i>电话</i>
                 </li>
                 <li className="li2">
                    <span>预约免费设计</span>
                 </li>
              </ul>
          </footer>
       </div>
    )
  }

  componentDidMount() {
    let url = 'http://localhost:3000/getList.php'
    fetch(url)
      .then(response=>response.json())
      .then(res=>{
		      let Lis = res.data.map(val=>{
		        return (<p>你们</p>)
		      })
		      this.setState({
		        
		      })
      })
  }
}

export default Content
