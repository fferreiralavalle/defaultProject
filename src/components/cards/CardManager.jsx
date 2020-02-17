import React, {Component} from 'react'
import { connect } from 'react-redux'

import Card from './Card';
import './Cards.css'
import {actions} from '../../reducers/Cards';

class CardManager extends Component {

    constructor(props){
        super(props);
        this.state = {
            title: '',
            description: '',
            background: ''
        };
    }

    renderCardList(){
        const { cardList } = this.props;
        const renderedCardList = [
            this.renderAddCard(),
            ...cardList.map(c => {
                const title = c.title
                const description = c.description
                const background = c.background
                return (
                    <Card 
                        title={title}
                        description={description}
                        background={background}
                    />)
            })]
        return (renderedCardList)
    }

    handleCardChange(e){
        const {target} = e;
        const {value} = target;
        const {name} = target;

        this.setState({
            [name]: value
          });
    }

    handleSubmit(e){
        e.preventDefault();
        const {title, description, background} = this.state;
        this.props.dispatch(actions.cardAdd({title,description,background}));
    }

    renderAddCard(){
        return (
            <form className="card" onSubmit={(e)=>this.handleSubmit(e)}>
                <input name="title" 
                    onChange={(e)=>this.handleCardChange(e)}
                    placeholder="Card Name"
                />
                <input name="description" 
                    onChange={(e)=>this.handleCardChange(e)}
                    placeholder="Card Description"
                />
                <input name="background" 
                    onChange={(e)=>this.handleCardChange(e)}
                    placeholder="Card background URL"
                />
                <input type="submit"/>
            </form>
        )
    }

    render(){
        return (
            <div className="card-list">
                {this.renderCardList()}
            </div>
        )
    }
}

const mapStateToProps = state => ({
      cardList: state.cards.cardList,
  })
  

export default connect(mapStateToProps)(CardManager);