enum InstructionType
{
  CpyValue,
  CpyRegister,
  Inc,
  Dec,
  JnzValue,
  JnzRegister
}

interface Instruction {
  type: InstructionType,
  arg1: any,
  arg2: any
}

enum RegisterName { A, B, C, D }
interface Register {
  name: RegisterName,
  value: number
}
type State = Register[]

//calling functions with garbage data?
process(null, null)
process([], { type: InstructionType.CpyValue, arg1: 3, arg2: RegisterName.A })





export default function process(state: State, instruction: Instruction): State {
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
