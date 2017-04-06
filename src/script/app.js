require('../style/app.scss')

import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute,IndexRedirect, hashHistory } from 'react-router'

import Index from './component/index'
import Board from './component/board'
import Search from './component/search'
import My from './component/my'
import Decoration from './component/decoration'
import Resginter from './component/resginter'
import Listxi from './component/listxi'
import Content from './component/list'
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Index}>
//    <IndexRoute component={Board}></IndexRoute>
      <IndexRedirect to="Board"></IndexRedirect>
      <Route path="board" component={Board}></Route>
      <Route path="search" component={Search}></Route>
      <Route path="decoration" component={Decoration}></Route>
      <Route path="my" component={My}></Route>
    </Route>
    <Route path="/resginter" component={Resginter}></Route>
    <Route path="/listxi/:type" component={Listxi}></Route>
    <Route path="/list" component={Content}></Route>
  </Router>,
  document.getElementById('root')
)
