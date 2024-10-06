import { Configuration } from 'webpack';

import buildDevServer from './buildDevServer';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import { BuildOptions } from './types/config';

export function buildWebpackConfig(options: BuildOptions): Configuration {
    const { mode, paths, isDev, port } = options;

    return {
        mode,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true,
            publicPath: '/', // problem with routes and webpack chunks
        },
        module: {
            rules: buildLoaders(isDev),
        },
        plugins: buildPlugins(options),
        resolve: buildResolvers(paths),
        devtool: isDev ? 'eval-cheap-module-source-map' : undefined,
        devServer: isDev ? buildDevServer(port) : undefined,
    };
}
