import React, {Component} from 'react'
import { connect } from 'react-redux'

import Header from '../../components/Header/Header'
import './Info.css'

class Info extends Component {
    
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div className="info section background-1">
                <Header title="Info Page"/>
                <div className="info-description">
                    <h1>Welcome to the information page</h1>
                    <p>This is a test made by Facundo Ferreira.</p>
                </div>
            </div>
        )
    }
}

export default connect()(Info);