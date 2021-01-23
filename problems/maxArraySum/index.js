let testNum = 1
function test (input, output) {
  const response = maxSubsetSum(input)

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

function arrSubsetSum (arr) {
  let positiveExist = false
  let highestNegative
  let sum

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      if (!highestNegative || highestNegative > arr[i]) {
        highestNegative = arr[i]
      }
    } else {
      positiveExist = true
      if (!sum) {
        sum = arr[i]
      } else {
        sum += arr[i]
      }
    }
  }

  if (!positiveExist) {
    return highestNegative
  } else {
    return sum
  }
}

// Complete the maxSubsetSum function below.
function maxSubsetSum (arr) {
  const subsetArray1 = []
  const subsetArray2 = []

  const isEven = false
  for (const num of arr) {
    if (isEven) {
      subsetArray2.push(num)
    } else {
      subsetArray1.push(num)
    }
  }

  const evenMax = arrSubsetSum(subsetArray2)
  const oddMax = arrSubsetSum(subsetArray1)

  if (evenMax > oddMax) {
    return evenMax
  } else {
    return oddMax
  }
}

function main () {

}

main()
