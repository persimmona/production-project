import { useEffect } from 'react';
import { useAppDispatch } from 'shared/utils/useAppDispatch/useAppDispatch';
import { Profile } from 'entities/Profile';
import { profileFormActions } from '../model/slice/profileFormSlice';

export const useIntitalFormData = (initialData: Profile) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(profileFormActions.setProfileFormData(initialData));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};
