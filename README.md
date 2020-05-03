To run this project you need to follow steps

1. Install NodeJs
	Go to nodejs website and download the file according to your operating system (like .exe for Windows)
	Install nodejs and to verify it run command 
	node --version
	
2. Install webpack using command
	npm install -g webpack@3.8.1
	Run this command only if you not already install webpack globally, To check the webpack you can do webpack -version

3. Create a folder for you react project
	for windows	: mkdir my-app
	
4. Download package.json, server.js and webpack.config.js and put it into the folder of your project.
	
5. Now run command 
	npm install
	after proccessing, required package will be downloaded in the node_modules

6. Now open server.js and change the port according to you.
	app.listen(8080) is already defined. You can change 8080 to any port.
	
6. Run command
	node server.js
	
7. Run command
	webpack -w
	
4. Open browser and hit http://localhost:8080

-- kushal
