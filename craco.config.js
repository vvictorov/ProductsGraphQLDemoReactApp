module.exports = {

  babel: {
    "plugins": [
      "import-graphql"
    ]
  },

  webpack: {

    module: {
      rules: [
        {
          test: /\.(graphql|gql)$/,
          exclude: /node_modules/,
          loader: 'graphql-import-loader',
        },
      ],
    },
  }
};