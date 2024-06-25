import { AnyAction, Reducer, ReducersMapObject, combineReducers } from '@reduxjs/toolkit';
import { AsyncSchemaKey, ReducerManager, RootSchema } from './RootSchema';

export function createReducerManager(rootReducers: ReducersMapObject<RootSchema>): ReducerManager {
    const reducers = { ...rootReducers };

    let combinedReducer = combineReducers(reducers);

    let keysToRemove: AsyncSchemaKey[] = [];

    return {
        getReducerMap: () => reducers,
        reduce: (state: RootSchema, action: AnyAction) => {
            if (keysToRemove.length > 0) {
                state = { ...state };
                for (const key of keysToRemove) {
                    delete state[key];
                }
                keysToRemove = [];
            }

            return combinedReducer(state, action);
        },

        add: (key: AsyncSchemaKey, reducer: Reducer) => {
            if (!key || reducers[key]) {
                return;
            }

            reducers[key] = reducer;
            combinedReducer = combineReducers(reducers);
        },

        remove: (key: AsyncSchemaKey) => {
            if (!key || !reducers[key]) {
                return;
            }

            delete reducers[key];
            keysToRemove.push(key);
            combinedReducer = combineReducers(reducers);
        },
    };
}
