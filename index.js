var kittens = ["Milo", "Otis", "Garfield"]


function destructivelyAppendKitten(name) {
  var appendKitten = kittens.push(name)
  return appendKitten
}

function destructivelyPrependKitten(name) {
  var prependKitten = kittens.unshift(name)
  return prependKitten
}

