import React, { PureComponent } from 'react'
import { Layout, Icon, Menu } from 'antd'
import Link from 'umi/link'
import styles from './index.less'
import menuData from './menuData'

const { Sider } = Layout
const { SubMenu } = Menu
export default class SiderMenu extends PureComponent {
  getNavMenuItems(menuData) {
    if (!menuData) return []
    return menuData.map(item => {
      if (item.children) {
        return (
          <SubMenu
            key={item.path}
            title={<span>{item.icon ? <Icon type={item.icon} /> : ''}<span>{item.name}</span></span>}
          >
            {this.getNavMenuItems(item.children)}
          </SubMenu>
        )
      } else {
        return (
          <Menu.Item key={item.path}>
            <Link to={item.path}>
              {item.icon ? <Icon type={item.icon} /> : ''}
              <span>{item.name}</span>
            </Link>
          </Menu.Item>
        )
      }
    })
  }
  render() {
    const { collapsed } = this.props
    return (
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}>
        <div className={styles.logo}>
          <img src='/public/img/logo.png' alt='logo' />
          <h1>License平台</h1>
        </div>
        <Menu
          theme='dark'
          mode='inline'>
          {this.getNavMenuItems(menuData)}
        </Menu>
      </Sider>
    )
  }

}
