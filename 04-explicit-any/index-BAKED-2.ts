interface Instruction {}
interface State {}

function commonMistakes(): void {
  //the billion-dollar mistake - allowing null
  process(null, null)

  //calling functions with garbage data?
  process({}, {})
  process({}, {})

  //dumb mistakes
  function processExample4(state: State, instruction: Instruction): State {
      processCpyValue(state, instruction) //whoops, we forgot to return!
  }
}

function process(state: State, instruction: Instruction): State {
  if (isCpyValue(instruction)) {
    return processCpyValue(state, instruction)
  }
}

function isCpyValue(instruction: Instruction): boolean {
  return true
}

function processCpyValue(state: State, instruction: Instruction): State {
  return state //TODO-implement
}
