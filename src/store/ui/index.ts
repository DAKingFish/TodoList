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
}
const ui = new UI()
export {
  ui
}