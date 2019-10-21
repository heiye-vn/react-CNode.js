import React, { Component } from 'react'
import {Layout} from 'antd'

export default class MainFooter extends Component {
    render() {
        return (
            <Layout.Footer style={{textAlign:'center'}}>
                备案号：蜀ICP备19020478 版权所有：ZSP-xxxxxxxxxx
            </Layout.Footer>
        )
    }
}
