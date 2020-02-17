import React, {Component} from 'react'
import { connect } from 'react-redux'

import Card from './Card';
import './Cards.css'
import {actions} from '../../reducers/Cards';

import {getAllBreeds} from '../../api/DogApi';
import {getAllHeros} from '../../api/HeroApi';

class CardManager extends Component {

    constructor(props){
        super(props);
        this.state = {
            title: '',
            description: '',
            background: ''
        };
    }

    componentDidMount(){
    }


    renderCardList(){
        const { cardList, fetching } = this.props;
        let renderedCardList = [this.renderAddCard()]
        if (fetching){
            for (let i=0; i<10; i++){
                renderedCardList.push(
                    <Card loading={fetching}/>
                )
            }
        }
        else{
            renderedCardList.push(
                ...cardList.map((c,i) => {
                    const title = c.title
                    const description = c.description
                    const background = c.background
                    return (
                        <Card 
                            title={title}
                            description={description}
                            background={background}
                            index={i}
                            onDelete={(i)=>this.handleDelete(i)}
                        />)
                })
                )
        }
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

    handleDelete(index){
        this.props.dispatch(actions.cardRemove(index));
    }

    renderAddCard(){
        const {fetching = false} = this.props;
        return (
            <div className="card">
                <form onSubmit={(e)=>this.handleSubmit(e)}>
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
                <button disabled={fetching} onClick={()=>this.fetchDogs()}>Dog Cards</button>
                <button disabled={fetching} onClick={()=>this.fetchHeros()}>Hero Cards</button>
            </div>
        )
    }

    fetchDogs(){
        const {fetching} = this.props;
        if (!fetching){
            this.props.dispatch(actions.cardsFetch())
            getAllBreeds((cards)=>this.props.dispatch(actions.cardsSet(cards)))
        }
    }

    fetchHeros(){
        const {fetching} = this.props;
        if (!fetching){
            this.props.dispatch(actions.cardsFetch())
            getAllHeros((cards)=>this.props.dispatch(actions.cardsSet(cards)))
        }
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
      fetching: state.cards.fetching,
  })
  

export default connect(mapStateToProps)(CardManager);