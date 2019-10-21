import React, { Component } from 'react'
import {Tag} from 'antd'
import 'antd/dist/antd.css'



const tab ={
    top:{
        color:'red',
        txt:'置顶'        
    },
    good:{
        color:'green',
        txt:'精华'
    },
    ask:{
        color:'purple',
        txt:'问答'
    },
    share:{
        color:'gray',
        txt:'分享'
    },
    job:{
        color:'lime',
        txt:'招聘'
    },
    dev:{
        color:'orange',
        txt:'测试'
    }
   
}

function getTab( data ){
    // console.log( data )
    return (
        data.top ? "top" :
            data.good?"good":
                data.tab
    )
}


export default class txtTag extends Component {
    render() {
            // console.log(this.props.abc )
            // console.log( this.props.data )
            // getTab(this.props.data)
            let nowTab = tab[getTab(this.props.abc)]
            //tab[ask]
            // console.log( nowTab )
            return (
                <Tag color={ nowTab.color }> { nowTab.txt }   </Tag>
            )
    }
}
