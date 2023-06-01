import { useEffect } from 'react';
import { Reducer } from '@reduxjs/toolkit';
import { useStore } from 'react-redux';
import { AsyncSchemaKey, StoreWithReducerManager } from 'app/providers/store';
import { useAppDispatch } from 'shared/utils/useAppDispatch/useAppDispatch';

export type ReducersList = {
    [key in AsyncSchemaKey]?: Reducer;
};

export const useReducersDynamicLoader = (reducersList: ReducersList, removeAfterUnmount = true) => {
    const store = useStore() as StoreWithReducerManager;
    const dispatch = useAppDispatch();

    useEffect(() => {
        const reducersEntries = Object.entries(reducersList);

        reducersEntries.forEach(([key, reducer]) => {
            store.reducerManager.add(key as AsyncSchemaKey, reducer);
            dispatch({ type: `@INIT ${key} reducer` });
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
