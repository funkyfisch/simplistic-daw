'use strict';

var app = require('app');
var BrowserWindow = require('browser-window');
var ipc = require('ipc');

var mainWindow = null;

app.on('ready', function() {
    mainWindow = new BrowserWindow({
        resizable: false,
        frame: false,
        height: 450,
        width: 800
    });

    mainWindow.loadUrl('file://' + __dirname + '/src/index.html');
});

ipc.on('close-main-window', function () {
  app.quit();
});
