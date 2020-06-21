import * as React from "react"
import { observer, inject } from 'mobx-react'
import { Drawer, Button, Select, Input, DatePicker } from 'antd'
import moment from 'moment'
import './index.less'
@inject('UI', 'Task')
@observer
class Header extends React.Component<any, any> {
  props: any
  constructor(props) {
    super(props)
  }
  render() {
    const { visable, setVisable } = this.props.UI
    const {
      task:{
        level,
        name,
        start_time,
        end_time
      },
      setTaskByKey,
      saveTask,
      setTask
    } = this.props.Task
    return <div className='app-header'>
      <div className='app-header-left'>
        Cloud Record
      </div>
      <div className='app-header-right' onClick={
        () => {
          setTask({
            id: null,
            name: '',
            level: 3,
            start_time: '',
            end_time: '',
            status: 0
          })
          setVisable(true)
        }
      }>
        <Button>添加</Button>
      </div>
      <Drawer
        title="Basic Drawer"
        placement="right"
        closable
        onClose={
          () => {
            setVisable(false)
          }
        }
        visible={visable}
      >
        <div className='app-drawer-item'>
          <div className='app-drawer-item-left'>
            任务优先级
          </div>
          <div className='app-drawer-item-right'>
            <Select value={level} style={{ width: 120 }} onChange={(e) => {
              setTaskByKey('level', e)
            }}>
              <Select.Option value={3}>优先</Select.Option>
              <Select.Option value={2}>一般</Select.Option>
              <Select.Option value={1}>暂缓</Select.Option>
            </Select>
          </div>
        </div>
        <div className='app-drawer-item'>
          <div className='app-drawer-item-left'>
            任务描述
          </div>
          <div className='app-drawer-item-right'>
            <Input.TextArea placeholder="任务描述" value={name} onChange={(e) => {
              setTaskByKey('name', e.target.value)
            }} />
          </div>
        </div>
        <div className='app-drawer-item'>
          <div className='app-drawer-item-left'>
            开始时间
          </div>
          <div className='app-drawer-item-right'>
            <DatePicker value={moment(start_time, 'YYYY-MM-DD')} onChange={(e, timestring)=>{
              setTaskByKey('start_time', timestring)
            }} />
          </div>
        </div>
        <div className='app-drawer-item'>
          <div className='app-drawer-item-left'>
            结束时间
          </div>
          <div className='app-drawer-item-right'>
            <DatePicker value={moment(end_time, 'YYYY-MM-DD')} onChange={(e, timestring)=>{
              setTaskByKey('end_time', timestring)
            }} />
          </div>
        </div>
        <div className='app-drawer-footer'>
          <Button onClick={
            () => {
              saveTask()
            }
          }>保存</Button>
          <Button onClick={
            () => {
              setVisable(false)
            }
          }>取消</Button>
        </div>
      </Drawer>
    </div>
  }
}
export { Header }