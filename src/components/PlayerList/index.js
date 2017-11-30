import React from 'react'
import classNames from 'classnames/bind'
import pureRender from 'pure-render-decorator'
import PlayerListItem from '@/components/PlayerListItem'
import styles from './index.css'

let cx = classNames.bind(styles)
@pureRender
class PlayerList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      show: false
    }
    this.clickPlayer = this.clickPlayer.bind(this)
  }
  clickPlayer (playInfo) {
    let {playerList, roleList, clickPlayer} = this.props
    clickPlayer(playInfo, playerList, roleList)
  }
  render () {
    let { playerList, sceneInfo } = this.props
    let { show, top } = playerList
    let players = playerList.data
    return (
      <div style={{'top': `${top + 60}px`}} className={cx('player-list', show ? 'show' : '')}>
        <div className={cx('player-list_up')} />
        <ul className={cx('player-list_wrap')}>
          {
            players.map((v, i) => {
              return (
                <PlayerListItem key={i} playerInfo={v} sceneInfo={sceneInfo} clickPlayer={this.clickPlayer} hasBottom={i !== (players.length - 1)}/>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default PlayerList
