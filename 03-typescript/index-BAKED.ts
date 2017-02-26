function commonMistakes() {
  //the billion-dollar mistake - allowing null
  process(null, null)

  //the jQuery problem
  const theJQueryProblem = "calling method with not enough, or too many, parameters"
  process({}, {})
  process({}, {})

  //dumb mistakes
  function processExample4(state, instruction) {
      processCpyValue(state, instruction) //whoops, we forgot to return!
  }

  function processExample5(state, instruction) {
      return processCpyValue(state, instruction) //whoops, I used the wrong variable name!
  }

  function processExample6(state, instruction) {
      return processCpyValue(state, instruction) //whoops, caps mistake!
  }
}

function process(state, instruction) {
  if (isCpyValue(instruction)) {
    return processCpyValue(state, instruction)
  }
}

function isCpyValue(instruction) {
  return true
}

function processCpyValue(state, instruction) {
  return state //TODO-implement
}
