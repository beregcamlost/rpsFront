import * as actionsTypes from './actions';

const initialState = {
    game: {
        id: "",
        players: {
            player1:{ name: "", score: 0 },
            player2:{ name: "", score: 0 },
        }
    },
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionsTypes.ADD_GAME:
            return {
                game: state.game.id = "asdasd" 
            }
    
        default:
            return state;
    }        
};

export default reducer;