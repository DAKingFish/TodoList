import * as React from 'react'
import { Router, Route, hashHistory } from 'react-router'
import { Layout } from './layout/index'
import { Form } from './component/form'
import { BaiduRoot, Boss } from './component'
class AppRouter extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path={'/app'} component={Layout} />
        <Route path={'/form'} component={Form} />
        <Route path={'/baidu-root'} component={BaiduRoot} />
        <Route path={'/boss-root'} component={Boss} />
      </Router>
    )
  }
}
export { AppRouter }
