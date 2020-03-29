# HelloReactTutorial
Section 03 - Complete React Developer Udemy Course by Andrew Mead
The following uses yarn install to install dependencies from package.json into a node_module folder

Guidelines on running/ using the practice code:
the react file (live-server) can be run from the public folder, or public/index.html
index.html is connected to file, public/scripts/app.js

Code in public/scripts/app.js is translated into working ES5 code from js files in  src/ or src/playground via babel.
The translation will work continuously by typing the following command into terminal,
> babel src/playground/visibilityToggle.js --out-file=public/scripts/app.js --presets=env,react --watch
The above command will run the code in src/playground/visibilityToggle.js
