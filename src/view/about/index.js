import React, { Component } from 'react'
import data from './data'
import {Card} from 'antd'
import 'antd/dist/antd.css'



export default class About extends Component {
    render() {
        // console.log( data )
        return (
            <div className='wrap'>
                
                {/* <h1> 这个是关于组件 </h1> */}

                {
                    data.map(( item , index )=>{
                        return (
                            <Card
                                key={index}
                                title={item.title}
                                type='inner'
                            >

                                <div 
                                    dangerouslySetInnerHTML={{
                                        __html:item.content
                                    }}
                                >

                                </div>

                                {/* { console.log( item ) } */}
                            </Card>
                        )
                    })
                }


            </div>
        )
    }
}
