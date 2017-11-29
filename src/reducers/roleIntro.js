const INITIAL_STATE = [
  {
    descs: ['我是服务员，小A。竭诚为您服务'],
    imgUrl: '/static/images/1-1.png',
    roleId: 1
  }
]
function InitRoleIntroState (payload) {
  let { sceneRoles = [] } = payload
  let sceneIntros = []
  sceneRoles.map(v => {
    sceneIntros.push({
      roleId: v.roleId,
      imgUrl: v.rolePicUrl,
      descs: [v.roleDescription]
    })
  })
  return sceneIntros
}
const roleIntro = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'REQUEST_SCENEINFO_DONE':
      return InitRoleIntroState(action.payload)
    default:
      return state
  }
}

export default roleIntro
