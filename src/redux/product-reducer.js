import { ActionTypes } from './actions';

const defaultState = {
    products: []
};

const productReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ActionTypes.SET_INTIAL_PRODUCTS:
            return {...state, products:action.payload};
        case ActionTypes.ADD_TODO:
            return { 
                ...state,
                products: state.products.concat(action.payload)
            };
        case ActionTypes.FILTER_PRODUCTS:
            const updatedproducts = state.products.map((product) =>
            product.id === action.payload.id
                ? {
                    ...product,
                    done: !product.done
                }
                : product
            );
            return {...state, products:updatedproducts};
        default:
            return state;
    }
}

export default productReducer;