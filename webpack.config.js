const webpack = require("webpack");
const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const postcssNormalize = require("postcss-normalize");
const CopyPlugin = require("copy-webpack-plugin");
const { ESBuildMinifyPlugin } = require('esbuild-loader');
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");

const isProduction = process.argv.includes("production");
process.env.NODE_ENV = isProduction ? "production" : "development";

const smp = new SpeedMeasurePlugin();

function getCSSLoaders() {
    const loaders = [];

    if (isProduction) {
        loaders.push(MiniCssExtractPlugin.loader);
    } else {
        loaders.push({ loader: "style-loader" });
    }

    loaders.push({
        loader: "css-loader",
        options: {
            modules: {
                auto: true,
                localIdentName: "[sha512:hash:base64:8]",
            },
        }
    }, {
        loader: "postcss-loader",
        options: {
            postcssOptions: {
                plugins: [
                    require("postcss-flexbugs-fixes"),
                    require("postcss-preset-env")({ autoprefixer: { flexbox: "no-2009" }, stage: 3 }),
                    postcssNormalize(),
                ],
            },
        },
    });

    return loaders;
}

function getPlugins() {
    const plugins = [new HTMLWebpackPlugin({
        template: "./public/index.html",
        scriptLoading: "defer",
    })];

    if (isProduction) {
        plugins.push(
            new CopyPlugin({
                patterns: [
                    {
                        from: "public",
                        filter: (file) => !file.endsWith('.html'),
                    },
                ],
            }),
            new MiniCssExtractPlugin({
                filename: "static/css/[name].[contenthash:8].css",
                chunkFilename: "static/css/[name].[contenthash:8].chunk.css",
            })
        );
    } else {
        plugins.push(new webpack.HotModuleReplacementPlugin());
    }

    return plugins;
}

const WebpackConfig = {
    entry: {
        vendors: {
            import: ["react", "react-dom"],
            runtime: "runtime",
        },
        main: {
            import: ["./src/index.tsx"],
            dependOn: "vendors",
        },
    },
    mode: isProduction ? "production" : "development",
    module: {
        rules: [
            {
                test: /\.tsx?$/i,
                include: path.resolve(__dirname, "src"),
                exclude: /node_modules/,
                loader: "esbuild-loader",
                options: {
                    loader: "tsx",
                    target: "es2015",
                },
            },
            {
                test: /\.css$/i,
                use: getCSSLoaders(),
            },
            {
                test: /\.(gif|(jpe?g)|png|webp)$/i,
                loader: "url-loader",
                options: {
                    limit: "10000",
                    name: isProduction ? "static/media/[name].[hash:8].[ext]" : "static/media/[name].[ext]",
                },
            },
            {
                loader: "file-loader",
                exclude: /\.(js|mjs|jsx|ts|tsx|css|html|json|gif|(jpe?g)|png|webp)$/i,
                options: {
                    name: isProduction ? "static/media/[name].[hash:8].[ext]" : "static/media/[name].[ext]",
                },
            },
        ]
    },
    plugins: getPlugins(),
    optimization: {
        minimize: isProduction,
        minimizer: [
            new ESBuildMinifyPlugin({
                target: "es2015",
                css: true,
            }),
        ],
        splitChunks: {
            chunks: "async",
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    chunks: "all",
                },
            },
        },
        runtimeChunk: {
            name: entrypoint => `runtime.${entrypoint.name}`,
        },
    },
    resolve: {
        extensions: ["*", ".ts", ".tsx", ".js", ".json"],
    },
    output: {
        path: path.resolve(__dirname, "dist/"),
        publicPath: "/",
        filename: isProduction ? "static/js/[name].[contenthash:8].js" : "static/js/[name].js",
        chunkFilename: isProduction ? "static/js/[name].[contenthash:8].chunk.js" : "static/js/[name].chunk.js",
        crossOriginLoading: "anonymous",
    },
    devServer: {
        port: 3000,
        historyApiFallback: true,
        open: true,
    },
    watchOptions: {
        ignored: /node_modules/,
    },
    cache: true,
    stats: {
        assets: false,
        colors: true,
        hash: false,
        version: false,
        timings: true,
        chunks: false,
        modules: false,
        reasons: false,
        children: false,
        source: false,
        errors: true,
        errorDetails: true,
        warnings: true,
        publicPath: false
    },
};

module.exports = isProduction ? WebpackConfig : smp.wrap(WebpackConfig);
