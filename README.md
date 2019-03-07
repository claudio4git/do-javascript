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