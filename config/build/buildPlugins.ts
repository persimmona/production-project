import HtmlWebpackPlugin from 'html-webpack-plugin';
import { ProgressPlugin, WebpackPluginInstance, DefinePlugin, HotModuleReplacementPlugin } from 'webpack';
import { BuildOptions } from './types/config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

export function buildPlugins({ apiUrl, isDev, paths, project }: Partial<BuildOptions>): WebpackPluginInstance[] {
    const plugins = [
        new HtmlWebpackPlugin({
            template: paths?.html,
        }),
        new ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        new DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
            __API__: JSON.stringify(apiUrl),
            __PROJECT__: JSON.stringify(project),
        }),
    ];

    if (isDev) {
        plugins.push(
            new HotModuleReplacementPlugin(), // to update automaticly changes,
            new BundleAnalyzerPlugin({ openAnalyzer: false }),
        );
    }

    return plugins;
}
