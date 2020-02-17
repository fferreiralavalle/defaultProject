import React, {Component} from 'react'

import './Cards.css'

const defaultBackground = '#000000EE'

class Card extends Component {

    render(){
        const { 
            title, 
            description, 
            background=defaultBackground} = this.props;
        const cardStyle = {
            background: `url(${background})`
        }
        
        return (
            <div className="card" style={cardStyle}>
                <div className="card-title">
                    {title}
                </div>
                <div className="card-description">
                    {description}
                </div>
            </div>
        )
    }
}
export default Card;