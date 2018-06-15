# RGB-Color-Guessing-Game
Cool interactive RGB color guessing game

## Overview
  The source code for the project will be in app folder. App folder has the files in which we write the code in and temp   folder has the compiled files.
  I used yarn as package manager, gulp to write the tasks, css is passed through postcss filters, I used to webpack to bundle files, though I have written the code in only one JavaScript file, I configured the webpack to bundle mutliple JS files using Babel to convert ES2015 code to ES5.

## Prerequisites
  You have to have yarn or npm to run package.json file. 
  
## Installing
  Download the code, open the folder and 'yarn add package.json' or 'npm install' to download packages, Once packages are downloaded, run 'gulp watch' to start the browser-sync. You can then edit the source code. Please make sure to edit the styles in css files in app/styles/, except in styles.css Any changes made in other files will automatically be passed through post-css filters. If a new file is added, make sure to import in styles.css. Same goes with JS files in scripts folder.   

## Built with
  - [Gulp.js](https://gulpjs.com/) - The task manager
  - [Yarn](https://yarnpkg.com/en/) - The package manager
  - [Webpack](https://webpack.js.org/) - The module bundler
  - [Babel](https://webpack.js.org/) - The compiler to write latest JavaScript
  
  
