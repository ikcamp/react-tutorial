import React from 'react'
import classNames from 'classnames/bind'
import pureRender from 'pure-render-decorator'

import RoleListItem from '@/components/RoleListItem'
import styles from './index.css'
let cx = classNames.bind(styles)

@pureRender
class RoleList extends React.Component {
  render () {
    let {roleList, sceneInfo, clickRole, clickRoleHeadPic} = this.props
    let { selectRoleId, sceneStatus } = sceneInfo
    return (
      <ul className={cx('role-list')}>
        {
          roleList.data.map((v, i) => {
            return (
              <RoleListItem key={i} roleInfo={v} selectRoleId={selectRoleId} clickRole={clickRole} clickRoleHeadPic={sceneStatus === 0 ? clickRoleHeadPic : () => {}} />
            )
          })
        }
      </ul>
    )
  }
}

export default RoleList
