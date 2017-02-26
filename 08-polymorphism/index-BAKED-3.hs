-- not written by Peter

data RegisterOrInt = RegisterRI Register | IntRI Int deriving (Show)
data Register = Register Char deriving (Show, Ord, Eq)

data Asm = Copy RegisterOrInt Register
         | Inc Register
         | Dec Register
         | Jump RegisterOrInt Int

-- written by Peter
type Instruction = CpyRegister|CpyValue
