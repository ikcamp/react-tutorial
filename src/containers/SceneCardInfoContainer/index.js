import React from 'react'
import { connect } from 'react-redux'
import SceneOperate from '@/components/SceneOperate'

class SceneCardInfo extends React.Component {
  componentWillMount () {
    let { match, RequestSceneInfo } = this.props
    let { sceneId } = match.params
    RequestSceneInfo(sceneId)
  }
  render () {
    let { playerList, roleIntro, roleList, sceneInfo, tipsList } = this.props
    let {
      clickRole,
      clickRoleHeadPic,
      clickStopEvent,
      clickPlayer,
      clickStart
    } = this.props
    return (
      <SceneOperate
        {...{
          playerList,
          roleIntro,
          roleList,
          sceneInfo,
          tipsList,
          clickRole,
          clickRoleHeadPic,
          clickStopEvent,
          clickPlayer,
          clickStart
        }}
      />
    )
  }
}
const mapStateToProps = state => {
  return {
    playerList: state.playerList,
    roleIntro: state.roleIntro,
    roleList: state.roleList,
    sceneInfo: state.sceneInfo,
    tipsList: state.tipsList
  }
}

const mapDispatchToProps = dispatch => {
  return {
    RequestSceneInfo (id) {
      dispatch({
        type: 'REQUEST_SCENEINFO',
        payload: id
      })
    },
    clickRole (id) {
      dispatch({
        type: 'CHANGE_SCENE_ROLEID',
        payload: id
      })
    },
    clickRoleHeadPic (top) {
      dispatch({
        type: 'SHOW_PLAYERLIST',
        payload: top
      })
    },
    clickStopEvent () {
      dispatch({
        type: 'CLOSE_PLAYERLIST'
      })
    },
    clickPlayer (playerInfo, playerList, roleList) {
      dispatch({
        type: 'CLICK_PLAYER_ITEM',
        payload: {
          playerInfo,
          playerList,
          roleList
        }
      })
    },
    clickStart () {
      dispatch({
        type: 'CT_SHOW_REQUEST'
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SceneCardInfo)
