import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux'

class NoMatchContainer extends Component {
  render () {
    return (
      <div style={{'textAlign': 'center', 'paddingTop': '200px'}}>
        <h2>404!Not Found</h2>
        <p>路由不匹配，请检查路由</p>
      </div>
    )
  }
}

export default withRouter(connect()(NoMatchContainer))
