interface Instruction {}
interface State {}

//calling functions with garbage data?
process(null, null)


export default function process(state: State|null, instruction: Instruction|null): State|null {
  return null
}

