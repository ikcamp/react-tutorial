import React from 'react'
import { withRouter } from 'react-router-dom'
import pureRender from 'pure-render-decorator'
import classNames from 'classnames/bind'
import styles from './index.css'

let cx = classNames.bind(styles)

@pureRender
@withRouter
class Header extends React.Component {
  constructor (props) {
    super(props)
    this.goBack = this.goBack.bind(this)
  }
  goBack () {
    this.props.goBack()
    this.props.history.goBack()
  }
  render () {
    let { sceneInfo } = this.props
    let { sceneName, sceneId } = sceneInfo
    return (
      <header className={cx('header', 'Grid')}>
        {sceneId !== -1 ? (
          <span
            className={cx('header__sides', 'Grid-cell', 'u-1of4')}
            onClick={this.goBack}
          >
            <i className={cx('header__navicon')}>back</i>
            <a className={cx('header__nav')}>返回</a>
          </span>
        ) : (
          ''
        )}
        <span className={cx('header__title', 'Grid-cell')}>{sceneName}</span>
        {sceneId !== -1 ? (
          <span
            className={cx(
              'header__sides',
              'header__right',
              'Grid-cell',
              'u-1of4'
            )}
          >
            <i className={cx('header__close', 'header__close_show')}>X</i>
          </span>
        ) : (
          ''
        )}
      </header>
    )
  }
}

export default Header
