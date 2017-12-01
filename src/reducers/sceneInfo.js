const INITIAL_STATE = {
  sceneId: -1,
  sceneDescription: '请输入场景描述信息',
  sceneName: '选择对话场景',
  scenePicUrl: null,
  selectRoleId: -1,
  sceneStatus: 0 // 0=进入场景详情 1=已开始  2=结束
}

function InitSceneInfoState (payload) {
  let state = {
    sceneId: payload.sceneId,
    sceneDescription: payload.sceneDescription,
    sceneName: payload.sceneName,
    scenePicUrl: payload.scenePicUrl,
    selectRoleId: payload.sceneRoles[0] && payload.sceneRoles[0].roleId
  }
  return Object.assign({}, INITIAL_STATE, state)
}

const sceneInfo = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'REQUEST_SCENEINFO_DONE':
      return InitSceneInfoState(action.payload)
    case 'CHANGE_SCENE_ROLEID':
      return {...state, ...{selectRoleId: action.payload}}
    case 'BACK_TO_SCENE_LIST':
      return {...state, ...INITIAL_STATE}
    case 'START_COSPLAY':
      return {...state, sceneStatus: 1}
    case 'END_COSPLAY':
      return {...state, sceneStatus: 2}
    default:
      return state
  }
}

export default sceneInfo
