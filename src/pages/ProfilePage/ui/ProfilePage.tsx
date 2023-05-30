import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ReducersList, useReducersDynamicLoader } from 'shared/utils/useReducersDynamicLoader/useReducersDynamicLoader';
import { ProfileCard, profileReducer, fetchProfileData } from 'entities/Profile';

const reducers: ReducersList = {
    profile: profileReducer,
};

const ProfilePage = () => {
    useReducersDynamicLoader(reducers);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    return (
        <div>
            <ProfileCard />
        </div>
    );
};

export default ProfilePage;
