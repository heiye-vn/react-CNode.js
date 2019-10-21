import React, { Component } from 'react'
// import data from './data'
import {List,Avatar} from 'antd'
import {Link} from 'react-router-dom';
import TxtTag from '../txtTag'
import { connect } from 'react-redux';
import axios from 'axios';



class indexlist extends Component {
    constructor( arg ){
        super( arg )
        this.state = {
            page:1
        }
        this.getData( this.props.tab ,this.state.page  )
    }
    // componentWillReceiveProps(nextProps) {
    //     console.log( nextProps )
    //     if( this.props.tab !== nextProps.tab ){
    //         this.state.page = 1;
    //         this.getData( nextProps.tab , 1 )
    //     }
    // }

    shouldComponentUpdate(nextProps, nextState) {
        if( this.state.page !== nextState.page ){
            this.getData( nextProps.tab , nextState.page )
        }

        // console.log( nextProps )
        if( this.props.tab !== nextProps.tab ){
            // this.state.page = 1;
            this.setState({
                page:1
            })
            this.getData( nextProps.tab , 1 )
        }
        return true
    }
    
    
    getData(tab,page){
        this.props.dispatch((dispatch)=>{


            axios.get(`https://cnodejs.org/api/v1/topics?tab=${tab}&page=${page}&limit=10`)
                .then(( res )=>{
                    // console.log( res )
                    dispatch({
                        type:"LIST_UPDATA_SUCC",
                        data:res.data
                    })
                })
                .catch(( err )=>{
                    // console.log( err )
                })
        })
    }
    render() {
        // console.log( this.props )
        let { loading , data } = this.props;
        let  pagination = {
            current:this.state.page,
            pageSize:10,
            total:500,
            onChange:(( current )=>{
                // console.log( current )
                this.setState({
                    page:current
                })
            })
        }
        return (
            <div>
                <List
                    // loading={false}
                    // dataSource={data.data}
                    loading={loading}
                    dataSource={data}
                    pagination={pagination}
                    renderItem={
                        item=>(<List.Item
                            actions={[
                                "回复"+item.reply_count,
                                "访问"+item.visit_count   
                            ]}    
                        
                        >
                            <List.Item.Meta
                                className={'pic'}
                                avatar={
                                    <Avatar src={item.author.avatar_url}/>
                                }
                                title={
                                    <div>
                                        <TxtTag
                                            abc={ item }  
                                        ></TxtTag>
                                        <Link to={'/details/'+item.id}>{item.title}</Link>
                                    </div>
                                }
                                description={
                                    <p> 
                                        <Link to={'/user/'+item.author.loginname}> {item.author.loginname} </Link>
                                        发表于:{item.create_at.split("T")[0]}    
                                    </p>
                                }
                            >
                                
                            </List.Item.Meta>
                        </List.Item>)
                     }

                >



                </List>


            </div>
        )
    }
}


export default connect( state => state.list )(indexlist);

// state =>  state.list