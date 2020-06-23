import * as React from 'react'
import { observer, inject } from 'mobx-react'
import { Pagination } from 'antd'
import './index.less'
@inject('UI', 'Task')
@observer
class Footer extends React.Component<any, any> {
  props: any
  constructor(props) {
    super(props)
  }
  render() {
    const {
      pagination: {
        current,
        pageSize,
        total
      }, setPaginationByKey, getTask } = this.props.Task
    return <div className='app-footer'>
      <Pagination
        current={current}
        pageSize={pageSize}
        total={total}
        showSizeChanger
        onShowSizeChange={
          (current, pageSize) => {
            setPaginationByKey('pageSize', pageSize)
          }
        }
        onChange={
          (e) => {
            setPaginationByKey('current', e)
          }
        }
      />
    </div>
  }
}
export { Footer }