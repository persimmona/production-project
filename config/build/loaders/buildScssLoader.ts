import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const buildScssLoader = (isDev: boolean) => ({
    test: /\.(sc|sa|c)ss$/i,
    exclude: /node_modules/,
    use: [
        // Creates `style` nodes from JS strings
        isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
        // Translates CSS into CommonJS
        {
            loader: 'css-loader',
            options: {
                modules: {
                    auto: /\.module\.(c|sc|sa)ss$/i,
                    // auto: (resPath: string) => resPath.includes(".module."),
                    localIdentName: isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]',
                },
            },
        },
        // Compiles Sass to CSS
        'sass-loader',
    ],
});
