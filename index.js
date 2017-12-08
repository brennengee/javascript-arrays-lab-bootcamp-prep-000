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



