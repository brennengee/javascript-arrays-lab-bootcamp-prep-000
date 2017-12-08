var kittens = ["Milo", "Otis", "Garfield"]


function destructivelyAppendKitten(name) {
  var dappendKitten = kittens.push(name)
  return dappendKitten
}

function destructivelyPrependKitten(name) {
  var dprependKitten = kittens.unshift(name)
  return dprependKitten
}

function destructivelyRemoveLastKitten(name) {
  var removeLastKitten = kittens.pop(name)
  return removeLastKitten
}

function destructivelyRemoveFirstKitten(name) {
  var removeFirstKitten = kittens.shift(name)
  return removeFirstKitten
}



function appendKitten(name) {
  return [...kittens, name]
}

function prependKitten(name) {
  return [name, ...kittens]
}

function removeFirstKitten(name) {
  return kittens.slice(1)
}

function removeLastKitten(name) {
  return kittens.slice(-1)
}
