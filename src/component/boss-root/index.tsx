import * as React from 'react'
import './index.less'
class Boss extends React.Component<any, any>{
  render() {
    return <div className='app-boss'>
      <div className='boss-lab'>
        <div className="lab-left">
          <a>Boss直聘</a>
          <i className='iconfont icon-weizhi'></i>
          <span>
            合肥[切换城市]
          </span>
        </div>
      </div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  }
}
export { Boss }