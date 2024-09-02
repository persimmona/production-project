import path from 'path';
import { Configuration, DefinePlugin, RuleSetRule } from 'webpack';
import { buildScssLoader } from '../build/loaders/buildScssLoader';

export default {
    stories: ['../../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions', 'storybook-addon-mock'],
    framework: '@storybook/react',
    core: {
        builder: '@storybook/builder-webpack5',
    },
    webpackFinal: async (config: Configuration) => {
        config!.resolve!.modules = [path.resolve(__dirname, '..', '..', 'src'), 'node_modules'];
        config!.resolve!.extensions!.push('.ts', '.tsx');
        config!.resolve!.alias = {
            '@': path.resolve(__dirname, '..', '..', 'src'),
        };

        //@ts-ignore
        config!.module!.rules = config!.module!.rules!.map((rule: RuleSetRule) => {
            if (/svg/.test(rule.test as string)) {
                return { ...rule, exclude: /\.svg$/i };
            }

            return rule;
        });
        config!.module!.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ['@svgr/webpack'],
        });

        config!.module!.rules.push(buildScssLoader(true));

        config!.plugins!.push(
            new DefinePlugin({
                __IS_DEV__: JSON.stringify(true),
                __API__: JSON.stringify('http://localhost:6006'),
                __PROJECT__: JSON.stringify('storybook'),
            }),
        );

        return config;
    },
};
