import React from 'react'
import classNames from 'classnames/bind'
import pureRender from 'pure-render-decorator'

import styles from './index.css'
let cx = classNames.bind(styles)

@pureRender
class SceneListNull extends React.Component {
  render () {
    return (
      <div className={cx('scene-list_container')}>
        <div className={cx('scene-list_icon')} />
        <h3 className={cx('scene-list_h3')}>Cannot receive scenes for current lesson </h3>
        <h4 className={cx('scene-list_h4')}>请联系课程经理在教务平台进行设置</h4>
      </div>
    )
  }
}

export default SceneListNull
