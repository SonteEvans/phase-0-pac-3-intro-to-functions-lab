function shout(glass) {
 return glass.toUpperCase()
}
function whisper(glass) {
    return glass.toLowerCase()
}
function logShout(glass) {
 console.log('HELLO')
}
function logWhisper(glass) {
console.log('hello')
}
function sayHiToHeadphonedRoommate(glass) {
    if (glass == glass.toLowerCase()) {
        return "I can't hear you!"
    }
    if (glass == glass.toUpperCase()) {
        return "YES INDEED!"
    }
    if (glass == "Let's have dinner together!") {
        return "I would love to!"
    }
}   
