import React from 'react'
import classNames from 'classnames/bind'
import pureRender from 'pure-render-decorator'
import styles from './index.css'

let cx = classNames.bind(styles)
@pureRender
class PlayerListItem extends React.Component {
  constructor (props) {
    super(props)
    this.clickPlayer = this.clickPlayer.bind(this)
  }
  clickPlayer () {
    let {clickPlayer, playerInfo, sceneInfo} = this.props
    playerInfo.selectRoleId = sceneInfo.selectRoleId
    clickPlayer(playerInfo)
  }
  render () {
    let { playerInfo, hasBottom } = this.props
    let addOrCancel = `player-icon_s${playerInfo.selected ? 1 : 0}`
    let hasNoBottomStyle = hasBottom ? '' : 'player-content_nobottom'
    return (
      <li className={cx('player')}>
        <div className={cx('player-content', hasNoBottomStyle)} onClick={this.clickPlayer}>
          <div className={cx('player-user')}>
            <img src={playerInfo.avatar} alt='' className={cx('player-avatar')} />
            <span className={cx('player-username')}>{playerInfo.userName}</span>
          </div>
          <i className={cx('player-icon', addOrCancel)}>addOrCancel</i>
        </div>
      </li>
    )
  }
}

export default PlayerListItem
