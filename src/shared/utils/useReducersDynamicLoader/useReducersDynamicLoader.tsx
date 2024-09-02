import { Reducer } from '@reduxjs/toolkit';
import { AsyncSchemaKey, RootSchema, StoreWithReducerManager } from '@/app/providers/store';
import { useEffect } from 'react';
import { useStore } from 'react-redux';
import { useAppDispatch } from '@/shared/utils/useAppDispatch/useAppDispatch';

export type ReducersList = {
    [key in AsyncSchemaKey]?: Reducer<NonNullable<RootSchema[key]>>;
};

export const useReducersDynamicLoader = (reducersList: ReducersList, removeAfterUnmount = true) => {
    const store = useStore() as StoreWithReducerManager;
    const dispatch = useAppDispatch();

    useEffect(() => {
        const reducerMap = store.reducerManager.getReducerMap();
        const reducersEntries = Object.entries(reducersList);

        reducersEntries.forEach(([key, reducer]) => {
            const mountedReducer = reducerMap[key as AsyncSchemaKey];
            if (!mountedReducer) {
                store.reducerManager.add(key as AsyncSchemaKey, reducer);
                dispatch({ type: `@INIT ${key} reducer` });
            }
        });

        return () => {
            if (removeAfterUnmount) {
                reducersEntries.forEach(([key]) => {
                    store.reducerManager.remove(key as AsyncSchemaKey);
                    dispatch({ type: `@DESTROY ${key} reducer` });
                });
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};
