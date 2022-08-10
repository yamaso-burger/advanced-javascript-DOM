function anotherAddEventListener(typeOfEvent, callback) {

    //Detect Event Code...

    var eventThatHappened = {
        eventType: "keypress",
        key: "p",
        durationOfKeypress: 2
    }

    if (eventThatHappened.eventType === typeOfEvent) {
        callback(eventThatHappened);
    }
}


anotherAddEventListener("keypress", function(event){
    // Call back
    console.log(event);
});