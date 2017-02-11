/**
 * Created by appBakerz - 05 on 11-Feb-17.
 */

const visibilityFilter = (state = 'SHOW_ALL', action) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter;
        default:
            return state
    }
};

export default visibilityFilter