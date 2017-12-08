var kittens = ["Milo", "Otis", "Garfield"]


function destructivelyAppendKitten(name) {
  var appendKitten = kittens.push(name)
  return appendKitten
}

function destructivelyPrependKitten(name) {
  var prependKitten = kittens.unshift(name)
  return prependKitten
}

function destructivelyRemoveLastKitten(name) {
  var removeLastKitten = kittens.pop(name)
  return removeLastKitten
}

function destructivelyRemoveFirstKitten(name) {
  var removeFirstKitten = kittens.shift(name)
  return removeFirstKitten
}

