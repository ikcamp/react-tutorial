import React from 'react'
import { withRouter } from 'react-router-dom'
import pureRender from 'pure-render-decorator'
import classNames from 'classnames/bind'
import styles from './index.css'

let cx = classNames.bind(styles)
@pureRender
@withRouter
class SceneCard extends React.Component {
  constructor (props) {
    super(props)
    this.toSceneInfo = this.toSceneInfo.bind(this)
  }
  toSceneInfo () {
    let {info, history} = this.props
    history.push(`/scene/${info.sceneId}`)
  }
  render () {
    let { info } = this.props
    return (
      <li className={cx('scene-card')} onClick={this.toSceneInfo}>
        <div className={cx('scene-card__content')}>
          <span className={cx('scene-card__title')}>{info.title}</span>
          <p className={cx('scene-card__desc')}>{info.desc}</p>
        </div>
        <img src={info.imgUrl} className={cx('scene-card__img')} />
      </li>
    )
  }
}

export default SceneCard
