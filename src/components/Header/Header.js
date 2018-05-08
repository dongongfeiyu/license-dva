import React, {PureComponent} from 'react'
import {Layout, Icon, Dropdown, Menu, Avatar} from 'antd'
import styles from './index.less'

const {Header} = Layout
export default class Headers extends PureComponent {
  render() {
    const { userData, collapsed, handleCollapsed} = this.props
    const menu = (
      <Menu className={styles.menu}>
        <Menu.Item>
          <Icon type="user" />个人中心
        </Menu.Item>
        <Menu.Item disabled>
          <Icon type="setting" />设置
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="logout">
          <Icon type="logout" />退出登录
        </Menu.Item>
      </Menu>
    );
    return (
      <Header className={styles.header}>
        <Icon className={styles.trigger} type={collapsed ? 'menu-unfold' : 'menu-fold'} onClick={handleCollapsed}/>
        <div className={styles.right}>
          <Dropdown overlay={menu}>
              <span className={`${styles.action} ${styles.account}`}>
                <Avatar size="large" className={styles.avatar} src='/public/img/user.png'/>
                <span className={styles.name}>{userData.name}</span>
              </span>
          </Dropdown>
        </div>
      </Header>
    )
  }H
}
