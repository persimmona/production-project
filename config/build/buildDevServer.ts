import { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types/config';

const buildDevServer = (port: BuildOptions['port']): DevServerConfiguration => {
    return {
        port,
        open: true,
        historyApiFallback: true,
    };
};

export default buildDevServer;
