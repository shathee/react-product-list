import { ActionTypes } from './actions';

const defaultState = {
    products: [],
    visible_products: [],
    shelfs:[],
    product_groups: []
};

const productReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ActionTypes.SET_INTIAL_PRODUCTS:
            return {...state, products:action.payload, visible_products: action.payload};
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
            
            const visibleProducts = action.payload 
                ? state.products.filter((p) => p.name.toLowerCase().includes(action.payload.toLowerCase()))
                : state.products;
            return { 
                ...state, 
                visible_products: visibleProducts
            };
        default:
            return state;
    }
}

export default productReducer;