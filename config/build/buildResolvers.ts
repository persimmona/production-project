import { ResolveOptions } from 'webpack';
import { BuildOptions } from './types/config';

export function buildResolvers(paths: BuildOptions['paths']): ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true, // absolute import
        alias: {}, // abosulte import alies
        modules: [paths.src, 'node_modules'],
        mainFiles: ['index'],
    };
}
