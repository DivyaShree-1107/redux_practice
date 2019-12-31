const initialState = {
    age:20
    };
    
    const Reducer = (state=initialState, action) => {
    const newState = {...state};
    
    if(action.type === 'AGE_UP'){
      if(newState.age<30)
    newState.age+=action.value;
    }

    if(action.type === 'AGE_DOWN'){
        if(newState.age>15)
    newState.age=newState.age-action.value;
    }
    return newState;
    };
    
    export default Reducer;