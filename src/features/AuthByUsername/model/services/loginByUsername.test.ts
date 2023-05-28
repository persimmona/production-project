import axios from 'axios';
import { TestAsyncThunk } from 'shared/config/tests/TestAsyncThunk/TestAsyncThunk';
import { User, userActions } from 'entities/User';
import { loginByUsername } from './loginByUsername';

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true);
describe('loginByUsername', () => {
    test('should return user data on success', async () => {
        const authData = {
            username: 'admin',
            password: '123',
        };
        const userValue: User = {
            id: 'random',
            username: 'admin',
        };
        mockedAxios.post.mockResolvedValue({ data: userValue });

        const thunk = new TestAsyncThunk(loginByUsername);
        const result = await thunk.callThunk(authData);

        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
        expect(thunk.dispatch).toHaveBeenCalledTimes(3); // why 3?
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(userValue);
    });

    test('should return error', async () => {
        const authData = {
            username: 'admin4',
            password: '123',
        };
        mockedAxios.post.mockRejectedValue(new Error('Incorrect user value'));

        const thunk = new TestAsyncThunk(loginByUsername);
        const result = await thunk.callThunk(authData);

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual('error');
    });
});
