import { delay } from 'redux-saga'
import { put, takeLatest, all } from 'redux-saga/effects'
import * as API from '@/server'

function* RequestSceneInfo ({payload}) {
  let datas = yield API.loadSceneInfoRequest(payload)
  if (datas.status === 0) {
    yield put({
      type: 'REQUEST_SCENEINFO_DONE',
      payload: datas.data
    })
  }
}
function* RequestSceneInfoSaga () {
  yield takeLatest('REQUEST_SCENEINFO', RequestSceneInfo)
}

function* RequestSceneList () {
  let datas = yield API.loadScenesRequest()
  if (datas.status === 0) {
    yield put({
      type: 'REQUEST_SCENELIST_DONE',
      payload: datas.data.scenes
    })
  }
}
function* RequestSceneListSaga () {
  yield takeLatest('REQUEST_SCENELIST', RequestSceneList)
}

function* ClickPlayerItem ({ payload }) {
  let { playerInfo, playerList, roleList } = payload
  let curRole = roleList.data.find(v => {
    return v.roleId === playerInfo.selectRoleId
  })
  if (!curRole) return
  const isCancel = curRole.selected && curRole.playerId === playerInfo.playerId

  if (isCancel) {
    // 取消伴演操作
    roleList.data.find(v => {
      if (v.roleId === playerInfo.selectRoleId) {
        Object.assign(v, {
          playerId: -1,
          selected: false,
          avatar: null,
          userName: ''
        })
      }
      return v.roleId === playerInfo.selectRoleId
    })
    playerList.data.find(v => {
      if (v.playerId === playerInfo.playerId) {
        v.selected = false
      }
      return v.playerId === playerInfo.playerId
    })
  } else {
    // 角色伴演操作
    let otherPlayerId = -1
    roleList.data.find(v => {
      if (v.playerId === playerInfo.playerId) {
        Object.assign(v, {
          playerId: -1,
          selected: false,
          avatar: null,
          userName: ''
        })
      }
      return v.playerId === playerInfo.playerId
    })

    roleList.data.find(v => {
      if (v.roleId === playerInfo.selectRoleId) {
        if (v.selected) otherPlayerId = v.playerId
        Object.assign(v, {
          playerId: playerInfo.playerId,
          selected: true,
          userName: playerInfo.userName,
          avatar: playerInfo.avatar
        })
      }
      return v.roleId === playerInfo.selectRoleId
    })

    playerList.data.forEach(v => {
      if (v.playerId === otherPlayerId) {
        v.selected = false
      } else if (v.playerId === playerInfo.playerId) {
        v.selected = true
      }
    })
  }
  yield put({
    type: 'CLICK_PLAYER_ITEM_DONE',
    payload: {
      playerList,
      roleList
    }
  })
}
function* ClickPlayerItemSaga () {
  yield takeLatest('CLICK_PLAYER_ITEM', ClickPlayerItem)
}

function* ClickStart () {
  yield put({
    type: 'CT_SHOW'
  })
  yield delay(5000)
  yield put({
    type: 'CT_HIDE'
  })
  yield put({
    type: 'START_COSPLAY'
  })
}
function* ClickStartSaga () {
  yield takeLatest('CT_SHOW_REQUEST', ClickStart)
}

export default function* rootSaga () {
  yield all([
    RequestSceneListSaga(),
    RequestSceneInfoSaga(),
    ClickPlayerItemSaga(),
    ClickStartSaga()
  ])
}
