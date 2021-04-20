import { ActionTypes } from './actions';

const defaultState = {
    products: [],
    shelfs:[],
    product_groups: []
};

const productReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ActionTypes.SET_INTIAL_PRODUCTS:
            return {...state, products:action.payload};
        case ActionTypes.SET_PRODUCTS_SELFS:
            return { 
                ...state,
                shelfs: action.payload
            };
        case ActionTypes.SET_PRODUCTS_GROUPS:
            return { 
                ...state,
                product_groups: action.payload
            };
        case ActionTypes.FILTER_PRODUCTS:
            console.log(action.payload)
        default:
            return state;
    }
}

export default productReducer;