# ionic-hot-code-push
An example of how to allow hot code pushes to installed ionic apps.

####How does it work
comming soon

####How to use
1. make sure you have ionic intalled.
2. make sure you have node installed.
3. Correct the ip address located in the client/www/index.html file to correspond to the cost machine. (this is to allow the ionic app to fetch updates from the server)
4. install the ionic app on a device. If you only have one device attached to your adb this command should do: "ionic run"
5. run the server. execute "node static-server.js 1" from the server directory. This will start version 1 of the application. 
6. To change the version of the app run on the device is just a matter of starting the static server with another version number, like so: "node static-server.js 2". Make sure the app in the device is acually terminated, then start the app again. The second version of the app should be loaded.
