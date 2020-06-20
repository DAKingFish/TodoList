import { observable, action, runInAction ,toJS } from 'mobx'
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
    this.task = {...task} // simple deep
  }
  @action saveTask = async () => {
    const { code, insertId } = await post('/api/task/saveorupdate', this.task, {})
    if (code === 200) {
      runInAction(() => {
        message.success('保存成功');
        if(this.task.id === null){ // new
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
}
const task = new Task()
export {
  task
}