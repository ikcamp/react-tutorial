const INITIAL_STATE = {
  title: 'Language Points',
  data: [
    {
      roleId: -1,
      sentenses: []
    }
  ]
}

function InitTipsListState (payload) {
  let { tips, sceneRoles } = payload
  let newState = Object.assign({}, INITIAL_STATE)
  let tipsArr = []
  tips.map(v => {
    let sentenses = []
    let roleName = sceneRoles.find(w => w.roleId === v.roleId).roleName
    sentenses.push({
      desc: roleName + ' ' + v.actPoint,
      show: false,
      type: 0
    })
    v.knowledgePointList.map(x => {
      sentenses.push({
        desc: x,
        show: false,
        type: 1
      })
    })
    tipsArr.push({
      roleId: v.roleId,
      selected: false,
      sentenses
    })
  })

  newState.data = tipsArr
  return newState
}

const tipsList = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'REQUEST_SCENEINFO_DONE':
      return InitTipsListState(action.payload)
    default:
      return state
  }
}

export default tipsList
