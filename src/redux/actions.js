
export const ActionTypes = {
    SET_INTIAL_PRODUCTS : "SET_INTIAL_PRODUCTS",
    FILTER_PRODUCTS : "FILTER_PRODUCTS",
};

export const setIntialProductList = (products) => {
    return {
        type: ActionTypes.SET_INTIAL_PRODUCTS,
        payload: products,
    }
}

export const filterProductByName = (name) => {
    return {
        type: ActionTypes.FILTER_PRODUCTS,
        payload: name,
    }
}