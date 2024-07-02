import { RootSchema } from 'app/providers/store';
import { initialState } from '../slice/articleAdvancedSearchSlice';

export const selectArticleAdvancedSearchState = (state: RootSchema) => state.articleAdvancedSearch ?? initialState;
