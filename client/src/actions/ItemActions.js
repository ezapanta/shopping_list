import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from './Types';

export const getItems = (id) => {
    return {
        type: GET_ITEMS,
        payload: id
    };
};

export const addItem = (id) => {
    return {
        type: ADD_ITEM,
        payload: id
    };
};


export const deleteItem = (id) => {
    return {
        type: DELETE_ITEM,
        payload: id
    };
};
