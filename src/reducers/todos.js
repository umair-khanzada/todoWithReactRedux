/**
 * Created by appBakerz - 05 on 11-Feb-17.
 */

const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                },
                ...state
            ];
        case 'TOGGLE_TODO':
            return state.map(t => {
                if (t.id === action.id) {
                    return Object.assign({}, t, {
                        completed: !t.completed
                    })
                }else{
                    return t;
                }

            }
            );
        default:
            return state
    }
};

export default todos