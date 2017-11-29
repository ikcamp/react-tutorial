import React from 'react'
import classNames from 'classnames/bind'

import styles from './index.css'

let cx = classNames.bind(styles)

class DialogueItem extends React.Component {
  render () {
    let {info, selectRoleId} = this.props
    const roleSelected = selectRoleId === info.roleId
    let activeClass = roleSelected ? 'dialogue--active' : ''
    let selected = roleSelected ? 'dialogue--selected' : ''
    return (
      <li className={cx('dialogue', activeClass, selected)}>
        {
          info.sentenses.map((v, i) => {
            return (
              <div className={cx('dialogue__layout--relative')} key={i}>
                <div className={cx('dialogue__action', i !== 0 ? 'dialogue__action--grey' : '')}>
                  <div className={cx('dialogue__info')}>
                    <b className={cx('dialogue__state', i !== 0 ? 'dialogue__state--white' : '')}>state</b>
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

export default DialogueItem
