import { profileReducer } from 'entities/Profile';
import { useTranslation } from 'react-i18next';
import { ReducersList, useReducersDynamicLoader } from 'shared/utils/useReducersDynamicLoader/useReducersDynamicLoader';

const reducers: ReducersList = {
    profile: profileReducer,
};

const ProfilePage = () => {
    const { t } = useTranslation('profile');

    useReducersDynamicLoader(reducers);

    return <div>{t('profile')}</div>;
};

export default ProfilePage;
