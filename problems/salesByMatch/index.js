let testNum = 1
function test (input, output) {
  const response = sockMerchant(0, input)

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

function sockMerchant (n, ar) {
  const colorSocks = {}

  for (const color of ar) {
    if (!colorSocks[color]) {
      colorSocks[color] = 1
    } else {
      colorSocks[color]++
    }
  }

  let totalPairs = 0

  for (const sock in colorSocks) {
    if (colorSocks[sock] < 2) continue

    const pairs = Math.trunc(colorSocks[sock] / 2)

    totalPairs += pairs
  }

  return totalPairs
}

function main () {
  test([10, 20, 20, 10, 10, 30, 50, 10, 20], 3)
}

main()
