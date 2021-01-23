
let testNum = 1
function test (input, output) {
  const response = isBalanced(input)

  if (response !== output) {
    console.log(`\nTest: ${testNum} Failed.`)
  } else {
    console.log(`\nTest: ${testNum} Passed.`)
  }

  console.log(`Input: ${input} | Expected: ${output} | Got: ${response}\n`)
  testNum++
}

function log (input) {
  if (true) {
    console.log(input)
  }
}

function log (input) {
  if (true) {
    console.log(input)
  }
}

export default function main () {

}
