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
            className={cx('header_sides', 'Grid-cell', 'u-1of4')}
            onClick={this.goBack}
          >
            <i className={cx('header_navicon')}>back</i>
            <a className={cx('header_nav')}>返回</a>
          </span>
        ) : (
          ''
        )}
        <span className={cx('header_title', 'Grid-cell')}>{sceneName}</span>
        {sceneId !== -1 ? (
          <span
            className={cx(
              'header_sides',
              'header_right',
              'Grid-cell',
              'u-1of4'
            )}
          >
            <i className={cx('header_close', 'header_close_show')}>X</i>
          </span>
        ) : (
          ''
        )}
      </header>
    )
  }
}

export default Header
