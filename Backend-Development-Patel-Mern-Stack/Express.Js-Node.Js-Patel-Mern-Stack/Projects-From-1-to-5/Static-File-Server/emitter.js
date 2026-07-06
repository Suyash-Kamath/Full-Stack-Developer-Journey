function Emitter(){
    this.events = {};
}

Emitter.prototype.on = function(type,callback){
    this.events[type] = this.events[type] || [];

    this.events[type].push(callback);
}

Emitter.prototype.emit = function(type,...args){
    if(this.events[type]){
        this.events[type].forEach((fn)=>{
            fn(...args);
        })
    }
}

module.exports = Emitter;