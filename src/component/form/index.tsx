import * as React from "react"
import { observer, inject } from 'mobx-react'
import { toJS } from 'mobx'
import './index.less'
@inject('UI')
@observer
class Form extends React.Component<any, any> {
  props: any
  constructor(props) {
    super(props)
  }
  render() { 
    const { form, setFormByKey } = this.props.UI
    return <div className='app-form'>
      <div><input placeholder='请输入姓名' value={form.name}
        onChange={
          (e) => {
            setFormByKey('name', e.target.value)

          }
        }
      />
      </div>
      <div>
        <input placeholder='请输入年龄' value={form.age}
          onChange={
            (e) => {
              setFormByKey('age', e.target.value)

            }
          }
        />
      </div>
      <div>
        <input placeholder='请输入爱好' value={form.like}
          onChange={
            (e) => {
              setFormByKey('like', e.target.value)

            }
          }
        />
      </div>
      <div>
        <input placeholder='请输入班级' value={form.Class}
          onChange={
            (e) => {
              setFormByKey('Class', e.target.value)

            }
          }
        />
      </div>
      <div>
        <input placeholder='请输入Type' value={form.Type}
          onChange={
            (e) => {
              setFormByKey('Type', e.target.value)

            }
          }
        />
      </div>
      <div>
        <input placeholder='请输入主题' value={form.topic}
          onChange={
            (e) => {
              setFormByKey('topic', e.target.value)

            }
          }
        />
      </div>
      <div>
        <input placeholder='请输入strert' value={form.strert}
          onChange={
            (e) => {
              setFormByKey('strert', e.target.value)

            }
          }
        />
      </div>
      <div>
        <input placeholder='请输入城市' value={form.city}
          onChange={
            (e) => {
              setFormByKey('city', e.target.value)

            }
          }
        />
      </div>
      <div>
        <input placeholder='请输入地区' value={form.area}
          onChange={
            (e) => {
              setFormByKey('area', e.target.value)

            }
          }
        />
      </div>
      <div>
        <button onClick={
          () => {
            console.log(toJS(form))
          }
        }>提交</button>
        <button onClick={
          () => {
            // 便利属性 ->复制=3
            
          }
        }>查询</button>
      </div>
    </div>
  }
}
export { Form }