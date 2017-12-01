import React from 'react'
import classNames from 'classnames/bind'

import styles from './index.css'
let cx = classNames.bind(styles)

class Timer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      hour: '00',
      minute: '00',
      second: '00',
      time: 0
    }
  }

  zeroFill (num) {
    return (num >= 0 && num < 10) ? ('0' + num) : num
  }

  formatTime () {
    let second = this.zeroFill(this.state.time % 60)
    let minute = this.zeroFill(parseInt(this.state.time / 60))
    let hour = this.zeroFill(parseInt(this.state.time / 3600))

    this.setState({second, minute, hour})
  }

  setIntervalTime () {
    let self = this

    if (this.timer !== void 0) {
      return
    }

    self.timer = setInterval(() => {
      self.setState({
        time: self.state.time + 1
      })
      self.formatTime()
    }, 1000)
  }

  clearIntervalTime () {
    clearInterval(this.timer)
    this.timer = void 0
  }

  componentWillReceiveProps (nextProps) {
    let {start} = nextProps

    if (start) { // 开始
      this.setIntervalTime()
    } else {
      this.clearIntervalTime()
    }
  }

  componentWillUnmount () {
    this.clearIntervalTime()
  }

  render () {
    return (
      <div className={cx('timer')}>
        <span>{this.state.hour}:</span>
        <span>{this.state.minute}:</span>
        <span>{this.state.second}</span>
      </div>
    )
  }
}

export default Timer
