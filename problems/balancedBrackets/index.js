
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

function isBalanced (s) {
  const arrayStr = [...s]

  const remainder = arrayStr.length % 2
  if (remainder !== 0) return 'NO'

  const stackChars = []

  for (const char of arrayStr) {
    const peekChar = stackChars[stackChars.length - 1]
    switch (char) {
      case '[':
        stackChars.push(char)
        break
      case '{':
        stackChars.push(char)
        break
      case '(':
        stackChars.push(char)
        break
      case ']':
        if (peekChar !== '[') return 'NO'
        stackChars.pop()
        break
      case '}':
        if (peekChar !== '{') return 'NO'
        stackChars.pop()
        break
      case ')':
        if (peekChar !== '(') return 'NO'
        stackChars.pop()
        break
      default:
        return 'NO'
    }
  }

  if (stackChars.length > 0) return 'NO'

  return 'YES'
}

function main () {
  test('{{[[(())]]}}', 'YES')
}

main()
