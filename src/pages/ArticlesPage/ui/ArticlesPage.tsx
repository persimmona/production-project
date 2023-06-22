import { useTranslation } from 'react-i18next';
import { ReducersList } from 'shared/utils/useReducersDynamicLoader/useReducersDynamicLoader';

const reducers: ReducersList = {};

const ArticlesPage = () => {
    const { t } = useTranslation('articles');

    return <div>Articles</div>;
};

export default ArticlesPage;
