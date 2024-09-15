import { Suspense, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Profile, ProfileCard, ProfileInfoList } from '@/entities/Profile';
import { selectUserAuthData } from '@/entities/User';
import { EditableProfileFormAsync } from '@/features/EditableProfile';
import { Avatar } from '@/shared/ui/Avatar';
import { Button } from '@/shared/ui/Button';
import { Header } from '@/shared/ui/Header';
import { Loader } from '@/shared/ui/Loader';
import { Modal } from '@/shared/ui/Modal';
import { P } from '@/shared/ui/P';
import { Page } from '@/shared/ui/Page/Page';
import { useAppDispatch } from '@/shared/utils/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/utils/useInitialEffect/useInitialEffect';
import { ReducersList, useReducersDynamicLoader } from '@/shared/utils/useReducersDynamicLoader/useReducersDynamicLoader';
import { useVisibility } from '@/shared/utils/useVisibility';

import { selectProfileData } from '../model/selectors/selectProfileData';
import { selectProfileError } from '../model/selectors/selectProfileError';
import { selectProfileIsLoading } from '../model/selectors/selectProfileIsLoading';
import { fetchProfileData } from '../model/services/fecthProfileData';
import { profileActions, profileReducer } from '../model/slice/profileSlice';

const reducers: ReducersList = {
    profile: profileReducer,
};

const ProfilePage = () => {
    const { id } = useParams<{ id: string }>();
    const { t } = useTranslation('profile');

    useReducersDynamicLoader(reducers);

    const dispatch = useAppDispatch();

    const profileData = useSelector(selectProfileData);
    const userData = useSelector(selectUserAuthData);
    const isProfileLoading = useSelector(selectProfileIsLoading);
    const profileFetchingError = useSelector(selectProfileError);

    useInitialEffect(() => {
        if (id) dispatch(fetchProfileData(id));
    });

    const {
        isMounted: isEditProfileModalMounted,
        isVisible: isEditProfileModalVisible,
        closeHandler: closeEditProfileModal,
        openHandler: openEditProfileModal,
    } = useVisibility();

    const onEditProfileSubmit = useCallback(
        async (data: Profile) => {
            dispatch(profileActions.setProfileData(data));
            closeEditProfileModal();
        },
        [closeEditProfileModal, dispatch],
    );

    if (!profileData && isProfileLoading) {
        return <Loader />;
    }

    if (!profileData) {
        return <P color='error'>{t(profileFetchingError)}</P>;
    }

    const profileInfoItems = Object.entries(profileData)
        .filter(([key]) => key !== 'avatar')
        .map(([key, value]) => ({ label: t(`fields.${key}`), value }));

    const profileCardActions = userData?.id == id && <Button onClick={openEditProfileModal}>{t('edit')}</Button>;

    return (
        <Page>
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
                            onSubmit={onEditProfileSubmit}
                        />
                    </Suspense>
                </Modal>
            )}
        </Page>
    );
};

export default ProfilePage;
