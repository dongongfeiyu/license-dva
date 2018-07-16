/*
 * @Author: Haijun Zhang
 * @Date: 2018-07-16 14:11:17
 * @Last Modified by: Haijun Zhang
 * @Last Modified time: 2018-07-16 14:11:47
 */
import React, {PureComponent} from 'react';
import {Layout, Icon, Menu} from 'antd';
import Link from 'umi/link';
import menuData from './menuData.js';
import styles from './index.scss'

const {Sider} = Layout;
const {SubMenu} = Menu;
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
  render () {
    const { collapsed } = this.props;
    return (
      <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}>
        <div className={styles.logo}>
          <img src={require('../../assets/logo.png')} alt='logo' />
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
