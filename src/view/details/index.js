import React, { Component } from 'react'
import data from './data'
// import {List,Avatar,Card} from 'antd'
import 'antd/dist/antd.css'
// import TxtTag from '../txtTag'
// import {Link} from 'react-router-dom';
import TxtDetails from './txtDetails'
import ReplyList from './replyList'


export default class Details extends Component {
    render() {
        console.log( data.data)
        return (
            <div className='wrap'>
                
                {/* <h1> 这个是内容详情组件 </h1> */}
                <TxtDetails ></TxtDetails>  
                <ReplyList 
                    replies={ data.data.replies }
                    replyCount={ data.data.reply_count }
                >

                </ReplyList>


            </div>
        )
    }
}
