import React, {Component} from 'react'

import './Cards.css'

const defaultBackground = '#000000EE'

class Card extends Component {

    onDelete(){
        const {onDelete, index} = this.props;
        if (onDelete && index !== undefined){
            onDelete(index);
        }
    }

    render(){
        const { 
            title, 
            description, 
            background=defaultBackground,
            loading=false
        } = this.props;
        const cardStyle = {
            backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4)), url(${background})`
        }
        
        return (
            <div className="card" style={cardStyle}>
                <div className="card-title">
                    {!loading ? title : 'Loading...'}
                </div>
                <div className="card-description">
                    {!loading ? description : 'Please wait...'}
                </div>
               {!loading && 
                <div className="card-icon" onClick={()=>this.onDelete()}>
                    <i class="fas fa-trash"></i>
                </div>
                }
            </div>
        )
    }
}
export default Card;