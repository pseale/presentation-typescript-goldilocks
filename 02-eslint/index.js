function process(state, instruction) {
    return state + instruction
}

function commonMistakes() {
  //the billion-dollar mistake - allowing null
  process(null, null)

  //the jQuery problem
  var theJQueryProblem = "calling method with not enough, or too many, parameters"
  process({}, {}, theJQueryProblem)
  process(theJQueryProblem)

  //dumb mistakes
  function processExample4(state, instruction) {
      processCpyValue(state, instruction) //whoops, we forgot to return!
  }

  function processExample5(state, instruction) {
      return processCpyValue(state, instr) //whoops, I used the wrong variable name!
  }

  function processExample6(state, instruction) {
      return processCPYValue(state, instruction) //whoops, caps mistake!
  }
}
