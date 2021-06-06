# Task List React.js Project
This repository holds the files that operate the frontend [website](https://chewern.github.io/react-first/) of my first React.js project.

## Important
**Do the following** if your website is NOT hosted in the server root ([reference](https://create-react-app.dev/docs/deployment/)):  
Upon completion of the project source code of the React.js project, go to package.json of the React.js project (located in the root directory of the project folder). Add `"homepage": "http://mywebsite.com/relativepath",` . As an example I have to add 
`"homepage": "https://chewern.github.io/react-first/",` because my website is not hosted at `https://chewern.github.io`, but is hosted
in the sub-folder `/react-first/`.

## Steps to Deploy React.JS Production Build
1. Upon completion of your source code, go to terminal in the project root folder, and type `npm run build`. This will produce the 
production code of project neatly in the `build` sub-folder.
2. Copy the entire content of the `build` sub-folder into the location where you will host your website.
3. To host this website under Github **for free**, follow the steps [here](https://pages.github.com/).
4. Enjoy your new **free** website with the site address provided by Github!
