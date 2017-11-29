import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames/bind'
import SceneCard from '@/components/SceneCard'
import SceneListNull from '@/components/SceneListNull'
import styles from './index.css'
let cx = classNames.bind(styles)

class SceneCardList extends React.Component {
  componentWillMount () {
    this.props.RequestSceneList()
  }
  render () {
    const {sceneCardList} = this.props
    let renderDoms
    if (sceneCardList.length === 0) {
      renderDoms = <SceneListNull />
    } else {
      renderDoms = sceneCardList.map((v, i) => {
        return <SceneCard key={v.sceneId || i} info={v} />
      })
    }
    return (
      <ul className={cx('scene-card-list')}>
        {renderDoms}
      </ul>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    sceneCardList: state.sceneCards
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    RequestSceneList () {
      dispatch({
        type: 'REQUEST_SCENELIST'
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SceneCardList)
