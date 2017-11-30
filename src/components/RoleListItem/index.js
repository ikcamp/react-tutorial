import React from 'react'
import classNames from 'classnames/bind'

import styles from './index.css'
let cx = classNames.bind(styles)

class RoleListItem extends React.Component {
  constructor (props) {
    super(props)
    this.clickRole = this.clickRole.bind(this)
    this.clickRoleHeadPic = this.clickRoleHeadPic.bind(this)
  }
  clickRole () {
    let {clickRole, roleInfo} = this.props
    clickRole(roleInfo.roleId)
  }
  clickRoleHeadPic (e) {
    let {clickRoleHeadPic} = this.props
    let $target = e.target
    setTimeout(() => {
      clickRoleHeadPic($target.parentNode.parentNode.offsetTop)
    }, 0)
  }
  render () {
    let {roleInfo, selectRoleId} = this.props
    const selected = selectRoleId === roleInfo.roleId
    let roleSelected = selected ? 'role--selected' : ''
    let roleLeftSelected = selected ? 'role__left--selected' : ''
    return (
      <li className={cx('role', roleSelected) + ' role-list-item'} onClick={this.clickRole}>
        <div className={cx('role__left_block')}>
          <span className={cx('role__left', roleLeftSelected)}>role__left</span>
          <div className={cx('role__avatar-wrap')} onClick={this.clickRoleHeadPic}>
            <img src={roleInfo.avatar ? roleInfo.avatar : roleInfo.headPicUrl} className={cx('role__avatar')} alt='' />
          </div>
        </div>
        <div className={cx('role__right')}>
          <span className={cx('roleName')}>{roleInfo.roleName}</span>
          <span className={cx('roleUser')}>{roleInfo.userName}</span>
        </div>
      </li>
    )
  }
}

export default RoleListItem
