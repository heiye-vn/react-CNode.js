import React, { Component } from 'react'
import { Row ,  Col } from 'antd'
// import {Link} from 'react-router-dom';
import IndexList from './indexlist'
import IndexMenu from './indexMenu'

export default class Index extends Component {
    render() {
        // console.log( this.props.match.params.id )
        let tab = this.props.match.params.id;

        return (
            <Row className='wrap'>
                <Col md={6}>
                    <IndexMenu id='MenuIndex'/>
                </Col>
                <Col md={18} className={'IndexList'}>

                    {/* <h1> 这个是首页组件 </h1> */}

                    <IndexList
                        tab = {tab}
                    ></IndexList>

                </Col>
            </Row>
        )
    }
}
