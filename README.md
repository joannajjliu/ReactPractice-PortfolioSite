# HelloReactTutorial
Section 03 - Complete React Developer Udemy Course by Andrew Mead
The following uses yarn install to install dependencies from package.json into a node_module folder.
Additionally, global modules need to be installed (not best practice): babel-cli and live-server (optionally, live-server can also be run as an extension in vs code)

Guidelines on running/ using the practice code:
the react file (live-server) can be run from the public folder, or public/index.html
index.html is connected to file, public/scripts/app.js

Code in public/scripts/app.js is translated into working ES5 code from js files in  src/ or src/playground via babel.
The translation will work continuously by typing the following command into terminal
(This command will run the code in src/playground/visibilityToggle.js)
> babel src/playground/visibilityToggle.js --out-file=public/scripts/app.js --presets=env,react --watch

---
- normalize.css dependency: removes default styling by web browsers and OS, allowing for consistent cross-browser styling

