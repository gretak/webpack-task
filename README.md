# webpack-task
### This is the webpack task, which could be used on any project to bundle your front end code. 
It uses latest webpack 2 version, the documentation for migration between versions can be found here: [https://webpack.js.org/guides/migrating/](https://webpack.js.org/guides/migrating/)

**This task does:**
1. Compiles js and sass files to "build" folder.
2. Creates index.html file and adds the automated paths to the prod ("build") folder.
3. Runs local server with 'hot' reloading.

**To start the project follow these steps:**
1. Clone the repo and run ```npm install```. (This will install all the required packages from your "packages.json" file).
2. Run ```npm run build``` to create the build folder with compiled files from the src directory.
3. Run ```npm run dev``` to start the dev server on port 5000, which will open the new window with hot reloading enabled.
4. Run ```npm run prod``` to build the minified files in build folder.
5. Your webpack task is running, if you want to customize it, please refer to packages.json or webpack.config.js, where all the setting should be found.


### Segment for React, using Webpack
**This project was created using the following links for support:**
- [https://webpack.js.org/guides/migrating/](https://webpack.js.org/guides/migrating/)
- [https://webpack.github.io/docs/configuration.html](https://webpack.github.io/docs/configuration.html)
- [https://webpack.js.org/configuration/](https://webpack.js.org/configuration)
- [Webpack 2 tutorials](https://www.youtube.com/playlist?list=PLkEZWD8wbltnRp6nRR8kv97RbpcUdNawY)

