
export const ActionTypes = {
    SET_INTIAL_PRODUCTS : "SET_INTIAL_PRODUCTS",
    SET_PRODUCTS_SELFS : "SET_PRODUCTS_SELFS",
    SET_PRODUCTS_GROUPS : "SET_PRODUCTS_GROUPS",
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
export const setProductShelfs = (shelfs) => {
    return {
        type: ActionTypes.SET_PRODUCTS_SELFS,
        payload: shelfs,
    }
}
export const setProductGroups = (groups) => {
    return {
        type: ActionTypes.SET_PRODUCTS_GROUPS,
        payload: groups,
    }
}