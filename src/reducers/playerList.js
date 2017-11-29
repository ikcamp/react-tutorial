const INITIAL_STATE = {
  show: false,
  top: 0,
  selectRoleId: -1,
  data: [
    {
      avatar:
        'http://img.hb.aicdn.com/f6842c2f6fdc0f3ce263aa0417098a999192cd57214dd-V0xknr_fw236',
      playerId: 0,
      selected: false,
      userName: '用户小白'
    }
  ]
}

const playerList = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'REQUEST_SCENEINFO_DONE':
      return Object.assign({}, INITIAL_STATE, { data: action.payload.players || [] })
    case 'SHOW_PLAYERLIST':
      return {...state, ...{show: true, top: action.payload}}
    case 'CLOSE_PLAYERLIST':
      return {...state, ...{show: false, top: 0}}
    case 'CHANGE_SCENE_ROLEID':
      return {...state, ...{selectRoleId: action.payload}}
    case 'CLICK_PLAYER_ITEM_DONE':
      let { playerList } = action.payload
      return Object.assign({}, state, playerList)
    default:
      return state
  }
}

export default playerList
