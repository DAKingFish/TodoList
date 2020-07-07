import * as React from 'react'
import './index.less'
import { Checkbox } from 'antd'
class Table extends React.Component<any, any> {
  render() {
    return <div>
      <div className='table-header'>
        {
          this.props.menus5.map(item => {
            return <div className='item-box' style={{ width: item.width }}>
              {
                item.checked !== undefined && <Checkbox />
              }
              {item.label}
              {
                item.icon && <i className={item.icon}></i>
              }
            </div>
          })
        }
      </div>
      <div className='table-body'>
        {
          this.props.menus6.map(item => {
            return <div className='item-box' style={{ width: item.width }}>
              {item.html}
            </div>
          })
        }
      </div>

      <div className='right-page'></div>
    </div>
  }
}
export { Table }