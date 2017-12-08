var kittens = ["Milo", "Otis", "Garfield"]
var name = "Ralph"

function destructivelyAppendKitten(name) {
  var appendKitten = [...kittens]
  appendKitten.push(name)
  return appendKitten
}

