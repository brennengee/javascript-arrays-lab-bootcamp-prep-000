var kittens = ["Tonka", "Peaches", "Darla", "Cat", "Whiskers", "Nietzsche"]

function destructivelyAppendKitten(name) {
  var appendKitten = [...kittens]
  appendKitten.push(name)
  return appendKitten
}

