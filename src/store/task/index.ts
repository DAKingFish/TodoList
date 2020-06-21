import { observable, action, runInAction, toJS } from 'mobx'
import { get, post } from '../../axios'
import { ui } from '../ui'
import { message } from 'antd'
class Task {
  // task任务实体
  @observable task = {
    id: null,
    name: '',
    level: 3,
    start_time: '',
    end_time: '',
    status: 0
  }
  @observable taskList = [] // 任务列表
  @action setTaskByKey = (key: string, value: any) => {
    this.task[key] = value
  }
  @action setTask = (task) => {
    this.task = { ...task } // simple deep
  }
  @action saveTask = async () => {
    const { code, insertId } = await post('/api/task/saveorupdate', this.task, {})
    if (code === 200) {
      runInAction(() => {
        message.success('保存成功');
        if (this.task.id === null) { // new
          this.task.id = insertId
          this.taskList.unshift(this.task)
        } else { // update
          this.taskList = this.taskList.map(item => {
            return item.id === this.task.id ? this.task : item
          })
        }
        ui.setVisable(false)
      })
    } else {
      message.success('保存失败');
    }
  }
  @action getTask = async () => {
    const { code, data } = await get('/api/task/list', this.task)
    if (code === 200) {
      runInAction(() => {
        this.taskList = data.data
      })
    } else {
      message.success('获取列表数据失败');
    }
  }
  @action deleteTask = async (id) => {
    const { code } = await post('/api/task/delete', { id })
    if (code === 200) {
      message.success('删除成功')
      runInAction(()=>{
        this.taskList = this.taskList.filter(item => {
          return item.id !== id
        })
      })
    } else {
      message.error('删除失败')
    }
  }
}

const task = new Task()
export {
  task
}