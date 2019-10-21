import React, { Component } from 'react'
import {Avatar,Card} from 'antd'
import 'antd/dist/antd.css'
import TxtTag from '../txtTag'
import {Link} from 'react-router-dom';
import data from './data'

export default class TxtDetails extends Component {
    render() {
        // console.log( data.data)
        return (
            <div>
                
                <Card>

                    <Card.Meta
                        title={
                            <div>
                                <h2> { data.data.title } </h2>
                                <TxtTag 
                                    abc={ data.data } 
                                ></TxtTag>
                                <Avatar src={data.data.author.avatar_url}></Avatar>
                                <Link to={'/user/'+data.data.author.loginname}> {data.data.author.loginname} </Link>
                                发表于:{data.data.create_at.split("T")[0]}  
                            </div>
                        }
                    >
                    

                    </Card.Meta>

                    <div 
                        dangerouslySetInnerHTML={{
                            __html:data.data.content
                        }}
                    >

                    </div>


                </Card>





            </div>
        )
    }
}
