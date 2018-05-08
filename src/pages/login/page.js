/**
 * Created by Zhang Haijun on 2018/5/8.
 */
import React, { PureComponent } from 'react'
import { connect } from 'dva'
import { Button, Form, Input, Icon, message } from 'antd'
import styles from './index.less'
@connect(({global}) => ({
  global
}))
@Form.create()
export default class Login extends PureComponent {
  handleSubmit = (e) => {
    e.preventDefault()
    const { form: { validateFieldsAndScroll }} = this.props
    validateFieldsAndScroll((errors, values) => {
      if (!errors) {
       this.props.dispatch({
         type: 'global/login',
         payload: values
       })
      }
    })
  }
  render () {
    const { form: { getFieldDecorator }} = this.props
    return (
      <div className={styles.layout}>
        <div className={styles.container}>
          <div className={styles.title}>
            <img alt='logo' src='/public/img/logo.png' />
            <span>license管理系统</span>
          </div>
          <Form onSubmit={this.handleSubmit}>
            <Form.Item>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: '请输入登录账户' }]
              })(
                <Input prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder='账户' />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: '请输入密码' }]
              })(
                <Input prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />} type='password' placeholder='密码' />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('code', {
                rules: [{ required: true, message: '请输入验证码' }]
              })(
                <Input prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder='密码' />
              )}
            </Form.Item>
            <Form.Item>
              <Button type='primary' htmlType='submit' style={{width: '100%'}}>
                登 录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    )
  }
}

