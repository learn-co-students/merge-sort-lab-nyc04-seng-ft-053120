function findMinAndRemoveSorted(sortedArray) {
  return sortedArray.splice(0, 1)[0]
}

function merge(firstSubarray, secondSubarray) {
  let result = []

  // while BOTH of the arrays have something in them
  while (firstSubarray.length && secondSubarray.length) {

    // Comparing the first elem of firstSubarr with first elem of secondSubarray
    if (firstSubarray[0] < secondSubarray[0]) {
      result.push(findMinAndRemoveSorted(firstSubarray))
    } else {
      result.push(findMinAndRemoveSorted(secondSubarray))
    }
  }
  return [...result, ...firstSubarray, ...secondSubarray]
}


function mergeSort(unsortedArr) {
  // base case
  if (unsortedArr.length === 1) return unsortedArr;

  let midpoint = Math.floor(unsortedArr.length / 2);
  let firstHalf = unsortedArr.slice(0, midpoint);
  let secondHalf = unsortedArr.slice(midpoint);

  return merge(mergeSort(firstHalf), mergeSort(secondHalf))
}

