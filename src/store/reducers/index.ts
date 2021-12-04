import { todoReducer } from './todoReducer';
import { combineReducers } from "redux";
import { useReducer } from "./useReducer";

export const rootReducer = combineReducers({
    user: useReducer,
    todo: todoReducer
});

export type RootState = ReturnType<typeof rootReducer>