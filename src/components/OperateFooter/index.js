import React from 'react'
import classNames from 'classnames/bind'
import pureRender from 'pure-render-decorator'

import styles from './index.css'

let cx = classNames.bind(styles)

@pureRender
class TeacherFooter extends React.Component {
  render () {
    let {clickStart} = this.props
    return (
      <footer className={cx('footer')}>
        <div className={cx('footer__layout')}>
          <div className={cx('footer__send-card')}>
            <span className={cx('footer__empty', 'footer__empty--send-card')}>empty</span>
            <button className={cx('btn', 'btn--send-card')} onClick={clickStart}>开始上课</button>
            <div className={cx('footer__tips')}>
              <i className={cx('footer__icon-tip')}>icon</i>
              <div>未指定的角色将由剩余学生自己选择</div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default TeacherFooter
