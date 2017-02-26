function commonMistakes() {
  //the billion-dollar mistake - allowing null
  process(null, null)

  //the jQuery problem
  const theJQueryProblem = "calling method with not enough, or too many, parameters"
  process({}, {}, theJQueryProblem)
  process(theJQueryProblem)

  //dumb mistakes
  function process(state, instruction) {
      processCpyValue(state, instruction) //whoops, we forgot to return!
  }

  function process(state, instruction) {
      processCpyValue(state, instr) //whoops, I used the wrong variable name!
  }

  function process(state, instruction) {
      processCPYValue(state, instruction) //whoops, caps mistake!
  }
}
