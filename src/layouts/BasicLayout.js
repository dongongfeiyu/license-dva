/*
 * @Author: Haijun Zhang
 * @Date: 2018-07-16 13:48:37
 * @Last Modified by: Haijun Zhang
 * @Last Modified time: 2018-07-16 14:02:19
 */
import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Layout } from 'antd';
import Header from 'components/Header/Header.js';
import SiderMenu from 'components/SiderMenu/SiderMenu.js';
import styles from './basic.scss'
const { Content } = Layout;
@connect(({global}) => ({
  collapsed: global.collapsed,
  userData: global.userData
}))
export default class BasicLayout extends PureComponent {
  handleCollapsed = (collapsed) => {
    this.props.dispatch({
      type: 'global/changeCollapsed',
      payload: collapsed
    })
  }
	render() {
    const {
      userData,
      collapsed
    } = this.props;
		return (
			<Layout className={styles.layout}>
				<SiderMenu collapsed={collapsed}/>
        <Layout>
          <Header collapsed={collapsed} userData={userData} handleCollapsed={this.handleCollapsed} />
          <Content></Content>
        </Layout>
			</Layout>
		);
	}
}
