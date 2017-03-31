import React from 'react'

import { Link } from 'react-router'

class Index extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: ''
    }
  }

  clickHandler(type) {
    this.setState({
      title: type
    })
  }

  render() {
    return (
      <div className="m-index">
        <header>
          <div className="yo-header yo-header-a">
            <h2 className="title">{this.state.title}</h2>
            <span className="regret feedback">反馈</span>
          </div>
        </header>
        <section>
          {this.props.children}
        </section>
        <footer>
          <ul>
            <li className="active">
              <Link to="/board" onClick={this.clickHandler.bind(this, '土拨鼠')} activeClassName="active">
                <i className="iconfont">&#xe604;</i>
                <b>首页</b>
              </Link>
            </li>	
            <li>
              <Link to="/search" onClick={this.clickHandler.bind(this, '逛图库')} activeClassName="active">
                <i className="iconfont">&#xe601;</i>
                <b>逛图库</b>
              </Link>
            </li>
            <li>
            <Link to="/decoration" onClick={this.clickHandler.bind(this, '找装修')} activeClassName="active">
              <i className="iconfont">&#xe615;</i>
              <b>找装修</b>
            </Link>
            </li>
            <li>
            <Link to="/my" onClick={this.clickHandler.bind(this, '我的')} activeClassName="active">
              <i className="iconfont">&#xe614;</i>
              <b>我</b>
            </Link>
            </li>
          </ul>
        </footer>
      </div>
    )
  }

  componentDidMount() {
    
  }
}

export default Index
