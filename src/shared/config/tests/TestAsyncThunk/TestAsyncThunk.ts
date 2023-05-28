import { AsyncThunkAction, Dispatch } from '@reduxjs/toolkit';
import { RootSchema } from 'app/providers/store';

type ActionCreatorType<Return, ThunkArg, RejectedValue> = (
    arg: ThunkArg,
) => AsyncThunkAction<Return, ThunkArg, { rejectValue: RejectedValue }>;

export class TestAsyncThunk<Return, ThunkArg, RejectedValue> {
    dispatch: Dispatch;
    getState: () => RootSchema;
    actionCreator: ActionCreatorType<Return, ThunkArg, RejectedValue>;

    constructor(actionCreator: ActionCreatorType<Return, ThunkArg, RejectedValue>) {
        this.dispatch = jest.fn();
        this.getState = jest.fn();
        this.actionCreator = actionCreator;
    }

    async callThunk(arg: ThunkArg) {
        const action = this.actionCreator(arg);
        const result = await action(this.dispatch, this.getState, undefined);

        return result;
    }
}
