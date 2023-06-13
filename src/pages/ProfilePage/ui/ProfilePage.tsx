import { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'shared/utils/useAppDispatch/useAppDispatch';
import { ReducersList, useReducersDynamicLoader } from 'shared/utils/useReducersDynamicLoader/useReducersDynamicLoader';
import { useVisibility } from 'shared/utils/useVisibility';
import { P } from 'shared/ui/P';
import { Button } from 'shared/ui/Button';
import { Modal } from 'shared/ui/Modal';
import { Loader } from 'shared/ui/Loader';
import { Avatar } from 'shared/ui/Avatar';
import { Header } from 'shared/ui/Header';
import {
    ProfileCard,
    ProfileInfoList,
    fetchProfileData,
    profileReducer,
    selectProfileData,
    selectProfileError,
    selectProfileIsLoading,
} from 'entities/Profile';

import { EditableProfileFormAsync } from 'features/EditableProfile';

const reducers: ReducersList = {
    profile: profileReducer,
};

const ProfilePage = () => {
    useReducersDynamicLoader(reducers);
    const { t } = useTranslation('profile');

    const dispatch = useAppDispatch();
    const profileData = useSelector(selectProfileData);
    const isProfileLoading = useSelector(selectProfileIsLoading);
    const profileFetchingError = useSelector(selectProfileError);

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') dispatch(fetchProfileData());
    }, [dispatch]);

    const {
        isMounted: isEditProfileModalMounted,
        isVisible: isEditProfileModalVisible,
        closeHandler: closeEditProfileModal,
        openHandler: openEditProfileModal,
    } = useVisibility(false);

    if (!profileData && isProfileLoading) {
        return <Loader />;
    }

    if (!profileData) {
        return <P color='error'>{t(profileFetchingError)}</P>;
    }

    const profileInfoItems = Object.entries(profileData)
        .filter(([key]) => key !== 'avatar')
        .map(([key, value]) => ({ label: t(`fields.${key}`), value }));
    const profileCardActions = (
        <>
            <Button onClick={openEditProfileModal}>{t('edit')}</Button>
        </>
    );

    return (
        <div>
            <ProfileCard loading={isProfileLoading} title={t('page_title')} actions={profileCardActions}>
                <Avatar src={profileData.avatar} size={'medium'} variant={'rounded'} />
                <ProfileInfoList items={profileInfoItems} />
            </ProfileCard>

            {isEditProfileModalMounted && (
                <Modal isVisible={isEditProfileModalVisible} onClose={closeEditProfileModal}>
                    <Header tag='h2'>{t('edit_form_title')}</Header>

                    <Suspense fallback={<Loader />}>
                        <EditableProfileFormAsync
                            initialData={profileData}
                            onCancel={closeEditProfileModal}
                            onSubmit={closeEditProfileModal}
                        />
                    </Suspense>
                </Modal>
            )}
        </div>
    );
};

export default ProfilePage;
