var spawn = require("child_process").spawn,
    EventEmitter = require("events").EventEmitter,
    util = require("util");

module.exports = Notification;

function Notification(options){
    var self = this;
    var handle = spawn("terminal-notifier", [ 
        "-title", options.title, 
        "-message", options.message,
        "-sound", options.sound
    ]);
    handle.on("error", function(err){
        self.emit("error", err);
    });
}
util.inherits(Notification, EventEmitter);
