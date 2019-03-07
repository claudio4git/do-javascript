# Project
Repo to study Javascript

# Environment [es6plus]
1 - Install node and yarn.

2 - Execute the command in your workspace:
$ yarn init
$ yarn add @babel/cli
$ yarn add @babel/preset-env
$ yarn add @babel/core
$ yarn add @babel/plugin-proposal-object-rest-spread

3 - Babel configuratin
.babelrc
```
{
    "presets": ["@babel/preset-env"],
    "plugins": ["@babel/plugin-proposal-object-rest-spread"]
}
```

4 - Define scripts
package.json
```
    [...]
    "scripts": {
        "dev": "babel ./main.js -o ./bundle.js -w"
    }
```

# Environmen [webpack]

Step 1, 2 and 3 above.

5 - Execute the command in your workspace:
$ yarn add webpack webpack-cli -D
$ yarn add babel-loader -D

6 - Webpack configuration
webpack.config.js
```
module.exports = {
    entry: './src/main.js',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ],
    },
};
```

7 - Define scripts
package.json
```
    [...]
    "scripts": {
        "dev": "webpack --mode=development -w"
    }
```

8 - Study

About Webpack dev server.