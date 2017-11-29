import React from 'react'
import classNames from 'classnames/bind'
import styles from './index.css'
let cx = classNames.bind(styles)

class SceneListNull extends React.Component {
  render () {
    return (
      <div className={cx('scene_list_container')}>
        <div className={cx('scene_list__icon')} />
        <h3 className={cx('scene_list_h3')}>Cannot receive scenes for current lesson </h3>
        <h4 className={cx('scene_list_h4')}>请联系课程经理在网校教务平台进行设置</h4>
      </div>
    )
  }
}

export default SceneListNull
