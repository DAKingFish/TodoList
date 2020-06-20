import * as React from "react"
import { observer, inject } from 'mobx-react'
import { Switch } from 'antd'
import './index.less'
const LevelMapping = {
  1: '暂缓',
  2: '一般',
  3: '优先'
}
@inject('UI', 'Task')
@observer
class Content extends React.Component<any, any> {
  props: any
  constructor(props) {
    super(props)
  }
  render() {
    const { taskList, setTask, saveTask } = this.props.Task
    return <div className='app-content'>
      <div className='app-content-item'>
        <div className='app-content-item-id'>
          编号
        </div>
        <div className='app-content-item-level'>
          任务级别
        </div>
        <div className='app-content-item-start-time'>
          任务开始时间
        </div>
        <div className='app-content-item-name'>
          任务描述
        </div>
        <div className='app-content-item-end-time'>
          任务结束时间
        </div>
        <div className='app-content-item-status'>
          任务状态
        </div>
        <div className='app-content-item-edit'>
          操作
        </div>
      </div>
      {
        taskList.map(item => {
          return <div className='app-content-item' key={item.id}>
            <div className='app-content-item-id'>
              {item.id}
            </div>
            <div className='app-content-item-level'>
              {LevelMapping[item.level]}
            </div>
            <div className='app-content-item-start-time'>
              {item.start_time}
            </div>
            <div className='app-content-item-name'>
              {item.name}
            </div>
            <div className='app-content-item-end-time'>
              {item.end_time}
            </div>
            <div className='app-content-item-status'>
              <Switch
                checkedChildren='yes'
                unCheckedChildren='no'
                checked={item.status === 1}
                onChange={
                  (e) => {
                    setTask(Object.assign({}, item, { status: e ? 1 : 0 }))
                    saveTask()
                  }
                }
              />
            </div>
            <div className='app-content-item-edit'>
              <button>编辑</button>
              <button>删除</button>
            </div>
          </div>
        })
      }
    </div>
  }
}
export { Content }