module.exports = {
    siteMetadata: {
        siteUrl: "https://www.yourdomain.tld",
        title: "ikon",
    },
    plugins: [
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-transformer-json`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `data`,
                path: `${__dirname}/src/data/`
            }
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                icon: "src/images/favicon.png"
            }
        }
    ],
};
