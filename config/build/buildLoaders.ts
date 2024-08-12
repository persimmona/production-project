import { RuleSetRule } from 'webpack';
import { buildScssLoader } from './loaders/buildScssLoader';
import { BuildOptions } from './types/config';

export function buildLoaders(isDev: BuildOptions['isDev']): RuleSetRule[] {
    const assetsLoader = {
        test: /\.(png|jpg|gif)$/i,
        type: 'asset/resource',
    };

    const svgLoader = {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
    };

    const scssLoader = buildScssLoader(isDev);

    const babelLoader = {
        test: /\.(js|jsx|tsx|ts)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: [['@babel/preset-env']],
                plugins: [isDev && require.resolve('react-refresh/babel')].filter(Boolean),
            },
        },
    };

    return [assetsLoader, svgLoader, babelLoader, scssLoader];
}
