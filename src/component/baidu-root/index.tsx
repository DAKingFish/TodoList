import * as React from 'react'
import './index.less'
class BaiduRoot extends React.Component<any, any> {
  props: any
  constructor(props) {
    super(props)
  }
  state = {
    menus: [{
      label: '合作伙伴',
      url: ''
    }, {
      label: '工单',
      url: ''
    }, {
      label: '消息',
      url: ''
    }, {
      label: '帮助文档',
      url: ''
    }, {
      label: '企业资源',
      url: ''
    }, {
      label: '财务',
      url: ''
    }],
    menus2: [{
      label: '概览',
      url: '',
    }, {
      label: '专属服务器',
      url: ''
    }, {
      label: '实例',
      url: ''
    }, {
      label: '磁盘',
      url: ''
    }, {
      label: '镜像',
      url: ''
    }, {
      label: '快照',
      url: '',
      icon: 'iconfont icon-xiala',
      position: 'right'
    }, {
      label: '部署集',
      url: ''
    }, {
      label: '安全组',
      url: '',
      icon: 'iconfont icon-lianjie',
      position: 'left'
    }, {
      label: '操作日志',
      url: ''
    }, {
      label: '密钥对',
      url: ''
    }, {
      label: '标签管理',
      url: '',
      icon: 'iconfont icon-lianjie',
      position: 'left'
    }, {
      label: '回收站',
      url: '',
      icon: 'iconfont icon-lianjie',
      position: 'left'
    }
    ],
    menu3: [{
      label: '实例对象',
      url: '',
      active: false
    }, {
      label: '专属实例',
      url: '',
      active: true
    }],
    menus4: [
      {
        label: '创建实例',
        url: '',
        active: true,
        icon: 'iconfont icon-jia',
        position: 'left',
      },
      {
        label: '开启',
        url: '',
        active: false,
        icon: '',
        position: ''
      },
      {
        label: '重启',
        url: '',
        icon: '',
        position: ''
      },
      {
        label: '停止',
        url: '',
        icon: '',
        position: ''
      },
      {
        label: '续费',
        url: '',
        icon: '',
        position: ''
      },
      {
        label: '批量操作',
        url: '',
        icon: 'iconfont icon-xiala',
        position: 'right'
      }
    ]
  }
  render() {
    const area = '华东-苏州'
    return <div className='app-baidu-root'>
      <div className='root-top'>
        <div className='top-left'>
          <img src='https://bce.bdstatic.com/console/fe-framework/img/cn.png' />
          {area}
          <i className='iconfont icon-xiala'></i>
        </div>
        <div className='top-right'>
          <i className='iconfont icon-search' onClick={
            () => {
              this.state.menus.pop() // 删除
              this.setState({ // 通知
                menus: this.state.menus
              })
            }
          }></i>
          {
            this.state.menus.map(item => {
              return <div className='menu-item' key={item.label}>
                {item.label}
              </div>
            })
          }
          <div className='user-info'>我</div>
          <i className='iconfont icon-xiala'></i>
        </div>
      </div>
      <div className='root-body'>
        <div className='root-left'>
          <div className='left-top'>
            <i className='iconfont icon-zhuji'></i>
            云服务器BCC
          </div>
          <div className='left-menus'>
            {
              this.state.menus2.map(item => {
                return <div className='menu-item' key={item.label} >
                  {
                    item.icon && <i className={item.icon} style={{
                      position: 'absolute',
                      right: item.position === 'right' ? 10 : 'auto',
                      left: item.position === 'left' ? 2 : 'auto'
                    }}>
                    </i>
                  }
                  {item.label}
                </div>
              })
            }
          </div>
        </div>
        <div className='root-right'>
          <div className='right-top'>
            <div className='top-left'>
              {
                this.state.menu3.map(item => {
                  return <div className={item.active ? 'menu-item-active' : 'menu-item'} key={item.label}
                    onClick={
                      () => {
                        this.state.menu3.map(item1 => {
                          item1.active = item.label === item1.label
                        })
                        this.setState({ // 通知
                          menu3: this.state.menu3
                        })
                      }
                    }>
                    {item.label}
                  </div>
                })
              }
            </div>
            <div className='top-right'>
              <div className='right-text'>7天即将到期</div>
              <div className='right-xvfei'>
                <i className='iconfont icon-shuifei'></i>
                自动续费
              </div>
              <div className='right-rest'>
                <i className='iconfont icon-ai22'></i>
              </div>
            </div>
          </div>
          <div className='right-war'>
            <i className='iconfont icon-gantanhao'></i>
            云磁盘CDS快照服务已于2020年3月13日开始正式计费，详情请参见<a>帮助文档</a>。
          </div>
          <div className='right-lab'>
            <div className='lab-left'>
              {
                this.state.menus4.map(item => {
                  () => {
                    return <div className={item.active ? 'menu-item-active' : 'menu-item'} key={item.label}>
                      {
                        item.icon && <i className={item.icon} style={{
                          position: 'absolute',
                          right: item.position === 'right' ? 10 : 'auto',
                          left: item.position === 'left' ? 2 : 'auto'
                        }}>
                        </i>
                      }
                      {item.label}
                    </div>
                  }
                })
              }
            </div>
            <div className='lab-right'>
              <div className='right-search'></div>
              <div className='right-down'>
                下载全部
              </div>
              <div className='right-cust'>
                自定义列
              </div>
            </div>
          </div>
          <div className='table -title'></div>
          <div className='right-page'></div>
        </div>
      </div>
    </div>
  }
}
export { BaiduRoot }