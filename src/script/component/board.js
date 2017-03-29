import React from 'react'
import Carousel from '../../component_dev/carousel/src/'
import Scroller from '../../component_dev/scroller/src/'

class Board extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      swiperList: [<div/>],
      zhuangxiuList: []
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
        <div className="kuang">
           <ul>
              <li>
                 
                  <i><img src="./image/icon_calculater.png"/></i>
                  <b>设计与报价</b>
              </li>
              <li>
                  
                  <i><img src="./image/icon_calculater.png"/></i>
                  <b>预约装修</b>
              </li>
              <li>
                  
                  <i><img src="./image/icon_calculater.png"/></i>
                  <b>装修快报</b>
              </li>
              <li>
                  <i><img src="./image/icon_calculater.png"/></i>
                  <b>计算器</b>
              </li>
           </ul>
        </div>
        <div className="drn">
          <ul>
            <li>装修课堂</li>
            <li>全部</li>
          </ul>
          <Scroller 
					    scrollX={true}
					    scrollY={false}
					    bounce={true}
					    
					>
            <div className="aaa">
					    <img  src="./image/first_gallery01.png"/>
					    <img  src="./image/first_gallery02.png"/>
					    <img  src="./image/first_gallery03.png"/>
					    <img  src="./image/first_gallery04.png"/>
					    <img  src="./image/first_gallery05.png"/>
					    <img  src="./image/first_gallery06.png"/>
					    </div>
					</Scroller>
        </div>
        <div className="xiaoguo">
           <ul>
            <li>效果图精选</li>
            <li>更多</li>
          </ul>
          <img src="./image/png.png" /><img src="./image/png.png" /><img src="./image/png.png" />
        </div>
        
        
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
        swiperList: Lis,
        
      })
      })
  }
}

export default Board
