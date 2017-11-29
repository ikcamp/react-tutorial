const INITIAL_STATE = []

const sceneCards = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'REQUEST_SCENELIST_DONE':
      return action.payload
    default:
      return state
  }
}

export default sceneCards
