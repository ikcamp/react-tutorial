import React from 'react'
import classNames from 'classnames/bind'
import pureRender from 'pure-render-decorator'

import styles from './index.css'
let cx = classNames.bind(styles)

@pureRender
class TipsItem extends React.Component {
  render () {
    let {info, selectRoleId} = this.props
    const roleSelected = selectRoleId === info.roleId
    let activeClass = roleSelected ? 'tips-active' : ''
    return (
      <li className={cx('tips', activeClass)}>
        {
          info.sentenses.map((v, i) => {
            return (
              <div className={cx('tips-layout_relative')} key={i}>
                <div className={cx('tips-action', i !== 0 ? 'tips-action_grey' : '')}>
                  <div className={cx('tips-info')}>
                    <b className={cx('tips-state', i !== 0 ? 'tips-state_white' : '')}>state</b>
                    <div>{v.desc}</div>
                  </div>
                </div>
              </div>
            )
          })
        }
      </li>
    )
  }
}

export default TipsItem
