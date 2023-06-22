import { useTranslation } from 'react-i18next';
import { ReducersList, useReducersDynamicLoader } from 'shared/utils/useReducersDynamicLoader/useReducersDynamicLoader';

const reducers: ReducersList = {};

const ArticleDetailsPage = () => {
    useReducersDynamicLoader(reducers);
    const { t } = useTranslation();

    return <div>Article Details</div>;
};

export default ArticleDetailsPage;
