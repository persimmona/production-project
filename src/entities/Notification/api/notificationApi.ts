import { rtkApi } from '@/shared/api/rtkApi';
import { Notification } from '../model/types/notification';

export const notificationApi = rtkApi.injectEndpoints({
    endpoints: (builder) => ({
        getNotifications: builder.query<Notification[], void>({
            query: () => ({
                url: '/notifications',
            }),
        }),
    }),
});
