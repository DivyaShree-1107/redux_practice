import * as ActionTypes from '../Actions/Types';


const initialState={
    age:20,
}

export default (state=initialState, action ) => {
    switch (action.type) {
        case ActionTypes.AGE_UP: {
            return {...state, age:state.age+action.value};
        }
        case ActionTypes.AGE_DOWN: {
            return {...state, age:state.age-action.value};
        }
        default :{
            return state ;
        }
    }
}