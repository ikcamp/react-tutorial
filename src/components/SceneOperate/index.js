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
      <div className={cx('scene-perate')} onClick={clickStopEvent}>
        <div className={cx('scene-perate_content')}>
          <div className={cx('scene-perate_left')}>
            <div className={cx('scene-perate_lists')}>
              <RoleList roleList={roleList} sceneInfo={sceneInfo} clickRole={clickRole} clickRoleHeadPic={clickRoleHeadPic}/>
            </div>
            <PlayerList playerList={playerList} roleList={roleList} sceneInfo={sceneInfo} clickPlayer={clickPlayer}/>
            <RoleIntro roleIntro={roleIntro} sceneInfo={sceneInfo}/>
          </div>
          <div className={cx('scene-perate_right')}>
            <TipsList tipsList={tipsList} sceneInfo={sceneInfo}/>
          </div>
        </div>
        <OperateFooter clickStart={clickStart} />
      </div>
    )
  }
}

export default SceneOperate
