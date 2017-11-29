import { combineReducers } from 'redux'

import sceneCards from './sceneCards'
import sceneInfo from './sceneInfo'
import playerList from './playerList'
import roleList from './roleList'
import roleIntro from './roleIntro'
import tipsList from './tipsList'
import countTimer from './countTimer'

export default combineReducers({
  sceneCards,
  sceneInfo,
  playerList,
  roleList,
  roleIntro,
  tipsList,
  countTimer
})
