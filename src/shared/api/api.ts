import axios from 'axios';
import { AUTH_USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

export const $api = axios.create({
    baseURL: __API__,
    headers: { authorization: localStorage.getItem(AUTH_USER_LOCALSTORAGE_KEY) ?? '' },
});
