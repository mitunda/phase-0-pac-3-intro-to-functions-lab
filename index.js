function shout(string) {
    return string.toUpperCase();
}
function whisper(string) {
}
function sayHiToHeadphonedRoommate(string){
    if (string === string.toUpperCase()){
        return "YES INDEED!";
    } else if (string === "Let's have dinner together!"){
        return "I would love to!";
    } else {
        return "I can't hear you!";
    }
}