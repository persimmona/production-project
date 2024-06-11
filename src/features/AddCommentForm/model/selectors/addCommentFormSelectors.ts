import { RootSchema } from 'app/providers/store';

export const getAddCommentFormText = (state: RootSchema) => state?.addCommentForm?.text;
