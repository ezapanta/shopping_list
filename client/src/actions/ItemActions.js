import axios from 'axios';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from './Types';

export const getItems = () => dispatch  => {
    dispatch(setItemsLoading());
    axios.get('/api/items')
        .then(res => {
            return dispatch({
                type: GET_ITEMS,
                payload: res.data
            })
        });
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

export const setItemsLoading = () => {
    return {
        type: ITEMS_LOADING
    };
};
