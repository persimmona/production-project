import { useEffect } from 'react';

import { Profile } from '@/entities/Profile';
import { useAppDispatch } from '@/shared/utils/useAppDispatch/useAppDispatch';

import { profileFormActions } from '../model/slice/profileFormSlice';

export const useIntitalFormData = (initialData: Profile) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(profileFormActions.setProfileFormData(initialData));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};
