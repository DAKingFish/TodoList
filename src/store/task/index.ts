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
  //pagination 分页详情
  @observable pagination = {
    current: 0,//当前页
    pageSize: 10,//每页显示10条
    total: 0,//总条数
  }
  @action setPaginationByKey = (key: string, value: any) => {
    this.pagination[key] = value
    this.getTask()
  }
  @action setTaskByKey = (key: string, value: any) => {
    this.task[key] = value
  }
  @action setTask = (task) => {
    this.task = { ...task } // simple deep 深度复制
  }
  @action saveTask = async () => {
    const { code, insertId } = await post('/api/task/saveorupdate', this.task, {})
    if (code === 200) {
      runInAction(() => {
        message.success('保存成功');
        if (this.task.id === null) { // new
          this.task.id = insertId
          this.taskList.unshift(this.task)
          this.pagination.total += 1
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
    const { code, data } = await get(`/api/task/list`, Object.assign({}, this.task, this.pagination))
    if (code === 200) {
      runInAction(() => {
        this.taskList = data.data
        this.pagination.current = data.currentPage
        this.pagination.pageSize = data.numsPerPage
        this.pagination.total = data.count
      })
    } else {
      message.success('获取列表数据失败');
    }
  }
  @action deleteTask = async (id) => {
    const { code } = await post('/api/task/delete', { id })
    if (code === 200) {
      message.success('删除成功')
      runInAction(() => {
        this.taskList = this.taskList.filter(item => {
          return item.id !== id
        })
        this.pagination.total -= 1
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