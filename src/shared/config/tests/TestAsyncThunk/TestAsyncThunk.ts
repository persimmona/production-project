import { AsyncThunkAction, Dispatch } from '@reduxjs/toolkit';
import axios, { AxiosStatic } from 'axios';

import { RootSchema } from '@/app/providers/store';

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true);

type ActionCreatorType<Return, ThunkArg, RejectedValue> = (
    arg: ThunkArg,
) => AsyncThunkAction<Return, ThunkArg, { rejectValue: RejectedValue }>;

export class TestAsyncThunk<Return, ThunkArg, RejectedValue> {
    dispatch: Dispatch;
    getState: () => RootSchema;
    actionCreator: ActionCreatorType<Return, ThunkArg, RejectedValue>;
    api: jest.MockedFunctionDeep<AxiosStatic>;

    constructor(actionCreator: ActionCreatorType<Return, ThunkArg, RejectedValue>) {
        this.dispatch = jest.fn();
        this.getState = jest.fn();
        this.actionCreator = actionCreator;
        this.api = mockedAxios;
    }

    async callThunk(arg: ThunkArg) {
        const action = this.actionCreator(arg);
        const result = await action(this.dispatch, this.getState, { api: this.api });

        return result;
    }
}
