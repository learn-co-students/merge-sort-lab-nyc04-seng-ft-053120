function findMinAndRemoveSorted(array) {
    let min = array[0]
    array.splice(0, 1)
    return min
}

function merge(firstArray, secondArray) {
    let sorted = []

    while (firstArray.length != 0 && secondArray.length != 0) {
        if (firstArray[0] > secondArray[0]) {
            sorted.push(findMinAndRemoveSorted(secondArray))
        } else {
            sorted.push(findMinAndRemoveSorted(firstArray))
        }
    }
    return sorted.concat(firstArray).concat(secondArray)
}

function mergeSort(array) {
    let midPoint = array.length/2
    let firstHalf = array.slice(0, midPoint)
    let secondHalf = array.slice(midPoint, array.length)

    if (array.length < 2) {
        return array
    } else {
        return merge(mergeSort(firstHalf), mergeSort(secondHalf))
    }
}