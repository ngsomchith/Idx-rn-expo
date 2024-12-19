const { withExpo } = require('@expo/webpack-config');

module.exports = async function (env, argv) {
    const config = await withExpo(env, argv);
    // Supprimez le préchargement des polices inutilisées


    // Modifiez la configuration pour empêcher le préchargement automatique
    config.plugins = config.plugins.filter(
        (plugin) => plugin.constructor.name !== 'PreloadPlugin'
    );

    config.plugins = preloadPlugins;
    // Ajoutez une règle pour les fichiers de polices
    config.module.rules.push({
        // test: /\.(ttf|otf)$/,
        test: /\.ttf$/,
        loader: "url-loader", // or directly file-loader
        include: path.resolve(__dirname, "node_modules/react-native-vector-icons"),

        use: {
            loader: 'url-loader',
            options: {
                limit: 8192,
                name: 'static/fonts/[name].[ext]',
            },
        }
    });

    return config;
};


