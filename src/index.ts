function logAllElements(arr: unknown[], startIndex = 0) {
  if (startIndex > arr.length - 1) return

  console.log(arr[startIndex])

  logAllElements(arr, startIndex + 1)
}

const array = [1, 2, 3, 4, 5]

logAllElements(array)
