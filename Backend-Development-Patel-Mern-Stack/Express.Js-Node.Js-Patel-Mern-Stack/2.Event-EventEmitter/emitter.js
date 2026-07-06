function Emitter() {
    this.event = {}; // Initialize the event object
}

Emitter.prototype.on = function(type, callback) {
    // Check if the event type exists. If not, initialize it as an empty array.
    this.event[type] = this.event[type] || [];

    // this.event[type] =[]; // you are overriding and re-initialising , not preserving earlier callbacks
    
    // Push the callback into the array for the given event type.
    this.event[type].push(callback);
};

// I have made one Event

// on is used to add a callback 
// emit is used to trigger an event 
// callback function are same as event listener

// Yes, callback functions are commonly used as event listeners in JavaScript. 
// foreach  loop lagake invoke karenge , invoke means trigger


Emitter.prototype.emit = function(type){
    if(this.event[type]){
        this.event[type].forEach(listener => {
            listener();
        });
    }
}

module.exports = Emitter;