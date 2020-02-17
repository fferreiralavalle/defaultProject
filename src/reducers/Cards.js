const types = {
    CARD_ADD: 'CARD_ADD',
    CARD_REMOVE: 'CARD_REMOVE',
    CARDS_RESET: 'CARDS_RESET',
    CARDS_SET: 'CARDS_SET',
}

const INITIAL_STATE = {
    cardList: [],
    filters: '',
}

const cards = (state=INITIAL_STATE, action)=>{
    switch(action.type){
        case types.CARD_ADD:
            return {
                ...state,
                cardList: [...state.cardList, action.card],
            }
        case types.CARD_REMOVE:
            const cardArrayAfterRemove = state.cardList.filter((card, index) => index!==action.index)
            return {
                ...state,
                cardList: cardArrayAfterRemove
            }
        case types.CARDS_RESET:
            return {
                ...state,
                cardList: []
            }
        case types.CARDS_SET:
            return {
                ...state,
                cardList: action.cards
            }
        default:
            return state          
    }
}

export const actions = {
    cardAdd: (card) => ({type: types.CARD_ADD, card}),
    cardRemove: (index) => ({type: types.CARD_REMOVE, index}),
    cardReset: () => ({type: types.CARDS_RESET}),
    cardsSet: (cards) => ({type: types.CARDS_SET, cards})
}

export default cards;