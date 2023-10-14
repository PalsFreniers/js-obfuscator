# js obfuscator

a simple js project to create obfuscated js files

## installation

to run the application you ned to install nodejs

debian :
```sh
sudo apt-get update
sudo apt-get upgrade
sudo apt-get install node npm
npm install fs 
```

arch :
```sh
sudo pacman install node npm
npm install fs 
```

to run the program use the following command : `node index.js`

## runing the program

for the program to work you need a file named main.js that will contain your code to obfuscate

you can then send the output of the obfuscator to a file using this command : `node index.js > file.js`

then run `node file.js` to run your obfuscated file
