const INITIAL_STATE = {
  data: [
    {
      headPicUrl: '/static/images/1-1.png',
      picUrl: '/static/images/1-1.png',
      playerId: -1,
      roleId: 1,
      roleName: '服务员A',
      selected: false,
      userName: ''
    }
  ]
}

function InitRoleListState (payload) {
  let newState = Object.assign({}, INITIAL_STATE)
  let newSceneRoles = []
  let { sceneRoles } = payload
  sceneRoles.map(v => {
    newSceneRoles.push({
      roleId: v.roleId,
      playerId: -1,
      roleName: v.roleName,
      picUrl: v.rolePicUrl, // 角色大图
      avatar: null, // 学生头像
      headPicUrl: v.roleHeadPicUrl, // 角色头像
      userName: '',
      selected: false
    })
  })
  newState.data = newSceneRoles
  return newState
}

const roleList = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'REQUEST_SCENEINFO_DONE':
      return InitRoleListState(action.payload)
    case 'CLICK_PLAYER_ITEM_DONE':
      let {roleList} = action.payload
      return Object.assign({}, state, roleList)
    default:
      return state
  }
}

export default roleList
