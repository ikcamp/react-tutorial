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
    let addOrCancel = `player__icon--s${playerInfo.selected ? 1 : 0}`
    let hasNoBottomStyle = hasBottom ? '' : 'player__content__nobottom'
    return (
      <li className={cx('player')}>
        <div className={cx('player__content', hasNoBottomStyle)} onClick={this.clickPlayer}>
          <div className={cx('player__user')}>
            <img src={playerInfo.avatar} alt='' className={cx('player__avatar')} />
            <span className={cx('player__username')}>{playerInfo.userName}</span>
          </div>
          <i className={cx('player__icon', addOrCancel)}>addOrCancel</i>
        </div>
      </li>
    )
  }
}

export default PlayerListItem
