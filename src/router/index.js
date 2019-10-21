import React, { Component } from 'react'
import {Switch,Route,Redirect} from 'react-router-dom';
import Book from '../view/book'
import Index from '../view/index'
import About from '../view/about'
import User from '../view/user'
import Details from '../view/details'


export default class RouterIndex extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' render={()=>(
                        <Redirect to='/index/all'/>
                        )}
                    />
                    <Route path='/index/:id' component={Index}/>
                    <Route path='/book'  component={Book}/>
                    <Route path='/about' component={About}/>
                    <Route path='/user'  component={User}/>
                    <Route path='/details'  component={Details}/>
                </Switch>
            </div>
        )
    }
}
