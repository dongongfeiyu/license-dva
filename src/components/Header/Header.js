import React, { PureComponent } from 'react'
import { Layout, Icon } from 'antd'
import styles from './index.less'
const { Header } = Layout
export default class Headers extends PureComponent {
    render() {
        const { collapsed, handleCollapsed } = this.props
        return (
            <Header className={styles.header}>
                <Icon className={styles.trigger} type={collapsed ? 'menu-unfold' : 'menu-fold'} onClick={handleCollapsed} />
            </Header>
        )
    }
}