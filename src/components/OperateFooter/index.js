import React from 'react'
import classNames from 'classnames/bind'
import pureRender from 'pure-render-decorator'
import Timer from '@/components/Timer'
import styles from './index.css'

let cx = classNames.bind(styles)

@pureRender
class TeacherFooter extends React.Component {
  render () {
    let { clickStart, sceneStatus } = this.props
    return (
      <footer className={cx('footer')}>
        <div
          className={cx('footer_layout', sceneStatus < 1 ? '' : 'footer_hide')}
        >
          <div className={cx('footer_send-card')}>
            <span className={cx('footer_empty', 'footer_empty-send-card')}>
              empty
            </span>
            <button className={cx('btn', 'btn-send-card')} onClick={clickStart}>
              开始上课
            </button>
            <div className={cx('footer_tips')}>
              <i className={cx('footer_icon-tip')}>icon</i>
              <div>未指定的角色将由剩余学生自己选择</div>
            </div>
          </div>
        </div>
        <div
          className={cx(
            'footer_layout',
            sceneStatus === 1 ? '' : 'footer_hide'
          )}
        >
          <div className={cx('footer_end-costalk')}>
            <span className={cx('footer_empty')}>empty</span>
            <Timer start={sceneStatus === 1} />
            <button className={cx('btn', 'btn-end-costalk')}>结束cosplay</button>
          </div>
        </div>}
      </footer>
    )
  }
}

export default TeacherFooter
