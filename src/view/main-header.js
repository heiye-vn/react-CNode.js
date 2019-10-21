import React, { Component } from 'react'
import { Layout ,Row ,  Col,Divider ,Menu ,Icon } from 'antd'
import {Link} from 'react-router-dom';
import 'antd/dist/antd.css'

//将整个设计建议区域按照 24 等分的原则进行划分
export default class MainHeader extends Component {
    render() {
        return (
            <div>
                <Layout.Header>
                    <Row className={'wrap'}>
                        <Col md={6}>
                            <h1 id='logo'>Discussion</h1>
                        </Col>
                        <Col md={18}>
                            <Divider type='vertical' className={'headerDivider'}></Divider>
                            
                                我是头部组件
                                <Menu mode='horizontal' theme='light' className={"T-Menu"}  id='menu'>
                                    <Menu.Item><Link to='/index/all'><Icon type='home'/>首页</Link></Menu.Item>
                                    <Menu.Item><Link to='/book'><Icon type='book'/>教程</Link></Menu.Item>
                                    <Menu.Item><Link to='/about'><Icon type='info-circle-o'/>关于</Link></Menu.Item>
                                </Menu>
                            </Col>
                    </Row>
                </Layout.Header>
            
            </div>
        )
    }
}
