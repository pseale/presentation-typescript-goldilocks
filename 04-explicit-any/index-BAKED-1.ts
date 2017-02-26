function commonMistakesBaked1() {
  //the billion-dollar mistake - allowing null
  process(null, null)

  //calling functions with garbage data?
  process({}, {})
  process({}, {})

  //dumb mistakes
  function processExample4(state: any, instruction: any) {
      processCpyValue(state, instruction) //whoops, we forgot to return!
  }
}

function process_baked1(state: any, instruction: any) {
  if (isCpyValue(instruction)) {
    return processCpyValue(state, instruction)
  }
}

function isCpyValue_baked1(instruction: any) {
  return true
}

function processCpyValue_baked1(state: any, instruction: any) {
  return state //TODO-implement
}
