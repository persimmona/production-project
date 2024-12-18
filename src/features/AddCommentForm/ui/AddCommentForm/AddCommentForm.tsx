import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { useAppDispatch } from '@/shared/utils/useAppDispatch/useAppDispatch';
import { ReducersList, useReducersDynamicLoader } from '@/shared/utils/useReducersDynamicLoader/useReducersDynamicLoader';

import { getAddCommentFormText } from '../../model/selectors/addCommentFormSelectors';
import { addCommentFormActions, addCommentFormReducer } from '../../model/slice/addCommentFormSlice';

import cls from './AddCommentForm.module.scss';

interface AddCommentFormProps {
    onCommentAdd: (text: string) => void;
}

const reducerList: ReducersList = {
    addCommentForm: addCommentFormReducer,
};

const ADD_COMMENT_INPUT_UID = 'addCommentInput';

export default function AddCommentForm(props: AddCommentFormProps) {
    const { onCommentAdd } = props;

    const { t } = useTranslation();

    const text = useSelector(getAddCommentFormText) ?? '';
    const dispatch = useAppDispatch();

    useReducersDynamicLoader(reducerList);

    const handleInputChange = useCallback(
        (_: string, value: string) => {
            dispatch(addCommentFormActions.setText(value));
        },
        [dispatch],
    );

    const handleCommentAdd = useCallback(() => {
        onCommentAdd(text);
        handleInputChange(ADD_COMMENT_INPUT_UID, '');
    }, [handleInputChange, onCommentAdd, text]);

    return (
        <div className={cls.addCommentForm} data-testid='AddCommentForm'>
            <Input
                uid={ADD_COMMENT_INPUT_UID}
                value={text}
                onChange={handleInputChange}
                placeholder='Comment'
                data-testid='AddCommentForm.Content'
            />
            <Button onClick={handleCommentAdd} variant='outline' data-testid='AddCommentForm.Submit'>
                {t('buttons.add')}
            </Button>
        </div>
    );
}
