import React, {Component} from 'react'
import { connect } from 'react-redux'

import './Home.css'
import Header from '../../components/Header/Header'
import CardManager from '../../components/cards/CardManager';

class Home extends Component {
    
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div className="home section background-1">
                <Header title="Home Page"/>
                <CardManager/>
            </div>
        )
    }
}

export default connect()(Home);