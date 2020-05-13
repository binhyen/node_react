

var redux = require('redux');


const productInitialState = {
    newItemStore:{
        product_name:'',
        product_price:'',
        image:''
    }
}
const allReducer = (state = productInitialState, action) => {
    switch (action.type) {
        case "ADD_NEW":
            console.log("#yen debug : "+JSON.stringify(action.newItemStore));
            return {...state,newItemStore:action.newItemStore}
        default:
            return state
    }
}

let store = redux.createStore(allReducer);
store.subscribe(function(){
    console.log(JSON.stringify(store.getState()));
})

export default store;