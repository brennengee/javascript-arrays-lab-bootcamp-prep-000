var kittens = ["Milo", "Otis", "Garfield"]
var name = "Ralph"

function destructivelyAppendKitten(name) {
  var appendKitten = appendKitten.slice()
  appendKitten.push(name)
  return appendKitten
}

