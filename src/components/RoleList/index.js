import React from 'react'
import classNames from 'classnames/bind'
import RoleListItem from '@/components/RoleListItem'
import styles from './index.css'

let cx = classNames.bind(styles)

class RoleList extends React.Component {
  render () {
    let {roleList, sceneInfo, clickRole, clickRoleHeadPic} = this.props
    let { selectRoleId } = sceneInfo
    return (
      <ul className={cx('role-list')}>
        {
          roleList.data.map((v, i) => {
            return (
              <RoleListItem key={i} roleInfo={v} selectRoleId={selectRoleId} clickRole={clickRole} clickRoleHeadPic={clickRoleHeadPic} />
            )
          })
        }
      </ul>
    )
  }
}

export default RoleList