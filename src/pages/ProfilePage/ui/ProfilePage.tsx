import {
    ProfileCard,
    ProfileInfoList,
    fetchProfileData,
    profileReducer,
    selectProfileData,
    selectProfileError,
    selectProfileIsLoading,
} from 'entities/Profile';
import { selectUserAuthData } from 'entities/User';
import { EditableProfileFormAsync } from 'features/EditableProfile';
import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Avatar } from 'shared/ui/Avatar';
import { Button } from 'shared/ui/Button';
import { Header } from 'shared/ui/Header';
import { Loader } from 'shared/ui/Loader';
import { Modal } from 'shared/ui/Modal';
import { P } from 'shared/ui/P';
import { Page } from 'shared/ui/Page/Page';
import { useAppDispatch } from 'shared/utils/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/utils/useInitialEffect/useInitialEffect';
import { ReducersList, useReducersDynamicLoader } from 'shared/utils/useReducersDynamicLoader/useReducersDynamicLoader';
import { useVisibility } from 'shared/utils/useVisibility';

const reducers: ReducersList = {
    profile: profileReducer,
};

const ProfilePage = () => {
    useReducersDynamicLoader(reducers);
    const { t } = useTranslation('profile');

    const dispatch = useAppDispatch();

    const profileData = useSelector(selectProfileData);
    const userData = useSelector(selectUserAuthData);
    const isProfileLoading = useSelector(selectProfileIsLoading);
    const profileFetchingError = useSelector(selectProfileError);
    const { id } = useParams<{ id: string }>();

    useInitialEffect(() => {
        if (id) dispatch(fetchProfileData(id));
    });

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
                            onSubmit={closeEditProfileModal}
                        />
                    </Suspense>
                </Modal>
            )}
        </Page>
    );
};

export default ProfilePage;
