import { Map } from 'immutable';
import { LOCATION_CHANGE } from 'react-router-redux';

const initialState = new Map({
    locationBeforeTransitions: null
});

// custom reducer for getting react-router and Immutable to play nice
const routerReducer = (state = initialState, action) => {
    if (action.type === LOCATION_CHANGE) {
        return state.merge({
            locationBeforeTransitions: action.payload
        });
    }

    return state;
};

export default routerReducer;
