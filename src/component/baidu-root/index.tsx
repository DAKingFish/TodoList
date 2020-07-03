import * as React from 'react'
import './index.less'
class BaiduRoot extends React.Component<any, any> {
  props: any
  constructor(props) {
    super(props)
  }
  render() {
    return <div className='app-baidu-root'>
      baidu-root
      <div className='root-top'></div>
      <div className='root-left'></div>
      <div className='root-right'>  </div>
    </div>
  }
}
export { BaiduRoot }