# Car-Configurator

Steps to run Car-Configurator App:


1. 
Download files from repository on github:
https://github.com/polovis/car-configurator.git

2. 
If you don't have node.js on your computer yet install it from https://nodejs.org/en/ 

3. 
Open console in root folder (Car-Configurator) and run 

    npm install -g json-server

then run

    json-server --watch db.json --port 3001 //on Mac
    or
    npx json-server --watch db.json --port 3001 //on Windows

4. 
Open second console in root folder (Car-Configurator) and run 

    npm install

then run

    npm install node-sass --save

then run
    
    npm start

