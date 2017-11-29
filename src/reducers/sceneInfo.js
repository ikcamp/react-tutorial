const INITIAL_STATE = {
  sceneId: -1,
  sceneDescription: '请输入场景描述信息',
  sceneName: '选择对话场景',
  scenePicUrl: null,
  selectRoleId: -1
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
    default:
      return state
  }
}

export default sceneInfo
