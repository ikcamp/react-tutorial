import { axios } from '@/utils'

function loadScenesRequest () {
  return axios({
    url: '/v1/costalk/load_scenes'
  })
    .then(res => {
      return res
    })
    .catch(err => {
      return err
    })
}
function loadSceneInfoRequest (id) {
  return axios({
    url: '/v1/costalk/load_scene_info',
    params: {
      sceneId: id
    }
  })
    .then(res => {
      return res
    })
    .catch(err => {
      return err
    })
}
export { loadScenesRequest, loadSceneInfoRequest }
