import { countrySelectOptions } from 'entities/Country';
import { currencySelectOptions } from 'entities/Currency';
import { Profile } from 'entities/Profile';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Button } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import { P } from 'shared/ui/P';
import { Select } from 'shared/ui/Select/Select';
import { classNames } from 'shared/utils/classNames';
import { useAppDispatch } from 'shared/utils/useAppDispatch/useAppDispatch';
import { ReducersList, useReducersDynamicLoader } from 'shared/utils/useReducersDynamicLoader/useReducersDynamicLoader';
import { useIntitalFormData } from '../../lib/useInitialFormData';
import { selectProfileFormData } from '../../model/selectors/selectProfileFormData/selectProfileFormData';
import { selectProfileFormErrors } from '../../model/selectors/selectProfileFormErrors';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { profileFormActions, profileFormReducer } from '../../model/slice/profileFormSlice';
import cls from './EditableProfileForm.module.scss';
import { Listbox } from 'shared/ui/Listbox/Listbox';

interface EditableProfileFormProps {
    initialData: Profile;
    onCancel?: () => void;
    onSubmit?: () => void;
    className?: string;
}

const FormElementsId: Record<keyof Profile, keyof Profile> = {
    id: 'id',
    username: 'username',
    firstname: 'firstname',
    lastname: 'lastname',
    age: 'age',
    avatar: 'avatar',
    city: 'city',
    country: 'country',
    currency: 'currency',
} as const;

const reducerList: ReducersList = { profileForm: profileFormReducer };

const EditableProfileForm = ({ initialData, onCancel, onSubmit, className }: EditableProfileFormProps) => {
    const data = useSelector(selectProfileFormData);
    const validateErrors = useSelector(selectProfileFormErrors);

    const { age, avatar, city, country, currency, firstname, lastname, username } = data;

    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();

    useReducersDynamicLoader(reducerList);

    useIntitalFormData(initialData);

    const onFormDataChange = <T,>(uid: string, value: T) => {
        dispatch(profileFormActions.changeProfileForm({ [uid]: value }));
    };

    const onFormSubmitButtonClick = async () => {
        const response = await dispatch(updateProfileData(data));

        if (response.meta.requestStatus === 'fulfilled') {
            onSubmit?.();
        }
    };
    const onCancelButtonClick = () => {
        dispatch(profileFormActions.setProfileFormData(initialData));
        onCancel?.();
    };

    return (
        <form className={classNames(cls.editableProfileForm, {}, [className])}>
            <Input
                uid={FormElementsId.username}
                value={username}
                onChange={onFormDataChange}
                placeholder={t('fields.username')}
                className={cls.input}
            />
            <Input
                uid={FormElementsId.firstname}
                value={firstname}
                onChange={onFormDataChange}
                placeholder={t('fields.firstname')}
                className={cls.input}
            />
            <Input
                uid={FormElementsId.lastname}
                value={lastname}
                onChange={onFormDataChange}
                placeholder={t('fields.lastname')}
                className={cls.input}
            />
            <Input
                uid={FormElementsId.age}
                type='number'
                value={age}
                onChange={onFormDataChange}
                placeholder={t('fields.age')}
                className={cls.input}
            />
            <Listbox
                uid={FormElementsId.country}
                options={countrySelectOptions}
                value={country}
                onChange={onFormDataChange}
                className={cls.input}
            />
            <Select
                uid={FormElementsId.currency}
                options={currencySelectOptions}
                value={currency}
                onChange={onFormDataChange}
                className={cls.input}
            />
            <Input
                uid={FormElementsId.city}
                value={city}
                onChange={onFormDataChange}
                placeholder={t('fields.city')}
                className={cls.input}
            />
            <Input
                uid={FormElementsId.avatar}
                type='url'
                value={avatar}
                onChange={onFormDataChange}
                placeholder={t('fields.avatar')}
                className={cls.input}
            />

            {validateErrors &&
                validateErrors.map((error) => (
                    <P key={error} color='error'>
                        {t(`errors.${error}`)}
                    </P>
                ))}

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
