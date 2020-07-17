const liveServer = require("live-server");
const params = require("./config.json");

this.run = function(){
    liveServer.start(params.server.dev);
};