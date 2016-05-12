import {setEntries, next, vote, INITIAL_STATE} from './core';
import {Map} from 'immutable';

function setState(state, newState) {
    return state.merge(newState);
}

export default function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_STATE':
            return setState(state, action.state);
        case 'SET_ENTRIES':
            return setEntries(state, action.entries);
        case 'NEXT':
            return next(state);
        case 'VOTE':
            return state.update('vote',
                    voteState => vote(voteState, action.entry));
    }
    return state;
}