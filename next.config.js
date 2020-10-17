const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

module.exports = withPlugins([
    [optimizedImages, {
        optimizeImagesInDev: true
    }]

    // your other plugins here

],{
    webpack: (cfg) => {
        cfg.module.rules.push(
            {
                test: /\.md$/,
                loader: 'frontmatter-markdown-loader',
                options: { mode: ['react-component'] }
            }
        )
        cfg.module.rules.push(
            {
                test: /\.mdx$/,
                use: 'raw-loader',
            }
        )
        return cfg;
    }
});