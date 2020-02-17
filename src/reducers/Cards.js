const types = {
    CARD_ADD: 'CARD_ADD',
    CARD_REMOVE: 'CARD_REMOVE',
    CARDS_RESET: 'CARDS_RESET',
    CARDS_SET: 'CARDS_SET',
    CARDS_FETCH: 'CARDS_FETCH'
}

const INITIAL_STATE = {
    cardList: [],
    filters: '',
    fetching: false
}

const cards = (state=INITIAL_STATE, action)=>{
    switch(action.type){
        case types.CARD_ADD:
            return {
                ...state,
                cardList: [action.card, ...state.cardList],
            }
        case types.CARD_REMOVE:
            const cardArrayAfterRemove = state.cardList.filter((card, index) => index!==action.index)
            return {
                ...state,
                cardList: cardArrayAfterRemove,
            }
        case types.CARDS_RESET:
            return {
                ...state,
                cardList: []
            }
        case types.CARDS_SET:
            return {
                ...state,
                cardList: action.cards,
                fetching: false
            }
        case types.CARDS_FETCH:
            return {
                ...state,
                fetching: true,
            }
        default:
            return state          
    }
}

export const actions = {
    cardAdd: (card) => ({type: types.CARD_ADD, card}),
    cardRemove: (index) => ({type: types.CARD_REMOVE, index}),
    cardReset: () => ({type: types.CARDS_RESET}),
    cardsSet: (cards) => ({type: types.CARDS_SET, cards}),
    cardsFetch: () => ({type: types.CARDS_FETCH})
}

export default cards;