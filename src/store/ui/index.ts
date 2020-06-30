import { observable, action } from 'mobx'
class UI {
  @observable loading = false
  @observable visable = false
  @action setLoading = (loading: boolean): void => {
    this.loading = loading
  }
  @action setVisable = (visable) => {
    this.visable = visable
  }
  /**
   * 定义表单
   */
  @observable form = {
    name: '',
    age: '',
    like: '',
    Class: '',
    Type: '',
    topic: '',
    strert: '',
    city: '',
    area: ''
  }
  @action setFormByKey = (key: string, value: any) => {
    this.form[key] = value
  }
}
const ui = new UI()
export {
  ui
}