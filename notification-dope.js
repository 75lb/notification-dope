var spawn = require("child_process").spawn,
    EventEmitter = require("events").EventEmitter,
    util = require("util");

module.exports = Notification;

function Notification(options){
    var self = this;
    spawn("terminal-notifier", [ "-title", options.title, "-message", options.message ])
        .on("error", function(err){
            self.emit("error", err);
        });
}
util.inherits(Notification, EventEmitter);
