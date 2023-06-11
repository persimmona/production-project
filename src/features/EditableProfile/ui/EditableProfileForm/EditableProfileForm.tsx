import { ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/utils/classNames';
import { useAppDispatch } from 'shared/utils/useAppDispatch/useAppDispatch';
import { ReducersList, useReducersDynamicLoader } from 'shared/utils/useReducersDynamicLoader/useReducersDynamicLoader';
import { P } from 'shared/ui/P';
import { Button } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import { Select } from 'shared/ui/Select/Select';
import { Profile } from 'entities/Profile';
import { countrySelectOptions } from 'entities/Country';
import { currencySelectOptions } from 'entities/Currency';
import { useIntitalFormData } from '../../lib/useInitialFormData';
import { selectProfileFormData } from '../../model/selectors/selectProfileFormData';
import { selectProfileFormErrors } from '../../model/selectors/selectProfileFormErrors';
import { profileFormActions, profileFormReducer } from '../../model/slice/profileFormSlice';
import { updateProfileData } from '../../model/services/updateProfileData';
import cls from './EditableProfileForm.module.scss';

interface EditableProfileFormProps {
    initialData: Profile;
    onCancel?: () => void;
    onSubmit?: () => void;
    className?: string;
}

const FormElementsId: Record<keyof Profile, keyof Profile> = {
    username: 'username',
    firstname: 'firstname',
    lastname: 'lastname',
    age: 'age',
    avatar: 'avatar',
    city: 'city',
    country: 'country',
    currency: 'currency',
};

const reducerList: ReducersList = { profileForm: profileFormReducer };

const EditableProfileForm = ({ initialData, onCancel, onSubmit, className }: EditableProfileFormProps) => {
    const data = useSelector(selectProfileFormData);
    const validateErrors = useSelector(selectProfileFormErrors);

    const { age, avatar, city, country, currency, firstname, lastname, username } = data;

    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();

    useReducersDynamicLoader(reducerList);

    useIntitalFormData(initialData);

    const onFormDataChange = (value: string, event: ChangeEvent) => {
        const key = event.target.id;

        dispatch(profileFormActions.changeProfileForm({ [key]: value }));
    };

    const onFormSubmitButtonClick = async () => {
        await dispatch(updateProfileData(data));
        onSubmit?.();
    };
    const onCancelButtonClick = () => {
        dispatch(profileFormActions.setProfileFormData(initialData));
        onCancel?.();
    };

    return (
        <form className={classNames(cls.editableProfileForm, {}, [className])}>
            <Input
                id={FormElementsId.username}
                value={username}
                onChange={onFormDataChange}
                placeholder={t('fields.username')}
                className={cls.input}
            />
            <Input
                id={FormElementsId.firstname}
                value={firstname}
                onChange={onFormDataChange}
                placeholder={t('fields.firstname')}
                className={cls.input}
            />
            <Input
                id={FormElementsId.lastname}
                value={lastname}
                onChange={onFormDataChange}
                placeholder={t('fields.lastname')}
                className={cls.input}
            />
            <Input
                id={FormElementsId.age}
                type='number'
                value={age}
                onChange={onFormDataChange}
                placeholder={t('fields.age')}
                className={cls.input}
            />
            <Select
                id={FormElementsId.country}
                options={countrySelectOptions}
                value={country}
                onChange={onFormDataChange}
                className={cls.input}
            />
            <Select
                id={FormElementsId.currency}
                options={currencySelectOptions}
                value={currency}
                onChange={onFormDataChange}
                className={cls.input}
            />
            <Input id={FormElementsId.city} value={city} onChange={onFormDataChange} placeholder={t('fields.city')} className={cls.input} />
            <Input
                id={FormElementsId.avatar}
                type='url'
                value={avatar}
                onChange={onFormDataChange}
                placeholder={t('fields.avatar')}
                className={cls.input}
            />

            {validateErrors && <P color='error'>{t(`errors.${validateErrors}`)}</P>}

            <div className={cls.buttons}>
                <Button type='button' variant='outline' onClick={onCancelButtonClick}>
                    {t('buttons.cancel', { ns: 'translation' })}
                </Button>
                <Button type='button' variant='outline' onClick={onFormSubmitButtonClick}>
                    {t('buttons.save', { ns: 'translation' })}
                </Button>
            </div>
        </form>
    );
};

export default EditableProfileForm;
