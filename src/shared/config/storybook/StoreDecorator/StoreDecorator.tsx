import { Story } from '@storybook/react';
import { DeepPartial } from '@reduxjs/toolkit';
import { RootSchema, StoreProvider } from 'app/providers/store';

// eslint-disable-next-line react/display-name
export const StoreDecorator = (state: DeepPartial<RootSchema>) => (story: () => Story) =>
    <StoreProvider initialState={state}>{story()}</StoreProvider>;
