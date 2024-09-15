import { User, userActions, USER_ROLE } from '@/entities/User';
import { TestAsyncThunk } from '@/shared/config/tests/TestAsyncThunk/TestAsyncThunk';

import { loginByUsername } from './loginByUsername';

describe('loginByUsername', () => {
    test('should return user data on success', async () => {
        const authData = {
            username: 'admin',
            password: '123',
        };
        const userValue: User = {
            id: 'random',
            username: 'admin',
            roles: [USER_ROLE.ADMIN],
        };

        const thunk = new TestAsyncThunk(loginByUsername);
        thunk.api.post.mockResolvedValue({ data: userValue });

        const result = await thunk.callThunk(authData);

        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(userValue);
    });

    test('should return error', async () => {
        const authData = {
            username: 'admin4',
            password: '123',
        };

        const thunk = new TestAsyncThunk(loginByUsername);
        thunk.api.post.mockRejectedValue(new Error('Incorrect user value'));

        const result = await thunk.callThunk(authData);

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual('error');
    });
});
