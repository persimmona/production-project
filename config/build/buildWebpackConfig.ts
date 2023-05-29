import { Configuration } from 'webpack';
import buildDevServer from './buildDevServer';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import { BuildOptions } from './types/config';

export function buildWebpackConfig({ mode, paths, isDev, port, apiUrl }: BuildOptions): Configuration {
    return {
        mode,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true,
        },
        module: {
            rules: buildLoaders(isDev),
        },
        plugins: buildPlugins({ paths, isDev, apiUrl }),
        resolve: buildResolvers(paths),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(port) : undefined,
    };
}
