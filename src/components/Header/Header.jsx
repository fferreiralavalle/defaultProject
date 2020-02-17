import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import './Header.css'
class Header extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            dropDownEnabled: false
        };
    }

    renderDropDown(){
        const {dropDownEnabled } = this.state;
        const activeClass = dropDownEnabled ? "active" : "";
        return (
            <div className={`haader-drop-down ${activeClass}`}>
                <Link to='/'>>Home</Link>
                <Link to='/info'>>Info</Link>
            </div>
        )
    }

    toggleDropDown = () => ()=> {
        this.setState({
            dropDownEnabled: !this.state.dropDownEnabled
        })
    }

    render(){
        const {title = "Home"} = this.props;
        return (
            <div className="header">
                <div className="header-content">
                    <div className="header-main">
                        {title}
                    </div>
                    <div className="header-burger" onClick={this.toggleDropDown()}/>
                </div>
                { this.renderDropDown()}
            </div>
        )
    }
}

export default connect()(Header);