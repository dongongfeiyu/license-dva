/**
 * Created by Zhang Haijun on 2018/5/8.
 */
import React from 'react'
import BasicLayout from './BasicLayout'
import LoginLayout from './LoginLayout'
export default function(props) {
  if ( props.location.pathname === '/login' ) {
    return <LoginLayout>{props.children}</LoginLayout>
  }
  return (
    <BasicLayout>{props.children}</BasicLayout>
  );
}
