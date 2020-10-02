import * as actionTypes from '../../store/actions';

const initialState = {
    results: []
};

const reducer = (state = initialState, action) => {
    switch (action.type){

        case actionTypes.STORE_RESULT:
            return {
                ...state,
                // do not use push as it changes the state directly. concat returns a new array
                // results: state.results.concat(state.counter)
                // By right proper way(becos this is a list. good practice to have id):
                results: state.results.concat({id: new Date(), value: action.counterRes})
            }
        case actionTypes.DELETE_RESULT:
            // filter creates a new array if match
            const updatedArray = state.results.filter( result => {return result.id !== action.resultElId} )
            return{
                ...state,
                results: updatedArray
            }

    }

    return state;
};

export default reducer;