import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import classNames from 'classnames/bind'
import pureRender from 'pure-render-decorator'

import Header from '@/components/Header'
import CountTimer from '@/components/CountTimer'
import './reset.css'
import styles from './index.css'
let cx = classNames.bind(styles)

@pureRender
class AppContainer extends Component {
  render () {
    const { sceneInfo, goBack, countTimer } = this.props
    return (
      <div className={cx('app-p-box')}>
        <CountTimer show={countTimer.show} time={5}/>
        <Header goBack={goBack} sceneInfo={sceneInfo}/>
        {this.props.children}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    sceneInfo: state.sceneInfo,
    countTimer: state.countTimer
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    goBack () {
      dispatch({
        type: 'BACK_TO_SCENE_LIST'
      })
    }
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AppContainer))
