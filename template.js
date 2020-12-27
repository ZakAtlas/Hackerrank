
let testNum = 1
function test (input, output) {
  let response

  if (response !== output) {
    console.log(`Test: ${testNum} Failed.`)
  } else {
    console.log(`Test: ${testNum} Passed.`)
  }

  console.log(`Input: ${input} | Expected: ${output} | Got: ${response}`)
  testNum++
}

function log (input) {
  if (true) {
    console.log(input)
  }
}

export default function main () {

}
