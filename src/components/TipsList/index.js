import React from 'react'
import TipsItem from '@/components/TipsItem'
import classNames from 'classnames/bind'
import styles from './index.css'

let cx = classNames.bind(styles)

class TipsList extends React.Component {
  render () {
    let { tipsList, sceneInfo } = this.props
    let { selectRoleId } = sceneInfo
    return (
      <div className={cx('dialogue-wrap')}>
        <div className={cx('dialogue-wrap__header')}>{tipsList.title}</div>
        <ul className={cx('dialogue-wrap__list')}>
          {tipsList.data.map((v, i) => {
            return <TipsItem key={i} info={v} selectRoleId={selectRoleId} />
          })}
        </ul>
      </div>
    )
  }
}

export default TipsList
