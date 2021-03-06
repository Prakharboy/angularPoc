import { Action } from '@ngrx/store'
import { User } from  './../models/user.model'
import * as UserActions from './../actions/user.actions'

const initialState: User = {
    name: 'abc',
    id: 'first'
}

export function reducer(state: User[] = [initialState], action: UserActions.Actions) {

    switch(action.type) {
        case UserActions.ADD_USER:
            return [...state, action.payload];
        default:
            return state;
    }
}