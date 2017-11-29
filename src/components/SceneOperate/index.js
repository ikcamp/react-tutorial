import React from 'react'
import classNames from 'classnames/bind'
import pureRender from 'pure-render-decorator'

import styles from './index.css'
import RoleList from '@/components/RoleList'
import PlayerList from '@/components/PlayerList'
import TipsList from '@/components/TipsList'
import RoleIntro from '@/components/RoleIntro'
import OperateFooter from '@/components/OperateFooter'
let cx = classNames.bind(styles)

@pureRender
class SceneOperate extends React.Component {
  render () {
    let {playerList, roleIntro, roleList, sceneInfo, tipsList} = this.props
    const {clickRole, clickRoleHeadPic, clickStopEvent, clickPlayer, clickStart} = this.props
    return (
      <div className={cx('teacher-perate')} onClick={clickStopEvent}>
        <div className={cx('teacher-perate__content')}>
          <div className={cx('teacher-perate__left')}>
            <div className={cx('teacher-perate__lists')}>
              <RoleList roleList={roleList} sceneInfo={sceneInfo} clickRole={clickRole} clickRoleHeadPic={clickRoleHeadPic}/>
            </div>
            <PlayerList playerList={playerList} roleList={roleList} sceneInfo={sceneInfo} clickPlayer={clickPlayer}/>
            <RoleIntro roleIntro={roleIntro} sceneInfo={sceneInfo}/>
          </div>
          <div className={cx('teacher-perate__right')}>
            <TipsList tipsList={tipsList} sceneInfo={sceneInfo}/>
          </div>
        </div>
        <OperateFooter clickStart={clickStart} />
      </div>
    )
  }
}

export default SceneOperate
