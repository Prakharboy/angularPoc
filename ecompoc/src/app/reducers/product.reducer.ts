import { Action } from '@ngrx/store'
import { Product } from  './../models/product.model'
import * as ProductActions from './../actions/product.actions'

const initialState : Product = {
    name: "abc",
    type:"electronic",
    price:"5.5"
    
};

export function reducer(state: Product[] = [initialState], action: ProductActions.Actions) {

    switch(action.type) {
        case ProductActions.ADD_PRODUCT:
            return [...state, action.payload];
        default:
            return state; 
    }
}