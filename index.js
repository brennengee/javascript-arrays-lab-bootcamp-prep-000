var kittens = ["Tonka", "Peaches", "Darla", "Cat", "Whiskers", "Nietzsche"]
var k = "Rat"

function destructivelyAppendKitten(k) {
  var appendKitten = [...kittens]
  appendKitten.push(k)
  return appendKitten
}

