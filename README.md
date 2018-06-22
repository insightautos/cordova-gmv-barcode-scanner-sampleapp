Cordova GMV Barcode Scanner Sample App
======================================

This is a sample application for the `cordova-gmv-barcode-scanner`. 


To use this project: 

- Install [Cordova CLI](https://github.com/apache/cordova-cli)
- Download or clone this git.
- Open terminal and change directory to the project you downloaded.
- Run `cordova prepare` to install all dependencies.
- Run `cordova run android` or `cordova run ios` respectively to run the application.

On iOS if you're receiving a `linker command failed with exit code 1` error you've most likely not setup cocoapods. Change directory into the `platforms/ios` folder and run `pod setup`. You will also need cocoapods installed for this to work. Once you're done, move back into the root directory for the app and run
````$xslt
cordova plugin rm cordova-gmv-barcode-scanner && cordova plugin add cordova-gmv-barcode-scanner
````
in order to reinstall the plugin and for cordova to automatically download the needed podfiles. This might take a while if this is the first time cocoapods has been setup.