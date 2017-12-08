var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  var appendKitten = [...kittens]
  appendKitten.push(name)
  return appendKitten
}

