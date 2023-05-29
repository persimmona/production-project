import path from 'path';
import { Configuration, DefinePlugin, RuleSetRule } from 'webpack';
import { buildScssLoader } from '../build/loaders/buildScssLoader';

export default {
    stories: ['../../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
    framework: '@storybook/react',
    core: {
        builder: '@storybook/builder-webpack5',
    },
    webpackFinal: async (config: Configuration) => {
        config.resolve.modules = [path.resolve(__dirname, '..', '..', 'src'), 'node_modules'];
        config.resolve.extensions.push('.ts', '.tsx');

        config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
            if (/svg/.test(rule.test as string)) return { ...rule, exclude: /\.svg$/i };

            return rule;
        });
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ['@svgr/webpack'],
        });

        config.module.rules.push(buildScssLoader(true));

        config.plugins.push(
            new DefinePlugin({
                __IS_DEV__: true,
                __API__: true,
            }),
        );

        return config;
    },
};
