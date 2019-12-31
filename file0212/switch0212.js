const {createStore} = require ('redux');

const initialState ={
age:21
};

const myReducer = (state=initialState, action)=>{
const newState ={...state};

switch(action.type)
{

case 'ADD':
newState.age+=action.payload;
return newState;

case 'SUB':
newState.age-=action.payload;
return newState;

case 'MUL':
newState.age*=action.payload;
return newState;

case 'DIV':
newState.age/=action.payload;
return newState;

default :
action.initialState;
break;

}


return newState;
}
const store = createStore(myReducer);

store.subscribe(()=>{
console.log('state changed', JSON.stringify(store.getState()));
})
store.dispatch({type:"ADD", payload:10});
store.dispatch({type:"SUB", payload:10});
store.dispatch({type:"MUL", payload:10});
store.dispatch({type:"DIV", payload:3});
