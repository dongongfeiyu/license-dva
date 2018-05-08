import React, { PureComponent } from 'react'
import { connect } from 'dva'
import { Layout } from 'antd'
import Header from 'components/Header/Header.js'
import SiderMenu from 'components/SiderMenu/SiderMenu.js'
// import PropTypes from 'prop-types'

const { Content, Footer } = Layout;
@connect(({ global }) => ({
  collapsed: global.collapsed
}))
export default class BasicLayout extends PureComponent {
  handleCollapsed = () => {
    this.props.dispatch({
      type: 'global/changeCollapsed',
      payload: !this.props.collapsed
    })
  }
  render() {
    const { collapsed, children } = this.props
    return (
      <Layout>
        <SiderMenu collapsed={collapsed} />
        <Layout>
          <Header collapsed={collapsed} handleCollapsed={this.handleCollapsed}/>
          <Content>{children} </Content>
          <Footer style={{ textAlign: 'center' }}>
            Design By Platform Team in BoCloud
          </Footer>
        </Layout>
      </Layout>
    )
  }
}
