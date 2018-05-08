import React, { PureComponent } from 'react'
import { connect } from 'dva'
import { Card, Table } from 'antd'

@connect(({ license, loading }) => ({
    license
}))
export default class License extends PureComponent {
    componentDidMount() {
        const { dispatch } = this.props
        dispatch({
            type: 'license/fetch',
            payload: {
                page: 1,
                rows: 10
            }
        })
    }
    render() {
        const columns = [{
            title: '项目',
            dataIndex: 'projectName'
        }, {
            title: '申请人',
            dataIndex: 'applier'
        }, {
            title: '审核人',
            dataIndex: 'verifier'
        }, {
            title: '制作人',
            dataIndex: 'creator',
        }]
        const { license: { list } } = this.props
        return (
            <Card>
                <Table
                    size='middle'
                    rowKey={record => record.id}
                    columns={columns}
                    dataSource={list}
                />
            </Card>
        )
    }
}


