function shout(string) {
  return string.toUpperCase()
}
function whisper(str) {
  return str.toLowerCase()
}
function logShout(str) {
  console.log(str.toUpperCase())
}
function logWhisper(str) {
  console.log(str.toLowerCase())
}
function sayHiToGrandma(string) {
  if (string.toLowerCase() === string) {
    return "I can't hear you!"
  }

  if (string.toUpperCase() === string) {
    return "YES INDEED!"
  }

  if (string === "I love you, Grandma.") {
    return "I love you, too."
  }
}
