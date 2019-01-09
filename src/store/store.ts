import {createStore, Store, applyMiddleware, combineReducers} from "redux";
import {createLogger} from "redux-logger";
import copyReducer from "./reducers/copy";

export enum ActionType {
    //
}

export type Reducer = (state: AppState | null | undefined, action: Action<any>) => AppState | null;

export type Action<T extends object> = {
    readonly type: ActionType;
    readonly payload?: T;
}

export type AppState = {
    //
}

const logger = createLogger({
    //
});

export const initialState: AppState = {
    //
};

export const store: Store = createStore(combineReducers({
    copyReducer
}), applyMiddleware(logger));