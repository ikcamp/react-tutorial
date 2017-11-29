const loadScenes = require("./mock/load_scenes.json")
const loadSceneInfo1 = require("./mock/load_scene_info1.json")
const loadSceneInfo2 = require("./mock/load_scene_info2.json")
const loadSceneInfo3 = require("./mock/load_scene_info3.json")
const loadSceneInfo = ['',loadSceneInfo1, loadSceneInfo2, loadSceneInfo3]
function Mock(app) {
  app
    .get("/costalk/load_scenes", (req, res) => {
      res.json(loadScenes)
    })
    .get("/costalk/load_scene_info", (req, res) => {
      let sceneId = req.query.sceneId
      res.json(loadSceneInfo[sceneId])
    })
}
module.exports = Mock
